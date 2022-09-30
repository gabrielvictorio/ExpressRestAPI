import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
app.use(bodyParser.json())

import {router} from './controllers/usercontroller'

app.use('/auth',router)

app.get('/', (req, res) => {
    res.send(
        "Currently on the root page of the website"
    )
})

// app.post('/register', async (req, res) => {
//     const { email } = req.body

//     try {
//         if (await User.findOne({email}))
//             return res.send({ error: "Email already registered"})
        
//         const user = await User.create(req.body)
//         res.send({user})
//     } catch (err) {
//         return res.status(400).send({err: "Registration failed"})
//     }
// })

// app.get('/all',(req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((err) => {
//         res.status(500).send({err: "Couldn't find any users"})
//     })  
// })

app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/`)
})
