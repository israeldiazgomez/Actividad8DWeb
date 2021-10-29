import exp from 'constants';
 import {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';

export class Proveedore extends Model {
    public codigo!: number;
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public provincia!: string;
    public telefono!: string;
    public estado! : boolean;
}

export interface ProveedoreI{
     codigo: number;
     nombre: string;
     apellido: string;
     direccion: string;
     provincia: string;
     telefono: string;
     estado: boolean;
}
Proveedore.init(
    {
        codigo: {
            type:DataTypes.INTEGER,
            allowNull: false 
        },

        nombre: {
            type:DataTypes.STRING,
            allowNull: false 
        },

        apellido: {
            type:DataTypes.STRING,
            allowNull: false 
        },
        direccion: {
            type:DataTypes.STRING,
            allowNull: false 
        },
        provincia: {
            type:DataTypes.STRING,
            allowNull: false 
        },
        telefono: {
            type:DataTypes.STRING,
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
        tableName: "proveedores",
        sequelize: database,
        timestamps: true 
    }
);