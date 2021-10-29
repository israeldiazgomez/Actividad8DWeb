import { Application, request, Response } from "express";
import {DistribuidoController} from "../controllers/distribuido.controller"

export class DistribuidoRoutes{
    public distribuidoController: DistribuidoController = new DistribuidoController();
    public routes(app:Application): void{


        app.route('/distribuido').get(this.distribuidoController.getDistribuido);
        app.route('/distribuido').post(this.distribuidoController.crearDistribuido);
        app.route('/distribuido/:id').patch(this.distribuidoController.updateDistribuido);
        app.route('/edistribuido/:id').patch(this.distribuidoController.deleteDistribuido) ;        

        
    }
}