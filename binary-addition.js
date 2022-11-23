function addBinary(a,b) {
    let suma = a + b
    let result = []
    while (suma !== 0){
          let residuo = parseInt(suma % 2)
          suma = Math.floor(suma / 2);
          result.push(residuo);
    }
    return result.join('')
  }