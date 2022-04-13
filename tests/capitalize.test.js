const capitalize = require('../functions/capitalize');

test('capitalizes aPPLE into APPLE', () => {
    expect(capitalize('aPPLE')).toBe('APPLE');
});

test('capitalizes apple into Apple', () => {
    expect(capitalize('apple')).toBe('Apple');
});

