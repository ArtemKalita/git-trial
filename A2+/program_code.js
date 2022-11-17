const str1 = prompt("введите текст");
const function_delit_spase = (str_change) => {
  while (str_change[0] == " ") {
    str_change = str_change.substring(1);
  }
  while (str_change[str_change.length - 1] == " ") {
    str_change = str_change.substring(0, str_change.length - 1);
  }

  return str_change;
};
alert(function_delit_spase(str1));
