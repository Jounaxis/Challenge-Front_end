import { Link } from "react-router-dom";

const Cabecalho: React.FC = () => {
  return (
    <header className="cabecalho">
      {/* Logo */}
      <div className="cabecalho_logo">
        <h1>Saúde Digital</h1>
        <p>Hospital das Clínicas</p>
      </div>
      
      {/* Navegação */}
      <nav className="cabecalho_navegacao">
        <ul className="cabecalho_lista_navegacao">
          <li>
            <Link to="/" className="cabecalho_link_navegacao">
              Home
            </Link>
          </li>
          <li>
            <Link to="/historico" className="cabecalho_link_navegacao">
              Histórico
            </Link>
          </li>
          <li>
            <Link to="/telemedicina" className="cabecalho_link_navegacao">
              Telemedicina
            </Link>
          </li>
          <li>
            <Link to="/faq" className="cabecalho_link_navegacao">
              Dúvidas
            </Link>
          </li>
          <li>
            <Link to="/contato" className="cabecalho_link_navegacao">
              Fale Conosco
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Botões */}
      <div className="cabecalho_botoes">
        <Link to="/login" className="botao">
          Entrar
        </Link>
        <Link to="/cadastro" className="botao botao-outline">
          Cadastrar
        </Link>
      </div>
    </header>
  );
};

export default Cabecalho;
