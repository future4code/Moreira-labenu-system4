import { Request, Response } from "express"
import connection from "../data/connection"

export default async function editarDocente(req: Request, res: Response): Promise<void> {

  try {
    const id = req.params.id
    const turma_id = req.body.turma_id

    await connection("Docente")
      .update({
        turma_id: turma_id
      })
      .where(id === id)

    res.status(202).send("Turma alterada com sucesso!")
  } catch (error: any) {
    res.status(500).send(error)
  }
}