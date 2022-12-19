class DRINKS_HASH_FUNC {
  constructor() {
    this.obj = {};
  }
  addValue = (key, value) => {
    this.obj[key] = value;
    return this.obj;
  };
  getValu = (key) => {
    return this.obj[key];
  };
  deleteValue = (key) => {
    if (!(key in this.obj)) {
      return false;
    } else {
      delete this.obj[key];
      return true;
    }
  };
  getKeys = () => {
    return Object.keys(this.obj);
  };
}

const name1 = new DRINKS_HASH_FUNC("rgrg", "grgrt");

console.log(
  name1.addValue("rgrg", "1"),
  name1.addValue("rgrg1", "2"),
  name1.getValu("rgrg"),
  name1.deleteValue("rgrg"),
  name1.getKeys()
);
