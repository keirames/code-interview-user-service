import { Module } from '@nestjs/common';
import { TestInputsService } from 'src/features/test-inputs/test-inputs.service';

@Module({
  providers: [TestInputsService],
})
export class TestInputsModule {}
