export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

let myInternalValue;

export const setInternalValue = (value) => (myInternalValue = value);

export const useInternalValue = (value) => myInternalValue * value;
