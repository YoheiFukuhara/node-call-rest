import { Module, HttpModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestController } from './rest/rest.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, RestController],
  providers: [AppService],
})
export class AppModule {}
