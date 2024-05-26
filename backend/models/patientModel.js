import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const Patient = sequelize.define('patient', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(100)
    },
    lastName: {
        type: DataTypes.STRING(100)
    },
    age: {
        type: DataTypes.INTEGER
    },
    admissionDate: {
        type: DataTypes.DATE
    },
    dischargeDate: {
        type: DataTypes.DATE
    },
    diagnosis: {
        type: DataTypes.STRING(255)
    }
})

export default Patient; 