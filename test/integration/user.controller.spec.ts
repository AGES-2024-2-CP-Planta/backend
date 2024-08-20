import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../../src/infrastructure/user/controllers/user.controller';
import { UserService } from '../../../src/core/application/services/user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: { findAllUsers: jest.fn() } }],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
