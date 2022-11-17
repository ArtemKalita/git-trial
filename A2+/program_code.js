const str1 = prompt("введите текст");
const function_delit_spase = (str_change) => {
  let i = 0;
  let a = 0;
  while (str_change[i] == " ") {
    str_change = str_change.substring(1);
    i += 1;
  }
  while (str_change[str_change.length - a] == " ") {
    console.log(str_change[str_change.length - a] == " ");
    str_change = str_change.substring(-1);
    a += 1;
  }
  return str_change;
};
alert(function_delit_spase(str1));
