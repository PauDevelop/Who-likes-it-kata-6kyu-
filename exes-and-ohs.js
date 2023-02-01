function XO(str) {
    const numX = str.toLowerCase().split('').filter(letter => letter === 'x').length
    const numO = str.toLowerCase().split('').filter(letter => letter === 'o').length
    return numX === numO
}