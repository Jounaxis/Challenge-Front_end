import { useEffect } from "react";
import ConsultaCard from "../../components/CardsConsulta";
import { consultas } from "../../data/consultas";

export default function Historico() {
  useEffect(() => {
    document.title = "Histórico de Consultas - Saúde Digital";
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Cabeçalho */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--azul-principal)] mb-2">
          Histórico de Consultas
        </h2>
        <p className="text-[var(--cinza-texto-secundario)]">
          Veja seu histórico completo de consultas
        </p>
      </section>

      {/* Lista de consultas */}
      <section className="container_consultas">
        {consultas.map((c) => (
          <ConsultaCard key={c.id} {...c} status={c.status as "REALIZADA" | "CANCELADA"} />
        ))}
      </section>
    </main>
  );
}
