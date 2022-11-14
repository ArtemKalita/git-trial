const str1 = prompt("введите текст");
const function_delit_spase = (str_change) => {
  const delet_oll_spese = (element) => {
    element = element.split("");
    for (let i = 0; i < element.length; i++) {
      if (element[i] == " ") {
        element.shift();
        i -= 1;
      } else {
        element.reverse();
        return element.join("");
      }
    }
  };
  const delit_spese_on_start = delet_oll_spese(str_change);
  return delet_oll_spese(delit_spese_on_start);
};
alert(function_delit_spase(str1));
