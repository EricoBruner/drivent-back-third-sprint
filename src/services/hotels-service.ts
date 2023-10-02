import { notFoundError } from '@/errors';
import { hotelsRepository } from '@/repositories';

async function getHotels() {
  const hotels = await hotelsRepository.getHotels();

  if (hotels.length === 0) throw notFoundError();

  return hotels;
}

async function getHotelById(hotelId: number) {
  const hotel = await hotelsRepository.getHotelById(hotelId);

  if (!hotel) throw notFoundError();

  return hotel;
}

export const hotelsService = {
  getHotels,
  getHotelById,
};
