export type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  senha?: string; // Senha pode ser opcional dependendo do contexto
};