import { Test, TestingModule } from '@nestjs/testing';
import { UserExternalLoginsController } from './user-external-logins.controller';

describe('UserExternalLoginsController', () => {
  let controller: UserExternalLoginsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserExternalLoginsController],
    }).compile();

    controller = module.get<UserExternalLoginsController>(
      UserExternalLoginsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
