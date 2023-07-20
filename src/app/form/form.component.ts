import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  myModal:any;



  constructor(private fb:FormBuilder) {
  }
  ngOnInit(): void {

    this.myModal=this.fb.nonNullable.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
    })

  }

}
