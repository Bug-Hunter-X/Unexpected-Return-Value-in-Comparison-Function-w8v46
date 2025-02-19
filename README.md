# Unexpected Return Value in Comparison Function

This repository demonstrates a common error in JavaScript comparison functions: incorrect return statements leading to unexpected behavior.

The `foo` function is intended to return `true` if `a` equals `b`, `false` if `a` is greater than `b`, and `false` if `a` is less than `b`. However, there's a bug in the return statement where if `a` is less than `b`, the function incorrectly returns `true`.

The solution demonstrates the correction needed to achieve the intended comparison logic.