// Question:1

setTimeout(() => console.log("Data is fetched"), 2000);

// Question:2
setTimeout(() => console.log("A"), 0);
setTimeout(() => console.log("C"), 0);
setTimeout(() => console.log("B"), 0);

// Output :- A C B

// Question :3
setTimeout(() => console.log("A"), 1000);
setTimeout(() => console.log("B"), 400);
setTimeout(() => console.log("C"), 1300);

//Output :- B A C

//Question :4
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

//Output :- A C B
