import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestCase } from 'src/features/test-cases/entities';
import { TestCasesService } from './test-cases.service';
import { TestCasesController } from './test-cases.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TestCase])],
  controllers: [TestCasesController],
  providers: [TestCasesService],
  exports: [TestCasesService],
})
export class TestCasesModule {}
