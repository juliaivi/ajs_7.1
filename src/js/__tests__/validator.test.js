import Validator from '../validator';

test('Name starts with a number', () => {
  const result = new Validator('3liana').validateUsername();
  expect(result).toBe(false);
});

test('Name ends with a number', () => {
  const result = new Validator('Liana3').validateUsername();
  expect(result).toBe(false);
});

test('When there are more than three numbers in a row in a name', () => {
  const result = new Validator('Lia3333na').validateUsername();
  expect(result).toBe(false);
});

test('When the name has three digits in a row', () => {
  const result = new Validator('Lia333na').validateUsername();
  expect(result).toBe(true);
});

test('When there is a dash, underscore, or number in the name', () => {
  const result = new Validator('Lia_3-an').validateUsername();
  expect(result).toBe(true);
});

test('correct name', () => {
  const result = new Validator('Liana').validateUsername();
  expect(result).toBe(true);
});
