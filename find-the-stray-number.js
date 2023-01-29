function stray(numbers) {
    const numbersOrd = numbers.sort((a, b) => a - b)
    if (numbersOrd[0] !== numbersOrd[1]) {
      return numbersOrd[0]
    } else {
      return numbersOrd[numbersOrd.length - 1]
    }
  }