import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function createConnection() {
  try {
    await prisma.$connect()
    console.log('Database connected')
  } catch (error) {
    console.log(error)
    await prisma.$disconnect()
  }
}


(async () => {
  await createConnection()
})();


export default prisma
