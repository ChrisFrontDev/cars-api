import { PrismaModule } from './../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all cars', () => {
    const cars = [
      {
        id: 1,
        brand: 'Brand 1',
        model: 'Model 1',
        package: 'Package 1',
        color: 'Color 1',
        year: 2020,
        category: 'Category 1',
        mileage: 2000,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        brand: 'Brand 2',
        model: 'Model 2',
        package: 'Package 2',
        color: 'Color 2',
        year: 2020,
        category: 'Category 2',
        mileage: 2000,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(controller, 'findAll').mockResolvedValue(cars);
    expect(controller.findAll()).resolves.toEqual(cars);
  });

  it('should create a new car with all optional properties filled in', () => {
    const createCarDto = {
      brand: 'Ferrari',
      model: 'Ferrari 458',
      package: 'Italia',
      color: 'Red',
      year: 2015,
      category: 'Sport',
      mileage: 10000,
      price: 1000000,
    };
    const createdCar = {
      id: 1,
      ...createCarDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createMock = jest.fn().mockResolvedValue(createdCar);
    jest
      .spyOn(controller, 'create')
      .mockImplementation(() => createMock(createCarDto));

    expect(controller.create(createCarDto)).resolves.toEqual(createdCar);
  });

  it('should return null when trying to find a car with an id that does not exist', () => {
    const id = '999';
    jest.spyOn(controller, 'findOne').mockReturnValue(null);
    expect(controller.findOne(id)).toBeNull();
  });
  it('should update a car', async () => {
    const updateCarDto = {
      brand: 'Updated Brand',
      model: 'Updated Model',
      package: 'Updated Package',
      color: 'Updated Color',
      year: 2021,
      category: 'Updated Category',
      mileage: 3000,
      price: 25000,
    };
    const updatedCar = {
      id: 1,
      ...updateCarDto,
      createdAt: new Date('2020-01-01'),
      updatedAt: new Date(),
    };
    jest.spyOn(controller, 'update').mockResolvedValue(updatedCar);
    await expect(controller.update('1', updateCarDto)).resolves.toEqual(
      updatedCar,
    );
  });
});
