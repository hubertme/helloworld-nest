import { Body, Controller, Get, HttpCode, HttpStatus, Next, Post, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import ServerResponse from '../../responses/server_response';
import { Cat, CreateCatModel } from './cats.models';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    // MARK: - Examples on how to create endpoints
    @Get()
    findAll(): ServerResponse {
        return ServerResponse.Success('Returns all the cats');
    }

    @Get('/single/:id')
    findSingleCat(): ServerResponse {
        return ServerResponse.Success('Returns single cat');
    }

    @Post()
    createNewCat(@Body() reqBody: CreateCatModel): ServerResponse {
        console.log('Body:', reqBody);
        return ServerResponse.Success('Create single cat')
    }

    @Post('/new')
    createNewCatRes(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
        const result = ServerResponse.Success('Create single cat with Express');
        res.status(HttpStatus.CREATED).json(result);
    }


    // MARK: - CatService integration
    @Post('/service')
    async createCat(@Body() reqBody: CreateCatModel): Promise<ServerResponse> {
        this.catsService.create(reqBody);
        return ServerResponse.Success(null);
    }

    @Get('/service')
    async getAllCats(): Promise<ServerResponse> {
        const result = this.catsService.findAll();
        return ServerResponse.Success(result);
    }
}
