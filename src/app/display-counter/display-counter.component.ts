import { Component,OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterModel} from "../../stores/counter2/counter2.state";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent  implements OnInit{
  count2$ !:Observable<CounterModel>;

  constructor(private  store:Store<{ count2:CounterModel }>) {
  }

  ngOnInit(): void {
    this.count2$= this.store.select('count2');
  }

}
