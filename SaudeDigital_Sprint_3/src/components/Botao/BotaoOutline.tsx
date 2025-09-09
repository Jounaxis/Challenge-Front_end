import './botao.css'

interface BotaoOutlineProps {
  children: React.ReactNode;
}

const BotaoOutline: React.FC<BotaoOutlineProps> = (props) => {
    return (
        <button className='botao botao-outline'>
            {props.children}
        </button>
    )
}

export default BotaoOutline;