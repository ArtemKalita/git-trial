const arrey_for_the_sum = JSON.parse(prompt("Введите массив"));
const treeSum = (elements) => {
  let sum = 0;
  for (const each_element of elements) {
    if (typeof each_element == "number") {
      sum += each_element;
    } else if (typeof each_element == "object") {
      for (const under_the_element of each_element) {
        elements.push(under_the_element);
        console.log();
      }
    }
  }
  return sum;
};

alert(treeSum(arrey_for_the_sum));
