// Valid Parenthesis

function isValid(par) {
  const stack = [];
  for (let i = 0; i < par.length; i++) {
    const char = par[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}
console.log(isValid("{}()[]"));
