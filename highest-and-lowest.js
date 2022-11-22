function highAndLow(numbers){
    const arrayNums = numbers.split(' ').sort((a, b) => b - a)
    return `${arrayNums[0]} ${arrayNums[arrayNums.length - 1]}`
  }