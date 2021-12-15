const capitalize = require('./task4');

test('Capitalized string', () => {
  //Arrange
  const input = 'hello';

  //Act
  const output = capitalize(input);

  //Assert
  expect(output).toEqual('Hello');
});

test('Capitalized string', () => {
  //Arrange
  const input = 's';

  //Act
  const output = capitalize(input);

  //Assert
  expect(output).toEqual('S');
});
