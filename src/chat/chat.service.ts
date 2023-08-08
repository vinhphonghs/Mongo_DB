import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from './schema/chat.schema';
import { Model } from 'mongoose';


@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) public chatModel: Model<Chat> ){}
  
  create(createChatDto: CreateChatDto) {
    createChatDto.createAt = new Date();
    createChatDto.updateAt = new Date();
    return this.chatModel.create(createChatDto);
  }

  getAll() {
    return  this.chatModel.find();
  }

  getOne(id: string) {
    return this.chatModel.findOne({id: id});
  }

  updateOne(id: string, updateChatDto: UpdateChatDto) {
    updateChatDto.updateAt = new Date();
    return this.chatModel.findOneAndUpdate({id: id}, updateChatDto);
  }

  deleteOne(id: string) {
    return this.chatModel.findOneAndDelete({id: id});
  }
}
