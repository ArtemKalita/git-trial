x = 0;
y = 0;
document.addEventListener("keypress", (ewent) => {
  const BatennPrest = ewent.keyCode;

  switch (BatennPrest) {
    case 119:
      console.log(x, y);
      y += 1;
      break;
    case 97:
      console.log(x, y);
      x -= 1;
      break;
    case 100:
      console.log(x, y);
      x += 1;
      break;
    case 115:
      console.log(x, y);
      y -= 1;
      break;

    default:
      console.log("Другая клавиша");
  }
});
