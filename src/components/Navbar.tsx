import Image from "next/image";
import avatar from "../assets/avatar-de-perfil.png";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 flex justify-between w-screen h-[8vh] px-10 py-2 shadow-sm">
      <div>
        <h1 className="text-base">Nome da Clínica</h1>
        <p className="text-sm">Nome do Colaborador</p>
      </div>
      <Image src={avatar} alt="foto de perfil" width={40} height={40} className="rounded-full bg-gray-300 aspect-auto"/>
    </nav>
  );
};
