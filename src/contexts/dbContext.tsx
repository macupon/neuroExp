// src/context/DBContext.tsx

import React, { createContext, useContext } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  setDoc,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";

/**
 * Interface defining the shape of the DBContext.
 * It includes generic CRUD operations applicable to any Firestore collection.
 */
interface DBContextType {
  /**
   * Adds a new document to the specified collection.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {T} data - The data to be added as a new document.
   * @returns {Promise<string>} - The ID of the newly created document.
   */
  addDocument: <T>(
    collectionName: string,
    data: T
  ) => Promise<string>;

  /**
     * Sets a document with a specific ID in the specified collection.
     * If the document exists, it will be overwritten.
     *
     * @template T - The type of the document data.
     * @param {string} collectionName - The name of the Firestore collection.
     * @param {string} docId - The ID of the document to set.
     * @param {T} data - The data to set in the document.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
  setDocument: <T>(
    collectionName: string,
    docId: string,
    data: T
  ) => Promise<void>;


  /**
   * Retrieves a document from the specified collection by its ID.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} docId - The ID of the document to retrieve.
   * @returns {Promise<T | null>} - The document data or null if not found.
   */
  getDocument: <T>(
    collectionName: string,
    docId: string
  ) => Promise<T | null>;

  /**
   * Updates a specific field in a document within any collection.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} docId - The ID of the document to update.
   * @param {string} fieldPath - The path to the field to update (supports nested fields with dot notation).
   * @param {any} value - The new value to set for the specified field.
   * @returns {Promise<void>} - A promise that resolves when the update is complete.
   */
  updateDocumentField: <T>(
    collectionName: string,
    docId: string,
    fieldPath: string,
    value: any
  ) => Promise<void>;

  /**
   * Updates multiple fields in a document within any collection.
   *
   * @template T - The type of the document data.
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} docId - The ID of the document to update.
   * @param {Partial<T>} fields - An object containing the fields to update.
   * @returns {Promise<void>} - A promise that resolves when the update is complete.
   */
  updateMultipleFields: <T>(
    collectionName: string,
    docId: string,
    fields: Partial<T>
  ) => Promise<void>;

  /**
   * Deletes a document from the specified collection by its ID.
   *
   * @param {string} collectionName - The name of the Firestore collection.
   * @param {string} docId - The ID of the document to delete.
   * @returns {Promise<void>} - A promise that resolves when the deletion is complete.
   */
  deleteDocument: (
    collectionName: string,
    docId: string
  ) => Promise<void>;
}

/**
 * Creating the DBContext with undefined as the default value.
 */
const DBContext = createContext<DBContextType | undefined>(undefined);

/**
 * DBProvider component that provides database operations to its children.
 *
 * @param {React.ReactNode} children - The child components.
 * @returns {JSX.Element} - The provider component.
 */
export const DBProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  /**
   * Adds a new document to the specified collection.
   */
  const addDocument = async <T,>(
    collectionName: string,
    data: T
  ): Promise<string> => {
    try {
      const colRef: CollectionReference<T> = collection(db, collectionName) as CollectionReference<T>;
      const docRef = await addDoc(colRef, data);
      console.log(`Document added with ID: ${docRef.id} to collection: ${collectionName}`);
      return docRef.id;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error adding document to ${collectionName}:`, error.message);
      } else {
        console.error(`Unexpected error adding document to ${collectionName}:`, error);
      }
      throw error;
    }
  };

   /**
   * Sets a document with a specific ID in the specified collection.
   * If the document exists, it will be overwritten.
   */
   const setDocument = async <T,>(
    collectionName: string,
    docId: string,
    data: T
  ): Promise<void> => {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await setDoc(docRef, data, { merge: true });
      console.log(`Document set at ${collectionName}/${docId}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error setting document at ${collectionName}/${docId}:`, error.message);
      } else {
        console.error(`Unexpected error setting document at ${collectionName}/${docId}:`, error);
      }
      throw error;
    }
  };


  /**
   * Retrieves a document from the specified collection by its ID.
   */
  const getDocument = async <T,>(
    collectionName: string,
    docId: string
  ): Promise<T | null> => {
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
      if (error instanceof FirebaseError) {
        console.error(`Firebase error retrieving document from ${collectionName}/${docId}:`, error.message);
      } else {
        console.error(`Unexpected error retrieving document from ${collectionName}/${docId}:`, error);
      }
      throw error;
    }
  };

  /**
   * Updates a specific field in a document within any collection.
   */
  const updateDocumentField = async <T,>(
    collectionName: string,
    docId: string,
    fieldPath: string,
    value: any
  ): Promise<void> => {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await updateDoc(docRef, { [fieldPath]: value });
      console.log(`Successfully updated ${fieldPath} in ${collectionName}/${docId}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error updating ${fieldPath} in ${collectionName}/${docId}:`, error.message);
      } else {
        console.error(`Unexpected error updating ${fieldPath} in ${collectionName}/${docId}:`, error);
      }
      throw error;
    }
  };

  /**
   * Updates multiple fields in a document within any collection.
   */
  const updateMultipleFields = async <T,>(
    collectionName: string,
    docId: string,
    fields: Partial<T>
  ): Promise<void> => {
    try {
      const docRef: DocumentReference<T> = doc(db, collectionName, docId) as DocumentReference<T>;
      await updateDoc(docRef, fields);
      console.log(`Successfully updated multiple fields in ${collectionName}/${docId}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error updating multiple fields in ${collectionName}/${docId}:`, error.message);
      } else {
        console.error(`Unexpected error updating multiple fields in ${collectionName}/${docId}:`, error);
      }
      throw error;
    }
  };

  /**
   * Deletes a document from the specified collection by its ID.
   */
  const deleteDocument = async (
    collectionName: string,
    docId: string
  ): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      console.log(`Successfully deleted document ${collectionName}/${docId}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase error deleting document ${collectionName}/${docId}:`, error.message);
      } else {
        console.error(`Unexpected error deleting document ${collectionName}/${docId}:`, error);
      }
      throw error;
    }
  };

  return (
    <DBContext.Provider value={{ addDocument, setDocument, getDocument, updateDocumentField, updateMultipleFields, deleteDocument }}>
      {children}
    </DBContext.Provider>
  );
};

/**
 * Custom hook to use the DBContext.
 *
 * @returns {DBContextType} - The DBContext value.
 * @throws Will throw an error if used outside of a DBProvider.
 */
export const useDB = (): DBContextType => {
  const context = useContext(DBContext);
  if (!context) {
    throw new Error("useDB must be used within a DBProvider");
  }
  return context;
};
