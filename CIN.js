function calculateCompoundInterest(P, R, n, t) {
    const amount = P * Math.pow((1 + R / n), n * t);
    const interest = amount - P;
    return interest.toFixed(2);
  }
  console.log(calculateCompoundInterest(2000, 0.08, 12, 5)); // Output: 979.69
  