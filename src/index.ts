import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";
import criarTurma from "./endpoints/criarTurma";
import criarDocente from "./endpoints/criarDocente";
import editarTurmaEstudante from "./endpoints/editarEstudante";
import buscarDocente from "./endpoints/buscarDocente";

//criar turma
app.post('/turma/criar', criarTurma)

//get estudantes
app.get("/estudante/:nome", buscarEstudante);

//post estudante
app.post("/estudante", criarEstudante);

//put turma estudante
app.put("/estudante", editarTurmaEstudante)

//criar docente
app.post("/docente", criarDocente)

//Buscar todas as pessoas docentes
app.get("/docente", buscarDocente)

