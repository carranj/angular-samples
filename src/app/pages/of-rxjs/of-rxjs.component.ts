import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Person } from 'src/app/interface/person';

@Component({
  selector: 'app-of-rxjs',
  templateUrl: './of-rxjs.component.html',
  styleUrls: ['./of-rxjs.component.scss'],
})
export class OfRxjsComponent implements OnInit {
  public readonly title = 'of Operator';
  output: any;

  constructor() {}

  ngOnInit() {
    const person: Person = {
      firstName: 'Billie',
      lastName: 'Jean',
      age: 30,
    };

    const personObs: Observable<Person> = of(person);

    personObs.subscribe((data) => (this.output = data));
  }
}
