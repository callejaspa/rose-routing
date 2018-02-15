import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-moench',
  templateUrl: './moench.component.html',
  styleUrls: ['./moench.component.css']
})
export class MoenchComponent implements OnInit, OnDestroy {
  message = "Welcome to Moench"

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('moench-btn').classList.add("active");
    this.route.params.subscribe((routeParams: Params) => { 
      const floor = routeParams["floor"];
      this.message = `Moench ${floor}`;
     });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    document.getElementById('moench-btn').classList.remove("active");
  }

}
