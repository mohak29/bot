import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message'
import { ReplyService } from '../reply.service'


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input() private message : Message;
  @Input() private messages : Message[];

  constructor(private _reply : ReplyService) { }

  ngOnInit() {
  }

  public sendMessage(): void {    
    
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    

    this._reply.getReply(this.message.content)
        .subscribe(res => {
          this.messages.push(
            new Message(JSON.parse(res.content), new Date())
          );
        }
      );   
    
     this.message = new Message('');
  }
}
