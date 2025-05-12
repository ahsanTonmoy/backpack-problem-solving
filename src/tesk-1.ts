// Create an array of person objects
// Task 1: Filter out females and map remaining to names
type Person = {
  name: string;
  age: number;
  gender: string;
};
const people: Person[] = [
  { name: "Mim", age: 24, gender: "female" },
  { name: "Ranad", age: 28, gender: "male" },
  { name: "Jakir", age: 30, gender: "female" },
  { name: "Rifat", age: 20, gender: "male" },
  { name: "Sifat", age: 19, gender: "male" },
];
function getNonFemaleNames(people: Person[]): string[] {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const result = getNonFemaleNames(people);
console.log("filter out all females person & updateded person", result);
