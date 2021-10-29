import { Request, Response } from "express";
import {Distribuido, DistribuidoI} from "../models/Distribuido"


export class DistribuidoController{
    public async getDistribuido(req: Request, res: Response){

      try {
          const distribuidos = await Distribuido.findAll(
              {
                  where:{estado: "Activado" }
              }
          )
          if(!distribuidos){
              res.status(400).json({msg:'No existe'})
          }
          return res.status(200).json({distribuidos})
      }
      catch(error) {
          res.status(500).json({msg:'No hay conexion'})
      }
      
    }

    public mostrarDistribuidos(){
        
    }
    public async crearDistribuido(req:Request, res:Response){

        const {
             id,
            cantidad,
             estado
        } = req.body 

        try {

            let body : DistribuidoI = {
                cantidad,
                estado
               
            }
            if((!body.cantidad)) return res.status(400).json({msg:'ingrese datos'});
            const dis : Distribuido | null = await Distribuido.findOne({where: { cantidad : body.cantidad}});

            const distribuido = await Distribuido.create(body);
            res.status(200).json({distribuido});

        } catch (error){
    
        }
        
    }
    public async updateDistribuido(req: Request, res:Response){
        const {id : pk} = req.params;
        const {
            id,
            cantidad,
            estado
       } = req.body 

      try {
          
        let body : DistribuidoI = {
            cantidad,
            estado
        }
        const DistribuidoExist: DistribuidoI | null = await Distribuido.findByPk(pk)
        if (!DistribuidoExist)return res.status(500).json({msg: ' no existe'})

        await Distribuido.update(
            body,
            {
              where: {id: pk}  
            }

           
        )
        const distribuido: DistribuidoI | null = await Distribuido.findByPk(pk)
        res.status(200).json({distribuido})  
      } catch (error) {
          return res.status(500).json({msg : 'error internal'})
      }
    }

        public async deleteDistribuido(req: Request, res: Response){
          const {id:pk}= req.params;
          try {
              const DistribuidoExist: DistribuidoI | null = await Distribuido.findByPk(pk);

            if (!DistribuidoExist) return res.status(500).json({msg: ' no existe'})

            await Distribuido.update(
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