import { DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING(50),
        unique: true,
    },
    email : {
        type: DataTypes.STRING(50),
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    employeeId: {
        type: DataTypes.INTEGER,
    },
    role: {
        type: DataTypes.ENUM('admin', 'doctor', 'nurse')
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
})

export default User;