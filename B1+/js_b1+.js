const prompt_str = prompt("введите год");
const find_a_century = (year) => {
  year = year / 100;
  year = Math.floor(year);
  if (year > 0) {
    return `${year + 1} век нашей эры`;
  } else {
    return `${Math.abs(year) - 2} век до нашей эры`;
  }
};
alert(find_a_century(prompt_str));
