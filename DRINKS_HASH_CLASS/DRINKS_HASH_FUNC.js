class HashStorageClass {
  constructor() {
    this.obj = {};
  }
  addValue = (key, alcoholic, value) => {
    if (alcoholic) {
      alcoholic = "Да";
    } else {
      alcoholic = "Нет";
    }
    this.obj[key] = [alcoholic, value];

    alert("Напиток добавлен");
  };
  getValu = (key) => {
    if (key in this.obj) {
      alert(`Напиток: ${key}
Алкагольный: ${this.obj[key][0]}
Ингридиенты: ${this.obj[key][1]}`);
    } else {
      alert("Такого напитка нет");
    }
  };
  deleteValue = (key) => {
    if (!(key in this.obj)) {
      alert("Такого напитка и так нет");
    } else {
      delete this.obj[key];
      alert("Напиток удален");
    }
  };
  getKeys = () => {
    if (Object.keys(this.obj).length === 0) {
      alert("Напитков нет");
    } else {
      alert(`Названия всех напитков: ${Object.keys(this.obj)}`);
    }
  };
}

// const name1 = new DRINKS_HASH_FUNC(); //1 задание

// console.log(name1.addValue("rgrg", "1", 4, "f"));
// console.log(name1.addValue("rgrg1", "1", 4, "f", "gvtfv"));
// console.log(name1.getValu("rgrg"));
// console.log(name1.deleteValue("6"));
// console.log(name1.getKeys());
const drinkStorage = new HashStorageClass();
