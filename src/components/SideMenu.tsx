"use client";
import Link from "next/link";
import { useState } from "react";
import {
  BiChevronRight,
  BiChevronLeft,
  BiCalendar,
  BiHomeSmile,
  BiListCheck,
} from "react-icons/bi";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkList = [
    {
      name: "Área de Trabalho",
      href: "/",
      icon: <BiHomeSmile />,
    },
    {
      name: "Agendamento",
      href: "/scheduling",
      icon: <BiCalendar />,
    },
    {
      name: "Consultas",
      href: "/consultations",
      icon: <BiListCheck />,
    },
  ];

  return (
    <aside
      className={`absolute left-0 top-[8vh] flex-col justify-center items-center h-screen ${
        isOpen ? "w-36" : "w-12"
      }  border-r-2 pl-2 ease-linear pt-2`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <BiChevronLeft /> : <BiChevronRight />}
      </button>
      <ul className="flex flex-col justify-between items-start h-24 gap-6 text-center mt-4">
        {linkList.map((link, index) => (
          <li key={index} className="flex">
            <Link
              href={link.href}
              className=" flex gap-3 ease-in-out hover:text-blue-300 "
            >
              {link.icon} <span className="text-xs">{isOpen && link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
