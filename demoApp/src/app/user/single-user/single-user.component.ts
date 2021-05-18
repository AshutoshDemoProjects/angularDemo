import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  id:number;
  name:string;
  editable:boolean=false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.uid;
    this.name=this.route.snapshot.params.name;
    this.route.params.subscribe((params:Params)=>{
      this.id=params.uid;
      this.name=params.name;
    });
    this.editable=this.route.snapshot.queryParams.editable;
    console.log(this.editable)
  }

}
