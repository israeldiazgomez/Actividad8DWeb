import { Request, Response, Application } from "express";
import { ClienteController } from "../controllers/cliente.controller";

export class ClienteRoutes{
    public clienteController: ClienteController = new ClienteController ();
   
    public routes(app: Application):void {
        app.route('/cliente').get(this.clienteController.getClientes)
        app.route('/crearcliente').post(this.clienteController.crearClientes)
        app.route('/eliminarcliente').post(this.clienteController.eliminarCliente)
    }
}