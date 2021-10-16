console.log("");
console.log('-------Task8-xxxxxxxxxx-------');

a = 8;
b = 3;

let x = 0;

for (x = 0; (a + 2 * (x - b) != 16);) {
   if (a + 2 * (x - b) > 16) {
      x--;
   } else x++;
}
console.log('x=',x);
console.log('');
console.log('Uravn 1');
console.log('a+2(x-b)=16;');
console.log('a+2x-2b=16;');
x = (16 - a + 2 * b) / 2; 
console.log('x=(16-a+2b)/2;');
console.log('x=', x);
console.log('');
console.log('Uravn 2');
console.log('b(x+15)=a+6x;');
console.log('bx+15b=a+6x;');
console.log('bx-6x=a-15b;');
x = (a - 15 * b) / (b - 6);
console.log('x=(a-15b)/(b-6);');
console.log('x=', x);
console.log('');
console.log('Uravn 3');
console.log('x+2x+ax+bx=23780;');
console.log('x(1+2+a+b)=23780;');
x = 23780 / (1 + 2 + a +b);
console.log('x=23780/(1+2+a+b);');
console.log('x=', x);
// for (x = 0; Math.ceil(b * (x + 15)) != Math.ceil(a + 6 * x);) {
//    if (Math.ceil(b * (x + 15)) - Math.ceil(a + 6 * x) > 0) {
//       x++;
//    }else x--;
// }
// console.log(x);

// let y = Math.ceil(10 / 3);
// console.log(y);


// y = Math.abs(10 / 3);
// console.log(y);


// y = Math.fround(10 / 3);
// console.log(y);