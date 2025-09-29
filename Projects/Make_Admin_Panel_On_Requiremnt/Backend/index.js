import connectDB from './src/database/db.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import authRouter from './src/routes/auth.routes.js'

dotenv.config({
  path:'./.env'
})

const app = express()

app.use(cors({
  origin:"*"
}))

app.use(bodyParser.json())

app.use('/auth' , authRouter)

const port  = process.env.PORT || 6900;

connectDB();

app.listen(port , (err) => {
  !err ? console.log(`server has been started in port ${port}`) : console.log("server not start!!");
})




