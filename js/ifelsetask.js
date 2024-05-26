var triangle = [10, 10, 10];
if (triangle[0] == triangle[1] && triangle[0] == triangle[2]) {
  console.log("three sides are equal");
} else if (
  triangle[0] == triangle[1] ||
  triangle[0] == triangle[2] ||
  triangle[1] == triangle[2]
) {
  console.log("two sides are equal");
} else {
  console.log("both side or not equal");
}
//-------------------------------------------\\
var a = "this car is ";
var car = "ford";
switch (car) {
  case "bmw":
    console.log(a + "luxurios one");
    break;
  case "lamborgini":
    console.log(a + "fastest one");
    break;
  case "ford":
    console.log(a + "cheepest one");
    break;
}
function uniq(a, b) {
  return a * b;
}
var solluda = uniq(5, 5);
console.log(solluda);
