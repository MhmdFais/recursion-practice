function fibs(num) {
  if (num < 0) return "Wrong Input";
  if (num === 0) return [];
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  console.log(array);
}

function fibsRec(num) {}
