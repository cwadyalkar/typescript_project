interface mobile {
  name: string;
  model: number;
}
interface prices extends mobile {
  price?: number;
}

const obj2: prices = {
  name: "chirag",
  model: 786,
};

console.log(obj2);
