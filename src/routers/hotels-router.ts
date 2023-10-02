import { getHotelById, getHotels } from '@/controllers';
import { authenticateToken, hotelsMiddleware } from '@/middlewares';
import { Router } from 'express';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .all('/*', hotelsMiddleware)
  .get('/', getHotels)
  .get('/:hotelId', getHotelById);

export { hotelsRouter };
