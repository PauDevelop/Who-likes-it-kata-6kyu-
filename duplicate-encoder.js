function duplicateEncode(word){
    const array = word.toLowerCase().split('')
    const newWord = []
    for (let i = 0; i < array.length; i++) {
      let letraArray = array.filter(letra => letra === array[i])
      if (letraArray.length > 1) {
        newWord[i] = ')'
      } else {
        newWord[i] = '('
      }
    }
  return newWord.join('')
}