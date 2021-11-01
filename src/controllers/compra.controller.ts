import { Request, Response } from "express";
import { Compra, CompraI } from '../models/Compra';

export class CompraController {
    
    public async getCompra(req: Request, res: Response){
    
        try {
            const compras = await Compra.findAll()
            if(!compras){
                res.status(400).json({msg: 'compra invalido'})
            }
    
            return res.status(200).json({compras})
        } catch (error) {
            res.status(500).json({msg: "Sin conexion con la base de datos"})
        }
    }

    public async crearCompra(req:Request, res:Response){

        const {
             id,
             fecha,
             estado
        } = req.body 

        try {

            let body : CompraI = {
                fecha,
                estado
            }
            if((!body.fecha)) return res.status(400).json({msg:'ingrese datos'});
            const compraExist : Compra | null = await Compra.findOne(
                {
                    where: { cantidad : body.fecha}
                }
            );

            const compra = await Compra.create(body);
            res.status(200).json({compra});

        } catch (error){
    
        }
        
    }

    public async updateCompra(req: Request, res:Response){
        const {id : pk} = req.params;
        const {
            id,
            fecha,
            estado
       } = req.body 

      try {
          
        let body : CompraI = {
            fecha,
            estado
        }
        const CompraExist: CompraI | null = await Compra.findByPk(pk)
        if (!CompraExist)return res.status(500).json({msg: ' no existe'})

        await Compra.update(
            body,
            {
              where: {id: pk}  
            }
        )
        const compra: CompraI | null = await Compra.findByPk(pk)
        res.status(200).json({compra})  
      } catch (error) {
          return res.status(500).json({msg : 'error internal'})
      }
    }

}