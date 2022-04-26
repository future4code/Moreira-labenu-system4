import { Request, Response } from "express";
import { Estudante } from "../classes/Estudantes";
import connection from "../data/connection";

export default async function buscarEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const inputnome:string = req.params.nome;

    //inserindo estudante no banco dados
    const resultado: Estudante[] = await connection("Estudante").where({
      nome: inputnome,
    });
    //corrigindo a data
    const resultadoComData: Estudante[] = resultado?.map((estudante) => {
      estudante.data_nasc = new Date(estudante.data_nasc).toLocaleDateString();
      return estudante;
    });

    //validação
    if (resultado.length === 0) {
      res.statusCode = 404;
      throw new Error(
        "Estudante não encontrado, por favor verifique o nome digitado."
      );
    }
    res.status(200).send(resultadoComData);
  } catch (e: any) {
    res.send(e.message);
  }
}
