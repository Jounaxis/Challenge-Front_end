import { useState, useEffect } from "react";

interface ModalEditarLembreteProps {
    aberto: boolean;
    lembrete: any;
    onSalvar: (dados: any) => void;
    onCancelar: () => void;
}

export default function ModalEditarLembrete({
    aberto,
    lembrete,
    onSalvar,
    onCancelar
}: ModalEditarLembreteProps) {

    const [form, setForm] = useState({
        mensagem: "",
        dataEnvio: ""
    });

    // Carrega os dados do lembrete ao abrir
    useEffect(() => {
        if (aberto && lembrete) {
            const dataCorrigida = lembrete.dataEnvio
                ? new Date(lembrete.dataEnvio).toISOString().slice(0, 16)
                : "";

            setForm({
                mensagem: lembrete.mensagem,
                dataEnvio: dataCorrigida
            });
        }
    }, [aberto, lembrete]);


    if (!aberto) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-start mt-[5rem] z-50">
            <div className="cartao_autenticacao w-[500px]">

                <h3 className="text-xl font-semibold mb-4 text-center">
                    Editar Lembrete
                </h3>

                <div className="campo_formulario">
                    <label>Mensagem:</label>
                    <input
                        type="text"
                        value={form.mensagem}
                        onChange={(e) =>
                            setForm({ ...form, mensagem: e.target.value })
                        }
                    />
                </div>

                <div className="campo_formulario">
                    <label>Data de Envio:</label>
                    <input
                        type="datetime-local"
                        value={form.dataEnvio}
                        onChange={(e) =>
                            setForm({ ...form, dataEnvio: e.target.value })
                        }
                    />
                </div>

                <div className="flex gap-2 mt-4">
                    <button
                        className="w-1/2 botao"
                        onClick={() => onSalvar(form)}
                    >
                        Salvar
                    </button>

                    <button
                        className="w-1/2 botao-outline"
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>

                </div>
            </div>
        </div>
    );
}
