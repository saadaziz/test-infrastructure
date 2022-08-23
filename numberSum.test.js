const numberSum = require('./numberSum');

test('numberSum.twoNumberSum : function exists', () => {
    expect(typeof numberSum.twoNumberSum).toEqual('function');
});

test('numberSum.twoNumberSum : Happy path |' +  
'Array yields two numbers such that i + j = 10', () => {
    expect(numberSum.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual(
        [11, -1]
    );
});