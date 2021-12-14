const stringLength = require('./task1');

test('insert "hello"  to equal 5', () => {
  //Arrange
  const input = "hello";

  //Act
  const output = stringLength('hello');

  //Assert
  expect(output).toBe(5);
});
