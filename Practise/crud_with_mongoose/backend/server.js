import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors({
    origin: "*"
}))

const port = process.env.PORT || 3169


app.listen(port, (err) => {
    !err ? console.log(`server has been started in port ${port}`) : console.log("server not start!!");
})