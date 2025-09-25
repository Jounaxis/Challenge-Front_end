import { useEffect } from "react";


const Error = () => {
    
    useEffect(() => {
        document.title = "Página não encontrada - Saúde Digital";
    }, []);

    return (
        <main>
            <h1>
                Futura Página de Login
            </h1>
        </main>
    );
}

export default Error;