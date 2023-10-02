import { notFoundError } from '@/errors';
import { hotelsRepository } from '@/repositories';

async function getHotels() {
  const hotels = await hotelsRepository.getHotels();

  if (hotels.length == 0) notFoundError();

  return hotels;
}

async function getHotelById(id: number) {
  const hotel = await hotelsRepository.getHotelById(id);

  if (!hotel) notFoundError();

  return hotel;
}

export const hotelsService = {
  getHotels,
  getHotelById,
};
