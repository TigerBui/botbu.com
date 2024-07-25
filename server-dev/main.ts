import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import UserController from './api/user/user.controller';
import GoogleController from './api/google/google.controller';
import WeatherApiController from './api/weatherapi.com/weatherapi.controller';
import CurrencyFreaksApiController from './api/currencyapi/currencyfreaks.controller';

const app = new App({
   port: 2027,
   controllers: [
      new UserController(),
      new GoogleController(),
      new WeatherApiController(),
      new CurrencyFreaksApiController(),
   ],
   middleWares: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      loggerMiddleware
   ]
});

app.listen();
