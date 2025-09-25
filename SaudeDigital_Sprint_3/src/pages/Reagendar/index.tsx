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
      <main>
        <h2>Consulta não encontrada</h2>
        <p>
          A consulta que você está tentando reagendar não foi encontrada.
        </p>
      </main>
    );
  }

  return (
    <main>
      {/* Cabeçalho */}
      <section>
        <h2>Reagendar Consulta #{consulta.id}</h2>
        <p>
          Alterando a consulta com {consulta.medico} ({consulta.especialidade})
        </p>
      </section>

      {/* Formulário */}
      <section>
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
          <div>
            <button type="submit">
              Confirmar Reagendamento
            </button>
            <button type="button" onClick={() => navigate("/telemedicina")}>
              Voltar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
