import { useEffect } from "react";


const Cadastro = () => {
    
    useEffect(() => {
        document.title = "Cadastre-se - Saúde Digital";
    }, []);

    return (
        <main>
            <h1>
                Futura Página de Cadastro
            </h1>
        </main>
    );
}

export default Cadastro;