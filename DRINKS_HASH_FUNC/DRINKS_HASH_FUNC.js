function HashStorageClass() {
  const obj = {};
  this.addValue = function (key, alcoholic, value) {
    if (alcoholic) {
      alcoholic = "Да";
    } else {
      alcoholic = "Нет";
    }
    obj[key] = [alcoholic, value];

    alert("Напиток добавлен");
    console.log(obj);
  };
  this.getValu = function (key) {
    if (key in obj) {
      alert(`Напиток: ${key}
Алкагольный: ${obj[key][0]}
Ингридиенты: ${obj[key][1]}`);
    } else {
      alert("Такого напитка нет");
    }
  };
  this.deleteValue = function (key) {
    if (!(key in obj)) {
      alert("Такого напитка и так нет");
    } else {
      delete obj[key];
      alert("Напиток удален");
    }
  };
  this.getKeys = function () {
    if (Object.keys(obj).length === 0) {
      alert("Напитков нет");
    } else {
      alert(`Названия всех напитков: ${Object.keys(obj)}`);
    }
  };
}
const drinkStorage = new HashStorageClass();
