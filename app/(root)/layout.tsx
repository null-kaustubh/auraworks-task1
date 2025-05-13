import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
