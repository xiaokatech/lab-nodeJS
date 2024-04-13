import { User } from "./user";

export class UserBuilder {
  firstName: string = "";
  lastName: string = "";
  gender: string = "";
  age: number = 0;
  address: string = "";
  country: string = "";
  isAdmin: boolean = false;

  constructor() {}

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setGender(gender: string) {
    this.gender = gender;
  }

  setAge(age: number) {
    this.age = age;
  }

  setAddress(address: string) {
    this.address = address;
  }

  setCountry(country: string) {
    this.country = country;
  }

  setAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  build(): User {
    return new User(this);
  }

  getAllValues() {
    return this;
  }
}
