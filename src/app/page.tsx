"use client";
import { useState } from "react";

import { CustomCalendar } from "@/components/CustomCalendar";
import { Dashboard } from "@/components/Dashboard";
import { SearchInput } from "@/components/SearchInput";
import { Warnings } from "@/components/Warnings";
import { DoctorCard } from "@/components/DoctorCard";
import { doctorsList } from "@/data/doctorslist";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [date, setDate] = useState<Value>(new Date());
  const [search, setSearch] = useState("");
  return (
    <main className="flex flex-col min-h-screen pt-[8.2vh] pl-12 gap-8 md:pl-36 md:flex md:flex-row">
      <section className="flex flex-col gap-2 p-6 w-[100%] md:w-[60%] h-[90vh]">
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Dashboard />
        <Warnings />
      </section>
      <section className="flex flex-col gap-6 p-6 w-[100%] md:w-[40%] bg-gray-50">
        <CustomCalendar date={date} setDate={setDate} />
        <div className="overflow-y-scroll flex flex-col h-[20.6em] gap-2 w-fit">
          {doctorsList.map((doc, index) => (
            <DoctorCard name={doc.name} specialty={doc.specialty} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
