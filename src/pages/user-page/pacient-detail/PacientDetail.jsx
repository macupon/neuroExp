import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import { Riple } from "react-loading-indicators";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import ProfilePicture from "../../../components/ProfilePicture";
import { toast } from "react-toastify";
import { UserManager } from "../../../services/database/UserManager";

export default function PacientDetail() {
  const { user, setUser } = useUser();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || "");
  const [editedSurname, setEditedSurname] = useState(user?.surname || "");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  // Handle Modify Button Click
  const handleModifyClick = () => {
    setIsEditing(true);
    setEditedName(user?.name || "");
    setEditedSurname(user?.surname || "");
    setError(null);
  };

  // Handle Cancel Button Click
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedName(user?.name || "");
    setEditedSurname(user?.surname || "");
    setError(null);
  };

  // Handle Save Button Click
  const handleSaveClick = async () => {
    // Basic validation
    if (!editedName.trim() || !editedSurname.trim()) {
      setError("Name and Surname cannot be empty.");
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      // Prepare fields to update
      const fieldsToUpdate = {
        name: editedName.trim(),
        surname: editedSurname.trim(),
      };

      // Update database with the new fields and fetch user
      const updatedUser = await UserManager.updateUserFields(user.uid, fieldsToUpdate)

      // Update local user state
      setUser(updatedUser)

      // Reset editing states
      setIsEditing(false);
      toast.success("Updated successfully!");
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Failed to update user data. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // If user data is not available yet
  if (!user) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Riple color="#0284c7" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-col bg-white/50 p-2 mx-10 lg:p-6 rounded-xl mt-2 mb-8 shadow-md w-[50vw]">


      <div className="flex flex-col items-center">
        <ProfilePicture isEditing={isEditing} />
      </div>

      {/* User Information */}
      <div className="flex flex-col items-start mt-10 space-y-4 w-full">
        {/* Name */}
        <div className="w-full">
          <label className="font-semibold block">Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span className="ml-0">{user.name}</span>
          )}
        </div>

        {/* Surname */}
        <div className="w-full">
          <label className="font-semibold block">Surname:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedSurname}
              onChange={(e) => setEditedSurname(e.target.value)}
              className="mt-1 w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span className="ml-0">{user.surname}</span>
          )}
        </div>

        {/* Created At */}
        <div className="w-full">
          <label className="font-semibold">Account created on:</label>
          <span className="ml-2">
          {user.createdAt.toLocaleDateString()}
          </span>
        </div>

        {/* Display Error Message */}
        {error && <div className="text-red-500">{error}</div>}
      </div>

      {/* Buttons Container */}
      <div className="flex flex-row justify-center items-center gap-4 mt-8">

        {/* Modify/Save Button */}
        <button
          onClick={isEditing ? handleSaveClick : handleModifyClick}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center ${
            isSaving ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSaving}
        >
          {isEditing ? (
            <>
              <FaSave className="mr-2" />
              {isSaving ? "Saving..." : "Save"}
            </>
          ) : (
            <>
              <FaEdit className="mr-2" />
              Modify
            </>
          )}
        </button>

        {/* Cancel Button (Visible Only When Editing) */}
        {isEditing && (
          <button
            onClick={handleCancelClick}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaTimes className="mr-2" />
            Cancel
          </button>
        )}
      </div>


    </div>
    </>
  );
}
