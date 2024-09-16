import { FaTimes } from "react-icons/fa";
import { classNames, navigation } from "../utils";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <>
    {sidebarOpen && (
      <div className="fixed inset-0 z-50 flex lg:hidden">
        <div
          className="fixed inset-0 bg-gray-900/80"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative flex w-full max-w-xs flex-1">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center justify-between">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-700"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <SidebarNav />
          </div>
        </div>
      </div>
    )}

    {/* Static Sidebar for Desktop */}
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <SidebarNav />
      </div>
    </div>
  </>
);

const SidebarNav = () => (
  <nav className="flex flex-1 flex-col">
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      {navigation.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-50 text-indigo-600"
                : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            )}
          >
            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
