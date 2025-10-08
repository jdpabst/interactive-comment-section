import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


async function run() {
 console.log('start script');

 const allPosts = await prisma.post.findMany()
 console.log(allPosts)
}


run()
 .then(async () => {
  await prisma.$disconnect()
 })
 .catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
 })