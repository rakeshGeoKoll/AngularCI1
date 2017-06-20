import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  template: `
    <p>
      red Works!
    </p>
  `,
  styles: ['div.wrapper { width: 500px; height: 500px; background-color: red; }']
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
