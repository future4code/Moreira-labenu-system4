import { Request, Response } from "express"
import connection from "../data/connection"

export default async function editarDocente(req: Request, res: Response): Promise<void> {
  try {
    let { turma_id } = req.body
    let id = req.params.id

    if (!id) {
      throw new Error("Preencha o id do professor")
    }

    if (!turma_id) {
      throw new Error("Preencha o id da turma")
    }

    await connection("Docente")
      .update({ turma_id })
      .where(id === id)

    res.status(202).send("Alteração realizada com sucesso!")
  } catch (error: any) {
    res.status(500).send("Erro Interno")
  }
}