import { useState } from "react";
import { useAuth } from "../../../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { Riple } from "react-loading-indicators";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import ProfilePicture from "../../../components/ProfilePicture";
import { toast } from "react-toastify";
import { UserManager } from "../../../services/database/UserManager";
import { UsersList } from "../UsersList";

export default function SuperAdminPage() {
  const { user, setUser } = useUser();

  return (
    <>
      {user && (
        <div>
          <div className="relative flex flex-col bg-white/50 p-8 mx-10 lg:p-14 rounded-xl mt-10 mb-8 shadow-md">
            <div className="flex flex-col items-center">
              <div className="">
                <ProfilePicture isEditing={false} />
              </div>
              <h1>Hi {user.name}!</h1>
            </div>
          </div>
          <div className="relative flex flex-col bg-white/50 p-8 mx-10 lg:p-14 rounded-xl mt-10 mb-8 shadow-md">
            <UsersList />
          </div>
        </div>
      )}
    </>
  );
}
