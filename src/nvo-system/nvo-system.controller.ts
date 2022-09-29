import { CreateNvoPer, EditPer } from './dtos';
import { Controller, Get, Param, ParseIntPipe, Post,Body, Delete, Put } from '@nestjs/common';
import { NvoSystemService } from './nvo-system.service';

@Controller('nvo-system')
export class NvoSystemController {
    constructor(
        private readonly nvoService: NvoSystemService
    ){}

    @Get()
    async findAll(){
        const data = await this.nvoService.findAll()
        return {
            message:'Correct Query',
            data
        }
    }

    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: number
    ){
        const person = await this.nvoService.findOne(id)
        return {
            message:'Correct Query',
            person            
        }
    }

    @Post()
    async createPer(
        @Body() dto: CreateNvoPer
    ){
        return await this.nvoService.createPer(dto)
    }

    @Put(':id')
    async editPer(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPer
    ){
        return await this.nvoService.editPer(id,dto)
    }

    @Delete(':id')
    async deletePer(
        @Param('id', ParseIntPipe) id:number
    ){
        const perRem = await this.nvoService.deletePer(id)
        return {
            message:'Correct Query',
            perRem
        }
    }
}
