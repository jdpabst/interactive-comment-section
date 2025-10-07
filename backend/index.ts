
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';
import router from './router';

const prisma = new PrismaClient()

async function startServer() {
 const app = express();
 const port = 3001;

 app.use(cors());
 app.use(express.json());
 app.use(router);

 app.get('/posts', async (req, res) => {
  try {
   const posts = await prisma.post.findMany()
   res.json(posts)
  } catch (error) {
   console.error(error)
   res.status(500).json({ error: 'Failed to retrieve posts' })
  }
 })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
 });
}

startServer();