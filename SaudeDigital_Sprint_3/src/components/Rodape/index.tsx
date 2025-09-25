import { Link } from "react-router-dom";

const Rodape = () => {
  return (
    <footer className="rodape">
      {/* Conteúdo principal do rodapé */}
      <div className="rodape_conteudo">
        {/* Seção de apresentação */}
        <div className="rodape_secao">
          <h4>Saúde Digital</h4>
          <p>Inovando no atendimento médico através da tecnologia.</p>
        </div>

        {/* Links rápidos */}
        <div className="rodape_secao">
          <h4>Links Rápidos</h4>
          <ul className="rodape_lista">
            <li className="rodape_item">
              <Link to="/" className="rodape_link">Home</Link>
            </li>
            <li className="rodape_item">
              <Link to="/historico" className="rodape_link">Histórico</Link>
            </li>
            <li className="rodape_item">
              <Link to="/telemedicina" className="rodape_link">Telemedicina</Link>
            </li>
            <li className="rodape_item">
              <Link to="/faq" className="rodape_link">Dúvidas</Link>
            </li>
            <li className="rodape_item">
              <Link to="/integrantes" className="rodape_link">Integrantes</Link>
            </li>
            <li className="rodape_item">
              <Link to="/contato" className="rodape_link">Fale Conosco</Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="rodape_secao">
          <h4>Contato</h4>
          <p>ouvidoria.ichc@hc.fm.usp.br</p>
          <p>11 2661-0000</p>
          <p>
            <a
              href="https://maps.app.goo.gl/LmVsx4RnXwKa9MCn9"
              target="_blank"
              rel="noopener noreferrer"
              className="rodape_link"
            >
              Localização
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-[var(--cinza-borda-escura)] pt-4">
        <p>© 2025 Hospital das Clínicas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
