import { CreateNvoPer,EditPer  } from './dtos'
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NvoData } from './entities'

@Injectable()
export class NvoSystemService {
    constructor(
        @InjectRepository(NvoData)
        private readonly nvoRepository: Repository<NvoData>
    ){}

    async findAll(){
        return await this.nvoRepository.find()
    }

    async findOne(id:number){
        const person = await this.nvoRepository.findOneBy({id: id})
        if(!person){
            message: throw new NotFoundException("The person doesn't exist")
        }
        return person
    }

    async createPer(dto: CreateNvoPer){
        const newPer = this.nvoRepository.create(dto)
        return await this.nvoRepository.save(newPer)
    }

    async editPer( id: number, dto: EditPer ){
        const per = await  this.findOne(id);
        const editedPer = Object.assign(per, dto)
        return await this.nvoRepository.save(editedPer) 
    }

    async deletePer(id:number){
        const perRem = await this.findOne(id)
        return await this.nvoRepository.remove(perRem)
    }


}
