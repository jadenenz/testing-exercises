const reverseString = require('../functions/reverseString');

test('reverses hello into olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});