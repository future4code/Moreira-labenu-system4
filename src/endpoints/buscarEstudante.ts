import { Request, Response } from "express";
import connection from "../data/connection";

export default async function buscarEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const inputnome = req.params.nome;

    //inserindo estudante no banco dados
    const result = await connection("Estudante").where({ nome: inputnome });

    //validação
    if (result.length === 0) {
      res.statusCode = 404;
      throw new Error(
        "Estudante não encontrado, por favor verifique o nome digitado."
      );
    }
    res.status(200).send(result);
  } catch (e: any) {
    res.send(e.message);
  }
}
