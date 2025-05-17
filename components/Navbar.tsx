import { Button } from "./ui/button";
import { Bell, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 border-b border-gray-300 bg-white z-10">
      <div className="flex flex-row justify-between px-10 py-5">
        <Link href="/">
          <button className="cursor-pointer">
            <h1 className="text-active text-3xl font-bold">AIOrtho</h1>
          </button>
        </Link>
        <div className="flex flex-row gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer w-10 h-10 rounded-full"
          >
            <Bell />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer w-10 h-10 rounded-full"
              >
                <UserRound />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
