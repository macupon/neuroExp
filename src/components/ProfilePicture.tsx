import React, { useState, useEffect, useRef } from "react";
import { FaUpload, FaCheck, FaTimes } from "react-icons/fa";
import { useUser } from "../contexts/UserContext";
import { Riple } from "react-loading-indicators";
import { toast } from "react-toastify";
import { UserProfilePictureStorageManager } from "../services/storage/userProfilePictureStorageManager";

type ProfilePictureProps = {
  isEditing: boolean;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ isEditing }) => {
  const { user, setUser } = useUser();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Generate a preview when a file is selected
  useEffect(() => {
    if (!selectedFile) {
      setPreviewURL(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewURL(objectUrl);

    // Cleanup the object URL to prevent memory leaks
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!isEditing) {
      handleCancel()
    }
  }, [isEditing]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setError("Only JPEG, PNG, and GIF files are allowed.");
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setError("File size exceeds the 5MB limit.");
        return;
      }

      setSelectedFile(file);
      setError(null);
    }
  };

  // Handle uploading the selected file
  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      // Upload photo
      const updatedUser =
        await UserProfilePictureStorageManager.uploadProfilePicture(
          selectedFile,
          user,
          (progress) => setUploadProgress(progress)
        );

      // update current user
      setUser(updatedUser);

      // Reset selected file and preview
      setSelectedFile(null);
      setPreviewURL(null);

      // Reset the file input's value
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Show success toast
      toast.success("Profile picture uploaded successfully!");
    } catch (err) {
      console.error("Error uploading profile picture:", err);
      setError("Failed to upload profile picture. Please try again.");

      // Show error toast
      toast.error("Failed to upload profile picture. Please try again.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // Handle canceling the selected file
  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewURL(null);
    setError(null);

    // Reset the file input's value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display Current Profile Picture or Preview */}

      {previewURL ? (
        <img
          src={previewURL || user?.profilePictureURL || "/user-profile.png"} // Show preview if available
          alt="User Profile"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
        />
      ) : (
        <img
          src={user?.profilePictureURL || "/user-profile.png"} // Show preview if available
          alt="User Profile"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
        />
      )}

      {isEditing && (
        <div>
          {/* File Input */}
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="profile-picture-input"
              className="hidden"
              ref={fileInputRef}
            />
            <label
              htmlFor="profile-picture-input"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center"
            >
              <FaUpload className="mr-2" />
              {selectedFile ? "Select a different Picture" : "Upload Picture"}
            </label>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 mt-2">{error}</div>}

          {/* Upload and Cancel Buttons */}
          {selectedFile && !isUploading && (
            <div className="flex space-x-2 mt-2">
              <button
                onClick={handleUpload}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaCheck className="mr-2" />
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaTimes className="mr-2" />
                Cancel
              </button>
            </div>
          )}

          {/* Upload Progress */}
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          {/* Loading Indicator During Upload */}
          {isUploading && (
            <div className="flex items-center mt-2">
              <Riple color="#0284c7" size="medium" text="" textColor="" />
              <span className="ml-2 text-blue-500">Uploading...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;