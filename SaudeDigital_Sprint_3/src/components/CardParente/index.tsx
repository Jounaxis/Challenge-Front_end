type CardParenteProps = {
  id: string | number;
  nome: string;
  parentesco: string;
  telefone: string;
  codigoPaciente: number;
  onEditar: () => void;
  onExcluir: () => void;
};

export default function CardParente({
  nome,
  parentesco,
  telefone,
  codigoPaciente,
  onEditar,
  onExcluir,
}: CardParenteProps) {
  return (
    <div className="cartao_consulta">

      <h3 className="cartao_consulta_titulo">{nome}</h3>

      <div className="cartao_consulta_conteudo">

        <p><strong>Parentesco:</strong></p>
        <p>{parentesco}</p>

        <p className="mt-[1.5rem]"><strong>Telefone:</strong></p>
        <p>{telefone}</p>

        <p className="mt-[1.5rem]"><strong>ID Paciente:</strong></p>
        <p>{codigoPaciente}</p>

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
        PARENTE
      </span>
    </div>
  );
}
