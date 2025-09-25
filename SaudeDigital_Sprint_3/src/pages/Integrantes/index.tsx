import { useEffect } from "react";
import CardIntegrante from "../../components/CardIntegrantes";
import { membros } from "../../data/integrantes.ts"

export default function Integrantes() {
  useEffect(() => {
    document.title = "Nosso Time - Saúde Digital";
  }, []);

  return (
    <main className="pagina_integrantes_main">
      {/* Cabeçalho da página */}
      <section className="pagina_integrantes_cabecalho">
        <h2>Nosso Time</h2>
        <p>
          Conheça os estudantes responsáveis por desenvolver esta solução digital.
        </p>
      </section>

      {/* Grid de Integrantes */}
      <section className="grid_integrantes">
        {membros.map((membro) => (
          <CardIntegrante key={membro.rm} {...membro} />
        ))}
      </section>
    </main>
  );
}
