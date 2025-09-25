import { useParams, useNavigate } from "react-router-dom";
import { useConsultas } from "../../context/ConsultasContext";

export default function Cancelar() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { consultas, cancelarConsulta } = useConsultas();

  const consulta = consultas.find((c) => c.id === id);

  const handleConfirmarCancelamento = () => {
    if (!id) return;

    cancelarConsulta(id);
    alert(`Consulta #${id} cancelada com sucesso.`);
    navigate("/telemedicina");
  };

  if (!consulta) {
    return (
      <main className="pagina_acao_main">
        <section className="cartao_acao">
          <div className="cartao_autenticacao_cabecalho">
            <h2 className="text-[var(--vermelho-erro)]">Consulta não encontrada</h2>
          </div>
          <p>
            A consulta que você está tentando cancelar não foi encontrada.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="pagina_acao_main">
      <section className="cartao_acao">
        <div className="cartao_autenticacao_cabecalho">
          <h2>Cancelar Consulta #{consulta.id}</h2>
        </div>
        <p>
          Você tem certeza que deseja cancelar a consulta com{" "}
          <span className="font-medium">{consulta.medico}</span> (
          {consulta.especialidade}) agendada para {consulta.data}?
        </p>

        <div className="cartao_acao_botoes">
          <button className="botao" onClick={handleConfirmarCancelamento}>
            Sim, cancelar
          </button>
          <button
            className="botao botao-outline"
            onClick={() => navigate("/telemedicina")}
          >
            Não, voltar
          </button>
        </div>
      </section>
    </main>
  );
}
