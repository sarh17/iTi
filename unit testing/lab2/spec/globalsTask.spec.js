var utilities= require("../index")
describe("testing math utilities", () => {
  let pos_vals=[2,4,6,8];
  let neg_vals=[-2,-4,-6,-8];
  let vals=pos_vals.concat(neg_vals);
  let sum_of_vals=vals.reduce((x,y)=>x+y,0);

  
  
  // at before each console.log all vals
  beforeEach(()=>{
    console.log(vals)
  })
 
  // at after each console.log done
  afterEach(()=>{
    console.log("done")
  })

  // at after all set all variables to 0
  afterAll(()=>{
    let pos_vals=0;
    let neg_vals=0;
    let vals=0;
    let sum_of_vals=0;

  })

  it("sum function should equal to sum of the values", () => {
    expect(utilities.sum(vals)).toEqual(sum_of_vals)

  });

  it("positive function should equal to positive values", () => {
    expect(utilities.positive(vals)).toEqual(pos_vals)


  });
});





