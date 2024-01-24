import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('CarsService', () => {
  let service: CarsService;

  const mockCarsService = {
    findAll: jest.fn(() => []),
    findOne: jest.fn((id) => ({ id, model: 'Test Car', year: 2022 })),
    create: jest.fn((carDto) => ({ id: Date.now(), ...carDto })),
    update: jest.fn((id, carDto) => ({ id, ...carDto })),
    remove: jest.fn((id) => ({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule], // Add this line to import PrismaModule
      providers: [
        {
          provide: CarsService,
          useValue: mockCarsService,
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all cars', async () => {
    expect(await service.findAll()).toEqual([]);
    expect(mockCarsService.findAll).toHaveBeenCalled();
  });

  it('should find one car by id', async () => {
    const carId = 1;
    expect(await service.findOne(carId)).toEqual({
      id: carId,
      model: 'Test Car',
      year: 2022,
    });
    expect(mockCarsService.findOne).toHaveBeenCalledWith(carId);
  });

  it('should create a car', async () => {
    const newCar = {
      brand: 'Ferrari',
      model: 'Ferrari 458',
      package: 'Italia',
      color: 'Red',
      year: 2015,
      category: 'Sport',
      mileage: 10000,
      price: 1000000,
    };
    const createdCar = await service.create(newCar);
    expect(createdCar).toHaveProperty('id');
    expect(createdCar.model).toEqual(newCar.model);
    expect(createdCar.year).toEqual(newCar.year);
    expect(mockCarsService.create).toHaveBeenCalledWith(newCar);
  });

  it('should update a car', async () => {
    const carId = 1;
    const carUpdateDto = { model: 'Updated Car', year: 2023 };
    expect(await service.update(carId, carUpdateDto)).toEqual({
      id: carId,
      ...carUpdateDto,
    });
    expect(mockCarsService.update).toHaveBeenCalledWith(carId, carUpdateDto);
  });

  it('should remove a car', async () => {
    const carId = 1;
    expect(await service.remove(carId)).toEqual({ id: carId });
    expect(mockCarsService.remove).toHaveBeenCalledWith(carId);
  });
});
