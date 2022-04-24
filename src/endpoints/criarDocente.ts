import { Request, Response } from "express"
import { Docente } from "../classes/ClassDocente";
import connection from "../data/connection"

export default async function criarDocente(req: Request, res: Response): Promise<void> {
  try {
    let { nome, email, data_nasc, turma_id } = req.body
    const id: string = Date.now().toString()

    const validaTurma = (await connection("Turma")).find((turma) => turma.id === turma_id)
    if (!validaTurma) {
      res.statusCode = 422
      throw new Error("Informe uma turma válida")
    }

    if (!nome || !data_nasc || !email || !turma_id) {
      res.statusCode = 422
      throw new Error("Todos os campos são de preenchimento obrigatório.")
    }

    const insertDocente = new Docente(nome, email, data_nasc, turma_id)
    await connection("Docente")
      .insert({
        id,
        nome: insertDocente.getDocenteNome(),
        email: insertDocente.getDocenteEmail(),
        data_nasc: insertDocente.getDocenteData_nasc(),
        turma_id: insertDocente.getDocenteTurma_id()
      });

    res.status(201).send("Professor Cadastrado!")

  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}