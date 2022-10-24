const str1 = prompt("введите текст");
const function_delit_spase = (str_change) => {
  return (str_delit = str_change
    .replace(" ", "")
    .split("")
    .reverse()
    .join("")
    .replace(" ", "")
    .split("")
    .reverse()
    .join(""));
};
const changes_str = function_delit_spase(str1);
console.log(changes_str);
