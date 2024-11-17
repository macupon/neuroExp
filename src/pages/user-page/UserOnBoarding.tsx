
import { useUser } from "../../contexts/UserContext";
import SuperAdminPage from "./superAdmin-page/superAdminPage";
import PacientView from "./pacient-detail/PacientView";

export default function UserOnBoarding() {
  const { user, setUser } = useUser();

  return (
    <div>
      {
        user && user.role === "superAdmin"
        ?
        (
          <SuperAdminPage/>
        )
        :
        (
          <PacientView/>
        )
      }
      
    </div>
  )
}