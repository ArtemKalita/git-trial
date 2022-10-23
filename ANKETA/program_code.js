let name = "";
let surname = "";
let patronymic = "";
let age = 0;
let floor = "";

const questions_to_the_full_name = [
  "Введите ваше имя",
  "Введите вашу фамилию",
  "Введите ваше отчество",
  "Введите ваш возраст",
  "Введите ваш пол (м или ж)",
];

const find = (fio, indes) => {
  if (!!fio.match(/\d+/) == true || fio === "") {
    fio = prompt(questions_to_the_full_name[indes]);
    find(fio, indes);
  } else {
    floor = fio;
    return floor;
  }
  return floor;
};
name = find(name, 0);
surname = find(surname, 1);
patronymic = find(patronymic, 2);
while (parseFloat(age) <= 0 || isNaN(age) || age == "") {
  age = prompt(questions_to_the_full_name[3]);
}
while (floor !== "м" && floor !== "ж") {
  floor = prompt(questions_to_the_full_name[4]);
}
if (floor === "м") {
  floor = "мужской";
} else if (floor === "ж") {
  floor = "женский";
}

alert(
  `Ваше имя ${name}
Ваша фамилия ${surname}
Ваше отчество ${patronymic}
Ваш возраст ${age}
Ваш пол ${floor}`
);
