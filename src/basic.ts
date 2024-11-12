type userName = (n: number, m: number) => number;

let surname: string | number = 45;
let userName = false;
const multiply = (n: number, m: number) => {
  return String(n * m);
};

const addition: userName = (n, m) => {
  return n + m;
};

console.log(addition(2, 1));
console.log(multiply(2, 8));

let id: string | number = "chirag";
console.log(id);
