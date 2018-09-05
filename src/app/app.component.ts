import { Component } from '@angular/core';
import { Message } from './models/message'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'widget';
  public message : Message;
  public messages : Message[];
  

  constructor(){
    this.message = new Message('Hi');
    this.messages = [
      new Message('Welcome to Mohak\'s bot', new Date())
    ];
  }
}
