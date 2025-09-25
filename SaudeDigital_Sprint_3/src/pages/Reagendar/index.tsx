import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useConsultas } from "../../context/ConsultasContext";

export default function Reagendar() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { consultas, reagendarConsulta } = useConsultas();
  const [novaData, setNovaData] = useState("");
  const [novoHorario, setNovoHorario] = useState("");

  const consulta = consultas.find((c) => c.id === id);

  useEffect(() => {
    if (consulta) {
      document.title = `Reagendar Consulta #${consulta.id} - Saúde Digital`;
    } else {
      document.title = "Consulta não encontrada - Saúde Digital";
    }
  }, [consulta]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !novaData || !novoHorario) {
      alert("Por favor, preencha todos os campos antes de confirmar.");
      return;
    }

    reagendarConsulta(id, novaData, novoHorario);

    alert(`Consulta reagendada com sucesso para ${novaData} às ${novoHorario}!`);
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
          A consulta que você está tentando reagendar não foi encontrada.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="pagina_autenticacao_main">
      {/* Cabeçalho */}
      <section className="cartao_autenticacao max-w-2xl">
        <div className="cartao_autenticacao_cabecalho">
          <h2>Reagendar Consulta #{consulta.id}</h2>
          <p>
            Alterando a consulta com {consulta.medico} ({consulta.especialidade})
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          {/* Nova data */}
          <div className="campo_formulario">
            <label htmlFor="novaData">Nova data:</label>
            <input
              id="novaData"
              type="date"
              value={novaData}
              onChange={(e) => setNovaData(e.target.value)}
              required
            />
          </div>

          {/* Novo horário */}
          <div className="campo_formulario">
            <label htmlFor="novoHorario">Novo horário:</label>
            <select
              id="novoHorario"
              value={novoHorario}
              onChange={(e) => setNovoHorario(e.target.value)}
              required
            >
              <option value="">-- Selecione --</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          {/* Botões */}
          <div className="cartao_acao_botoes">
            <button className="botao" type="submit">
              Confirmar Reagendamento
            </button>
            <button
              type="button"
              className="botao botao-outline"
              onClick={() => navigate("/telemedicina")}
            >
              Voltar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
