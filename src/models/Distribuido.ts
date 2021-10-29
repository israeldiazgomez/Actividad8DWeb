import exp from 'constants';
import {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';
import { Producto } from './Producto';
import {Proveedore} from './Proveedore';




export class Distribuido extends Model {
   public cantidad!: number;
   public estado! : boolean;
   
}


export interface DistribuidoI{
    cantidad: number;
    estado: boolean;
}
Distribuido.init(
   {
       cantidad: {
           type:DataTypes.INTEGER,
           allowNull: false 
       },
       estado: {
        type:DataTypes.ENUM,
        values:['Activado', 'Desactivado'],
        defaultValue: 'Activado',
        allowNull:false
    }

       
   },

   {
       tableName: "distribuidos",
       sequelize: database,
       timestamps: true 
   }
);


Producto.hasMany(Distribuido);
Distribuido.belongsTo(Producto);

Proveedore.hasMany(Distribuido);
Distribuido.belongsTo(Proveedore);