class Calculator {
  add (input1,input2) {
    return input1+input2;
  }

 subtract (input1,input2) {
    return input1-input2;
  }

 divide (input1,input2) {
    if (input2 === 0) {
      throw new Error('we can not divide by 0');
    }else{
      return (input1/input2);
    }
  }

 multiply (input1,input2) {
    return (input1*input2);
  }
}

const calculator = new Calculator();

module.exports = calculator;
