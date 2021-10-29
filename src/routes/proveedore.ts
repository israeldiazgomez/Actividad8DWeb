import { Application, request, Response } from "express";
import {ProveedoreController} from "../controllers/proveedore.controller"

export class ProveedoreRoutes{
    public proveedoreController: ProveedoreController = new ProveedoreController();
    public routes(app:Application): void{


        app.route('/proveedore').get(this.proveedoreController.getProveedore);
        app.route('/proveedore').post(this.proveedoreController.crearProveedore);
        app.route('/proveedore/:id').patch(this.proveedoreController.updateProveedore);
        app.route('/eproveedore/:id').patch(this.proveedoreController.deleteProveedore) ;        

        
    }
}