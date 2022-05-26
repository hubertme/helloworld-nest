import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import ServerResponse from '../../responses/server_response';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): ServerResponse {
        return ServerResponse.Success('Returns all the cats');
    }

    @Get('/single/:id')
    findSingleCat(): ServerResponse {
        return ServerResponse.Success('Returns single cat');
    }

    @Post()
    createNewCat(@Req() req: Request): ServerResponse {
        console.log('Body:', req.body);
        return ServerResponse.Success('Create single cat')
    }
}
