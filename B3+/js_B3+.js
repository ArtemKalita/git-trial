const expression = prompt("введите выражение");
const count = (expression) => {
  let substring = 0;
  let sum = 0;
  // парсинг строки на элементы
  expression = expression.replaceAll(" ", "");
  expression = expression.replaceAll("-", " - ");
  expression = expression.replaceAll("+", " + ");
  expression = expression.replaceAll("/", " / ");
  expression = expression.replaceAll("*", " * ");
  expression = expression.replaceAll(")", " )");
  expression = expression.replaceAll("(", "( ");
  const all_alements = expression.split(" ");
  // ==============
  // Обратотка скобок
  while (all_alements.lastIndexOf("(") >= 0) {
    // получение внутренностей скобок
    substring = all_alements.slice(
      all_alements.lastIndexOf("(") + 1,
      all_alements.indexOf(")")
    );
    // =========
    // Выполнение действий
    // Умножение и деление

    // for (const iterator of substring) {
    //   console.log(iterator);
    //   switch (iterator) {
    //     case "*":
    //       sum =
    //         parseFloat(substring[substring.indexOf("*") - 1]) *
    //         parseFloat(substring[substring.indexOf("*") + 1]);
    //       substring.splice(substring.indexOf("*") - 1, 3, sum);

    //       break;
    //   }
    // }{e:e}
    console.log(substring);
    substring.forEach((element) => {
      console.log(element);
      switch (element) {
        case "*":
          sum =
            parseFloat(substring[substring.indexOf("*") - 1]) *
            parseFloat(substring[substring.indexOf("*") + 1]);
          substring.splice(substring.indexOf("*") - 1, 3, sum);
          console.log(sum, substring);

          break;
        case "/":
          sum =
            parseFloat(substring[substring.indexOf("/") - 1]) /
            parseFloat(substring[substring.indexOf("/") + 1]);
          substring.splice(substring.indexOf("/") - 1, 3, sum);
          console.log(sum, substring);
          break;
      }
    });
    console.log(substring);
    // ======

    all_alements.splice(
      all_alements.lastIndexOf("("),
      all_alements.indexOf(")") - all_alements.lastIndexOf("(") + 1,
      sum
    );
  }
};

count(expression);

// пример

// ===============
// const counting_expressions = (expression) => {
//   expression = expression.split("");
//   let all_alements = [];

//   is_point = false;
//   expression.forEach((element) => {
//     if (isNaN(parseInt(element)) && element != ".") {
//       all_alements.push(element);
//       is_point = false;
//     } else if (is_point == true || element == ".") {
//       all_alements[number.length - 1] += element;
//     } else {
//       all_alements.push(element);
//       is_point = true;
//     }
//   });
//   console.log(all_alements);
// };

// counting_expressions(prompt(""));

// работает
// =================
// function expr(expr) {
//   var chars = expr.split("");
//   var n = [],
//     op = [],
//     index = 0,
//     oplast = true;

//   n[index] = "";

//   // Parse the expression
//   for (var c = 0; c < chars.length; c++) {
//     if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
//       op[index] = chars[c];
//       index++;
//       n[index] = "";
//       oplast = true;
//     } else {
//       n[index] += chars[c];
//       oplast = false;
//     }
//   }

//   // Calculate the expression
//   expr = parseFloat(n[0]);
//   for (var o = 0; o < op.length; o++) {
//     var num = parseFloat(n[o + 1]);
//     switch (op[o]) {
//       case "+":
//         expr = expr + num;
//         break;
//       case "-":
//         expr = expr - num;
//         break;
//       case "*":
//         expr = expr * num;
//         break;
//       case "/":
//         expr = expr / num;
//         break;
//     }
//   }

//   return expr;
// }
