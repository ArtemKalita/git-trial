const randomDiap = (n, m) => {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};

const mood = (colorsCount) => {
  const colors = [
    "красный",
    "оранжевый",
    "жёлтый",
    "зелёный",
    "голубой",
    "синий",
    "фиолетовый",
  ];

  console.log("цветов: " + colorsCount);
  for (let i = 0; i < colorsCount; i++) {
    const n = randomDiap(0, colors.length - 1);
    const colorName = colors[n];
    colors.splice(n, 1);
    console.log(colorName);
  }
};

mood(3);
