const tr = document.getElementById("de"); //все кнопки
const app = document.getElementById("app"); //выводим сюда результат
const input_str = document.getElementById("input_str"); //значение input1
tr.addEventListener("click", (e) => {
  const tegs = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
  if (tegs.includes(e.target.id)) {
    let str_value = input_str.value;
    str_value = str_value.replaceAll("&", " &amp; ");
    str_value = str_value.replaceAll("'", " &apos; ");
    str_value = str_value.replaceAll('"', " &quot; ");
    str_value = str_value.replaceAll("<", " &lt; ");
    str_value = str_value.replaceAll(">", " &gt; ");
    const e_target = e.target.id;
    app.innerText = `<${e_target}> ${str_value} </${e_target}>`;
  } else if ((e.target.id = "clear")) {
    app.innerHTML = "";
    input_str.value = "";
  }
});
