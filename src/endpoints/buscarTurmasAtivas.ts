import { Request, Response } from 'express';
import { connection } from '../data/connection';

export default async function buscarTurmasAtivas(req: Request, res: Response): Promise<void> {
  try{
    const resultado = await connection("Turma")
      .where("modulo", "<>", "0")

      res.status(200).send(resultado)

  }catch(error: any){
    res.status(400).send(error.sqlMessage || error.message)
  }
}