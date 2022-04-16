const analyzeArray = require('../functions/analyzeArray');

test('average of 1, 2, 3, 4, 5 is 3', () => {
    expect(analyzeArray([1,2,3,4,5])).toBe(3);
});