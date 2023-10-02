import { notFoundError } from '@/errors';
import { hotelsRepository } from '@/repositories';

async function getHotels() {
  const hotels = await hotelsRepository.getHotels();

  if (hotels.length == 0) notFoundError();

  return hotels;
}

export const hotelsService = {
  getHotels,
};
