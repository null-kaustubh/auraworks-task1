import { FileText, UsersRound } from "lucide-react";
import Link from "next/link";

export default function QuickMenu() {
  return (
    <div className="p-2 ml-4 mr-4 mt-2">
      <h1 className="text-3xl font-bold">Quick Menu</h1>
      <div className="grid grid-cols-2 h-30 gap-6 my-2 items-center justify-center">
        <Link href="/prescribe">
          <div className="bg-[#F1F4F9] rounded-2xl p-8">
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="gray-text text-secondary">Quick and easy</p>
                <h1 className="text-2xl font-bold">Prescribe</h1>
              </div>
              <div className="flex bg-indigo-300 h-12 w-12 rounded-xl items-center justify-center">
                <FileText />
              </div>
            </div>
          </div>
        </Link>
        <Link href="/register">
          <div className="bg-[#F1F4F9] rounded-2xl p-8">
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="gray-text text-secondary">
                  First time receiving treatment?
                </p>
                <h1 className="text-2xl font-bold">Register a patient</h1>
              </div>
              <div className="flex bg-yellow-300 h-12 w-12 rounded-xl items-center justify-center">
                <UsersRound />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
