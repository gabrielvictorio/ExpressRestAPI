import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(
        "Currently on the root page of the website"
    )
})

app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/`)
})
