import express from 'express'
import authController from './controller/auth.Controller.js'
import usercontroller from './controller/user.Controller.js'

const app = express()
app.use(express.json())

app.use('/', authController)
app.use('/user', usercontroller)

export default app
