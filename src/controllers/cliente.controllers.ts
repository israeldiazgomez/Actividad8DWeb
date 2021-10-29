
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

    public async crearClientes(req: Request, res:Response){
        const body: ClienteI = req.body;
        
        try {
            if(!body.nombre && !body.apellido && 
            !body.correo && !body.clave) return res.status(400).json({msg: "Requieren datos!!"});
    
                const clienteExist: Cliente | null = await Cliente.findOne(
                    {
                        where: {correo: body.correo}
                    }
                );
            if(clienteExist){
                return res.status(400).json({msg: "Correo ya existe!!"})
            }
            const cliente = await Cliente.create(body);
            res.status(200).json({cliente})
    
        } catch (error) {
            res.status(500).json({msg: "Error al crear cliente"})
        }
    
    }



}