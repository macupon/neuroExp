// src/contexts/StorageContext.tsx

import React, { createContext, useContext } from "react";
import { storage } from "../firebase"; // Adjust the path as needed
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  UploadTask,
  StorageReference,
} from "firebase/storage";

interface StorageContextType {
  uploadFile: (
    file: File,
    storagePath: string,
    onProgress: (progress: number) => void
  ) => Promise<string>;
  deleteFile: (storagePath: string) => Promise<void>;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /**
   * Uploads a file to Firebase Storage at the specified path and returns the download URL.
   *
   * @param {File} file - The file to upload.
   * @param {string} storagePath - The path in Firebase Storage where the file will be stored.
   * @param {(progress: number) => void} onProgress - Callback to track upload progress.
   * @returns {Promise<string>} - The download URL of the uploaded file.
   */
  const uploadFile = async (
    file: File,
    storagePath: string,
    onProgress: (progress: number) => void
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileRef: StorageReference = ref(storage, storagePath);
      const uploadTask: UploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Calculate progress percentage
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (err) {
            console.error("Error getting download URL:", err);
            reject(err);
          }
        }
      );
    });
  };

  /**
   * Deletes a file from Firebase Storage at the specified path.
   *
   * @param {string} storagePath - The path in Firebase Storage where the file is stored.
   * @returns {Promise<void>}
   */
  const deleteFile = async (storagePath: string): Promise<void> => {
    try {
      const fileRef = ref(storage, storagePath);
      await deleteObject(fileRef);
      console.log(`File at ${storagePath} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  };

  return (
    <StorageContext.Provider value={{ uploadFile, deleteFile }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = (): StorageContextType => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
};
