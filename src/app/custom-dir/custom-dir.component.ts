import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dir',
  templateUrl: './custom-dir.component.html',
  styleUrls: ['./custom-dir.component.css']
})
export class CustomDirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
  }

}
