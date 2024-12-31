import { sumToNA, sumToNB, sumToNC } from "./sumToN";

const testValue = 10;

console.log(`\nTesting with n = ${testValue}`);
console.log("Method A (Iterative):", sumToNA(testValue));
console.log("Method B (Mathematical):", sumToNB(testValue));
console.log("Method C (Recursive):", sumToNC(testValue));
