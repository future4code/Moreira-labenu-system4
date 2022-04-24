import { Modulo } from '../types/types';

export class Turmas{
  constructor(
    private id: string,
    private nome: string,
    public modulo?: Modulo | undefined
  ){}

  setModulo(novoModulo: Modulo){ 
    this.modulo = novoModulo;
}
    
  public getTurmaId = (): string => {
    return this.id;
  };

  public getTurmaNome = (): string => {
    return this.nome;
  };

  public getTurmaModulo = ():  Modulo | undefined => {
    if(this.modulo) {
      return this.modulo
    } else {
      return undefined
    }
  }

}

