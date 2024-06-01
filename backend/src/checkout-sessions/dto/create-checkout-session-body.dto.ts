import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNumber,
} from 'class-validator';

enum Currency {
  USD = 'usd',
  EUR = 'eur',
  GBP = 'gbp',
  EGP = 'egp',
}

export class CreateCheckoutSessionDTO {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  productIDs: string[];

  @IsEnum(Currency)
  currency: string;
}
