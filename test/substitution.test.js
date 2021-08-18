// Write your tests here!
const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe ("substitution", () => {
  it ("should work properly with special characters", () => {
    const inputA = "th@se %re special ch)aracters";
    const inputB = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(inputA, inputB);
    const expected = "jd@i& %b& iu&ax$c ad)$b$aj&bi";
    expect(actual).to.equal(expected);
  })
  it ("spaces should be maintained", () => {
    const inputA = "these are spaces";
    const inputB = "abcdefghijklmnopqrstuvwxyz";
    const actual = substitution(inputA, inputB);
    const expected = "these are spaces";
    expect(actual).to.equal(expected);
  })
  it ("should treat capital letters the same as lowercase letters", () => {
    const inputA = "THESE ARE CAPITALS";
    const inputB = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(inputA, inputB);
    const expected = "jd&i& $b& a$uxj$ci";
    expect(actual).to.equal(expected);
  })
  it ("should return false if given alphabet is not 26 characters", () => {
    const inputA = "this should be false";
    const inputB = "abcdefghijklmnopqrstuvwxy";
    const actual = substitution(inputA, inputB);
    const expected = false;
    expect(actual).to.equal(expected);
  })
  it ("should return false if alphabet contains duplicate values", () => {
    const inputA = "this should also be false";
    const inputB = "zbcddfghijklmnoprrstuvwxyz";
    const actual = substitution(inputA, inputB);
    const expected = false;
    expect(actual).to.equal(expected);
  })
  it ("should properly decode message given alphabet", () => {
    const inputA = "i&ab&j y&ii$r&";
    const inputB = "$wae&zrdxtfcygvuhbijnokmpl";
    const inputC = false;
    const actual = substitution (inputA, inputB, inputC);
    const expected = "secret message";
    expect(actual).to.equal(expected); 
  })
})