import {add, subtract } from './Calc'


CalcTest = ('adds two numbers', () => {
    expect(add(1,2)).toBe(3);
    expect(add (5,1)).toBe(6);
    expect(add(-1,-2)).toBe(-3);
}
  );

test('subtracts two numbers',() =>{
    expect(subtract(1,2)).toBe(-1);
    expect(subtract(5,1)).toBe(4);
    expect(subtract(0,5)).toBe(-5);
});

//export default CalcTest