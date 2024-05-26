import Patient from "../models/patientModel.js";

const createPatient = async (req, res) => {
    try {
        const { firstName, lastName, age, admissionDate, dischargeDate, diagnosis } = req.body;
        const newPatient = await Patient.create({
            firstName,
            lastName,
            age,
            admissionDate,
            dischargeDate,
            diagnosis
        });
        res.status(201).json(newPatient);
    } catch (error) {
        console.error('Error creating patient:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

    const getPatient = async (req, res) => {
        try {
            const { id } = req.params;
            const patient = await Patient.findByPk(id);
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json(patient);
        } catch (error) {
            console.error('Error getting patient:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    const getAllPatient = async (req, res) => {
        try {
            const patients = await Patient.findAll();
            res.status(200).json(patients);
        } catch (error) {
            console.error('Error getting patients:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    const updatePatient = async (req, res) => {
        try {
            const { id } = req.params;
            const { firstName, lastName, age, admissionDate, dischargeDate, diagnosis } = req.body;
            const patient = await Patient.findByPk(id);
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            patient.firstName = firstName;
            patient.lastName = lastName;
            patient.age = age;
            patient.admissionDate = admissionDate;
            patient.dischargeDate = dischargeDate;
            patient.diagnosis = diagnosis;
    
            await patient.save();
    
            res.status(200).json(patient);
        } catch (error) {
            console.error('Error updating patient:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    const deletePatient = async (req, res) => {
        try {
            const { id } = req.params;
            const patient = await Patient.findByPk(id);
    
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
    
            await patient.destroy();
            res.status(200).json({ message: 'Patient deleted successfully' });
        } catch (error) {
            console.error('Error deleting patient:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


export {
    createPatient,
    getPatient,
    getAllPatient,
    updatePatient,
    deletePatient
}
