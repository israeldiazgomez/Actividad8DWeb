import { Request, Response } from "express";
import {Proveedore, ProveedoreI} from "../models/Proveedore"; 


export class ProveedoreController{
    public async getProveedore(req: Request, res: Response){

      try {
          const proveedores = await Proveedore.findAll(
              {
                  where:{estado: "Activado" }
              }
          )
          if(!proveedores){
              res.status(400).json({msg:'No existe'})
          }
          return res.status(200).json({proveedores})
      }
      catch(error) {
          res.status(500).json({msg:'No hay conexion'})
      }
      
    }

    public mostrarProveedores(){
        
    }
    public async crearProveedore(req:Request, res:Response){

        const {
             id,
             codigo,
             nombre,
             apellido,
             direccion,
             provincia,
             telefono,
             estado
        } = req.body 

        try {

            let body : ProveedoreI = {
                codigo,
                nombre,
                apellido,
                direccion,
                provincia,
                telefono,
                estado
               
            }
            if((!body.codigo)) return res.status(400).json({msg:'ingrese datos'});
            const pro : Proveedore | null = await Proveedore.findOne({where: { codigo : body.codigo}});

            const proveedore = await Proveedore.create(body);
            res.status(200).json({proveedore});

        } catch (error){
    
        }
        
    }
    public async updateProveedore(req: Request, res:Response){
        const {id : pk} = req.params;
        const {
            id,
            codigo,
             nombre,
             apellido,
             direccion,
             provincia,
             telefono,
            estado
       } = req.body 

      try {
          
        let body : ProveedoreI = {
            codigo,
             nombre,
             apellido,
             direccion,
             provincia,
             telefono,
            estado
        }
        const ProveedoreExist: ProveedoreI | null = await Proveedore.findByPk(pk)
        if (!ProveedoreExist)return res.status(500).json({msg: ' no existe'})

        await Proveedore.update(
            body,
            {
              where: {id: pk}  
            }

           
        )
        const proveedore: ProveedoreI | null = await Proveedore.findByPk(pk)
        res.status(200).json({proveedore})  
      } catch (error) {
          return res.status(500).json({msg : 'error internal'})
      }
    }

        public async deleteProveedore(req: Request, res: Response){
          const {id:pk}= req.params;
          try {
              const ProveedoreExist: ProveedoreI | null = await Proveedore.findByPk(pk);

            if (!ProveedoreExist) return res.status(500).json({msg: ' no existe'})

            await Proveedore.update(
                {
                    estado:"Desactivado"
                },
                    {
                        where: {id:pk}
                    }
                
            );
            return res.status(200).json({msg: ' fue eliminado'})

          } catch (error) {
              
          }
      }
    }