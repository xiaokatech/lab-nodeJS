import { UserBuilder } from "./class/userBuilder";

const userBuilder = new UserBuilder();
userBuilder.setFirstName("John");
userBuilder.setLastName("Doe");
userBuilder.setGender("man");
userBuilder.setAge(30);

console.log("getAllValues", userBuilder.getAllValues());
console.log("typeof getAllValues", typeof userBuilder.getAllValues());
console.log("build", userBuilder.build());
console.log("typeof build", typeof userBuilder.build());
