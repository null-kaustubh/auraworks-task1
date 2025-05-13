import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between mx-10 my-5">
        <button className="cursor-pointer">
          <h1 className="text-active text-3xl font-normal">AIOrtho</h1>
        </button>
        <div className="flex flex-row gap-10">
          <button className="cursor-pointer">
            <Image
              src="/NotificationLight.svg"
              alt="notification bell"
              width={25}
              height={25}
              className="svg-gray"
            />
          </button>
          <button className="cursor-pointer">
            <Image
              src="/UiUserProfile.svg"
              alt="profile image"
              width={30}
              height={30}
              className="svg-gray"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
