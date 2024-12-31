import { sumToNA, sumToNB, sumToNC } from "../sumToN";

describe("Sum to N Implementations", () => {
  const testCases = [
    { input: 5, expected: 15 },
    { input: 10, expected: 55 },
    { input: 0, expected: 0 },
    { input: -1, expected: 0 },
  ];

  describe("sumToNA - Iterative Implementation", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        expect(sumToNA(input)).toBe(expected);
      });
    });
  });

  describe("sumToNB - Mathematical Implementation", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        expect(sumToNB(input)).toBe(expected);
      });
    });
  });

  describe("sumToNC - Recursive Implementation", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        expect(sumToNC(input)).toBe(expected);
      });
    });
  });
});
