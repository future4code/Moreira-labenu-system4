import { Request, Response } from "express"
import connection from "../data/connection"

export default async function criarDocente(req: Request, res: Response): Promise<void> {
  try {
    let { nome, data_nasc, email, turma_id } = req.body
    const id = Date.now().toString()

    await connection("Docente")
      .insert({ id, nome, data_nasc, email, turma_id });

    if (!nome || !data_nasc || !email || !turma_id) {
      res.status(422).send("Todos os campos são de preenchimento obrigatório.")
    }
    res.status(201).send("Professor Cadastrado!")

  } catch (error: any) {
    res.status(500).send(error.sqlMessage)
  }
}