const expression = prompt("введите выражение");
const count = (expression) => {
  let ansver = [];
  expression = expression.replaceAll("-", " - ");
  expression = expression.replaceAll("+", " + ");
  expression = expression.replaceAll("/", " / ");
  expression = expression.replaceAll("*", " * ");
  expression = expression.replaceAll(")", " )");
  expression = expression.replaceAll("(", "( ");
  const all_alements = expression.split(" ");
  ansver.push(all_alements);
  console.log(ansver);
};

count(expression);
