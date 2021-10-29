import { database} from '../database/db';
import { Model, DataTypes } from 'sequelize';


export class Cliente extends Model {
    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public clave!: string;
}

export interface ClienteI {
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
}

