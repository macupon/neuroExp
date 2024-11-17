import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import PacientBasic from "./PacientBasic";
import { FaBookOpen, FaUserCog, FaRegBookmark } from "react-icons/fa";
import PacientDetail from "./PacientDetail";



export default function PacientView() {
  const { user, setUser } = useUser();
  const [view, setView] = useState<'welcome' | 'accountDetails' | 'otherResources'>('welcome');

  // Handler for button clicks
  const handleViewChange = (selectedView: 'welcome' | 'accountDetails' | 'otherResources') => {
    setView(selectedView);
  };

  return (
    <div className="p-4">
    {/* Button Group */}
    <div className="flex justify-center space-x-2 mt-4 mb-4">
      {/* Welcome Button */}
      <button
        onClick={() => handleViewChange('welcome')}
        className={`flex items-center px-4 py-2 rounded-lg focus:outline-none ${
          view === 'welcome'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {/* Optional: Icon */}
        <FaRegBookmark className="mr-2" />
        Booking
      </button>

      {/* Account Details Button */}
      <button
        onClick={() => handleViewChange('accountDetails')}
        className={`flex items-center px-4 py-2 rounded-lg focus:outline-none ${
          view === 'accountDetails'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {/* Optional: Icon */}
        <FaUserCog className="mr-2" />
        My profile
      </button>

      {/* Other Resources Button (Disabled) */}
      <button
        disabled
        className={`flex items-center px-4 py-2 rounded-lg text-gray-400 cursor-not-allowed ${
          'bg-gray-100'
        }`}
      >
        {/* Optional: Icon */}
        <FaBookOpen className="mr-2" />
        Resources
      </button>
    </div>

    {/* Conditional Rendering of Components */}
    <div className="flex flex-col items-center">
      {view === 'welcome' && <PacientBasic />}
      {view === 'accountDetails' && <PacientDetail />}
      {/* Future: {view === 'otherResources' && <OtherResourcesComponent />} */}
    </div>
  </div>

  )
}