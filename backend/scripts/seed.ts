import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


async function run() {
  console.log('start script');
  await prisma.comment.deleteMany();
  await prisma.user.deleteMany();

  const users = await Promise.all([
    prisma.user.create({ data: { firstname: "Amy", lastname: "Robson", avatar: "/assets/avatars/image-amyrobson" } }),
    prisma.user.create({ data: { firstname: "Julius", lastname: "Omo", avatar: "/assets/avatars/image-juliusomo" } }),
    prisma.user.create({ data: { firstname: "Max", lastname: "Blagun", avatar: "/assets/avatars/image-maxblagun" } }),
    prisma.user.create({ data: { firstname: "Ramses", lastname: "Miron", avatar: "/assets/avatars/image-ramsesmiron" } }),
  ]);

  // 2. Create top-level comments
  const comment1 = await prisma.comment.create({
    data: { content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.", authorId: users[0].id },
  });

  const comment2 = await prisma.comment.create({
    data: { content: "Whoa, your project looks awesome! How long have you been coding for? I'm still new, but I think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!", authorId: users[2].id },
  });

  // 3. Create replies to the second comment
  const reply1 = await prisma.comment.create({
    data: { content: "@maxblagun if you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.", authorId: users[3].id, parentId: comment2.id },
  });

  const reply2 = await prisma.comment.create({
    data: { content: "@ramsesmiron couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.", authorId: users[1].id, parentId: comment2.id },
  });


  await prisma.comment.update({
    where: { id: comment1.id },
    data: { upvotes: 12 },
  });

  await prisma.comment.update({
    where: { id: comment2.id },
    data: { upvotes: 5 },
  });

  await prisma.comment.update({
    where: { id: reply1.id },
    data: { upvotes: 4 },
  });

  await prisma.comment.update({
    where: { id: reply2.id },
    data: { upvotes: 2 },
  });

  console.log("Seed complete!");

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