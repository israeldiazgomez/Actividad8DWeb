import { database} from '../database/db';
import { Model, DataTypes } from 'sequelize';


export class Cliente extends Model {
    public nombre!:   string;
    public apellido!: string;
    public correo!:   string;
    public clave!:    string;
    public status!:   boolean;
}

export interface ClienteI {
    nombre:  string;
    apellido:string;
    correo:  string;
    clave:   string;
    status:  boolean;
}
Cliente.init (
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values:['Activido','Desactivado'],
            defaultValue: 'Activido',
            allowNull: false
        },
    },
    {
        tableName: "clientes",
        sequelize: database,
        timestamps: true

    }
)