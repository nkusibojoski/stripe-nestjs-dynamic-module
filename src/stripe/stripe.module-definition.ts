import { ConfigurableModuleBuilder } from '@nestjs/common';
import { StripeModuleOptions } from './stripeOptions.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<StripeModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
