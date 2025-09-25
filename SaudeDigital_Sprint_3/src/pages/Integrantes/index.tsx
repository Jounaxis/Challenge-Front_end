import { useEffect } from "react";
import CardIntegrante from "../../components/CardIntegrantes";
import { membros } from "../../data/integrantes.ts"

export default function Integrantes() {
  useEffect(() => {
    document.title = "Nosso Time - Saúde Digital";
  }, []);

  return (
    <main className="integrantes_container">
      {/* Cabeçalho da página */}
      <section className="integrantes_cabecalho">
        <h2 className="integrantes_titulo">Nosso Time</h2>
        <p className="integrantes_subtitulo">
          Conheça os estudantes responsáveis por desenvolver esta solução digital.
        </p>
      </section>

      {/* Grid de Integrantes */}
      <section className="integrantes_grid">
        {membros.map((membro) => (
          <CardIntegrante key={membro.rm} {...membro} />
        ))}
      </section>
    </main>
  );
}
