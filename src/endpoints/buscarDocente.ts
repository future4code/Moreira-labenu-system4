import { Request, Response } from "express"
import connection from "../data/connection"
import { docente } from "../types/types"

export default async function buscarDocente(req: Request, res: Response): Promise<void> {
  try {

    const docentes: docente[] = await connection("Docente")
    res.send(docentes)

  } catch (error: any) {
    res.status(500).send(error.sqlMessage)
  }
}