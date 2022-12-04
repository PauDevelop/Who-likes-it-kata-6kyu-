var uniqueInOrder=function(iterable){
    let array = Array.from(iterable)
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i-1]){
        result.push(array[i])
      }
    }
    return result
  }