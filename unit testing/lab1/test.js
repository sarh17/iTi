const index= require('./index')
const assert= require('assert')
const expect = require("chai").expect
const assertChai = require("chai").assert
const should = require("chai").should()
var x=1;

describe("test parameter to be string", function(){

    it("takes string parameter",function(){
        assertChai.equal(index.capitalizeText(""), "")
    })


    it("takes string parameter return uppercase",function(){
        assertChai.equal(index.capitalizeText("iti"), "ITI")
    })


    it("if it takes number throw error ",function(){
        expect(
            function(){
                index.capitalizeText(4)
            }).to.throw(TypeError, "parameter should be string")
    })



    it(" the returned value will not equal to hello",function(){
        expect(index.capitalizeText("iti")).to.not.equal("hello")
    })

})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("test that the return value of type array",()=>{
    it("the returned value is array", ()=>{
        expect(index.createArray()).to.be.an("array")
    })

    it("the returned value is array of length 3 and test it's include 1", ()=>{
        expect(index.createArray(3)).to.be.an("array").that.includes(1).that.lengthOf(3)
    })
    beforeEach(function(){
        console.log(x++)
    })
       
    })  
    

