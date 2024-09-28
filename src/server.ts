import express from 'express';
import { envs } from './globals';
require('./database')
import usersRouter from './modules/Users/Router/users.router';
const server = express()

server.use(express.json())
server.use('/users', usersRouter)
server.listen(envs.SERVER_PORT, () => {
  console.log(`Server is running on port ${envs.SERVER_PORT}`)
})