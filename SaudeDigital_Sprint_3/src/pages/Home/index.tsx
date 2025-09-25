import { useEffect } from "react";
import { Link } from "react-router-dom";
import MedicoSorrindo from "../../assets/img/medigo-sorrindo.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Página Inicial - Saúde Digital";
  }, []);

  return (
    <main>
      <section>
        {/* Texto de destaque */}
        <div>
          <h2>
            Bem-vindo ao Portal de Saúde Digital
          </h2>
          <p>
            Agende suas consultas, acompanhe seu histórico médico e tenha
            acesso à telemedicina de forma simples e rápida.
          </p>
          <div>
            <a
              href="https://redelucymontoro.org.br/site/imrea/"
              target="_blank"
              rel="noreferrer"
            >
              Primeira Consulta
            </a>
            <Link to="/faq">
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Imagem */}
        <div>
          <img
            alt="Médico sorrindo"
            src={MedicoSorrindo}
          />
        </div>
      </section>
    </main>
  );
}
