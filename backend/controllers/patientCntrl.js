import { createPatient, deletePatient, getAllPatient, getPatient, updatePatient } from "../services/patientService.js";

export const create = async(req, res) => {
    try {
        await createPatient(req, res);
    } catch (error) {
        throw new Error(error);
    }
    
};

export const findAll = async(req, res) => {
    await getAllPatient(req, res);
};

export const findOne = async(req, res) => {
    await getPatient(req, res);
};

export const softDelete= async(req, res) => {
    await deletePatient(req, res);
};

export const update= async(req, res) => {
    await updatePatient(req, res);
};