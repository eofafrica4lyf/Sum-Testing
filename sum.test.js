const summation = require('./sum');

test('No input parameters', ()=>{
    expect(summation()).toBe('Invalid input(s)');
})

test('adds 1 + 2 to equal 3', ()=>{
    expect(summation(1,2)).toBe(3);
});

test('adds 0.1 + 0.2 to equal 3', ()=>{
    expect(summation(0.1,0.2)).toBeCloseTo(0.3);
});

test('firstNumber and secondNumber are NaN',()=>{
    expect(summation(NaN,NaN)).toEqual('Not a Number')
});

test('firstNumber and secondNumber are not real numbers', ()=>{
    expect(summation('a',1)).toEqual('Invalid input(s)');
});
