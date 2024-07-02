// TEST CASES GENERATED USING CHATGPT

const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./utils");

// Tests for capitalize
describe("capitalize", () => {
  test("should capitalize the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return an empty string for non-string inputs", () => {
    expect(capitalize(123)).toBe("");
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
  });

  test("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});

// Tests for reverseString
describe("reverseString", () => {
  test("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("should return an empty string for non-string inputs", () => {
    expect(reverseString(123)).toBe("");
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
  });

  test("should handle empty strings", () => {
    expect(reverseString("")).toBe("");
  });
});

// Tests for calculator
describe("calculator", () => {
  test("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("should divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow(
      "Division by zero is not allowed."
    );
  });
});

// Tests for caesarCipher
describe("caesarCipher", () => {
  test("should shift characters correctly", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("should handle shifts larger than 26", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
    expect(caesarCipher("Hello", 29)).toBe("Khoor");
  });

  test("should handle non-alphabetical characters", () => {
    expect(caesarCipher("123!@#", 3)).toBe("123!@#");
  });
});

// Tests for analyzeArray
describe("analyzeArray", () => {
  test("should return correct analysis of an array of numbers", () => {
    const array = [1, 2, 3, 4, 5];
    const analysis = analyzeArray(array);
    expect(analysis).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("should throw an error for non-array inputs", () => {
    expect(() => analyzeArray(123)).toThrow(
      "Input must be a non-empty array of numbers"
    );
    expect(() => analyzeArray(null)).toThrow(
      "Input must be a non-empty array of numbers"
    );
    expect(() => analyzeArray(undefined)).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });

  test("should throw an error for empty arrays", () => {
    expect(() => analyzeArray([])).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });

  test("should handle arrays with one element", () => {
    const array = [5];
    const analysis = analyzeArray(array);
    expect(analysis).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});
