import { Request, Response } from "express";
import { Turmas } from "../classes/ClassTurmas";
import { Estudante } from "../classes/Estudantes";
import connection from "../data/connection";

export default async function editarTurmaEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { turma_id, id } = req.body;
    const ExisteTurma: Turmas = (await connection("Turma")).find((turma) => {
      return turma_id === turma.id;
    });
    const ExisteId: Estudante = (await connection("Estudante")).find(
      (estudante) => {
        return id === estudante.id;
      }
    );
    //validação
    if (ExisteTurma === undefined) {
      res.statusCode = 404;
      throw new Error("Turma não encontrada.");
    }
    if (ExisteId === undefined) {
      res.statusCode = 404;
      throw new Error("Estudante não encontrado.");
    }
    //atualizando no banco de dados
    const resultado: Estudante = await connection("Estudante")
      .where({ id: id })
      .update({
        turma_id: turma_id,
      });

    res.status(200).send("As alterações de turma foram inseridas com sucesso.");
  } catch (e: any) {
    if (typeof e === "string") {
      res.send(e);
    } else {
      console.log(e.sqlMessage || e.message);
      res.send(e.sqlMessage || e.message);
    }
  }
}
