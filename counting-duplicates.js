function duplicateCount(text){
    const arrayText = text.toLowerCase().split('')
    const noDuplicates = arrayText.filter((item,index)=>{
      return arrayText.indexOf(item) === index;
    })
    let contador = 0
    for (let i = 0; i < noDuplicates.length; i++) {
      let caracter = arrayText.filter(element => element === noDuplicates[i]).length
      if (caracter > 1) {
        contador++
      }
    }
    return contador
  }