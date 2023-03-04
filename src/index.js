import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('<h1>Wecome</h1>')
})

app.get('/Home', (req,res) => {
    res.send('<h1>Welcome home</h1>')
})

app.listen(3000)
console.log("localhost:3000")