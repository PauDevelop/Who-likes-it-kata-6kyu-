function countDevelopers(list) {
    let europeJsDevelopers = 0
    for (let i = 0; i < list.length; i++) {
      if ((list[i].continent === 'Europe') && (list[i].language === 'JavaScript')) {
        europeJsDevelopers++
      }
    }
    return europeJsDevelopers
  }