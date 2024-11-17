import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/UserAuthContext";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserNavbar() {
  const navigate = useNavigate();
  const { authUser, logout } = useAuth();
  const { user } = useUser();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // const handleUserPicClick = () => {
  //   if (authUser) {
  //     navigate("/user-detail");
  //   } else {
  //     navigate("/signin");
  //   }
  // };

  // Handle navigation to account details
  const handleAccountClick = () => {
    navigate("/user-view");
    setIsDropdownOpen(false);
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, set an error state here to display to the user
    }
  };

  return (
    <div ref={dropdownRef}>
      {/* User Icon */}
      <button
        onClick={toggleDropdown}
        className="focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        {
          user?.profilePictureURL ? (
            <img
            src={user?.profilePictureURL || "/user-profile.png"} // ../../public
            alt="user icon"
            // onClick={handleUserPicClick}
            className="w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] lg:w-[35px] lg:h-[35px] object-cover cursor-pointer rounded-full"
            aria-label="User Profile"
          ></img>
          )
          : (
          <FaUserCircle className="w-10 h-10 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gray-700 cursor-pointer" />
          )
        }
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <button
            onClick={handleAccountClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Account
          </button>
          <button
            onClick={handleLogoutClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
