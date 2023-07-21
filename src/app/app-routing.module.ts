import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestPipeComponent} from "./test-pipe/test-pipe.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {CounterComponent} from './counter/counter.component'
import {Counter2Component} from "./counter2/counter2.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'pipe', component: TestPipeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'counter2', component: Counter2Component },
  { path: 'blogs', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
