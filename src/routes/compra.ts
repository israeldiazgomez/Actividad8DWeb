import { Request, Response, Application } from "express";
import { CompraController} from '../controllers/compra.controller';

export class CompraRoutes {
    public compraController: CompraController = new CompraController();
    public routes(app: Application): void{
        app.route('/compra').get(this.compraController.getCompras);
        app.route('/createCompra').post(this.compraController.createCompra);
    }
}