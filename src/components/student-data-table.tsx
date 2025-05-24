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
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react"; // or any suitable icon

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export type Student = {
  id: string;
  name: string;
  profileImage: string;
  batch: string;
  department: string;
  job: string;
  district: string;
  contact: string;
};

const PAGE_SIZE = 7; // Number of rows per page
const siblings = 1;

export function StudentDataTable({ students }: { students: Student[] }) {
  const [page, setPage] = useState(0);
  const totalStudents = students.length;
  const totalPages = Math.ceil(totalStudents / PAGE_SIZE);
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12 pb-5">
        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search by name or id"
          className="w-full sm:w-1/2"
        />

        {/* Filter Button with Popover Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-56">
            {/* Example: Department Filter */}
            <label className="block mb-2 text-sm font-medium">Department</label>
            <select className="border rounded-md px-3 py-2 w-full mb-4">
              <option value="">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="Textile">Textile</option>
              <option value="WPE">WPE</option>
              {/* Add more options as needed */}
            </select>
            {/* You can add more filters here */}
          </PopoverContent>
        </Popover>
      </div>

      <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="">Job</TableHead>
              <TableHead className="">Id</TableHead>
              <TableHead className="text-right">District</TableHead>
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
                <TableCell className="">{student.id}</TableCell>
                <TableCell className="text-right">{student.district}</TableCell>
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
