import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";
import criarTurma from "./endpoints/criarTurma";
import editarTurmaEstudante from "./endpoints/editarEstudante";

//criar turma
app.post('/turma/criar', criarTurma )

//get estudantes
app.get("/estudante/:nome", buscarEstudante);

//post estudante
app.post("/estudante", criarEstudante);

//put turma estudante
app.put("/estudante", editarTurmaEstudante)