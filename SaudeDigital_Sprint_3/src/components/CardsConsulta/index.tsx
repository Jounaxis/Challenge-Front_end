import type { ConsultaCardProps } from "../../types/ConsultaCardProps";

export default function ConsultaCard({
  id,
  data,
  medico,
  especialidade,
  status,
}: ConsultaCardProps) {
  const statusClass =
    status === "REALIZADA"
      ? "cartao_consulta_status status_realizada"
      : "cartao_consulta_status status_cancelada";

  return (
    <div className="cartao_consulta">
      <h3 className="cartao_consulta_titulo">{`Consulta #${id}`}</h3>

      <div className="cartao_consulta_conteudo">
        <p className="cartao_consulta_texto">
          <strong>Data:</strong> {data}
        </p>
        <p className="cartao_consulta_texto">
          <strong>Médico:</strong> {medico}
        </p>
        <p className="cartao_consulta_texto">
          <strong>Especialidade:</strong> {especialidade}
        </p>
      </div>

      <span className={statusClass}>{status}</span>
    </div>
  );
}
