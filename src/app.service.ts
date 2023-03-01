import { Injectable } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';

@Injectable()
export class AppService {
  constructor(private readonly stripeService: StripeService) {}

  getCustomers() {
    return this.stripeService.stripe.customers.list();
  }
}
