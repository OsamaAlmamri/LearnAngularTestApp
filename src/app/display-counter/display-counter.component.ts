import { Component,OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterModel} from "../../stores/counter2/counter2.model";
import {getCounter} from "../../stores/counter2/counter2.selector";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent  implements OnInit {
  count2$ !: Observable<CounterModel>;
  counter!: number;

  constructor(private store: Store<{ count2: CounterModel }>) {
  }

  // ngOnInit(): void {
  //   this.count2$= this.store.select('count2');
  // }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(data => {
      this.counter = data;
      console.log('Counter Display')
    });


  }
}
