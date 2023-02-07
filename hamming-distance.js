function hamming(a,b) {
    let result = 0
    for (let i = 0; i < a.length; i++) {
        a[i] !== b[i] ? result++ : result
    }
    return result
}