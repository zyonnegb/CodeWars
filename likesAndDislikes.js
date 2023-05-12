// Like, Dislike, Nothing come from Preloaded
function likeOrDislike(buttons) {
    let count = 'Nothing';
    
    for (let i = 0; i < buttons.length; i++){
       if (buttons[i] === count){
      count = 'Nothing'
    } else {
      count = buttons[i]
      }
    }
    return count
  }