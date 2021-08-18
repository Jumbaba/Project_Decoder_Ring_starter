// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false given an invalid shift value", () => {
    const inputA = "hello my name is steve.";
    const inputB = 100;
    const expected = false;
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should return spaces and special characters as is", () => {
    const inputA = "? ? ? ? ? ?";
    const inputB = 3;
    const expected = "? ? ? ? ? ?";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should treat capital letters the same as lowercase letters", () => {
    const inputA = "APPLE";
    const inputB = 3;
    const expected = "dssoh";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should wrap around alphabet if letters are shifted 'off' the alphabet", () => {
    const inputA = "z";
    const inputB = 3;
    const expected = "c";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  })
})