import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";
import { PostFeed } from "./PostFeed";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
            <CreatePost />
            <PostFeed />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
