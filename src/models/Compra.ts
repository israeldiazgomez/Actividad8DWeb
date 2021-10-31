import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import {Cliente} from './Cliente'
import {Producto} from './Producto'

export class Compra extends Model {
    public fecha!: Date;
}

export interface CompraI {
    fecha: Date;
}

Compra.init (
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },

    {
        tableName: "compras",
        sequelize: database,
        timestamps: true,
    }
);

Cliente.hasMany(Compra);
Compra.belongsTo(Cliente);

Producto.hasMany(Compra);
Compra.belongsTo(Producto);