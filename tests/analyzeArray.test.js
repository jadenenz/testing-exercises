const analyzeArray = require('../functions/analyzeArray');

const avgObj = {
    avg: 3,
    min: 1,
    max: 5,
    length: 5
};

const myArray = [1,2,3,4,5];

test('average of 1, 2, 3, 4, 5 is 3', () => {
    expect(analyzeArray(myArray)).toMatchObject({avg: 3});
});


test('min of 1, 2, 3, 4, 5 is 1', () => {
    expect(analyzeArray(myArray)).toMatchObject({min: 1});
});

test('max of 1, 2, 3, 4, 5 is 5', () => {
    expect(analyzeArray(myArray)).toMatchObject({max: 5});
});

test('length of 1,2,3,4,5 is 5', () => {
    expect(analyzeArray(myArray)).toMatchObject({length: 5});
});