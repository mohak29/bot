export class Message {
    content: string;
    timestamp: Date;

    constructor(content:string, timestamp?:Date){
        this.content = content;
        this.timestamp = timestamp;
    }
}
