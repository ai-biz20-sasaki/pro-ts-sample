//関数宣言の巻き上げ(hoisting)
//関数宣言より前に、その関数が使える
console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される

function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}