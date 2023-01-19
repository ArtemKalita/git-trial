const tr = document.getElementById("de"); //все кнопки
const app = document.getElementById("app"); //выводим сюда результат
let input = document.getElementById("input_list"); //input для li
const input_str = document.getElementById("input_str"); //значение input1
let flag = false;
tr.addEventListener("click", (e) => {
  const tegs = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
  if (tegs.includes(e.target.id)) {
    const e_target = e.target.id;
    app.innerHTML = `<${e_target}> ${input_str.value} </${e_target}>`;
  } else if ("li" === e.target.id && !flag) {
    add_inpu_butten();
    flag = true;
  } else if ("li" === e.target.id && flag) {
    const all_input = input.querySelectorAll("input");
    let mak_li = "<ul>";
    all_input.forEach((element) => {
      mak_li += `<li>${element.value}</li>`;
      element.value = "";
    });
    mak_li += "</ul>";
    app.innerHTML = mak_li;
  }
});
const add_inpu_butten = () => {
  let new_input = document.createElement("div");
  new_input.innerHTML =
    "<input style='margin: 5px 5px 20px 5px'> <button onclick='add_inpu_butten()'>+</button><button style='margin: 5px 5px 20px 5px'onclick='delete_last_div()'>-</button>";
  input.append(new_input);
};
const delete_last_div = () => {
  const all_input = input.querySelectorAll("div");
  all_input[all_input.length - 1].remove();
  if (all_input.length === 1) {
    flag = false;
  }
};
