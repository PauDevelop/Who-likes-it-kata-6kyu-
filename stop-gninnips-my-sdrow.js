function spinWords(string){
    const array = string.split(' ')
    const result = []
    for (let i = 0; i < array.length; i++) {
      const newString = array.slice(i, i + 1).join('')
      if (newString.length >= 5) {
        let array2 = newString.split('')
        let word = []
        let count = 0
        for (let i = array2.length - 1; i >= 0; i--) {
          word[count] = array2[i]
          count++
        }
        result[i] = word.join('')
      } else {
        result[i] = newString
      }
    }
    return result.join(' ')
  }