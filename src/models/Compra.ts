import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import {Cliente} from './Cliente'
import {Producto} from './Producto'

export class Compra extends Model {
    public fecha!: Date;
    public status!: boolean;
}

export interface CompraI {
    fecha: Date;
    status: boolean;
}

Compra.init (
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values:['Activado','Desactivado'],
            defaultValue: 'Activado',
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