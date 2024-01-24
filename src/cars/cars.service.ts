import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCarDto: CreateCarDto) {
    return this.prismaService.car.create({ data: createCarDto });
  }

  findAll() {
    return this.prismaService.car.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.car.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.prismaService.car.update({
      where: { id: id },
      data: updateCarDto,
    });
  }

  remove(id: number) {
    return this.prismaService.car.delete({
      where: { id: id },
    });
  }
}
