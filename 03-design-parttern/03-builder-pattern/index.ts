import { UserBuilder } from "./class/userBuilder";

const userBuilder = new UserBuilder();
userBuilder.setFirstName("John");
userBuilder.setLastName("Doe");
userBuilder.setGender("man");
userBuilder.setAge(30);

console.log("getAllValues", userBuilder.getAllValues()); // instance of UserBuilder
console.log("typeof getAllValues", typeof userBuilder.getAllValues()); // object
console.log("build", userBuilder.build()); // instance of User
console.log("typeof build", typeof userBuilder.build()); // object
