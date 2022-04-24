import { Request, Response } from "express";
import { Turmas } from "../classes/ClassTurmas";
import connection from "../data/connection";

export default async function buscarTurma(req: Request, res: Response): Promise<void> {
  try {
    const resultado = await connection.raw(`
    SELECT * FROM Turma WHERE modulo`)
    if(resultado.length === 0 ){ 
    res.statusCode = 422;
    throw new Error("Não tem turma ativa")}
    
    res.status(200).send(resultado[0]);
  } catch (e: any) {
    res.send(e.message);
  }
}
