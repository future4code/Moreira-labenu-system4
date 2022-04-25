import app from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import buscarEstudante from "./endpoints/buscarEstudante";
import criarTurma from "./endpoints/criarTurma";
import criarDocente from "./endpoints/criarDocente";
import editarTurmaEstudante from "./endpoints/editarEstudante";
import buscarDocente from "./endpoints/buscarDocente";
import editarDocente from "./endpoints/editarDocentes";
import buscarTurma from "./endpoints/buscarTodasAsTurmas";
import mudarTurma from "./endpoints/editarTurma";
import buscarTurmasAtivas from "./endpoints/buscarTurmasAtivas";


//buscar turmas Ativas
app.get('/turma/ativas', buscarTurmasAtivas)

//criar turma
app.post('/turma/criar', criarTurma)

//buscar todas as turmas
app.get('/turma', buscarTurma)

//editar modulo da turma
app.put('/turma/:id', mudarTurma)

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

//Mudar docente de turma;
app.put("/docente/:id", editarDocente)