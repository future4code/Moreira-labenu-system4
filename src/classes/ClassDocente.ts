export class Docente {
  constructor(
    private nome: string,
    private email: string,
    private data_nasc: string,
    private turma_id: string,
  ) { }

  getDocenteNome = (): string => this.nome;
  getDocenteEmail = (): string => this.email;
  getDocenteData_nasc = (): string => this.data_nasc;
  getDocenteTurma_id = (): string => this.turma_id;
}