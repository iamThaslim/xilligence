import { Op } from "sequelize";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//register a user async function
const createUser = async (req, res) => {
    try {
        const { userName, password, email, employeeId, role} = req.body;

        const existingUser = await User.findOne({ where: { 
            [Op.or]: [
                { email },
                { userName },
                { employeeId }
            ]
        }});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            console.error('Error hashing password:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        
        const user = await User.create({
            userName,
            password: hashedPassword,
            email,
            employeeId,
            role
        });
        return res.status(201).json(user);

    } catch (error) {
        console.error('Error type:', typeof error);
        console.error('Error message:', error.message);
    }
}

//login a user
const loginUser = async (req, res) => {
    try {
        const { userName, password} = req.body;

        const user = await User.findOne({ where: { userName}});
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { id, email } = user;
        return res.status(200).json({ token, userId: id, userName, email });
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
//find a user
const findUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

//find all user
const findAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

//softdelete a user
const softDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.isDeleted = true;
        await user.save();
        return res.status(200).json({ message: 'User soft deleted' });
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

//update a password of a user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email} = req.body;

        // Find user
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user details
        user.email = email || user.email;
        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export {
    createUser,
    loginUser,
    findUser,
    findAllUsers,
    softDeleteUser,
    updateUser
}