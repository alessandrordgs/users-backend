import express from 'express';
import { envs } from './globals';

const server = express()

server.listen(envs.SERVER_PORT, () => {
  console.log(`Server is running on port ${envs.SERVER_PORT}`)
})