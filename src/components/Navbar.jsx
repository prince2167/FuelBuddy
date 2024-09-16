import { SignedIn, UserButton } from "@clerk/clerk-react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setSidebarOpen }) => (
  <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <FaBars className="h-6 w-6" aria-hidden="true" />
    </button>
    <div className="flex justify-end gap-x-4 w-full lg:gap-x-6">
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  </div>
);

export default Navbar;
