import { useState } from "react";
import { api } from "../../types/api";

export default function CriarLembrete() {
  const [form, setForm] = useState({
    mensagem: "",
    dataEnvio: "",
    codigoParente: 1 // ⚠️ Coloque aqui o código do parente adequado
  });

  const [carregando, setCarregando] = useState(false);

  async function criarLembrete(e: any) {
    e.preventDefault();

    if (!form.mensagem || !form.dataEnvio || !form.codigoParente) return;

    setCarregando(true);

    try {
      await api.createLembrete(form);
      setForm({ mensagem: "", dataEnvio: "", codigoParente: form.codigoParente }); // mantém o parente
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="lembretes_container">

      <section className="lembretes_cabecalho">
        <h2 className="lembretes_titulo">Criar Lembrete</h2>
        <p className="lembretes_subtitulo">
          Preencha os dados para adicionar um novo lembrete
        </p>
      </section>

      <section>
        <form className="cartao_autenticacao" onSubmit={criarLembrete}>

          <div className="campo_formulario">
            <label>Mensagem:</label>
            <input
              type="text"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            />
          </div>

          <div className="campo_formulario">
            <label>Data de Envio:</label>
            <input
              type="date"
              value={form.dataEnvio}
              onChange={(e) => setForm({ ...form, dataEnvio: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--azul-principal)] text-white p-3 rounded-lg font-semibold mt-4"
            disabled={carregando}
          >
            {carregando ? "Enviando..." : "Criar Lembrete"}
          </button>

        </form>
      </section>

    </main>
  );
}
