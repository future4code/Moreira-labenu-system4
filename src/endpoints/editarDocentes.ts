import { Request, Response } from "express"
import connection from "../data/connection"

export default async function editarDocente(req: Request, res: Response): Promise<void> {
  try {
    const id = req.params.id
    const turma_id = req.body.turma_id

    const validarIdTurma = (await connection("Turma")).find((turma) => (turma.id === turma_id))
    const validarIdDocente = (await connection("Docente")).find((docente) => (docente.id === id))

    if (!validarIdTurma) {
      res.statusCode = 422
      throw new Error("Turma informada não existe")
    }

    if (!validarIdDocente) {
      res.statusCode = 422
      throw new Error("Id do docente não localizado")
    }

    await connection("Docente")
      .update({ turma_id: turma_id })
      .where({ id: id })

    res.status(202).send("Turma alterada com sucesso!")
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}