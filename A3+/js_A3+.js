const input_str = prompt("Введите строку");
const function_to_faind_palindrome = (str_to_palindrome) => {
  str_to_palindrome = str_to_palindrome.toLowerCase();
  const f = [" ", "ь", "ъ", "ё"];
  for (const i of f) {
    if (i == "ё") {
      str_to_palindrome = str_to_palindrome.replaceAll(i, "е");
    } else {
      str_to_palindrome = str_to_palindrome.replaceAll(i, "");
    }
  }
  console.log(str_to_palindrome);
  const str_to_palindrome_revers = str_to_palindrome
    .split("")
    .reverse()
    .join("");
  if (str_to_palindrome == str_to_palindrome_revers) {
    return "палиндром";
  } else {
    console.log(2);
    return "не палиндром";
  }
};
alert(function_to_faind_palindrome(input_str));
