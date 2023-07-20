import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {increment, decrement, reset, customIncrement} from "../../stores/counter2/counter2.actions";

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit{


  constructor(private  store:Store<{ count2:{counter:number} }>) {
  }

  counterDisplay!:number;
  counterBy:number=1;
  ngOnInit(): void {
    this.store.select('count2').subscribe(data=>{
     this.counterDisplay=data.counter;
    })
  }
  OnCustomIncrement()
  {

    this.store.dispatch(customIncrement({value:this.counterBy}))
  }
  OnIncrement()
  {

    this.store.dispatch(increment())
  }
  OnDecrement()
  {
    this.store.dispatch(decrement())
  }
  OnReset()
  {
    this.store.dispatch(reset())
  }



}
