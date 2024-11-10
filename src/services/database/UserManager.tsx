import { Database } from "./database";
import { User } from "../../models/user";
import { UserCredential } from "firebase/auth";


export class UserManager extends Database {
  private static collectionName: string = "users";

  /**
   * Adds a new user to the 'users' collection.
   *
   * @param {string} name - new user's name
   * @param {string} surname - new user's surname
   * @param {UserCredential} userCredential - user credentials from authentication.
   * @returns {Promise<string>} - The ID of the created user document.
   */

  static async createUser(name: string, surname: string, userCredential: UserCredential): Promise<User | null> {
    const user = userCredential.user;

    // Define the new user data
    const newUser: User = {
      uid: user.uid,
      email: user.email,
      name: name,
      surname: surname,
      role: "potentialPatient", // Adjust as needed or make dynamic
      createdAt: new Date(), // Firestore Timestamps will handle this
      lastVisit: new Date(),
      numberOfSessions: 0,
    };

    // Add the new user document to the "users" collection
    await this.setDocument<User>("users", user.uid, newUser);

    // Fetch the newly created user data
    return this.getDocument<User>("users", user.uid);
  }


  /**
   * Retrieves a user by ID from the 'users' collection.
   *
   * @param {string} userId - The user document ID.
   * @returns {Promise<User | null>}
   */
  static async getUser(userId: string): Promise<User | null> {
    return this.getDocument<User>(this.collectionName, userId);
  }

  /**
   * Updates a user's specific field.
   *
   * @param {string} userId - The user document ID.
   * @param {string} fieldPath - The field path to update.
   * @param {any} value - The new value.
   * @returns {Promise<void>}
   */
  static async updateUserField(userId: string, fieldPath: string, value: any): Promise<void> {
    return this.updateDocumentField<User>(this.collectionName, userId, fieldPath, value);
  }

  /**
   * Updates multiple fields of a user.
   *
   * @param {string} userId - The user document ID.
   * @param {Partial<User>} fields - The fields to update.
   * @param {boolean} returnUser - Fetch the updated user
   * @returns {Promise<void>}
   */
  static async updateUserFields(userId: string, fields: Partial<User>, returnUser: boolean = true): Promise<User | null> {
    // Update user in the database
    await this.updateMultipleFields<User>(this.collectionName, userId, fields);

    if (returnUser){
      return this.getUser(userId)
    }else{
      return null
    }
  }

  /**
   * Deletes a user by ID from the 'users' collection.
   *
   * @param {string} userId - The user document ID.
   * @returns {Promise<void>}
   */
  static async deleteUser(userId: string): Promise<void> {
    return this.deleteDocument(this.collectionName, userId);
  }


}