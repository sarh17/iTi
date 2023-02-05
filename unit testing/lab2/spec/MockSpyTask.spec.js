
var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
 return counter.currentValues();
}

describe("mock and spy", function () {
  var test;
 beforeEach(function(){
   test= jasmine.createSpyObj("test",["play","try"])
   test.play()
   test.try()
 })
 it("Mocking",function(){
  expect(test.play).toHaveBeenCalledTimes(1)
  expect(test.try).toHaveBeenCalledTimes(1)

})
  // and expect that we called the spy function for one time
  it("spying", function () {
    spyOn(counter,"currentValues")
    counter.currentValues()
    expect(counter.currentValues).toHaveBeenCalledTimes(1)
   

  });

});
