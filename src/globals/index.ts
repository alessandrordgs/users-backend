import { config } from 'dotenv'

config()

export const envs = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
}

