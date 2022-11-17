const expression = prompt("введите выражение");
const count = (expression) => {
  let sum = 0;
  let bracket = [];
  let number_of_bracket = [];
  let number_of_element = 0;

  // нахожу 2 ближайшии скобкию. А именно (,). Ипкредаю их индексы.
  const find_the_nearest_bracket = (bracket1) => {
    for (let i = 0; i < bracket1.length; i++) {
      let ferst_element = bracket1[i];
      let second_element = bracket1[i + 1];
      if (ferst_element == "(" && second_element == ")") {
        let two_rite_elements = [
          number_of_bracket[i] - 1,
          number_of_bracket[i + 1] - 1,
        ];
        bracket.splice(i, 2);
        number_of_bracket.splice(i, 2);

        return two_rite_elements;
      }
    }
  };
  // Выполнение действия
  const performing_actions = (expression_in_bracket) => {
    for (let i = 0; i < expression_in_bracket.length; i++) {
      switch (expression_in_bracket[i]) {
        case "*":
          sum =
            parseFloat(expression_in_bracket[i - 1]) *
            parseFloat(expression_in_bracket[i + 1]);
          expression_in_bracket.splice(i - 1, 3, sum);
          i -= 1;

          break;
        case "/":
          sum =
            parseFloat(expression_in_bracket[i - 1]) /
            parseFloat(expression_in_bracket[i + 1]);
          expression_in_bracket.splice(i - 1, 3, sum);
          i -= 1;

          break;
      }
    }
    for (let i = 0; i < expression_in_bracket.length; i++) {
      switch (expression_in_bracket[i]) {
        case "+":
          sum =
            parseFloat(expression_in_bracket[i - 1]) +
            parseFloat(expression_in_bracket[i + 1]);
          expression_in_bracket.splice(i - 1, 3, sum);
          i -= 1;

          break;
        case "-":
          sum =
            parseFloat(expression_in_bracket[i - 1]) -
            parseFloat(expression_in_bracket[i + 1]);
          expression_in_bracket.splice(i - 1, 3, sum);
          i -= 1;

          break;
      }
    }

    return sum.toString();
  };
  // парсинг строки на элементы
  expression = expression.replaceAll(" ", "");
  expression = expression.replaceAll("-", " - ");
  expression = expression.replaceAll("+", " + ");
  expression = expression.replaceAll("/", " / ");
  expression = expression.replaceAll("*", " * ");
  expression = expression.replaceAll(")", " )");
  expression = expression.replaceAll("(", "( ");
  let all_alements = expression.split(" ");

  // запись всех скобок и их индексы
  const faind = (exzempls) => {
    bracket.length = 0;
    number_of_bracket.length = 0;
    number_of_element = 0;
    console.log(bracket, number_of_bracket);

    exzempls.forEach((element) => {
      number_of_element++;

      if (element == "(") {
        bracket.push("(");
        number_of_bracket.push(number_of_element);
      } else if (element == ")") {
        bracket.push(")");
        number_of_bracket.push(number_of_element);
      }
    });
    console.log(bracket, number_of_bracket, all_alements);
  };

  // вычисление всех скобок
  while (all_alements.indexOf("(") > -1) {
    console.log(all_alements.length);
    faind(all_alements);

    let two_numbers = find_the_nearest_bracket(bracket);
    let expression_in_bracket = all_alements.slice(
      two_numbers[0],
      two_numbers[1]
    );
    console.log(two_numbers);
    let lens = two_numbers[1] - two_numbers[0] + 1;

    all_alements.splice(
      two_numbers[0],
      lens,
      performing_actions(expression_in_bracket)
    );
  }
  // последни действие

  return performing_actions(all_alements);
};

// ура я это сделал
// ХА-ХА-ХА-ХА-ХА-ХА

alert(`Ответ: ${count(expression)}`);
