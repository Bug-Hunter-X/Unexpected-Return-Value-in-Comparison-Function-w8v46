function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  }
  return true; // Bug: This should be false if a < b
}