// It allow Return the value using declare variable ..

// +++++++++++++++++++++++++  1.] EXAMPLE:-------------

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mynumber1 = number1.filter((num) => num > 4);
console.log(mynumber1);

// OR

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mynumber = number.filter((num) => {
  return num > 4;
});
console.log(mynumber);

// OUTPUT :-    [ 5, 6, 7, 8, 9, 10 ]
// NOTE :- if you can {} , also used "return" :- just use {} output is []

// +++++++++++++++++++++++++++++++++ 2.] EXAMPLE [Find condition]:- ++++++++++++++++++++++++++++++++++++++
const book = [
  { title: "book one", genre: "fiction", publish: "9181", edition: "2004" },
  { title: "book two", genre: "history", publish: "9192", edition: "2005" },
  { title: "book three", genre: "fiction", publish: "9203", edition: "2006" },
  { title: "book four", genre: "fantasy", publish: "9214", edition: "2007" },
  { title: "book five", genre: "science", publish: "9225", edition: "2008" },
  { title: "book six", genre: "history", publish: "9236", edition: "2009" },
  { title: "book seven", genre: "biography", publish: "9247", edition: "2010" },
  { title: "book eight", genre: "fiction", publish: "9258", edition: "2011" },
  { title: "book nine", genre: "fantasy", publish: "9269", edition: "2012" },
  { title: "book ten", genre: "romance", publish: "9270", edition: "2013" },
];

//   const books = book.filter((bk) => bk.genre === "history")

// const books = book.filter((bk) => bk.publish >= "9250")

const books = book.filter(
  (bk) => bk.genre === "fantasy" && bk.publish > "9192"
);

console.log(books);
