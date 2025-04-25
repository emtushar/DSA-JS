var reverse = function (x) {
  x = x.toString();
  let left = 0;
  let right = x.length - 1;
  for (let i = 0; i < x.length - 1; i++) {
    if (left < right) {
      x.replace(x.charAt(left), x.charAt(right));
      left++;
      right--;
    }
  }
  x = Number(x);
  if (-2147483648 <= x && x >= 2147483647) {
    return x;
  } else {
    return 0;
  }
};
