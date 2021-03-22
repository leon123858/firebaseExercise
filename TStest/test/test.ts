import sum from '../src/sum'

test('add 100 + 229 is equal 329',()=>{
  let x:number=100,y:number=229;
  let expected:number = 329;
  let local_ans = sum(x,y);
  expect(local_ans).toBe(expected);
})