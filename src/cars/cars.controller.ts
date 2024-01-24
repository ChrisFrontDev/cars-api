import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @ApiOperation({ summary: 'Add a new car' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The car has been successfully created.',
  })
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all cars.' })
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update an existing car' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The car has been successfully updated.',
  })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }
  @ApiOperation({ summary: 'update an existing car' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The car has been successfully deleted.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
