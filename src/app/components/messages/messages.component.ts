import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
faTimes = faTimes;
message: string = '';

  constructor(public messagesService: MessagesService) {
    this.messagesService.add('foi');

    setTimeout(() => {
      this.clear();
    }, 2000);
  }
 clear(){
  this.message = ''
 }
  };
