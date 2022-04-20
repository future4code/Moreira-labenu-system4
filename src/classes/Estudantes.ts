
import { Request, Response } from "express";
import app from "../app"
import connection from "../data/connection";

// classe - Forma do meu sistema
export class Estudante {
  // atributos sao informacoes da classe
  private id: string;
  private nome: string;
  private email: string; //VARCHAR(255) NOT NULL UNIQUE,
  private data_nasc: string;
  private turma_id: string;
  // metodo da classe
  constructor(nome: string, email: string, data_nasc:string, turma_id:string) {
    this.id = Date.now().toString();
    this.nome = nome;
    this.email = email;
    this.data_nasc= data_nasc;
    this.turma_id=turma_id;
  //verificações
    // this.verificar(nome, idade, cpf);
  }

  // metodo da classe
//   private verificar(nome: string, idade: number, cpf: string) {
//     if (!nome || !idade || !cpf) {
//       throw new Error("Dados devem ser preenchidos");
//     }
//   }
  // informacao do nome
  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }
}






// app.post("/inserirNoBanco",(req:Request , res:Response)=>{
//     try {
//        const {nome,idade,cpf} = req.body
 
//        const usuario = new Estudante(nome,idade,cpf)
      
 
//     } catch (error:any) {
//        res.status(500).send({message:error.message})
//     }
//  })

// instanciar a minha classe
// Chamar a funcao é a mesma ideia de instanciar uma classe





// class Animal{

//     private nome:string;
//     private tipo:string;
//     private raca:string;

//     //metodo da classe
//     constructor(nome:string,tipo:string,raca:string){
//         this.nome = nome
//         this.tipo = tipo
//         this.raca = raca
//     }

//     private som(tipo:string){
//         if(tipo === "cachorro"){
//             console.log("AU AU !")
//         }
//         if(tipo === "gato"){
//             console.log("MIAU !")
//         } 
//     }

//     getNome(){
//         return this.nome
//     }
// }

// // instanciando a minha classe
// const animal = new Animal("dino","cachorro","caramelo")


// console.log(animal.getNome())









