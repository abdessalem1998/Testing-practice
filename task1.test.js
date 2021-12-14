const stringLength = require('./task1');

test('insert "hello"  to equal 5', () => {
  //Arrange
  const input = 'hello';

  //Act
  const output = stringLength(input);

  //Assert
  expect(output).toBe(5);
});

test('The length of the input should not exceed 10 characters', () => {
  const input = 'hellohello';

  const output = stringLength(input);

  expect(output).not.toBeGreaterThan(10);
});

test('The length of the input should not be less than 1 character', () => {
  const input = 'h';

  const output = stringLength(input);

  expect(output).not.toBeLessThan(1);
});
