import { faker } from "@faker-js/faker";

export const testData = {
  fullName: faker.person.fullName(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 90 }),
  currentAddres: `${faker.location.street()}, ${faker.location.city()}`,
  permanentAddress: `${faker.location.street()}, ${faker.location.city()}`,
  salary: faker.number.int({ min: 3000, max: 10000 }),
  department: faker.person.jobArea(),
};
