// src/services/Storage.ts

import { FirebaseError } from "firebase/app";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  UploadTask,
  StorageReference,
} from "firebase/storage";
import { storage } from "../../firebase";

/**
 * Base Storage class encapsulating generic Firebase Storage operations as static methods.
 */
export class StorageService {
  /**
   * Uploads a file to Firebase Storage at the specified path and returns the download URL.
   *
   * @param {File} file - The file to upload.
   * @param {string} storagePath - The path in Firebase Storage where the file will be stored.
   * @param {(progress: number) => void} onProgress - Callback to track upload progress.
   * @returns {Promise<string>} - The download URL of the uploaded file.
   */
  static async uploadFile(
    file: File,
    storagePath: string,
    onProgress: (progress: number) => void
  ): Promise<string> {
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
          if (error instanceof FirebaseError) {
            console.error(`Firebase error uploading file to ${storagePath}:`, error.message);
          }
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(`File uploaded to ${storagePath} with URL: ${downloadURL}`);
            resolve(downloadURL);
          } catch (err) {
            console.error("Error getting download URL:", err);
            reject(err);
          }
        }
      );
    });
  }

  /**
   * Deletes a file from Firebase Storage at the specified path.
   *
   * @param {string} storagePath - The path in Firebase Storage where the file is stored.
   * @returns {Promise<void>}
   */
  static async deleteFile(storagePath: string): Promise<void> {
    try {
      const fileRef = ref(storage, storagePath);
      await deleteObject(fileRef);
      console.log(`File at ${storagePath} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting file:", error);
      if (error instanceof FirebaseError) {
        console.error(`Firebase error deleting file at ${storagePath}:`, error.message);
      }
      throw error;
    }
  }

  /**
   * Handles errors by logging them appropriately.
   *
   * @param {unknown} error - The error thrown.
   * @param {string} context - A description of the operation being performed.
   */
  protected static handleError(error: unknown, context: string): void {
    if (error instanceof FirebaseError) {
      console.error(`Firebase error ${context}:`, error.message);
    } else {
      console.error(`Unexpected error ${context}:`, error);
    }
  }
}
