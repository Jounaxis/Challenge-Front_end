import React, { useState, useEffect } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  useEffect(() => {
    document.title = "Contato - Saúde Digital";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[var(--cinza-claro)]">
      <section className="cartao_autenticacao w-full max-w-lg">
        {/* Cabeçalho da página */}
        <h2 className="text-2xl font-semibold text-center mb-2 text-[var(--azul-principal)]">
          Contato
        </h2>
        <p className="mb-6 text-[var(--cinza-texto-secundario)] text-center">
          Estamos aqui para tirar suas dúvidas, receber sugestões e melhorar
          cada vez mais nosso atendimento.
        </p>

        {/* Formulário */}
        <form id="form-contato" onSubmit={handleSubmit} className="space-y-4">
          <div className="campo_formulario">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Escreva sua mensagem aqui..."
              required
              className="w-full p-[0.75rem] border border-[var(--cinza-borda)] rounded-[0.5rem]"
            />
          </div>

          <button className="botao w-full" type="submit">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </main>
  );
}
