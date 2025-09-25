import { Link } from "react-router-dom";
import { useEffect } from "react";


const Error = () => {
    
    useEffect(() => {
        document.title = "Página não encontrada - Saúde Digital";
    }, []);

    return (
        <main className="container_pagina_erro">
            <section className="container_pagina_erro_conteudo">
                <div>
                    <h1 className="pagina_erro_titulo">404</h1>
                    <h2 className="pagina_erro_subtitulo">Página não encontrada</h2>
                    <p className="pagina_erro_paragrafo">
                        Ops! A página que você procura não existe ou foi removida.
                    </p>
                    <Link to="/" className="pagina_erro_botao_voltar">
                        Voltar para a Home
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Error;