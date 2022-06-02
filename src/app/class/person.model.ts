export class PersonClass {
  public firstName: string;
  public lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}
