function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (typeof str !== "string" || str == "") {
    return "";
  }

  let temp = str.split("");
  temp = temp.reverse();

  return temp.join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
};

function shiftChar(char, shift) {
  const isUpperCase = char >= "A" && char <= "Z";
  const isLowerCase = char >= "a" && char <= "z";
  const asciiUpper = 65; //convert an uppercase letter to 0-25 range
  const asciiLower = 97; //convert a lowercase letter to 0-25 range

  if (isUpperCase) {
    return String.fromCharCode(
      ((char.charCodeAt(0) - asciiUpper + shift) % 26) + asciiUpper
    );
  } else if (isLowerCase) {
    return String.fromCharCode(
      ((char.charCodeAt(0) - asciiLower + shift) % 26) + asciiLower
    );
  } else {
    return char; // do not shift anything thats not an upper or lowercase letter.
  }
}

function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = result + shiftChar(str[i], shift);
  }

  return result;
}

function calculateAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array of numbers");
  }

  return {
    average: calculateAvg(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  calculator,
  reverseString,
  caesarCipher,
  analyzeArray,
};
