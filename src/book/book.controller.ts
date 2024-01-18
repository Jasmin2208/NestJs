import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {

    @Post('/add')
    addBook(): string {
        return 'This is for add book'
    }

    @Get('find')
    readBook(): string {
        return 'This is for read book'
    }

    @Get('/findById/:id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} Book`;
    }

    @Put('/update')
    updateBook(): string {
        return 'This is for update book'
    }

    @Delete('/delete')
    deleteBook(): string {
        return 'This is for delete book'
    }
}
