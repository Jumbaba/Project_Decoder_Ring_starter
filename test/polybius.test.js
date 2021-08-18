// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should return a string when encoding", () => {
    const inputA = "this is a string";
    const expected = "string";
    const actual = typeof polybius(inputA);
    expect(actual).to.equal(expected);
  })
  it("should return false if the number of characters excluding strings is odd", () => {
    const inputA = "12 13 14 15 3";
    const inputB = false;
    const expected = false;
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should maintain spaces throughout given spaces", () => {
    const inputA = "these are spaces";
    const expected = true;
    const actual = polybius(inputA).includes(" ");
    expect(actual).to.equal(expected);
  })
  it("should treat capitals like lowercase", () => {
    const inputA = "THIS IS CAPITAL";
    const expected = "44324234 4234 31115342441113";
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
  })
  it("should return 42 when encoding i or j", () => {
    const inputA = "this is an i and j";
    const expected = "44324234 4234 1133 42 113341 42";
    const actual = polybius(inputA);
    expect(actual).to.equal(expected);
  })
  it("should return i and j when decoding 42", () => {
    const inputA = "42";
    const inputB = false;
    const expected = true;
    const actual = polybius(inputA, inputB).includes("i") && polybius(inputA, inputB).includes("j");
    expect(actual).to.equal(expected);
  })
})
