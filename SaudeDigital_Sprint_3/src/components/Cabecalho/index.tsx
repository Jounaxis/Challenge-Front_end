import { Link } from "react-router-dom";

const Cabecalho: React.FC = () => {
  return (
    <header>
      {/* Logo */}
      <div>
        <h1>Saúde Digital</h1>
        <p>Hospital das Clínicas</p>
      </div>
      
      {/* Navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/historico">
              Histórico
            </Link>
          </li>
          <li>
            <Link to="/telemedicina">
              Telemedicina
            </Link>
          </li>
          <li>
            <Link to="/faq">
              Dúvidas
            </Link>
          </li>
          <li>
            <Link to="/contato">
              Fale Conosco
            </Link>
          </li>
        </ul>
      </nav>
      
      <div>
        <Link to="/login">
          Entrar
        </Link>
        <Link to="/cadastro">
          Cadastrar
        </Link>
      </div>
    </header>
  );
};

export default Cabecalho;
