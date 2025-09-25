import { Link } from "react-router-dom";

const Rodape = () => {
  return (
    <footer>
      {/* Conteúdo principal do rodapé */}
      <div>
        {/* Seção de apresentação */}
        <div>
          <h4>Saúde Digital</h4>
          <p>Inovando no atendimento médico através da tecnologia.</p>
        </div>

        {/* Links rápidos */}
        <div >
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Histórico</Link>
            </li>
            <li>
              <Link to="/">Telemedicina</Link>
            </li>
            <li>
              <Link to="/">Dúvidas</Link>
            </li>
            <li>
              <Link to="/">Integrantes</Link>
            </li>
            <li>
              <Link to="/">Fale Conosco</Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4>Contato</h4>
          <p>ouvidoria.ichc@hc.fm.usp.br</p>
          <p>11 2661-0000</p>
          <p>
            <a
              href="https://maps.app.goo.gl/LmVsx4RnXwKa9MCn9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Localização
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p>© 2025 Hospital das Clínicas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
