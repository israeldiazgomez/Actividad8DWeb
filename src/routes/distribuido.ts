import { Application, request, Response } from "express";
import {DistribuidoController} from "../controllers/distribuido.controller"

export class DistribuidoRoutes{
    public distribuidoController: DistribuidoController = new DistribuidoController();
    public routes(app:Application): void{


        app.route('/proveedore').get(this.distribuidoController.getDistribuido);
        app.route('/proveedore').post(this.distribuidoController.crearDistribuido);
        app.route('/proveedore/:id').patch(this.distribuidoController.updateDistribuido);
        app.route('/eproveedore/:id').patch(this.distribuidoController.deleteDistribuido) ;        

        
    }
}