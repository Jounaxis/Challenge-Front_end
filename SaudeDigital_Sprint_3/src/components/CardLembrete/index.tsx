type CardLembreteProps = {
  id: string | number;
  mensagem: string;
  dataEnvio: string;
  onEditar: () => void;
  onExcluir: () => void;
};

export default function CardLembrete({
  id,
  mensagem,
  dataEnvio,
  onEditar,
  onExcluir,
}: CardLembreteProps) {
  return (
    <div className="cartao_consulta">

      <h3 className="cartao_consulta_titulo">{`Lembrete ${id}`}</h3>

      <div className="cartao_consulta_conteudo">

        <p className="cartao_consulta_texto">
          <strong>Mensagem:</strong>
        </p>
        <p>{mensagem}</p>

        <p className="cartao_consulta_texto mt-[1.5rem]">
          <strong>Data de Envio:</strong>
        </p>
        <p>{dataEnvio}</p>

        <div className="flex gap-3 mt-6">
          <button className="botao w-1/2" onClick={onEditar}>
            Editar
          </button>

          <button className="botao-outline w-1/2" onClick={onExcluir}>
            Excluir
          </button>
        </div>
      </div>

      <span className="cartao_consulta_status status_agendada">
        LEMBRETE
      </span>
    </div>
  );
}
