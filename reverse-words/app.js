console.log("app.js working");

function reverseString(sentence) {
  let x = sentence.split(" ");
  return x.reverse().join("");
}

console.log(reverseString("feanor finwe'nin oğludur"));
