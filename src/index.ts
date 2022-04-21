import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";
import criarTurma from "./endpoints/criarTurma";

//criar turma
app.post('/turma/criar', criarTurma )

//get estudantes
app.get("/estudante/:nome", buscarEstudante);

//post estudante
app.post("/criarEstudante", criarEstudante);

//put turma estudante
