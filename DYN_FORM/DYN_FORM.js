const app = document.getElementById("app");
const formDef1 = [
  {
    label: "Название сайта:",
    kind: "longtext",
    type: "text",
    name: "sitename",
  },
  { label: "URL сайта:", kind: "longtext", type: "text", name: "siteurl" },
  {
    label: "Посетителей в сутки:",
    kind: "number",
    type: "number",
    name: "visitors",
  },
  {
    label: "E-mail для связи:",
    kind: "shorttext",
    type: "email",
    name: "email",
  },
  {
    label: "Рубрика каталога:",
    kind: "combo",
    name: "division",
    variants: [
      { text: "здоровье", value: 1 },
      { text: "домашний уют", value: 2 },
      { text: "бытовая техника", value: 3 },
    ],
  },
  {
    label: "Размещение:",
    kind: "radio",
    type: "radio",
    name: "payment",
    variants: [
      { text: "бесплатное", value: 1 },
      { text: "платное", value: 2 },
      { text: "VIP", value: 3 },
    ],
  },
  {
    label: "Разрешить отзывы:",
    type: "checkbox",
    kind: "check",
    name: "votes",
  },
  { label: "Описание сайта:", kind: "memo", name: "description" },
  { caption: "Опубликовать", kind: "submit" },
];

const DYN_FORM = (arr) => {
  app.appendChild(document.createElement("hr"));
  arr.forEach((element) => {
    const creat_input = () => {
      const input_trg = document.createElement("input");
      input_trg.name = element.name;
      input_trg.type = element.type;
      input_trg.id = element.name;
      app.appendChild(input_trg);
    };
    if (element.label) {
      let label_teg = document.createElement("label");
      label_teg.innerText = element.label;
      label_teg.setAttribute("for", element.name);
      app.appendChild(label_teg);
    }
    switch (element.kind) {
      case "longtext":
        creat_input();
        app.appendChild(document.createElement("br"));
        break;

      case "number":
        creat_input();
        app.appendChild(document.createElement("br"));
        break;

      case "shorttext":
        creat_input();
        app.appendChild(document.createElement("br"));
        break;

      case "combo":
        let select_teg = document.createElement("select");
        select_teg.name = element.name;
        select_teg.id = element.name;
        app.appendChild(select_teg);
        element.variants.forEach((element1) => {
          let option_teg = document.createElement("option");
          option_teg.value = element1.value;
          option_teg.textContent = element1.text;
          select_teg.appendChild(option_teg);
        });
        app.appendChild(document.createElement("br"));
        break;

      case "radio":
        element.variants.forEach((element1) => {
          creat_input();
          let label_teg = document.createElement("label");
          label_teg.textContent = element1.text;
          app.appendChild(label_teg);
        });
        app.appendChild(document.createElement("br"));
        break;

      case "check":
        creat_input();
        app.appendChild(document.createElement("br"));
        break;

      case "memo":
        app.appendChild(document.createElement("br"));
        let textarea_teg = document.createElement("textarea");
        textarea_teg.id = element.name;
        textarea_teg.name = element.name;
        app.appendChild(textarea_teg);
        app.appendChild(document.createElement("br"));
        break;

      case "submit":
        let button_teg = document.createElement("button");
        button_teg.innerText = element.caption;
        app.appendChild(button_teg);
        app.appendChild(document.createElement("br"));

        break;
    }
  });
};
DYN_FORM(formDef1);

// const add_lable = (element) => {
//   let teg_label = document.createElement("label");
//   teg_label.innerText = `${element.label} `;
//   teg_label.classList = "form_lable";
//   teg_label.setAttribute("for", element.name);
//   app.appendChild(teg_label);
// };
// const add_input = (element, type = "text") => {
//   let teg_input = document.createElement("input");
//   teg_input.classList = "input-field";
//   teg_input.name = element.name;
//   teg_input.type = type;
//   teg_input.id = element.name;
//   app.appendChild(teg_input);
// };
// const add_select = (element) => {
//   let teg_select = document.createElement("select");
//   teg_select.classList = "input-field";
// };
// arr.forEach((element) => {
//   switch (element.kind) {
//     case "longtext":
//       add_lable(element);
//       add_input(element, element.type);
//       app.appendChild(document.createElement("br"));
//       break;
//     case "number":
//       add_lable(element);
//       add_input(element, element.type);
//       app.appendChild(document.createElement("br"));
//       break;
//     case "shorttext":
//       add_lable(element);
//       add_input(element, element.type);
//       app.appendChild(document.createElement("br"));
//       break;
//     case "shorttext":
//       add_lable(element);
//       add_input(element, element.type);
//       app.appendChild(document.createElement("br"));
//       break;
//     case "submit":
//       let teg_button = document.createElement("button");
//       teg_button.innerText = element.caption;
//       teg_button.className = "send-btn";
//       app.appendChild(teg_button);
//   }
// });

// //
