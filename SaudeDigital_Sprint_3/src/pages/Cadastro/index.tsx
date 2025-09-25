import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/usuario";

const Cadastro = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [corMensagem, setCorMensagem] = useState<"red" | "green">("red");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Cadastro - Saúde Digital";
  }, []);

  function mostrarMensagem(msg: string, cor: "red" | "green") {
    setMensagem(msg);
    setCorMensagem(cor);
  }

  function validarCPF(cpf: string): boolean {
    const cpfNumerico = cpf.replace(/\D/g, "");
    return cpfNumerico.length === 11;
  }

  function getUsuarios(): Usuario[] {
    const usuariosJSON = localStorage.getItem("usuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
  }

  function salvarUsuarios(usuarios: Usuario[]) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500)); // simula delay

    if (!nome || !email || !cpf || !senha || !confirmaSenha) {
      mostrarMensagem("Por favor, preencha todos os campos.", "red");
      setIsLoading(false);
      return;
    }

    if (!validarCPF(cpf)) {
      mostrarMensagem(
        "CPF inválido. Deve conter exatamente 11 dígitos numéricos.",
        "red"
      );
      setIsLoading(false);
      return;
    }

    const usuarios = getUsuarios();
    const existeEmail = usuarios.some((user) => user.email === email);
    const existeCPF = usuarios.some((user) => user.cpf === cpf);

    if (existeEmail) {
      mostrarMensagem("Email já cadastrado!", "red");
      setIsLoading(false);
      return;
    }

    if (existeCPF) {
      mostrarMensagem("CPF já cadastrado!", "red");
      setIsLoading(false);
      return;
    }

    if (senha !== confirmaSenha) {
      mostrarMensagem("As senhas não coincidem. Por favor, verifique.", "red");
      setIsLoading(false);
      return;
    }

    const novoUsuario: Usuario = { nome, email, cpf, senha };
    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);

    mostrarMensagem("Cadastro realizado com sucesso!", "green");

    setNome("");
    setEmail("");
    setCpf("");
    setSenha("");
    setConfirmaSenha("");

    setTimeout(() => {
      navigate("/login");
    }, 1500);

    setIsLoading(false);
  }

  return (
    <main className="pagina_autenticacao_main">
      <section className="cartao_autenticacao max-w-md">
        <div className="cartao_autenticacao_cabecalho">
          <h1>Crie sua conta</h1>
          <p>
            Preencha os dados abaixo para se cadastrar
          </p>
        </div>

        <form onSubmit={handleCadastro}>
          <div className="campo_formulario">
            <label htmlFor="nome">Nome Completo</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Crie uma senha"
              required
            />
            <small>Mínimo de 8 caracteres</small>
          </div>

          <div className="campo_formulario">
            <label htmlFor="confirmaSenha">Confirmar Senha</label>
            <input
              id="confirmaSenha"
              type="password"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              placeholder="Confirme sua senha"
              required
            />
          </div>

          {mensagem && (
            <div
              className={`mensagem_feedback ${
                corMensagem === "red" ? "erro" : "sucesso"
              }`}
            >
              {mensagem}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`botao w-full ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <div className="cartao_autenticacao_rodape">
          <p>
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="text-[var(--azul-principal)] hover:underline"
            >
              Faça login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cadastro;
