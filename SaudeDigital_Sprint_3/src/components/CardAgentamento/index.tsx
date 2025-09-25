import { Link } from "react-router-dom";

type CardAgendamentoProps = {
  id: string;
  data: string;
  medico: string;
  especialidade: string;
  status: "AGENDADA";
};

export default function CardAgendamento({
  id,
  data,
  medico,
  especialidade,
  status,
}: CardAgendamentoProps) {
  // Define a classe de status com base no CSS
  const statusClass =
    status === "AGENDADA"
      ? "cartao_consulta_status status_agendada"
      : status === "REALIZADA"
      ? "cartao_consulta_status status_realizada"
      : "cartao_consulta_status status_cancelada";

  return (
    <div className="cartao_consulta">
      {/* Título */}
      <h3 className="cartao_consulta_titulo">{`Consulta #${id}`}</h3>

      {/* Conteúdo */}
      <div className="cartao_consulta_conteudo">
        <p className="cartao_consulta_texto">
          <strong>Data:</strong> {data}
        </p>
        <p>
          <strong>Médico:</strong> {medico}
        </p>
        <p>
          <strong>Especialidade:</strong> {especialidade}
        </p>

        {/* Botões de ação */}
        {status === "AGENDADA" && (
          <div className="flex gap-3 mt-4">
            <Link to={`/reagendar/${id}`} className="botao">
              Reagendar
            </Link>
            <Link to={`/cancelar/${id}`} className="botao botao-outline">
              Cancelar
            </Link>
          </div>
        )}
      </div>

      {/* Status */}
      <span className={statusClass}>{status}</span>
    </div>
  );
}
