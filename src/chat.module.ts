import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { ClientModule } from './client/client.module';
import { BookController } from './book/book.controller';

@Module({
  imports: [Feature3, ClientModule],
  controllers: [BookController],
  providers: [],
  exports: []
})

export class ChatModule {
  constructor() {
    console.log("Chat Module")
  }
}
