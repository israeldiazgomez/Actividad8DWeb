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

    public mostrarDistribuidoss(){
        
    }
}