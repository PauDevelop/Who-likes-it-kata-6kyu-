function rowSumOddNumbers(n) {
    let numInicio = 1
    let cambioFila = 0
    if (n === 1) {
      return 1
    } else {
      for (let i = 0; i < n - 1; i++){
        cambioFila = cambioFila + 2
        numInicio = numInicio + cambioFila
      }
    }
    let arrayFila = []
    for (let i = 0; i < n; i++){
      arrayFila[i] = numInicio
      numInicio = numInicio + 2
    }
    
    let resultado = arrayFila.reduce((a, b) => a + b)
   
    return resultado
  }