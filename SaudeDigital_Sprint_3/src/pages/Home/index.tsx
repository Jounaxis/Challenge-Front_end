import { useEffect } from "react";
import { Link } from "react-router-dom";
import MedicoSorrindo from "../../assets/img/medigo-sorrindo.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Página Inicial - Saúde Digital";
  }, []);

  return (
    <main className="secao_destaque">
      <section className="secao_destaque_container">
        {/* Texto de destaque */}
        <div>
          <h2 className="secao_destaque_titulo">
            Bem-vindo ao Portal de Saúde Digital
          </h2>
          <p className="secao_destaque_descricao">
            Agende suas consultas, acompanhe seu histórico médico e tenha
            acesso à telemedicina de forma simples e rápida.
          </p>
          <div className="secao_destaque_botoes">
            <a href="https://redelucymontoro.org.br/site/imrea/" target="_blank" rel="noreferrer" className="botao">
              Primeira Consulta
            </a>
            <Link to="/faq" className="botao botao-outline">
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Imagem */}
        <div className="secao_destaque_imagem">
          <img alt="Médico sorrindo" src={MedicoSorrindo} />
        </div>
      </section>
    </main>
  );
}
