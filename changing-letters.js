function swap (string) {
    let stringArray = string.split('')
    let vowels = ['a','e', 'i', 'o', 'u']
    for (let i = 0; i < stringArray.length; i++) {
      if (vowels.includes(stringArray[i])) {
        stringArray[i] = stringArray[i].toUpperCase()
      }
    }
    return stringArray.join('');
  }