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
