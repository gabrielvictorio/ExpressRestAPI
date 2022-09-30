import express, { Router } from 'express'
import {User} from '../models/user'

const router = express.Router()

router.post('/user', async(req, res) => {
    const { email } = req.body

    try {
        if (await User.findOne({email}))
            return res.send({ error: "Email already registered"})
        
        const user = await User.create(req.body)
        res.send({user})
    } catch (err) {
        return res.status(400).send({err: "Registration failed"})
    }
})

router.get('/allusers', async (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((err) => {
        res.status(500).send({err: "Couldnt find any users"})
    })
})

export {router}
