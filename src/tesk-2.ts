/** 2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

type books = {
  title: string;
  year: number;
  author: string;
};
const books = [
  {
    title: "জাভাস্ক্রিপ্ট টিউটোরিয়াল-শিখুন গল্পে গল্পে সাথে",
    author: "Programming Hero",
    year: 2024,
  },
  { title: "Hablu", author: "jonkar Mahbub", year: 2019 },
  { title: "Comix", author: "Antik Mahmud", year: 2025 },
];
function getBookTitles(bookArray: books[]): string[] {
  return bookArray.map((book) => book.title);
}

const titles = getBookTitles(books);
console.log(titles);
