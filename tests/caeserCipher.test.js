const caesarCipher = require('../functions/caeserCipher');

test('abc shift 1 to bcd', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});