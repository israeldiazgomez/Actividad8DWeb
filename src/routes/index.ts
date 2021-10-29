
import { MACADDR } from 'sequelize/types';
import { ProveedoreRoutes } from './proveedore';
import { DistribuidoRoutes } from './distribuido';
import { ProductoRoutes } from './producto';


export class Routes {
    public proveedoreRoutes: ProveedoreRoutes = new ProveedoreRoutes();
    public distribuidoRoutes: DistribuidoRoutes = new DistribuidoRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();

}




