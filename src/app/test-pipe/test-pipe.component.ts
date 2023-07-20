import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent {

  mydate =new Date();
  amount=100;
  pi=3.14;
  MyDiscount:number=0;
  name="osama almamari";

  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

  messages: any[] = ['Message 1'];
  messageMapping:
    {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'};


  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);
}
