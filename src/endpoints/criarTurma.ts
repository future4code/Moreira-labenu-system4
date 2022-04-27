import {Request, Response} from 'express';
import {connection} from '../data/connection';
import { Turmas } from '../classes/ClassTurmas'


export default async function criarTurma(req: Request, res: Response): Promise<void> {

  try{
    const nomeTurma : string = req.body.nome;
    const idTurma = Date.now().toString();
    const moduloTurma = 0;

    if(!nomeTurma){
      throw new Error("Você precisa preencher todas as informações")
    }
    const turmas: Turmas = new Turmas(idTurma,nomeTurma, moduloTurma);
          await connection('Turma').insert({
            id: turmas.getTurmaId(),
            nome: turmas.getTurmaNome(),
            modulo: turmas.getTurmaModulo(),
          })
          
        res.status(201).send("Turma criada com sucesso!")
}catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
}