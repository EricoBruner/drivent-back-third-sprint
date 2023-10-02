import { prisma } from '@/config';

async function getHotels() {
  return prisma.hotel.findMany();
}

async function getHotelById(id: number) {
  return await prisma.hotel.findUnique({
    where: { id: id },
    include: { Rooms: true },
  });
}

export const hotelsRepository = {
  getHotels,
  getHotelById,
};
