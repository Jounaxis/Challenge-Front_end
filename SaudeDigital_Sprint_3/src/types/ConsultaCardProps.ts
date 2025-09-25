export type ConsultaCardProps = {
  id: string;
  data: string;
  medico: string;
  especialidade: string;
  status: "REALIZADA" | "CANCELADA";
};