import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/usuario";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [corMensagem, setCorMensagem] = useState<"red" | "green">("red");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Login - Saúde Digital";
  }, []);

  function getUsuarios(): Usuario[] {
    const usuariosJSON = localStorage.getItem("usuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const usuarios = getUsuarios();
    const usuarioValido = usuarios.find(
      (user) => user.cpf === cpf && user.senha === senha
    );

    if (!usuarioValido) {
      setMensagem("CPF ou senha incorretos.");
      setCorMensagem("red");
      setIsLoading(false);
      return;
    }

    setMensagem("Login realizado com sucesso!");
    setCorMensagem("green");

    setTimeout(() => {
      navigate("/");
    }, 1500);

    setIsLoading(false);
  }

  return (
    <main className="pagina_autenticacao_main">
      <section className="cartao_autenticacao max-w-md">
        <div className="cartao_autenticacao_cabecalho">
          <h2>Login</h2>
          <p>
            Acesse sua conta para gerenciar suas consultas
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="campo_formulario">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
              required
            />
          </div>

          <div className="campo_formulario">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
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
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="cartao_autenticacao_rodape">
          <p>
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[var(--azul-principal)] hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
