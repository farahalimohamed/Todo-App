import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  // ** Generate fake data for Todo model
  // await prisma.todo.createMany({
  //   data: Array.from({ length: 25 }, () => {
  //     return {
  //       title: faker.lorem.words({ min: 2, max: 5 }),
  //       body: faker.lorem.words({ min: 1, max: 10 }),
  //       userId: "user_2uMvvz2n2A1sKxUJonvLUtmEdAn",
  //     };
  //   }),
  // });
  // ** Generate fake data for User model
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }, () => {
  //     return {
  //       email: faker.internet.email(),
  //       name: faker.internet.username(),
  //       address: {
  //         street: faker.location.streetAddress(),
  //         city: faker.location.city(),
  //         zip: faker.location.zipCode(),
  //         state: faker.location.state(),
  //       },
  //     };
  //   }),
  // });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
