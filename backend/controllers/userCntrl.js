import { createUser, findAllUsers, findUser, loginUser, softDeleteUser, updateUser } from "../services/userService.js"


export const registerUser = async(req, res) => {
    await createUser(req, res);
};

export const login = async(req, res) => {
    await loginUser(req, res);
};

export const findAll = async(req, res) => {
    await findAllUsers(req, res);
};

export const findOne = async(req, res) => {
    await findUser(req, res);
};

export const deleteUser= async(req, res) => {
    await softDeleteUser(req, res);
};

export const update= async(req, res) => {
    await updateUser(req, res);
};