import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageItemComponent } from "../message-item/message-item.component";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
