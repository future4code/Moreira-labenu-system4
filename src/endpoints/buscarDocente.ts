import { Request, Response } from "express"
import connection from "../data/connection"

export default async function buscarDocente(req: Request, res: Response): Promise<void> {
  try {
    const docentes = await connection("Docente")

    if (!docentes) {
      res.statusCode = 404
      throw new Error("Docente não encontrado")
    }

    res.status(202).send(docentes)
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}