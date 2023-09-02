import { ChangeEvent } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }: IProps) => {
  return (
    <div className="flex items-center bg-gray-50 pr-2">
      <input
        type="text"
        value={value}
        className="w-full outline-none p-1 bg-gray-50"
        onChange={(e) => onChange(e)}
      />
      <BiSearchAlt />
    </div>
  );
};
