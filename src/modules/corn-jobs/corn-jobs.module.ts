import { Module } from '@nestjs/common';
import { CornJobsService } from './corn-jobs.service';
import { ScheduleModule } from '@nestjs/schedule';
import {AuthModule} from '../auth/auth.module'


@Module({
  imports: [ ScheduleModule.forRoot(), AuthModule],
  providers: [CornJobsService]
})
export class CornJobsModule {}
