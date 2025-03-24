import React, { useState, useEffect, useRef } from "react";
import { FaUpload, FaCheck, FaTimes } from "react-icons/fa";
import { useUser } from "../../contexts/UserContext";
import { Riple } from "react-loading-indicators";
import { toast } from "react-toastify";
// import { UserProfilePictureStorageManager } from "../services/storage/userProfilePictureStorageManager";
import { User } from "../../models/user";
import { UserManager } from "../../services/database/UserManager";
import { firebaseTimestampToDate } from "../../utils/dates";

// type ProfilePictureProps = {
//   isEditing: boolean;
// };

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersList = await UserManager.getAllUsers(); // Fetch all users
        setUsers(usersList);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Update the 'allowBookAppointment' property
  const handleAllowBookAppointmentChange = async (
    userId: string,
    allow: boolean
  ) => {
    try {
      // Update locally first for immediate feedback
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.uid === userId ? { ...u, allowBookAppointment: allow } : u
        )
      );

      // Then update in the database
      await UserManager.updateUserFields(userId, {
        allowBookAppointment: allow,
      });

      toast.success("Updated allowBookAppointment status");
    } catch (error) {
      console.error("Error updating allowBookAppointment:", error);
      toast.error("Failed to update booking status");
    }
  };

  if (loading) {
    return <div>Loading users...</div>; // You can replace this with a loading spinner if desired
  }

  return (
    <div>
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-2 py-2 w-[55px] bg-[#f2f2f2]"></th>
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Surname</th>
          <th style={tableHeaderStyle}>email</th>
          <th style={tableHeaderStyle}>Created</th>
          <th style={tableHeaderStyle}>Last time online</th>
          <th style={tableHeaderStyle}>Sessions</th>
          <th style={tableHeaderStyle}>Allow to book</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.uid} style={tableRowStyle}>
            <td className="flex flex-row justify-center border px-2 py-2 w-auto">
              <img
                src={user.profilePictureURL || "default-profile-pic.jpg"} // Replace with your default image path
                alt={`${user.name}'s profile`}
                width="40"
                height="40"
                className="h-[40px] w-[40px] object-cover rounded-full"
                // style={{ borderRadius: "50%" }}
              />
            </td>
            <td style={tableCellStyle}>{user.name}</td>
            <td style={tableCellStyle}>{user.surname}</td>
            <td style={tableCellStyle}>{user.email}</td>
            <td style={tableCellStyle}>{user.createdAt.toLocaleDateString()}</td>
            <td style={tableCellStyle}>{user.lastOnline ? user.lastOnline.toLocaleDateString() : "N/A"}</td>
            {/* params.lastVisit instanceof Date ? params.lastVisit : params.lastVisit?.toDate() */}
            <td style={tableCellStyle}>{user.numberOfSessions || 0}</td>
            <td style={tableCellStyle}>
              <input
                type="checkbox"
                checked={user.allowBookAppointment}
                onChange={(e) => handleAllowBookAppointmentChange(user.uid, e.target.checked)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};


// Optional: Define some basic styles
const tableHeaderStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
  width: "fit"
};

const tableCellStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
};

const tableRowStyle: React.CSSProperties = {
  // ":nth-child(even)": { backgroundColor: "#f9f9f9" },
};
