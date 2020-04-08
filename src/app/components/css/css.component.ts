import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid amet dicta eius, itaque laborum officiis quia velit
        voluptas! Aperiam et natus numquam odit sequi? Consectetur
        delectus eos facere recusandae saepe.
      </span>
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
