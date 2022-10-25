const str_prompt = prompt("введите строку");
const faind_leters = (str_to_faind) => {
  const lover_case = str_to_faind.toLowerCase();
  const leters = "йуеаоэёяию";
  let quantity = 0;

  for (const i of lover_case) {
    console.log(leters.indexOf(i) > -1);
    if (leters.indexOf(i) > -1) {
      quantity += 1;
    }
  }
  return quantity;
};

alert(faind_leters(str_prompt));
