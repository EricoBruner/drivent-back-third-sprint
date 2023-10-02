import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './authentication-middleware';
import { enrollmentRepository, ticketsRepository } from '@/repositories';
import { notFoundError, ticketPaymentNotFoundError } from '@/errors';
import { TicketStatus } from '@prisma/client';

export async function hotelsMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;

  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();

  if (ticket.status !== TicketStatus.PAID) throw ticketPaymentNotFoundError();
  if (ticket.TicketType.isRemote) throw ticketPaymentNotFoundError();
  if (!ticket.TicketType.includesHotel) throw ticketPaymentNotFoundError();

  next();
}
