function findShort(s) {
    const stringArray = s.trim().split(" ");
    const orderedArray = stringArray.sort((a, b) => {
      return a.length - b.length;
    })
    return orderedArray[0].length;
  }
  
  console.log(findShort(" try set manually "))  // 3 is correct now!