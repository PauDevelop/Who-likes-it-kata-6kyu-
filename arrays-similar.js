function arraysSimilar(arr1, arr2) {
    let similar = false
    const array1Sorted = arr1.sort((a, b) => a - b)
    const array2Sorted = arr2.sort((a, b) => a - b)
    if (array1Sorted.length === array2Sorted.length) {
      for (let i = 0; i < array1Sorted.length; i++) {
        if (array1Sorted[i] === array2Sorted[i]) {
          similar = true
        } else {
          similar = false
          break
        }
      }
    } else {
      return false
    }
    return similar
  }