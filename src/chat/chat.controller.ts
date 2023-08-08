import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/send')
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get('/getAll')
  getAll() {
    return this.chatService.getAll();
  }

  @Get('/getOne')
  getOne(@Query('id') id: string) {
    return this.chatService.getOne(id);
  }

  @Put()
  update(@Query('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.updateOne(id, updateChatDto);
  }

  @Delete('/delete')
  delete(@Param('id') id: string) {
    return this.chatService.deleteOne(id);
  }
}
