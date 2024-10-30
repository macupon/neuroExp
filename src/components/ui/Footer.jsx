import { LinkIcon } from "./icons/LinkIcon";
import { IgIcon } from "./icons/IgIcon";
import { FbIcon } from "./icons/FbIcon";

export default function Footer() {
  return (
    <>
      <footer className="bg-violet-100 py-4">
        <div className="flex justify-center space-x-6">
          <LinkIcon className="w-6 h-6" />
          <IgIcon className="w-6 h-6" />
          <FbIcon className="w-6 h-6" />
        </div>
        <p className="text-center text-gray-600 text-sm md:text-xs mt-2">
          &copy; {new Date().getFullYear()} NeuroExp. All rights reserved.
        </p>
      </footer>
    </>
  );
}
