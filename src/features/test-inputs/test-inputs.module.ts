import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestInput } from 'src/features/test-inputs/entities';
import { TestInputsService } from 'src/features/test-inputs/test-inputs.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestInput])],
  providers: [TestInputsService],
  exports: [TestInputsService],
})
export class TestInputsModule {}
