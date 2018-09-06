import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from '../models/message'
import { ReplyService } from '../reply.service'
import { SpeechRecognitionService } from '../speech-recognition.service';



@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})

export class MessageFormComponent implements OnInit ,  OnDestroy {

  speechData: string;
  voice : boolean;
  id : string;
  
  @Input() private message : Message;
  @Input() private messages : Message[];

   
  constructor(private _reply : ReplyService, private speechRecognitionService: SpeechRecognitionService) {
    this.speechData = "";
    this.voice = false;
   }
  
  
  ngOnInit() {}
  startVoice(): void {

    this.speechRecognitionService.record()
        .subscribe(
        (value) => {
            console.log("result");
            this.voice =  true ;
            this.speechData = value;
            console.log(this.speechData);
            this.message.content =  this.speechData;
            this.sendMessage();
        },
        
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("No speech found");
               
            }
        },
        //completion
        () => {
            
            console.log("--complete--");
            this.startVoice();
        });
}
  
  public sendMessage(): void {    
    
    this.message.timestamp = new Date();
    if(this.message.content){
      this._reply.setter('sent');
      this.id = this._reply.getter();
      this.messages.push(this.message);      
    }

    this._reply.getReply(this.message.content)
        .subscribe(res => {
          this._reply.setter('received');
          this.id = this._reply.getter();
          this.messages.push(
            new Message(res.fulfillmentText, new Date())
          );
          if(this.voice)
          {
           this.speechRecognitionService.synthVoice(res.fulfillmentText);
           this.voice = false; 
          }
          
        }
      );   
    
     this.message = new Message('');
  }
  ngOnDestroy() {
    
    this.speechRecognitionService.DestroySpeechObject();
  }
  
}
