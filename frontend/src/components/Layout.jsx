import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-8">ProjectFlow</h2>

          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className="block text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t pt-4">
          <p className="text-sm text-gray-500">{user?.name}</p>

          <button
            onClick={logout}
            className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col w-full">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow p-4 flex items-center justify-between">
          <button onClick={() => setOpen(true)} className="text-2xl font-bold">
            ☰
          </button>

          <h2 className="font-bold">ProjectFlow</h2>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
