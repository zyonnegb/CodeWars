function howMuchILoveYou(nPetals) {
    const phrase = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all'
    ];
    return phrase[(nPetals - 1) % phrase.length];
  }
  howMuchILoveYou(1);  // I love you
  howMuchILoveYou(2);  // a little
  howMuchILoveYou(3);  // a lot
  howMuchILoveYou(4);  // passionately
  howMuchILoveYou(5);  // madly
  howMuchILoveYou(6);  // not at all
  howMuchILoveYou(7);  // I love you