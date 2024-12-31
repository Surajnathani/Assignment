/**
 * Implementation 1: Iterative Approach
 * Time Complexity: O(n) - Linear time as it iterates from 1 to n
 * Space Complexity: O(1) - Constant space
 */
export function sumToNA(n: number): number {
  if (n < 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Implementation 2: Mathematical Approach using Arithmetic Progression Formula
 * Time Complexity: O(1) - Constant time as it uses direct formula
 * Space Complexity: O(1) - Constant space
 */
export function sumToNB(n: number): number {
  if (n < 0) return 0;

  return Math.floor((n * (n + 1)) / 2);
}

/**
 * Implementation 3: Recursive Approach
 * Time Complexity: O(n) - Linear time due to n recursive calls
 * Space Complexity: O(n) - Linear space due to call stack
 */
export function sumToNC(n: number): number {
  if (n < 0) return 0;
  if (n <= 1) return n;

  return n + sumToNC(n - 1);
}
