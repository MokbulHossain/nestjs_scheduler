import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import {winstonLog} from '../../config/winstonLog'
import axios from 'axios'
import 'dotenv/config'
import {AuthService} from '../auth/auth.service'


@Injectable()
export class CornJobsService {

    constructor( 
        private readonly authService: AuthService
     ) { }


    @Timeout(5000)
     handleTimeout() {
            winstonLog.log('info',`********** Running Corn After 5 Second Once **********`)  
            //call executeable service function...
     }
     //call every hour interval 
      @Cron(CronExpression.EVERY_HOUR)
        async handleHourlyCron() {
            winstonLog.log('info',`********** Running Corn In Every hour ********** `)
            
    }

    @Cron(CronExpression.EVERY_WEEK)
    async handleWeeklyCron() {
        winstonLog.log('info',`********** Running Corn In EVERY_WEEK ********** `)
    }


}
