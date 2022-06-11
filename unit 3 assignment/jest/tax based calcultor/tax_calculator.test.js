   import taxcalculator from "./script/taxcalculator"


test('test taxcalculator function', ()=>{

    expect(taxcalculator(300000,20000)).toBe (29000);
});