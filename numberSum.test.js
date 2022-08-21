const numberSum = require('./numberSum');

test('getArtisticPhotographCount function exists', () => {
    expect(typeof numberSum.twoNumberSum).toEqual('function');
});

test('Happy path | Array yields two numbers such that i + j = 10', () => {
    expect(numberSum.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual(
        [11, -1]
    );
});