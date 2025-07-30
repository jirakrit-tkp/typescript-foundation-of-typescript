function calculate(a: number, b: number, operator: string): number | string {
  //Start Coding Here
  switch (operator) {
    case "add" :
      return a+b
      break;
    case "subtract" :
      return a-b
      break;
    case "multiply" :
      return a*b
      break;
    case "divide" :
      return a/b
      break;
    default :
      return "Invalid operator"
  }
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"
