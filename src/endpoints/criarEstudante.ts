import { Request, Response } from "express";
import { Estudante } from "../classes/Estudantes";
import { connection } from "../data/connection";

export default async function criarEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id } = req.body;
    const ExisteTurma = (await connection("Turma")).find((turma) => {
      return turma_id === turma.id;
    });

    //corrigindo o formato da data
    const separaData:string = data_nasc.split("/");
    const ano:string = separaData[2];
    const mes:string = separaData[1];
    const dia:string = separaData[0];
    const newDataNasc:string = `${ano}/${mes}/${dia}`;

    //validações
    if (!nome || !email || !data_nasc || !turma_id) {
      res.statusCode = 422;
      throw "Campos 'name', 'email' e 'data_nasc' são obrigatórios.";
    }
    if (
      typeof nome !== "string" ||
      typeof email !== "string" ||
      typeof data_nasc !== "string" ||
      typeof turma_id !== "string"
    ) {
      res.statusCode = 422;
      throw new Error(
        "Campos 'nome', 'email','data_nasc' e 'turma_id' devem ser strings."
      );
    }
    if (ExisteTurma === undefined) {
      res.statusCode = 404;
      throw new Error("Turma não encontrada.");
    }
    if (data_nasc.length !== 10) {
      res.statusCode = 422;
      throw new Error(
        "Por favor verifique a data digitada, a data deve conter o formato 'DD'/'MM'/'YYYY'."
      );
    }
    //inserindo o estudante no banco de dados
    const estudante: Estudante = new Estudante(
      nome,
      email,
      newDataNasc,
      turma_id
    );
    await connection("Estudante").insert(estudante);
    res.status(201).send("Estudante criado!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.send(error.sqlMessage || error.message);
    }
  }
}
