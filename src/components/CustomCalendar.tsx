import { MouseEvent } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IProps {
  date: Value;
  setDate:
    | ((
        value: Value,
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => void)
    | undefined;
}

export const CustomCalendar = ({ date, setDate }: IProps) => {
  return (
    <div className="flex w-full h-content">
      <Calendar
        onChange={setDate}
        value={date}
        defaultActiveStartDate={new Date()}
        className="flex flex-col w-72 text-center"
      />
    </div>
  );
};
