"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImage from "@/assets/profile.png";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";

const students = [
  {
    name: "John Doe",
    profileImage: profileImage.src,
    batch: "Batch A",
    department: "YE",
    job: "Software Engineer",
    district: "New York",
    contact: "123-456-7890",
  },
  {
    name: "Jane Smith",
    profileImage: profileImage.src,
    batch: "Batch B",
    department: "HR",
    job: "Manager",
    district: "Los Angeles",
    contact: "987-654-3210",
  },
  {
    name: "Alice Johnson",
    profileImage: profileImage.src,
    batch: "Batch C",
    department: "Finance",
    job: "Analyst",
    district: "Chicago",
    contact: "555-123-4567",
  },
  {
    name: "Bob Brown",
    profileImage: profileImage.src,
    batch: "Batch D",
    department: "Marketing",
    job: "Designer",
    district: "Houston",
    contact: "444-987-6543",
  },
  {
    name: "Charlie Green",
    profileImage: profileImage.src,
    batch: "Batch E",
    department: "IT",
    job: "Developer",
    district: "Phoenix",
    contact: "333-555-7890",
  },
  {
    name: "Diana White",
    profileImage: profileImage.src,
    batch: "Batch F",
    department: "Sales",
    job: "Sales Rep",
    district: "Philadelphia",
    contact: "222-666-1234",
  },
  {
    name: "Ethan Black",
    profileImage: profileImage.src,
    batch: "Batch G",
    department: "Support",
    job: "Support Specialist",
    district: "San Antonio",
    contact: "111-777-8901",
  },
  {
    name: "Fiona Blue",
    profileImage: profileImage.src,
    batch: "Batch H",
    department: "Operations",
    job: "Operations Manager",
    district: "Dallas",
    contact: "888-999-1234",
  },
  {
    name: "George Grey",
    profileImage: profileImage.src,
    batch: "Batch I",
    department: "Legal",
    job: "Lawyer",
    district: "San Diego",
    contact: "777-888-4567",
  },
  {
    name: "Hannah Yellow",
    profileImage: profileImage.src,
    batch: "Batch J",
    department: "Research",
    job: "Researcher",
    district: "San Jose",
    contact: "666-555-7890",
  },
  {
    name: "Ian Red",
    profileImage: profileImage.src,
    batch: "Batch K",
    department: "Engineering",
    job: "Mechanical Engineer",
    district: "Austin",
    contact: "123-123-1234",
  },
  {
    name: "Jenny Purple",
    profileImage: profileImage.src,
    batch: "Batch L",
    department: "Admin",
    job: "Admin Officer",
    district: "Jacksonville",
    contact: "321-321-4321",
  },
  {
    name: "Kevin Gold",
    profileImage: profileImage.src,
    batch: "Batch M",
    department: "Security",
    job: "Security Analyst",
    district: "Fort Worth",
    contact: "999-888-7777",
  },
  {
    name: "Linda Silver",
    profileImage: profileImage.src,
    batch: "Batch N",
    department: "Creative",
    job: "Art Director",
    district: "Columbus",
    contact: "987-123-6543",
  },
  {
    name: "Mark Bronze",
    profileImage: profileImage.src,
    batch: "Batch O",
    department: "Logistics",
    job: "Supply Manager",
    district: "Charlotte",
    contact: "567-432-1098",
  },
  {
    name: "Nina Aqua",
    profileImage: profileImage.src,
    batch: "Batch P",
    department: "Architecture",
    job: "Architect",
    district: "San Francisco",
    contact: "654-321-0987",
  },
  {
    name: "Oscar Mint",
    profileImage: profileImage.src,
    batch: "Batch Q",
    department: "Health",
    job: "Doctor",
    district: "Indianapolis",
    contact: "765-555-1234",
  },
  {
    name: "Paula Rose",
    profileImage: profileImage.src,
    batch: "Batch R",
    department: "Education",
    job: "Teacher",
    district: "Seattle",
    contact: "456-678-2345",
  },
  {
    name: "Quentin Flame",
    profileImage: profileImage.src,
    batch: "Batch S",
    department: "Science",
    job: "Chemist",
    district: "Denver",
    contact: "567-876-3456",
  },
  {
    name: "Rachel Snow",
    profileImage: profileImage.src,
    batch: "Batch T",
    department: "Media",
    job: "Journalist",
    district: "Washington",
    contact: "678-543-8765",
  },
  {
    name: "Sam Rain",
    profileImage: profileImage.src,
    batch: "Batch U",
    department: "Law",
    job: "Judge",
    district: "Boston",
    contact: "789-345-0987",
  },
  {
    name: "Tina Storm",
    profileImage: profileImage.src,
    batch: "Batch V",
    department: "Aviation",
    job: "Pilot",
    district: "El Paso",
    contact: "890-234-5678",
  },
  {
    name: "Umar Light",
    profileImage: profileImage.src,
    batch: "Batch W",
    department: "Transportation",
    job: "Driver",
    district: "Nashville",
    contact: "345-678-9012",
  },
  {
    name: "Vera Dark",
    profileImage: profileImage.src,
    batch: "Batch X",
    department: "Design",
    job: "UX Designer",
    district: "Detroit",
    contact: "234-890-6789",
  },
  {
    name: "Will Green",
    profileImage: profileImage.src,
    batch: "Batch Y",
    department: "AI",
    job: "ML Engineer",
    district: "Memphis",
    contact: "987-432-1098",
  },
  {
    name: "Xena Nova",
    profileImage: profileImage.src,
    batch: "Batch Z",
    department: "Biotech",
    job: "Biologist",
    district: "Portland",
    contact: "123-098-5678",
  },
  {
    name: "Yusuf Stone",
    profileImage: profileImage.src,
    batch: "Batch AA",
    department: "Geology",
    job: "Geologist",
    district: "Oklahoma City",
    contact: "890-123-4567",
  },
  {
    name: "Zara Sky",
    profileImage: profileImage.src,
    batch: "Batch AB",
    department: "Astronomy",
    job: "Astronomer",
    district: "Las Vegas",
    contact: "876-543-2109",
  },
];

const PAGE_SIZE = 5; // Number of rows per page
const siblings = 1;

export function DataTable() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(students.length / PAGE_SIZE);
  const currentData = students.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const getPaginationRange = () => {
    const range = [];
    const DOTS = "DOTS";

    if (totalPages <= 5 + 2 * siblings) {
      for (let i = 0; i < totalPages; i++) range.push(i);
    } else {
      const left = Math.max(1, page - siblings);
      const right = Math.min(totalPages - 2, page + siblings);

      range.push(0); // First page

      if (left > 1) range.push(DOTS);

      for (let i = left; i <= right; i++) range.push(i);

      if (right < totalPages - 2) range.push(DOTS);

      range.push(totalPages - 1); // Last page
    }

    return range;
  };

  return (
    <div className="">
      <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="">Job</TableHead>
              <TableHead className="text-center">District</TableHead>
              <TableHead className="text-right">Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((student) => (
              <TableRow key={student.name}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`${student.profileImage}`}
                        alt={student.name}
                      />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="truncate max-w-[150px]">
                      {student.name}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="font-medium">{student.batch}</TableCell>
                <TableCell>{student.department}</TableCell>
                <TableCell className="text-green-600">{student.job}</TableCell>
                <TableCell className="text-center">
                  {student.district}
                </TableCell>
                <TableCell className="text-right">{student.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="px-4 pt-6">
        <PaginationContent className="mr-auto flex-wrap ">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 0 && setPage(page - 1)}
              className={
                page === 0
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer border"
              }
            />
          </PaginationItem>

          {getPaginationRange().map((p, idx) =>
            p === "DOTS" ? (
              <PaginationItem key={idx}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <Button
                  variant={p === page ? "default" : "outline"}
                  className="px-4 hover:cursor-pointer"
                  onClick={() => handlePageChange(p)}
                >
                  {p + 1}
                </Button>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages - 1 && setPage(page + 1)}
              className={
                page === totalPages - 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer border"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
