import { ApplicationError } from '@/protocols';

export function ticketPaymentNotFoundError(): ApplicationError {
  return {
    name: 'TicketPaymentNotFoundError',
    message: 'Payment not found or does not include hotel in your ticket!',
  };
}
