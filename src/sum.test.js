import sum from './sum'
TestRunner('1 add 2 equals 3',()=>{
    expect(sum(1,3).toBe(3));
});