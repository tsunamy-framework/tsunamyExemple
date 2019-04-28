import { RequestMapping, PathParam, Controller, QueryParam, Guards, Response } from 'tsunamy/core';
import { AppService } from './app.service';

function isLogin(request: any): boolean {
    // console.log(request.headers);
    return true;
}

@Controller()
export class AppController {

  constructor( private appservice: AppService) { }

  @RequestMapping({ path: '/hello/{var1}', method: 'GET'})
  hello(@PathParam('var1') var1: number, @QueryParam('var2') var2: any) {
    return var1 + var2 + ' ' + this.appservice.hi();
  }

  @RequestMapping({ path: '/hi', method: 'GET'})
  @Guards(isLogin)
  hello2(@Response() res: any) {
    res.setHeader('test', 'test');
    return {test: 'I am ' + this.appservice.hi()};
  }

  @RequestMapping({ path: '/err', method: 'GET'})
  error() {
    return {error: 4000, message: 'error'};
  }
}
