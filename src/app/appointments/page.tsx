"use client";
import { useState } from "react";
import { AppointmentDetails } from "@/components/AppointmentDetails";
import { SearchInput } from "@/components/SearchInput";
import { appointmentData } from "@/data/appointmentData";

export default function Scheduling() {
  const [search, setSearch] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-start gap-6 p-24">
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <AppointmentDetails data={appointmentData} />
    </main>
  );
}
