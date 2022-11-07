function isRubyComing(list) {
    if (list.filter(developers => developers.language === 'Ruby').length > 0) {
      return true
    } else {
      return false
    }
  }