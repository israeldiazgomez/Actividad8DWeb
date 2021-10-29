
import { Request, response, Response } from "express";
import { Cliente } from "../models/Cliente";
import { ClienteI } from "../models/Cliente";

export class ClienteController {

    public async getClientes(req: Request, res: Response){
    
        try {
            const clientes = await Cliente.findAll()
            if(!clientes){
                res.status(400).json({msg: 'Cliente invalido'})
            }
    
            return res.status(200).json({clientes})
        } catch (error) {
            res.status(500).json({msg: "Sin conexion con la base de datos"})
        }
    }

    



}