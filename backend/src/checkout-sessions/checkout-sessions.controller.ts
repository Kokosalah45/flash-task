import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckoutSessionsService } from './checkout-sessions.service';

@Controller('checkout-sessions')
export class CheckoutSessionsController {
  constructor(
    private readonly checkoutSessionsService: CheckoutSessionsService
  ) {}

  // @Post()
  // create(@Body() createCheckoutSessionDto) {
  //   return this.checkoutSessionsService.create(createCheckoutSessionDto);
  // }

  // @Get()
  // findAll() {
  //   return this.checkoutSessionsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.checkoutSessionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCheckoutSessionDto) {
  //   return this.checkoutSessionsService.update(+id, updateCheckoutSessionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.checkoutSessionsService.remove(+id);
  // }
}
