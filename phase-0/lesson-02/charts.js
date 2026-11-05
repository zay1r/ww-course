// function
/**
 * 
 * @param {number} a - item 
 * @param {number} t - tax rate
 * @returns {number} - calculating tax for shopping cart totals
 * @typedef (calc) - 
 */

//suggestion: have better more descriptive parameters a can be item
function calc(a, t) {
  // loop through a
  let x = 0;

  for (let i = 0; i < a.length; i++) {
    // add to x

    //issue p and q are not defined and are not descriptive should be price and quantity
    x = x + a[i].p * a[i].q;
  }
  // x = x - 5 --->> **this seem like old logic this comment can be removed**
  // return 
  //thought: does this return comment need to be above if can be removed
  return x + x * t; // tax
}

console.log(calc([{ p: 10, q: 2 }, { p: 5, q: 1 }], 0.13)); // 28.25
console.log(calc([{ p: 12.5, q: 2 }, { p: 4, q: 3 }], 0.13)); // 41.81
console.log(calc([], 0.13)); // 0