const str = prompt("введите строку").toLowerCase().split("");
const forEach_arr = () => {
  let vowels_letors_in_str = 0;
  const vowels = ["а", "у", "о", "ы", "э", "е", "ё", "и", "ю", "я"];
  str.forEach((element) => {
    if (vowels.includes(element)) {
      vowels_letors_in_str += 1;
    }
  });
  return vowels_letors_in_str;
};

const filter_arr = () => {
  const vowels = ["а", "у", "о", "ы", "э", "е", "ё", "и", "ю", "я"];
  return str.filter((element) => vowels.includes(element)).length;
};

const reduce_arr = () => {
  const vowels = ["а", "у", "о", "ы", "э", "е", "ё", "и", "ю", "я"];
  return str.reduce((sum, element) => {
    if (vowels.includes(element)) {
      return (sum += 1);
    } else {
      return sum;
    }
  }, 0);
};

alert(`Найденно гласных букв с помощью forEach: ${forEach_arr()},
Найденно гласных букв с помощью filter: ${filter_arr()},
Найденно гласных букв с помощью reduce: ${reduce_arr()}
`);
