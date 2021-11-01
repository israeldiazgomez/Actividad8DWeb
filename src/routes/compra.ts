import { Request, Response, Application } from "express";
import { CompraController} from '../controllers/compra.controller';

export class CompraRoutes {
    public compraController: CompraController = new CompraController();
    public routes(app: Application): void{
        app.route('/compra').get(this.compraController.getCompra);
        app.route('/Compra').post(this.compraController.crearCompra);
        app.route('/compra/:id').patch(this.compraController.updateCompra);
    }
}