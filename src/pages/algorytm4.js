let i;
let array = [];

array[0] = 'BABBABAB';
array[1] = 'BABBAABA';

for (i = 2; i <= 7; i++) {
    array[i] = array[i - 2] + array[i - 1];
    console.log(array[i]);
}

let n;
let array1 = [];
array1[0] = 3;
array1[1] = 4;
for (n = 2; n <= 42; n++) {
    array1[n] = array1[n - 2] + array1[n - 1];
    console.log(array1[n]);
}
