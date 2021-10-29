import { Request, Response, Application } from "express";
import { ClienteController } from "../controllers/cliente.controller";

export class ClienteRoutes{
    public clienteController: ClienteController = new ClienteController ();
   
    public routes(app: Application):void {
        app.route('/cliente').get(this.clienteController.getClientes)
        app.route('/cliente').post(this.clienteController.crearClientes)
        app.route('/cliente').delete(this.clienteController.eliminarCliente)
        app.route('/cliente/:id').patch(this.clienteController.updateCliente);
    }
}