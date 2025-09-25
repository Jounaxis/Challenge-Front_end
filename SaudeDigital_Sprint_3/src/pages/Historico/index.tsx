import { useEffect } from "react";
import ConsultaCard from "../../components/CardsConsulta";
import { consultas } from "../../data/consultas";

export default function Historico() {
  useEffect(() => {
    document.title = "Histórico de Consultas - Saúde Digital";
  }, []);

  return (
    <main className="historico_container">
      {/* Cabeçalho */}
      <section className="historico_cabecalho">
        <h2 className="historico_titulo">
          Histórico de Consultas
        </h2>
        <p className="historico_subtitulo">
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
