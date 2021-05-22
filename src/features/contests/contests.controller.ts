import { Controller, Get } from '@nestjs/common';
import { getPath } from 'src/common/path';
import { Contest } from 'src/features/contests/entities';
import { ContestsService } from './contests.service';

@Controller({ path: getPath({ path: 'contests', version: 1 }) })
export class ContestsController {
  constructor(private readonly contestsService: ContestsService) {}

  @Get('/')
  getContests(): Promise<Contest[]> {
    return this.contestsService.findAllContests();
  }
}
