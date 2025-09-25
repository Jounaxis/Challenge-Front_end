import { useEffect } from "react";


const Error = () => {
    
    useEffect(() => {
        document.title = "Página não encontrada - Saúde Digital";
    }, []);

    return (
        <main>
            <h1>
                404
            </h1>
        </main>
    );
}

export default Error;