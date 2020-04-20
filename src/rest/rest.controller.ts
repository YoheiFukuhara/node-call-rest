import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('rest')
export class RestController {

    constructor(private httpService: HttpService) { }

    @Get()
    async callRest() {

        const url = "http://httpbin.org/post";
        const auth = {
            auth: {
                username: 'user name',
                password: 'password'
            }
        };
        const body = { "contents": "test" };
        // APIコール
        try {
            var result = await this.httpService.post(url, body, auth).toPromise();
        }
        catch (e) {
            console.log(e.response);
        }
        console.log(result);
        return result.data;
    }
}
