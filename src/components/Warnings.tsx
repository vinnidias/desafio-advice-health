export const Warnings = () => {
  const data = [
    {
      patient: "Manoel Dias",
      doctor: "Romeu Santos",
      date: "01/09/2023",
      hour: "08:30",
    },
    {
      patient: "Maria Fonseca",
      doctor: "Romeu Santos",
      date: "01/09/2023",
      hour: "10:30",
    },
    {
      patient: "Noel Rosa",
      doctor: "Julia Prates",
      date: "01/09/2023",
      hour: "10:30",
    },
    {
      patient: "Marcos Souza",
      doctor: "Julia Prates",
      date: "01/09/2023",
      hour: "12:00",
    },
    {
      patient: "Noele Silva",
      doctor: "Romeu Santos",
      date: "01/09/2023",
      hour: "15:30",
    },
  ];
  return (
    <>
      <p className="pl-2">AVISOS/LEMBRETES</p>
      <table className="border-2 border-gray-100">
        <thead className="bg-gray-100 border-2">
          <tr className="text-sm p-3">
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map((warning, index) => (
            <tr className="text-center text-sm py-2 mb-2" key={index}>
              <td className="p-2">{warning.patient}</td>
              <td className="p-2">{warning.doctor}</td>
              <td className="p-2">{warning.date}</td>
              <td className="p-2">{warning.hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
