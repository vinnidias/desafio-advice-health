export const Dashboard = () => {
  return (
    <>
      <p>DASHBOARD</p>
      <div className="flex flex-col h-[50%] gap-6 mb-6 md:flex-row">
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] bg-gray-50">
          <p className="text-2xl">22</p>
          <p>Agendamentos hoje</p>
        </div>
        <div className="flex flex-col w-[100%] h-[100%] gap-6">
          <div className="w-[100%] h-[100%] bg-gray-50 flex flex-col justify-center items-center">
            <p>10</p>
            <p> Paciente atendidos</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] h-[100%] bg-gray-50">
            <p>R$ 2500,00</p>
            <p>Faturamento do dia</p>
          </div>
        </div>
      </div>
    </>
  );
};
