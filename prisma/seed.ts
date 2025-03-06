import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: Array.from({ length: 25 }, () => {
      return {
        email: faker.internet.email(),
        name: faker.internet.username(),
        address: {
          street: faker.location.streetAddress(),
          city: faker.location.city(),
          zip: faker.location.zipCode(),
          state: faker.location.state(),
        },
      };
    }),
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
