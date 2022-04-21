import { Modulo } from '../types/types';

export class Turmas{
  constructor(
    private id: string,
    private nome: string,
    public modulo: Modulo
  ){}
    
  public getTurmaId = (): string => {
    return this.id;
  };

  public getTurmaNome = (): string => {
    return this.nome;
  };

  public getTurmaModulo = (): Modulo => {
    return this.modulo;
  };

}