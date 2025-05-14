import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}
