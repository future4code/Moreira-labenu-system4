import { Request, Response } from 'express';
import { connection } from '../data/connection';
import {Turmas}   from '../classes/ClassTurmas';

//Altera o modulo da turma
export default async function mudarModulo(req: Request, res: Response): Promise<void> {


  try{
    const id_turma =  req.params.id;
    const {id, modulo}= req.body

    const turma = await connection("Turma")
    const verificaTurma: Turmas= turma.find((turma)=> turma.id === id_turma)
    
    if(!verificaTurma){
      throw new Error("Essa turma não foi encontrada!")
    }

   const resultado: Turmas = await connection("Turma")
    .where({id: id})
    .update({modulo});
    
     res.status(200).send("Modulo alterado com sucesso!");

    }catch(error: any){
      res.status(500).send(error.sqlMessage || error.message)
    }
}