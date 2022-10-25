const str_prompt = prompt("введите строку");
const leters_list = prompt("введите какие буквы надо посчитать");
const faind_leters = (str_to_faind, leters_list) => {
  let quantity = 0;
  for (const i of str_to_faind) {
    if (leters_list.indexOf(i) > -1) {
      quantity += 1;
    }
  }
  return quantity;
};
alert(faind_leters(str_prompt, leters_list));
