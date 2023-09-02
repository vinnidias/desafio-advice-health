import { BiPencil } from "react-icons/bi";

interface IProps {
  data: {
    patient: string;
    doctor: string;
    date: string;
    hour: string;
    value: string;
  }[];
}

export const AppointmentDetails = ({ data }: IProps) => {
  return (
    <table className="border-2 border-gray-100 w-[100%]">
      <thead className="bg-gray-100 border-2">
        <tr className="text-sm p-3">
          <th>Selecionar</th>
          <th>Paciente</th>
          <th>Médico</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Valor Consulta</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((appointment, index) => (
          <tr className="text-center text-sm py-2 mb-2" key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td className="p-2">{appointment.patient}</td>
            <td className="p-2">{appointment.doctor}</td>
            <td className="p-2">{appointment.date}</td>
            <td className="p-2">{appointment.hour}</td>
            <td className="p-2">{appointment.value}</td>
            <td>
              <button>
                <BiPencil />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
