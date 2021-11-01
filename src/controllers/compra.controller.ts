import { Request, Response } from "express";
import { Compra } from '../models/Compra';
import { CompraI} from '../models/Compra';

export class CompraController {
    
    public async getCompras(req: Request, res: Response){

        try {
            const compras = await Compra.findAll()
            if(!compras){
                res.status(400).json({ msg: 'no conexion'})
            }
            return res.status(200).json({compras})
        } catch (error) {
            res.status(500).json({ msg: 'Error interno'})
        }
    }

    public async createCompra(req:Request, res: Response){
        //const body: CompraI = req.body
        const {
            id,
            fecha,
            status
       } = req.body 

       try {

           let body : CompraI = {
               fecha,
               status
           }
           
           if((!body.fecha)) return res.status(400).json({msg:'ingrese datos'});
           const fech : Compra | null = await Compra.findOne({where: { fecha : body.fecha}});

           const compra = await Compra.create(body);
           res.status(200).json({compra});

       } catch (error){
   
       }
  }

  public async updateCompra(req: Request, res: Response){
    const {id : pk} = req.params;
    const {
        id,
        fecha,
        status
   } = req.body 

  try {
      
    let body : CompraI = {
        fecha,
        status
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
      return res.status(500).json({msg : 'error interno'})
  }

  }

  public async deleteCompra(req: Request, res: Response){
    const {id:pk}= req.params;
    try {
        const CompraExist: CompraI | null = await Compra.findByPk(pk);

      if (!CompraExist) return res.status(500).json({msg: ' no existe'})

      await Compra.update(
          {
            status:"Desactivado"
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