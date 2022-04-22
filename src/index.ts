import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";
import criarTurma from "./endpoints/criarTurma";
import criarDocente from "./endpoints/criarDocente";
import editarTurmaEstudante from "./endpoints/editarEstudante";
import buscarTurma from "./endpoints/buscarTurma";
//import mudarTurma from "./endpoints/editarTurma";

//criar turma
app.post('/turma/criar', criarTurma)

//buscar turma
app.get('/turma', buscarTurma)

//buscar turma
//app.put('/turma/:id', mudarTurma)

//get estudantes
app.get("/estudante/:nome", buscarEstudante);

//post estudante
app.post("/estudante", criarEstudante);

//put turma estudante
app.put("/estudante", editarTurmaEstudante)

//criar docente
app.post("/docente", criarDocente)

