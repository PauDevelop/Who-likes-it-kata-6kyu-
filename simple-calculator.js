function calculator(a,b,sign){
    let result = 0
    if (typeof (a && b) === 'number'){
      if (sign === '+') {
        result = a + b
      } else if (sign === '-') {
        result = a - b
      } else if (sign === '*') {
        result = a * b
      } else if (sign === '/') {
        result = a / b
      } else {
        return 'unknown value'
      }
    } else {
      return 'unknown value'
    }
    return result
  }