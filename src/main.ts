import { server } from 'tsunamy/core'
import { AppModule } from './api/app.module';
import { CONFIGURATION } from './config/config';
 
new server().bootstrapModule(AppModule, CONFIGURATION);
