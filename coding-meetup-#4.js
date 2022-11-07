function getFirstPython(list) {
    let firstPy = list.filter(developers => developers.language === 'Python')
    if (firstPy.length != 0){
      return `${firstPy[0].firstName}, ${firstPy[0].country}`
    } else {
      return 'There will be no Python developers'
    }
  }