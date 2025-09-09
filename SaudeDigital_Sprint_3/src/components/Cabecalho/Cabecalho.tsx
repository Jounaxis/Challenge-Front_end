import Botao from "../Botao/Botao"; 
import BotaoOutline from "../Botao/BotaoOutline";
import Logo from "../Logo/Logo"
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <>
            <div className="header-menu">
                <Logo></Logo>
                <Botao>
                    Entrar
                </Botao>
                <BotaoOutline>
                    Cadastrar
                </BotaoOutline>
            </div>
        </>
    )
}

export default Cabecalho;