type CardIntegranteProps = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

export default function CardIntegrante({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: CardIntegranteProps) {
  return (
    <div className="cartao-integrante">
      {/* Foto */}
      <img
        src={foto}
        alt={`Foto do integrante ${nome}`}
        className="foto-integrante"
      />

      {/* Nome */}
      <h3>{nome}</h3>

      {/* RM e Turma */}
      <p>
        RM: {rm} | Turma: {turma}
      </p>

      {/* Links */}
      <p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </div>
  );
}
