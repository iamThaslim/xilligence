import { Sequelize } from "sequelize";
import Patient from "../models/patientModel.js";
import User from "../models/userModel.js";

async function connectToDatabase() {
const dbConnection = await establishDbConnection();
await synchronizeModels();
return dbConnection;
}

async function establishDbConnection() {
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
try {
await sequelize.authenticate()
    console.log('Connection has been established successfully');
} catch (error) {
    console.error('Unable to connect to DB:', error);
}
return sequelize;
}

async function synchronizeModels() {
    await Patient.sync();
    await User.sync();
}

export  {
    connectToDatabase
}