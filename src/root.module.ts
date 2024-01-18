import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { ChatModule } from './chat.module';
import { BookController } from './book/book.controller';

@Module({
  imports: [UserModule, OrderModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports:[]
})

export class RootModule {
  constructor (){
    console.log("Root Module")
  }
}
