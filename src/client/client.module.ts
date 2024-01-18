import { Module } from '@nestjs/common';

@Module({})
export class ClientModule {
    constructor(){
        console.log("Client Module");
    }
}
