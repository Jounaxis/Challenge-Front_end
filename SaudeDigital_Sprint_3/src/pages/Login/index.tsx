import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { Usuario } from "../../types/usuario";

type LoginFormData = {
  cpf: string;
  senha: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [corMensagem, setCorMensagem] = useState<"red" | "green">("red");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  useEffect(() => {
    document.title = "Login - Saúde Digital";
  }, []);

  function getUsuarios(): Usuario[] {
    const usuariosJSON = localStorage.getItem("usuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
  }

  async function handleLogin(data: LoginFormData) {
    const { cpf, senha } = data;
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
          <p>Acesse sua conta para gerenciar suas consultas</p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="campo_formulario">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              {...register("cpf", {
                required: "O CPF é obrigatório.",
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Formato de CPF inválido. Ex: 000.000.000-00",
                },
              })}
            />
            {/* Mensagem de erro de validação */}
            {errors.cpf && (
              <span className="text-red-500 text-sm">{errors.cpf.message}</span>
            )}
          </div>

          <div className="campo_formulario">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              {...register("senha", {
                required: "A senha é obrigatória.",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres.",
                },
              })}
            />
            {errors.senha && (
              <span className="text-red-500 text-sm">
                {errors.senha.message}
              </span>
            )}
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
