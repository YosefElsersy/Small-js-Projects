function generatePassword(
  length,
  includeLowercaseChars,
  includeUppercaseChars,
  includeNumbersChars,
  includeSympolsChars
) {
  const lowercaseChars = "abcdefghijklmopqrstuvwxyz";
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numbersChars = "0123456789";
  const sympolChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercaseChars ? lowercaseChars : "";
  allowedChars += includeUppercaseChars ? uppercaseChars : "";
  allowedChars += includeNumbersChars ? numbersChars : "";
  allowedChars += includeSympolsChars ? sympolChars : "";

  if (length < 1) {
    return `(Password length must be at least 1)`;
  }

  if (allowedChars === 0) {
    return `(At least 1 set of Characters need to be Selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const includePasswordLength = 20;
const includeLowercaseChars = true;
const includeUppercaseChars = true;
const includeNumbersChars = true;
const includeSympolsChars = true;

const password = generatePassword(
  includePasswordLength,
  includeLowercaseChars,
  includeUppercaseChars,
  includeNumbersChars,
  includeSympolsChars
);

console.log(password);
