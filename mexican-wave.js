function wave(str){
  let array = str.trim().split('')
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] != ' '){
      array[i] = array[i].toUpperCase()
      result[i] = array.join('')
      array[i] = array[i].toLowerCase()
    }
  }
  return result.join(',').replace(',,', ',').split(',')
}

result = wave(' gap ')
console.log(result)

