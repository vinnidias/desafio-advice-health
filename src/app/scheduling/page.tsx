"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { CustomCalendar } from "@/components/CustomCalendar";
import { DoctorCard } from "@/components/DoctorCard";
import { doctorsList } from "@/data/doctorslist";
import avatar from "../../assets/avatar-de-perfil.png";
import { BiTrash, BiPencil, BiCalendarPlus, BiX } from "react-icons/bi";

type ScheduleData = {
  hour: string;
  doctor: string;
  patient: string;
  cpf: string;
  birthdate: string;
  date?: Value;
  unavailable: boolean;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Scheduling() {
  const [date, setDate] = useState<Value>(new Date());
  const [doctorSelected, setDoctorSelected] = useState("");
  const [schedulingList, setSchedulingList] = useState<ScheduleData[]>([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    hour: "",
    doctor: "",
    patient: "",
    cpf: "",
    birthdate: "",
    date: date,
    unavailable: false,
  });

  const onSubmit = (data: ScheduleData) => {
    setSchedulingList((prev) => [...prev, data]);
    setModalIsVisible(false);
  };

  return (
    <main className="flex flex-col min-h-screen pt-[8.2vh] pl-12 gap-8 md:pl-36 md:flex md:flex-row">
      <section className="flex flex-col gap-2 p-6 w-[100%] md:w-[30%] h-[90vh]">
        <p>Médicos</p>
        <div className="overflow-y-scroll flex flex-col h-[20.6em] gap-2 w-fit">
          {doctorsList.map((doc, index) => (
            <DoctorCard
              name={doc.name}
              specialty={doc.specialty}
              key={index}
              onClick={() => setDoctorSelected(doc.name)}
            />
          ))}
        </div>
        <CustomCalendar date={date} setDate={setDate} />
      </section>

      <section className="flex flex-col gap-6 p-6 w-[100%] md:w-[70%] bg-gray-50">
        <div className="flex gap-16 px-6 w-[100%] relative z-10">
          <p className="z-0">
            {date?.toLocaleString("pt-br", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>{doctorSelected}</p>

          <button
            className="absolute right-0 mr-8"
            onClick={() => setModalIsVisible(!modalIsVisible)}
          >
            <BiCalendarPlus />
          </button>
        </div>

        <div className="flex flex-col gap-6 h-[36em] p-0 md:pr-6 overflow-y-scroll">
          {modalIsVisible && (
            <div className="flex flex-col bg-white w-[100%] h-[80%] z-1000 shadow-md px-20 pt-6 relative">
              <button
                className="absolute top-0 right-0 text-lg m-2"
                onClick={() => {
                  setModalIsVisible(false);
                  setScheduleData({
                    hour: "",
                    doctor: "",
                    patient: "",
                    cpf: "",
                    birthdate: "",
                    date: date,
                    unavailable: false,
                  });
                }}
              >
                <BiX />
              </button>
              <form
                action="submit"
                className="flex flex-col gap-6 p-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  onSubmit(scheduleData);
                }}
              >
                <div className="flex flex-col">
                  <label> Médico</label>
                  <select
                    name="doctor"
                    className="bg-gray-50 shadow-md outline-none p-2"
                    required
                    onChange={(e) =>
                      setScheduleData({
                        ...scheduleData,
                        doctor: e.target.value,
                      })
                    }
                  >
                    {" "}
                    <option value="" disabled selected>
                      Selecione o Médico
                    </option>
                    {doctorsList.map((doc, index) => (
                      <option value={doc.name} key={index}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label>Paciente</label>
                  <input
                    type="text"
                    placeholder="Nome do paciente"
                    className="bg-gray-50 shadow-md outline-none p-2"
                    required
                    onChange={(e) =>
                      setScheduleData({
                        ...scheduleData,
                        patient: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label> CPF do Paciente</label>
                  <input
                    type="number"
                    maxLength={11}
                    placeholder="CPF do paciente"
                    required
                    className="bg-gray-50 shadow-md outline-none p-2"
                    onChange={(e) =>
                      setScheduleData({
                        ...scheduleData,
                        cpf: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex justify-between max-w-[80%]">
                  <div className="flex flex-col gap-3">
                    <label>Data de Nascimento</label>
                    <input
                      type="date"
                      className="bg-gray-50 shadow-md outline-none p-2 max-w-fit"
                      onChange={(e) =>
                        setScheduleData({
                          ...scheduleData,
                          birthdate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label> Hora</label>
                    <select
                      name="hour"
                      required
                      className="bg-gray-50 shadow-md outline-none p-2 w-34"
                      onChange={(e) =>
                        setScheduleData({
                          ...scheduleData,
                          hour: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled selected>
                        selecione
                      </option>
                      <option value="08:00">08:00</option>
                      <option value="08:30">08:30</option>
                      <option value="09:00">09:00</option>
                      <option value="09:30">09:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center w-[100%]">
                  <button
                    type="submit"
                    className="w-24 bg-gray-50 shadow-md cursor-pointer self-auto hover:scale-[.99] hover:shadow-sm"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          )}
          {!modalIsVisible &&
            schedulingList.map((schedule, index) => (
              <div
                className="flex bg-slate-100 shadow-md relative gap-2 items-center px-3 h-[5em] min-h-[5em] md:gap-6"
                key={index}
              >
                <p>{schedule.hour}</p>
                {schedule.patient ? (
                  <>
                    <Image
                      src={avatar}
                      width={60}
                      height={60}
                      className="aspect-auto"
                      alt="foto do médico"
                    />
                    <div>
                      <p>{schedule.patient}</p>
                      <p className="text-sm">Médico: {schedule.doctor}</p>
                    </div>
                    <div className="flex gap-2 absolute right-0 bottom-0 m-1">
                      <button
                        onClick={() => {
                          let list = schedulingList;
                          list.splice(index, 1);
                          console.log("let: ", list);
                          setSchedulingList(list);
                        }}
                      >
                        <BiTrash />
                      </button>
                      <button
                        onClick={() => {
                          setScheduleData(schedule);
                          setModalIsVisible(true);
                        }}
                      >
                        <BiPencil />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex gap-2 absolute right-0 bottom-0 m-1">
                    <BiCalendarPlus />
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
