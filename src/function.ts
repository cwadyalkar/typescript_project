// IN JAVASCRIPT-----------------------

//  function func(){
//          return n * m;
//                    }

// simple regular function

function func(n: number, m: number): number {
  return n * m;
}

// using type

type funcType = (a: number, b: number) => number;
const func2: funcType = (a, b) => {
  return a * b;
};
