const calculator = require('../functions/calculator');

test('adds 1 + 2', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('subtracts 34 - 4', () => {
    expect(calculator.subtract(34, 4)).toBe(30);
})

test('divides 9 / 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
})

test ('multiply 7 * 5', () => {
    expect(calculator.multiply(7, 5)).toBe(35);
})