import { Component, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-map-rxjs',
  templateUrl: './map-rxjs.component.html',
  styleUrls: ['./map-rxjs.component.scss'],
})
export class MapRxjsComponent implements OnInit {
  public readonly title = 'of Operator';
  output: any;

  constructor() {}

  ngOnInit() {
    const source = of('jose');

    source
      .pipe(map((name: string) => name.toUpperCase()))
      .subscribe((data) => (this.output = data));
  }
}
