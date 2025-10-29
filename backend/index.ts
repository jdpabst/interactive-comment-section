
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

 app.get('/comments', async (req, res) => {
  try {
   const comments = await prisma.comment.findMany({
    where: { parentId: null }, // ONLY top-level comments
    include: {
     author: true,
     replies: {
      include: { author: true }
     }
    },
    orderBy: { upvotes: 'desc' }
   });


   res.json(comments);
  } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Failed to retrieve comments' });
  }
 });


 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
 });
}

startServer();