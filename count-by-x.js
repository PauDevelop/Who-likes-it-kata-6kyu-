function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z[i-1] = x * i
    }
    return z;
  }