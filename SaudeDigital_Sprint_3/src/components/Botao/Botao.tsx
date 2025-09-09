import './botao.css'

interface BotaoProps {
  children: React.ReactNode;
}

const Botao: React.FC<BotaoProps> = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao;