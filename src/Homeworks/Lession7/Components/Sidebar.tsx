import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white text-white p-4 ">
            <button className="bg-purple-600 text-white px-6 py-4 rounded-xl mt-8">Register Patient  +</button>
      <nav className="flex flex-col gap-2 mt-10">
        <Link to="/dashboard" className="hover:bg-purple-600 hover:text-white p-4 rounded mt-2 text-black ">Dashboard</Link>
        <Link to="/profile" className="hover:bg-purple-600 hover:text-white p-4 rounded mt-2 text-black ">Profile</Link>
        <Link to="/settings" className="hover:bg-purple-600 hover:text-white  p-4 rounded mt-2 text-black  ">Settings</Link>
      </nav>
    </aside>
  );
}
