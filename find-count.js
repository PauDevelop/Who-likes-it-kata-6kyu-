function mostFrequentItemCount(collection) {
    if (collection.length != 0) {
      const resultado = []
      for (let i = 0; i < collection.length; i++) {
        resultado[i] = collection.filter(valor => valor === collection[i]).length
      }
      resultado.sort((a, b) => b - a)
      return resultado[0]
    } else {
      return 0
    }
  }