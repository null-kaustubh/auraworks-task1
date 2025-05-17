import UserInfo from "@/components/UserInfo";
import QuickMenu from "@/components/QuickMenu";
import PatientDetails from "@/components/PatientDetails";

export default function Home() {
  return (
    <div className="pl-[250px]">
      <UserInfo />
      <QuickMenu />
      <PatientDetails />
    </div>
  );
}
