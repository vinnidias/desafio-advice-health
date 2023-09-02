import Image from "next/image";
import avatar from "../assets/avatar-de-perfil.png";

interface IProps {
  name: string;
  specialty: string;
  onClick?: () => void;
}

export const DoctorCard = ({ name, specialty, onClick }: IProps) => {
  return (
    <div
      className="flex bg-slate-100 w-[21.8em] h-[7.6em] shadow-md items-center cursor-pointer hover:shadow-sm hover:scale-[.99]"
      onClick={onClick}
    >
      <Image
        src={avatar}
        width={60}
        height={60}
        className="aspect-auto"
        alt="foto do médico"
      />
      <div>
        <p className="text-md">{name}</p>
        <p className="text-sm">{specialty}</p>
      </div>
    </div>
  );
};
