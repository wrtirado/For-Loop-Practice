// Loop Practice #1
// Requirements
// For each problem below, write a loop that prints the given output.
//
// For example:
// Problem:
//
// 0
// 1
// 2
// 3
// 4
// Solution:
//
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }
// Problems
// Note: The output in each of the problems below is written on a single line for formatting reasons, however your actual output will print each value on a separate line.
//
// 0 100 200 300 400 500
// 1 2 4 8 16 32 64
// 1 1 1 2 2 2 3 3 3
// 0 2 4 6 8 10
// 3 6 9 12 15
// 9 8 7 6 5 4 3 2 1 0
// 0 1 2 3 0 1 2 3 0 1 2 3

// 0 - 100 for loop
for (var i = 0; i < 501; i+=100){
  console.log(i)
}
// multiplying by 2 for loop
for (var i = 1; i < 65; i*=2){
  console.log(i)
}
// 111222333
for (var i = 1; i < 4; i++) {
  for(var x = 1; x < 4; x++){
      console.log(i);
  }
}
// adding by two for loop
for (var i = 0; i < 11; i+=2){
  console.log(i)
}
// start at three, and adding by three for loop
for (var i = 3; i < 16; i+=3){
  console.log(i)
}
// decending to 0 from 9 for loop
for (var i = 9; i > -1; i--) {
  console.log(i)
}
// 0 - 3 repeating 3 times
for (var i = 0; i < 3; i++) {
  for (var x = 0; x < 4; x++){
    console.log(x)
  }
}
