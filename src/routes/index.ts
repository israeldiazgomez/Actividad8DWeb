import { MACADDR } from 'sequelize/types';
import {ProductoRoutes} from './producto';
import {ProveedoreRoutes} from './provedoree';

export class Routes {
    public proveedoreRoutes: ProveedoreRoutes = new ProveedoreRoutes();
    public distribuidoRoutes: DistribuidoRoutes = new DistribuidoRoutes();

}




