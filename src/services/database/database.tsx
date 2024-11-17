// src/services/Database.ts

import { FirebaseError } from "firebase/app";
import {
  CollectionReference,
  collection,
  addDoc,
  DocumentReference,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

/**
 * Base Database class encapsulating generic Firestore operations as static methods.
 */
export class Database {
  /**
   * Adds a new document to the specified collection.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The Firestore collection name.
   * @param {T} data - The data to add.
   * @returns {Promise<string>} - The ID of the created document.
   */
  static async addDocument<T>(collectionName: string, data: T): Promise<string> {
    try {
      const colRef: CollectionReference<T> = collection(db, collectionName) as CollectionReference<T>;
      const docRef = await addDoc(colRef, data);
      console.log(`Document added with ID: ${docRef.id} to collection: ${collectionName}`);
      return docRef.id;
    } catch (error) {
      this.handleError(error, `adding document to ${collectionName}`);
      throw error;
    }
  }

  /**
   * Sets a document with a specific ID in the specified collection.
   * If the document exists, it will be overwritten or merged based on options.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The Firestore collection name.
   * @param {string} docId - The document ID.
   * @param {T} data - The data to set.
   * @param {boolean} [merge=false] - Whether to merge with existing data.
   * @returns {Promise<void>}
   */
  static async setDocument<T>(
    collectionName: string,
    docId: string,
    data: T,
    merge: boolean = false
  ): Promise<void> {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await setDoc(docRef, data, { merge });
      console.log(`Document ${merge ? "merged" : "set"} at ${collectionName}/${docId}`);
    } catch (error) {
      this.handleError(error, `setting document at ${collectionName}/${docId}`);
      throw error;
    }
  }

  /**
   * Retrieves a document by ID from the specified collection.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The Firestore collection name.
   * @param {string} docId - The document ID.
   * @returns {Promise<T | null>}
   */
  static async getDocument<T>(collectionName: string, docId: string): Promise<T | null> {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(`Document retrieved from ${collectionName}/${docId}:`, docSnap.data());
        return docSnap.data() as T;
      } else {
        console.log(`No document found at ${collectionName}/${docId}`);
        return null;
      }
    } catch (error) {
      this.handleError(error, `retrieving document from ${collectionName}/${docId}`);
      throw error;
    }
  }

  /**
     * Retrieves all documents from the specified collection.
     *
     * @template T - The type of the document data.
     * @param {string} collectionName - The Firestore collection name.
     * @returns {Promise<(T & { uid: string })[]>} - An array of documents with their IDs.
     */
  static async getAllDocuments<T>(collectionName: string): Promise<(T & { uid: string })[]> {
    try {
      const collectionRef = collection(db, collectionName) as CollectionReference<T>;
      const querySnapshot = await getDocs(collectionRef);
      const documents: (T & { uid: string })[] = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id,
      }));
      console.log(`Fetched ${documents.length} documents from ${collectionName}`);
      return documents;
    } catch (error) {
      this.handleError(error, `fetching all documents from ${collectionName}`);
      throw error;
    }
  }


  /**
   * Updates a specific field in a document.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The Firestore collection name.
   * @param {string} docId - The document ID.
   * @param {string} fieldPath - The field path (supports nested fields with dot notation).
   * @param {any} value - The new value.
   * @returns {Promise<void>}
   */
  static async updateDocumentField<T>(
    collectionName: string,
    docId: string,
    fieldPath: string,
    value: any
  ): Promise<void> {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await updateDoc(docRef, { [fieldPath]: value });
      console.log(`Successfully updated ${fieldPath} in ${collectionName}/${docId}`);
    } catch (error) {
      this.handleError(
        error,
        `updating ${fieldPath} in ${collectionName}/${docId}`
      );
      throw error;
    }
  }

  /**
   * Updates multiple fields in a document.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The Firestore collection name.
   * @param {string} docId - The document ID.
   * @param {Partial<T>} fields - The fields to update.
   * @returns {Promise<void>}
   */
  static async updateMultipleFields<T>(
    collectionName: string,
    docId: string,
    fields: Partial<T>
  ): Promise<void> {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await updateDoc(docRef, fields);
      console.log(`Successfully updated multiple fields in ${collectionName}/${docId}`);
    } catch (error) {
      this.handleError(
        error,
        `updating multiple fields in ${collectionName}/${docId}`
      );
      throw error;
    }
  }

  /**
   * Deletes a document by ID from the specified collection.
   *
   * @param {string} collectionName - The Firestore collection name.
   * @param {string} docId - The document ID.
   * @returns {Promise<void>}
   */
  static async deleteDocument(collectionName: string, docId: string): Promise<void> {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      console.log(`Successfully deleted document ${collectionName}/${docId}`);
    } catch (error) {
      this.handleError(error, `deleting document ${collectionName}/${docId}`);
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
