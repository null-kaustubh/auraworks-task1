import { UserRound } from "lucide-react";

export default function UserInfo() {
  return (
    <div className="border-b">
      <div className="p-2 ml-4 mt-20">
        <p className="gray-text">home</p>
        <div className="my-6 flex items-center gap-4">
          <div className="flex justify-center items-center rounded-full bg-gray-300 w-30 h-30">
            <UserRound size={55} color="white" />
          </div>
          <div>
            <h1 className="text-4xl">
              hello, <span className="font-bold">Dr. Park </span>
            </h1>
            <p className="gray-text">Pseudocode - UH2406001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
