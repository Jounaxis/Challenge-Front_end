import { useEffect } from "react";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

type Categoria = {
  titulo: string;
  perguntas: Pergunta[];
};

const categorias: Categoria[] = [
  {
    titulo: "Sobre o Programa",
    perguntas: [
      {
        pergunta: "O que é Saúde Digital?",
        resposta:
          "É uma plataforma que conecta pacientes a serviços de saúde de forma online, simplificando o acesso a consultas e informações.",
      },
      {
        pergunta: "Quais são os benefícios da Saúde Digital?",
        resposta:
          "Facilidade de agendamento, acesso rápido ao histórico médico, teleconsultas e gestão prática das consultas.",
      },
    ],
  },
  {
    titulo: "Acesso ao Portal",
    perguntas: [
      {
        pergunta: "Como faço meu primeiro acesso ao Portal do Paciente?",
        resposta:
          "Você deve se cadastrar informando seus dados pessoais e criar uma senha de acesso.",
      },
      {
        pergunta: "Esqueci minha senha, o que fazer?",
        resposta:
          "Na tela de login, clique em 'Esqueci minha senha' e siga as instruções enviadas para o seu e-mail.",
      },
    ],
  },
  {
    titulo: "Teleconsultas",
    perguntas: [
      {
        pergunta: "Como agendar uma teleconsulta?",
        resposta:
          "No portal, acesse a seção 'Telemedicina', escolha o profissional e selecione a data/horário disponíveis.",
      },
      {
        pergunta: "Quais equipamentos preciso para uma teleconsulta?",
        resposta:
          "Um dispositivo com câmera, microfone e acesso à internet estável.",
      },
      {
        pergunta: "O que fazer se não consigo ver minha consulta agendada?",
        resposta:
          "Verifique sua conexão com a internet e atualize a página. Caso persista, entre em contato com o suporte.",
      },
    ],
  },
  {
    titulo: "Gerenciamento de Consultas",
    perguntas: [
      {
        pergunta: "Como reagendar uma consulta?",
        resposta:
          "Vá até 'Meus Agendamentos', selecione a consulta e clique em 'Reagendar'.",
      },
      {
        pergunta: "Posso cancelar uma consulta pelo aplicativo?",
        resposta:
          "Sim, acesse seus agendamentos e escolha a opção 'Cancelar'.",
      },
    ],
  },
  {
    titulo: "Dúvidas Técnicas",
    perguntas: [
      {
        pergunta: "O que fazer se o aplicativo não funciona corretamente?",
        resposta:
          "Verifique se sua versão está atualizada. Se o problema persistir, entre em contato com o suporte técnico.",
      },
      {
        pergunta: "Onde encontro mais informações sobre o programa?",
        resposta:
          "Na seção FAQ do portal você encontra informações detalhadas sobre os serviços oferecidos.",
      },
    ],
  },
  {
    titulo: "Dados e Estatísticas",
    perguntas: [
      {
        pergunta: "Qual a taxa atual de absenteísmo nas teleconsultas?",
        resposta:
          "Atualmente, a taxa média é de 8%, abaixo da média de consultas presenciais.",
      },
      {
        pergunta:
          "A teleconsulta tem a mesma qualidade que o atendimento presencial?",
        resposta:
          "Sim, desde que realizada com equipamentos adequados e em ambiente apropriado.",
      },
    ],
  },
];

export default function Faq() {
  useEffect(() => {
    document.title = "Dúvidas Frequentes - Saúde Digital";
  }, []);

  return (
    <main className="pagina-faq">
      {/* Cabeçalho */}
      <section className="pagina-faq-cabecalho">
        <h2>Dúvidas Frequentes</h2>
        <p>
          Encontre respostas para as perguntas mais comuns sobre nosso serviço
        </p>
      </section>

      {/* Conteúdo FAQ */}
      <section className="faq-container">
        {categorias.map((cat, i) => (
          <div key={i} className="faq-categoria">
            <h3 className="faq-categoria-titulo">{cat.titulo}</h3>
            <div className="space-y-3">
              {cat.perguntas.map((p, j) => (
                <details key={j} className="faq-pergunta">
                  <summary>
                    {p.pergunta}
                  </summary>
                  <p className="mt-2 text-[var(--cinza-texto-secundario)]">
                    {p.resposta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
