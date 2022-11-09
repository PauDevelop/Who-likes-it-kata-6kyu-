function Hero (name) {
    let newHero = {
      name: name,
      position: '00',
      health: 100,
      damage: 5,
      experience: 0
    }
    if (name === undefined) {
      newHero["name"] = 'Hero'
    }
    return newHero
  }