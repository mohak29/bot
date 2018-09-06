import { Component, DoCheck, Input } from '@angular/core';
import { Message } from '../models/message'
import { ReplyService } from '../reply.service'


@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements DoCheck {
  
  @Input() message: Message;
  id : string;
  


  constructor(private _reply : ReplyService) {}

  ngOnInit() {
  }

  ngDoCheck() {
    this.id = this._reply.getter();
    console.log(this.id);
  }

}
