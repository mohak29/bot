import { Component, OnInit, Input,ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[];


  constructor() {}

  ngOnInit() {
  }

}
