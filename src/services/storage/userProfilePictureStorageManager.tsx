// src/services/UserStorageManager.ts

import imageCompression from "browser-image-compression";
import { StorageService } from "./storage";
import { User } from "../../models/user";
import { UserManager } from "../database/UserManager";

/**
 * UserStorageManager class encapsulates user-specific Firebase Storage operations.
 */
export class UserProfilePictureStorageManager extends StorageService {
  private static userProfilePicturesPath: string = "profilePictures";

  /**
   * Uploads a user's profile picture to Firebase Storage and returns the download URL.
   *
   * @param {File} file - The profile picture file to upload.
   * @param {User} user - The user.
   * @param {(progress: number) => void} onProgress - Callback to track upload progress.
   * @param {Boolean} deleteExisting - Flag to delete existing profile picture.
   * @returns {Promise<string>} - The download URL of the uploaded profile picture.
   */
  static async uploadProfilePicture(
    file: File,
    user: User,
    onProgress: (progress: number) => void,
    deleteExisting: boolean = true
  ): Promise<User | null> {

    // Compress the image before uploading
    const options = {
      maxSizeMB: 1, // Maximum size in MB
      maxWidthOrHeight: 500, // Max width or height
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(file, options);

    // Define the storage path
    const storagePath = this.userProfilePicturesPath + `/${user.uid}/${compressedFile.name}`;

    // Upload photo
    const downloadURL = await this.uploadFile(file, storagePath, onProgress);

    // Optionally, delete the previous profile picture to save storage space
    if (deleteExisting && user.profilePicturePath) {
      await this.deleteFile(user.profilePicturePath);
    }

    // Update the user's profile picture URL and path in context and Firestore
    const fieldsToUpdate = {
      profilePictureURL: downloadURL,
      profilePicturePath: storagePath,
    };

    // await updateMultipleFields("users", user.uid, fieldsToUpdate);
    const updatedUser = await UserManager.updateUserFields(user.uid, fieldsToUpdate)

    return updatedUser
  }

  /**
   * Deletes a user's profile picture from Firebase Storage.
   *
   * @param {string} storagePath - The storage path of the profile picture to delete.
   * @returns {Promise<void>}
   */
  static async deleteUserProfilePicture(storagePath: string): Promise<void> {
    return this.deleteFile(storagePath);
  }

  // Additional user-specific storage methods can be added here
}
