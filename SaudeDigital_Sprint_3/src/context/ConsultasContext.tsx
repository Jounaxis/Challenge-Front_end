import { createContext, useContext, useState, type ReactNode } from "react";

type Consulta = {
  id: string;
  data: string;
  medico: string;
  especialidade: string;
  status: "AGENDADA" | "REALIZADA" | "CANCELADA";
};

type ConsultasContextType = {
  consultas: Consulta[];
  reagendarConsulta: (id: string, novaData: string, novoHorario: string) => void;
  cancelarConsulta: (id: string) => void;
};

const ConsultasContext = createContext<ConsultasContextType | undefined>(undefined);

export function ConsultasProvider({ children }: { children: ReactNode }) {
  const [consultas, setConsultas] = useState<Consulta[]>([
    {
      id: "000001",
      data: "25/07/2025 - 13h00",
      medico: "Dr. Gabriel Azevedo",
      especialidade: "Cardiologista",
      status: "AGENDADA",
    },
    {
      id: "000002",
      data: "20/08/2025 - 17h30",
      medico: "Dra. Isabella Azevedo",
      especialidade: "Dermatologista",
      status: "AGENDADA",
    },
  ]);

  function reagendarConsulta(id: string, novaData: string, novoHorario: string) {
    // Converte a data de 'YYYY-MM-DD' para 'DD/MM/YYYY'
    const [ano, mes, dia] = novaData.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    setConsultas((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, data: `${dataFormatada} - ${novoHorario}`, status: "AGENDADA" }
          : c
      )
    );
  }

  function cancelarConsulta(id: string) {
    setConsultas((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "CANCELADA" } : c))
    );
  }

  return (
    <ConsultasContext.Provider value={{ consultas, reagendarConsulta, cancelarConsulta }}>
      {children}
    </ConsultasContext.Provider>
  );
}

export function useConsultas() {
  const context = useContext(ConsultasContext);
  if (!context) {
    throw new Error("useConsultas deve ser usado dentro de ConsultasProvider");
  }
  return context;
}
