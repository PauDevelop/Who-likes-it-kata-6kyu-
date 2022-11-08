function fakeBin(x){
    let binaryX = ''
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        binaryX += '0'
      } else {
        binaryX += '1'
      }
    }
    return binaryX
  }