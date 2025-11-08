import { useEffect, useState } from "react";
import { api } from "../../types/api";
import ModalEditarLembrete from "../../components/ModalEditar";
import CardLembrete from "../../components/CardLembrete";
import Carregamento from "../../components/Carregamento";

export default function Lembretes() {
  const [lembretes, setLembretes] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Controle do modal / edição
  const [editando, setEditando] = useState<any | null>(null);
  const [, setForm] = useState({
    mensagem: "",
    dataEnvio: ""
  });

  async function carregarLembretes() {
    setCarregando(true);
    try {
      const dados = await api.getLembretes();
      setLembretes(dados);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarLembretes();
  }, []);

  function iniciarEdicao(lembrete: any) {
    setEditando(lembrete);
    setForm({
      mensagem: lembrete.mensagem,
      dataEnvio: lembrete.dataEnvio
    });
  }

  async function salvarEdicao(dados: any) {
    if (!editando) return;

    const dadosParaEnviar = {
      ...dados,
      codigoParente: editando.codigoParente ?? 1 
    };

    await api.updateLembrete(editando.codigo, dadosParaEnviar);

    setEditando(null);
    carregarLembretes();
  }

  async function excluirLembrete(id: number) {
    await api.deleteLembrete(id);
    carregarLembretes();
  }

  if (carregando) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Carregamento />
      </div>
    );
  }

  return (
    <main className="lembretes_container">

      <section className="lembretes_cabecalho">
        <h2 className="lembretes_titulo">Lembretes</h2>
        <p className="lembretes_subtitulo">Visualize, edite e exclua lembretes cadastrados</p>
      </section>

      <section className="container_consultas">
        {lembretes.map((l) => (
          <CardLembrete
            key={l.codigo}
            id={l.codigo}
            mensagem={l.mensagem}
            dataEnvio={l.dataEnvio}
            onEditar={() => iniciarEdicao(l)}
            onExcluir={() => excluirLembrete(l.codigo)}
          />
        ))}
      </section>

      {/* Modal de edição */}
      <ModalEditarLembrete
        aberto={!!editando}
        lembrete={editando}
        onSalvar={salvarEdicao}
        onCancelar={() => setEditando(null)}
      />

    </main>
  );
}
