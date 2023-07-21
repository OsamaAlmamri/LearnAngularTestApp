import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { HomeComponent } from './home/home.component';
import {CounterComponent} from './counter/counter.component'
import { SalePipe } from '../Pipes/sale.pipe';
import { DiscountPipe } from '../Pipes/discount.pipe';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import {MaterialModule} from "./material.module";
import {MaterialExtensionsModule} from "./material-extensions.module";
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../stores/counter/counter.reducer';
import {Counter2Reducer} from "../stores/counter2/counter2.reducer";
import { Counter2Component } from './counter2/counter2.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TestPipeComponent,
    HomeComponent,
    SalePipe,
    DiscountPipe,
    FormComponent,
    Counter2Component,
    DisplayCounterComponent,
    CustomCounterComponent
  ],
  imports: [
    MaterialModule,
    MaterialExtensionsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count2:Counter2Reducer ,count: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
