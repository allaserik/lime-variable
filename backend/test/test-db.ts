import { ChoreStatus, PrismaClient, UserRole } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create a family
  const family = await prisma.family.create({
    data: {
      name: 'Smith Family',
    },
  });

  // Create a parent user
  const parent = await prisma.user.create({
    data: {
      name: 'Alice Smith',
      email: 'alice@smith.com',
      password: 'securepassword',
      role: UserRole.PARENT,
      points: 100,
      familyId: family.id,
    },
  });

  // Create a child user
  const child = await prisma.user.create({
    data: {
      name: 'Bob Smith',
      email: 'bob@smith.com',
      password: 'childpassword',
      role: UserRole.CHILD,
      points: 50,
      familyId: family.id,
    },
  });

  // Create a chore assigned to the child
  await prisma.chore.create({
    data: {
      title: 'Take out the trash',
      desc: 'Take out the trash before dinner',
      points: 10,
      status: ChoreStatus.PENDING,
      createdBy: parent.id,
      assignedBy: parent.id,
      assignedTo: child.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
