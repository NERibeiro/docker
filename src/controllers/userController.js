import User from '../models/User.js'
import crypto from 'node:crypto'

export const createUser = async (req, res) => {

    const userToCreate = {
        id: crypto.randomUUID(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }


    const user = await User.create(req.body)
  
    res.status(201).json(user)
}


export const getAllUsers = (req, res) => {

    res.status(200).json({message: 'OK'})
}

export const deleteUser = (req, res) => {

    res.status(200).json({ message: 'Tudo Ok'})
}