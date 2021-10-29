// const Sequelize = require('sequelize');
import sequelize, { Model, DataTypes } from 'sequelize';
import {database} from "../database/db";

export class Producto extends Model {
    public descripcion!: string;
    public precio!: string;
    public numero_exitencia!: string;
}
export interface ProductoI {
    descripcion: string;
    precio: number;
    numero_existencia: number;
}
Producto.init (
    {
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numero_existencia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);