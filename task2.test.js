const reverseString = require('./task2');

test('insert "hello"  to equal "olleh" ', () => {
  //Arrange
  const input = 'hello';

  //Act
  const output = reverseString(input);

  //Assert
  expect(output).toEqual('olleh');
});
