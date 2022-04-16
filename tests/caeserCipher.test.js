const caesarCipher = require('../functions/caeserCipher');

test('abc shift 1 to bcd', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('xyz shift 3 wraps to abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('%^& punctuation does not change', () => {
    expect(caesarCipher('abc%^&ZDz', 4)).toBe('efg%^&DHd');
});