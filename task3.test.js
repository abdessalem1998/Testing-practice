const calculator = require('./task3');

describe('The result of add of two numbers : ', () => {
  test('5', () => {
    //Arrange
    const input1 = 3;
    const input2 = 2;

    //Act
    const result = calculator.add(input1, input2);

    //Assert
    expect(result).toBe(5);
  });

  test('-12', () => {
    //Arrange
    const input1 = -15;
    const input2 = 3;

    //Act
    const result = calculator.add(input1, input2);

    //Assert
    expect(result).toBe(-12);
  });

  test('23', () => {
    //Arrange
    const input1 = 13;
    const input2 = 10;

    //Act
    const result = calculator.add(input1, input2);

    //Assert
    expect(result).toBe(23);
  });
});

describe('The result of the subtraction of two numbers : ', () => {
  test('2', () => {
    //Arrange
    const input1 = 5;
    const input2 = 3;

    //Act
    const result = calculator.subtract(input1, input2);

    //Assert
    expect(result).toBe(2);
  });

  test('-6', () => {
    //Arrange
    const input1 = -4;
    const input2 = 2;

    //Act
    const result = calculator.subtract(input1, input2);

    //Assert
    expect(result).toBe(-6);
  });

  test('15', () => {
    //Arrange
    const input1 = 15;
    const input2 = 0;

    //Act
    const result = calculator.subtract(input1, input2);

    //Assert
    expect(result).toBe(15);
  });
});

describe('The result of the multiplication of two numbers : ', () => {
  test('1', () => {
    //Arrange
    const input1 = 1;
    const input2 = 1;

    //Act
    const result = calculator.multiply(input1, input2);

    //Assert
    expect(result).toBe(1);
  });

  test('0', () => {
    //Arrange
    const input1 = 100;
    const input2 = 0;

    //Act
    const result = calculator.multiply(input1, input2);

    //Assert
    expect(result).toBe(0);
  });

  test('0', () => {
    //Arrange
    const input1 = 0;
    const input2 = 0;

    //Act
    const result = calculator.multiply(input1, input2);

    //Assert
    expect(result).toBe(0);
  });

  test('10', () => {
    //Arrange
    const input1 = -10;
    const input2 = -1;

    //Act
    const result = calculator.multiply(input1, input2);

    //Assert
    expect(result).toBe(10);
  });
});

describe('The result of the division of two numbers : ', () => {
  test('10', () => {
    //Arrange
    const input1 = 100;
    const input2 = 10;

    //Act
    const result = calculator.divide(input1, input2);

    //Assert
    expect(result).toBe(10);
  });

  test('0', () => {
    //Arrange
    const input1 = 0;
    const input2 = 10;

    //Act
    const result = calculator.divide(input1, input2);

    //Assert
    expect(result).toBe(0);
  });

  test('5', () => {
    //Arrange
    const input1 = 50;
    const input2 = 10;

    //Act
    const result = calculator.divide(input1, input2);

    //Assert
    expect(result).toBe(5);
  });

  test('error', () => {
    //Arrange
    const input1 = 100;
    const input2 = 0;

    //Act
    const result = () => calculator.divide(input1, input2);

    //Assert
    expect(result).toThrow(Error);
  });
});
