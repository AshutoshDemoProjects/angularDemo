import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* template:`<h1>Welcome to Angular {{title}}</h1>
            <input [(ngModel)]="title"> <br />
            <img [src]="imgurl" width="100" hieght="100" /><br />
            <input type="button" (click)="onClick()" value="click me" /><br />`, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  imgurl='https://secureservercdn.net/160.153.137.14/889.c09.myftpupload.com/wp-content/uploads/2019/06/Angular-1360x765.png';

  onClick(){
    this.title='Welcome App';
  }
}
