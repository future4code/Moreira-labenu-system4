// import { Request, Response } from 'express';
// import { connection } from '../data/connection';
// import { Turmas } from '../classes/ClassTurmas'
// import { Modulo }   from '../types/types';

// //Recebe os dados e atualiza
// const mudaModulo = async (
//   id: string,
//   nome: string, 
//   modulo: number, 
//   ): Promise<any> => {
//   await connection("Turma")
//     .update({
//       nome: nome,
//       modulo: Modulo
//     })
//     .where("id", id);
// };

// //Altera o modulo da turma
// export default async function mudarModulo(req: Request, res: Response): Promise<void> {


//   try{
//     const id_turma =  req.params.id;
//     const {id, nome, modulo} : {id: string, nome: string, modulo: Modulo} = req.body
//     const turma = new Turmas(id , nome)
//     turma.setModulo(modulo);
//     const mudaModulo = new Turmas(turma.getTurmaId(), turma.getTurmaModulo())
//    res.status(201).send(mudaModulo);
// }catch(error: any){
//     res.status(500).send(error.sqlMessage || error.message)
//   }
// }