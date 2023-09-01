import { Dashboard } from "@/components/Dashboard";
import { Warnings } from "@/components/Warnings";

export default function Home() {
  return (
    <main className="flex min-h-screen pt-[8.2vh] pl-12 md:pl-36">
      <section className="flex flex-col gap-2 p-6 w-[100%] md:w-[60%]">
        <Dashboard />
        <Warnings />
      </section>
    </main>
  );
}
