import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function run() {
 async function run() {
  console.log('start script');

  await prisma.post.createMany({
   data: []
  })
  const allPosts = await prisma.post.findMany()
  console.log(allPosts)
 }
}