import { Timestamp } from "firebase/firestore";

/**
 * Converts a Firebase Timestamp or JavaScript Date to a JavaScript Date object.
 *
 * @param {Timestamp | Date | null | undefined} timestamp - The timestamp to convert.
 * @returns {Date | null} - The corresponding JavaScript Date object or null if input is invalid.
 */
export function firebaseTimestampToDate(
  timestamp?: Timestamp | Date | null | undefined
): Date | null {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  } else if (timestamp instanceof Date) {
    return timestamp;
  } else {
    return null;
  }
}