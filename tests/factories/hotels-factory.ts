import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createHotel() {
  return await prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.imageUrl(),
    },
  });
}

export async function createHotelRooms(hotelId: number) {
  const data = Array.from({ length: faker.datatype.number({ min: 5, max: 20 }) }).map(() => ({
    name: faker.name.findName(),
    capacity: faker.datatype.number(),
    hotelId,
  }));

  return await prisma.room.createMany({
    data,
  });
}
