const summation = require('./sum');

test('adds 1 + 2 to equal 3', ()=>{
    expect(summation(1,2)).toBe(3);
});

test('adds 0.1 + 0.2 to equal 3', ()=>{
    expect(summation(0.1,0.2)).toBe(0.3);
});

test('firstNumber is not a real number', ()=>{
    expect(summation('a',1)).toEqual('Invalid input(s)');
});

test('secondNumber is not a real number',()=>{
    expect(summation(1,'a')).toEqual('Invalid input(s)');
});