const prompt_str = prompt("введите строку");
const flip_a_line = (str) => {
  return str.split("").reverse().join("");
};
alert(flip_a_line(prompt_str));
