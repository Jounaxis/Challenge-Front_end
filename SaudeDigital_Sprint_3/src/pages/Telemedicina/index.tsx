import React, { useEffect } from "react";
import { useConsultas } from "../../context/ConsultasContext";
import CardAgendamento from "../../components/CardAgentamento";

const Telemedicina: React.FC = () => {
  const { consultas } = useConsultas();

  const consultasAgendadas = consultas.filter((c) => c.status === "AGENDADA");

  useEffect(() => {
    document.title = "Telemedicina - Saúde Digital";
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Cabeçalho da página */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--azul-principal)] mb-2">
          Telemedicina
        </h2>
        <p className="text-[var(--cinza-texto-secundario)]">
          Agende, reagende ou cancele suas consultas de forma simples
        </p>
      </section>

      {/* Cards de agendamento */}
      <section className="container_consultas">
        {consultasAgendadas.map((c) => (
          <CardAgendamento key={c.id} {...c} />
        ))}
      </section>
    </main>
  );
};

export default Telemedicina;
