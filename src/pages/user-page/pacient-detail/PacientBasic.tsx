import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import { Riple } from "react-loading-indicators";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import ProfilePicture from "../../../components/ProfilePicture";
import { toast } from "react-toastify";
import { UserManager } from "../../../services/database/UserManager";
import CalCom from "../../../services/calendar/CalCom";

export default function PacientBasic() {
  const { user } = useUser();

  return (
    user && (
      <section className="flex bg-white/50 p-8 mx-10 lg:p-14 rounded-xl shadow-md w-fit">
        <div className="">
          <ProfilePicture isEditing={false} />
        </div>
        <div className="flex flex-col ml-6">
          <span className="text-xl">
            Hi {user.name} {user.surname}!
          </span>
          <span className="text-sm">{user.email}</span>
          <span className="mt-4">
          {user.allowBookAppointment && (
            <div>
              <CalCom />
            </div>
          )}
          </span>
        </div>
      </section>
    )
  );
}
