import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Message } from '../models/message';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent{

  @Input() messages: Message[];
  
  


  constructor() {}


 

}
