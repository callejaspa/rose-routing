import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-moench',
  templateUrl: './moench.component.html',
  styleUrls: ['./moench.component.css']
})
export class MoenchComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.getElementById('moench-btn').classList.add("active")
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    document.getElementById('moench-btn').classList.remove("active")
  }

}
