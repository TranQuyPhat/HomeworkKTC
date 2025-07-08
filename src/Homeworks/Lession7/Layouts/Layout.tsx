import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
