import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";

//get estudantes
app.get("/estudante/:nome", buscarEstudante);

//post estudante
app.post("/criarEstudante", criarEstudante);

//put turma estudante
