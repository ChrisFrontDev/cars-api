import { ApiProperty } from '@nestjs/swagger';

// TODO: Add validation to all properties
//TODO: add FilterException For prisma errors

export class CreateCarDto {
  @ApiProperty({ example: 'Toyota' })
  brand: string;

  @ApiProperty({ example: 'Corolla' })
  model: string;

  @ApiProperty({ example: 'XSE' })
  package: string;

  @ApiProperty({ example: 'red' })
  color: string;

  @ApiProperty({ example: 2021 })
  year: number;

  @ApiProperty({ example: 'sedan' })
  category: string;

  @ApiProperty({ example: 100 })
  mileage: number;

  @ApiProperty({ example: 20000 })
  price: number;
}
