import { Request, Response } from "express";
import connection from "./data/connection";
import app from "./app";

//test database
// app.get("/getall", async (req:Request, res:Response) => {
//   const result = await connection("movie");
//   res.status(200).send(result);
// });
