
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
       // const body: ClienteI = req.body;
        
        try {

            const {
                id,
                nombre,
                apellido,
                correo,
                clave,
                status
            } = req.body

            let body: ClienteI = {
                nombre,
                apellido,
                correo,
                clave,
                status
            }

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

    public async eliminarCliente(req: Request, res:Response){
        try {
    
            const { id } = req.body;
            const clienteExist: Cliente | null = await Cliente.findOne(
                {
                    where: {id:id}
                }
            );
        if(clienteExist){
            return res.status(400).json({msg: "Correo ya existe!!"})
        }

            const response = await Cliente.destroy({
              where: { id: id }
            })

            res.status(200).json({msg: "Borrado!!"})
            res.json(response)
            
          } catch (e) {
            console.log(e);
          }
    };


    public async  updateCliente(req: Request, res:Response){
        const { id: pk } = req.params;
         const {
             id,
             nombre,
             apellido,
             correo,
             clave,
             status
            } = req.body;
     
            try {
             let body: ClienteI = {
                 nombre,
                 apellido,
                 correo,
                 clave,
                 status
             }
     
             const ClienteExist:ClienteI | null = await Cliente.findByPk(pk)
     
             if(!ClienteExist) return res.status(400).json({msg: "El cliente no existe"})
     
             await Cliente.update(
                 body,
                 {
                     where: {id: pk}
                 }
             )
     
             const cliente: ClienteI | null = await Cliente.findByPk(pk)
             res.status(200).json({cliente})      
         } catch (error) {
             res.status(400).json({msg: "Error conexion"})
            }
        
        }
         
        public async borrarCliente(req: Request, res:Response){
           
         const { id: pk } = req.params;
         try {
             const ClienteExist:ClienteI | null = await Cliente.findByPk(pk)
     
             if(!ClienteExist) return res.status(400).json({msg: "El Cliente no existe"})
     
             await Cliente.update(
                 {
                     status: "Desactivado"
                 },
                     {
                         where: {id: pk}
                     }
             )
     
             res.status(200).json({msg: "Cliente Borrado"})
     
           } catch (error) {
               
           }
        }
     

}