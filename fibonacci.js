function fibs(num) {
  if (num < 0) return "Wrong Input";
  if (num === 0) return [];
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  console.log(array);
}

function fibsRec(num, arr = [0, 1]) {
  if (num < 0) return "Incorrect Input";
  if (num === 0) return [];
  if (num === 1) return [0];
  if (arr.length >= num) return arr.slice(0, num);

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(num, arr);
}
