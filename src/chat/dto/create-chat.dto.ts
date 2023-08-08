export class CreateChatDto {
    id: string;
    content: string;
    sender: string;
    receiver: string;
    createAt: Date;
    updateAt: Date;
    isDelete: boolean;
}
