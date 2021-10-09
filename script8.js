console.log('-------Task8-xxxxxxxxxx-------');

a = 8;
b = 3;

let x = 0;

for (x = 0; (a + 2 * (x - b) != 16);) {
   if (a + 2 * (x - b) > 16) {
      x--;
   } else x++;
}
console.log(x);

x = (16 - a + 2 * b) / 2; 

console.log(x);

let y = Math.ceil(10 / 3);
console.log(y);


y = Math.abs(10 / 3);
console.log(y);


y = Math.fround(10 / 3);
console.log(y);