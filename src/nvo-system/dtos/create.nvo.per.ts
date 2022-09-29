import { positionEnum } from './../enum/positionEnum';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateNvoPer {
    
    @IsString()
    @Length(3,40)
    name: string

    @IsString()
    @Length(20,40)
    email: string

    @IsNumber()
    @Length(10)
    phone: number

    @IsNotEmpty()
    @IsEnum( positionEnum, {
        message: 'position invalid. positions valids are '
    })
    position: string
}