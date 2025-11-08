import { api } from "../../types/api";
import { useState, useEffect } from "react";
import Carregamento from "../../components/Carregamento";

export default function Medicos() {
  const [medicos, setMedicos] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);

    api.getMedicos()
      .then(setMedicos)
      .catch(console.error)
      .finally(() => setCarregando(false));
  }, []);

  // Tela de loading (fullpage)
  if (carregando) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Carregamento />
      </div>
    );
  }

  return (
    <main className="historico_container">

      <section className="historico_cabecalho">
        <h2 className="historico_titulo">Médicos</h2>
        <p className="historico_subtitulo">
          Lista completa de médicos cadastrados
        </p>
      </section>

      <section className="container_consultas">
        {medicos.map((m) => (
          <div key={m.id} className="cartao_consulta">
            <h3 className="cartao_consulta_titulo">{m.nome}</h3>

            <div className="cartao_consulta_conteudo">
              <p className="cartao_consulta_texto">Nome:</p>
              <p>{m.nome}</p>

              <p className="cartao_consulta_texto mt-[1.5rem]">Especialidade:</p>
              <p>{m.especialidade}</p>
            </div>

            <span className="cartao_consulta_status status_realizada">
              MÉDICO
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
