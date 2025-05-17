import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PatientDetails() {
  return (
    <div>
      <div className="p-2 ml-4 mr-4 mt-2">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold">
            Waiting for prescription{" "}
            <span className="gray-text font-light text-xl">
              (As of last 30 days)
            </span>
          </h1>
          <Link href="/register">
            <Button variant="default" className="bg-[#0054A6] cursor-pointer">
              Register a patient
            </Button>
          </Link>
        </div>
        <div className="mt-6 flex flex-col bg-[#F1F4F9] rounded-xl p-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-light">Search results | case</h1>
            <SearchBar />
          </div>
          <div className="mt-6 flex flex-row items-center gap-10">
            <p>Registration number</p>
            <p>Patient name</p>
            <p>Gender</p>
            <p>Birthdate</p>
            <p>S/A</p>
            <p>Muscle Direction</p>
            <p>Treatment prescription period</p>
            <p>Patient registration date</p>
            <p>Last registration date</p>
            <p>Prescription status</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full min-h-screen">
            <p>Prescriptions are available after patient registration.</p>
            <Link href="/register">
              <Button variant="default" className="bg-[#0054A6] cursor-pointer">
                Register a patient
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Pagination className="my-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
