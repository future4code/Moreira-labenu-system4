export class Estudante {
  private id: string;
  private nome: string;
  private email: string;
  public data_nasc: string;
  private turma_id: string;

  constructor(
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
  ) {
    this.id = Date.now().toString();
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }
  // changeData(){
  //  return this.data_nasc=new Date(this.data_nasc).toLocaleDateString();
  // }
  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }
}
