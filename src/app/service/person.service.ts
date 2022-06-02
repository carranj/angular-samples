import { Injectable } from '@angular/core';
import { PersonClass } from '../class/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public people: PersonClass[] = [
    new PersonClass('Jose', 'Carranco', 33),
    new PersonClass('Billie', 'Jean', 25),
    new PersonClass('Johnny B.', 'Goode', 54),
  ];
  constructor() {}
}
