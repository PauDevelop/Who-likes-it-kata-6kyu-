function isValidWalk(walk) {
    let initialPos = 0
    if (walk.length >= 10) {
      for (let i = 0; i < walk.length; i++) {
        if (walk[i] === ('n' || 'e')) {
          initialPos++
        } else {
          initialPos--
        }
      }
    } else {
      return false
    }
    return initialPos === 0 ? true : false
  }

  