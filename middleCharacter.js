function getMiddle(s)
{
  const i = Math.floor(s.length / 2);
  let result = s[i];  
  if(s.length % 2 === 0 && i > 0) {
    result = s[i-1] + result;//from   w  w  w  . j  a  v  a  2s.com
  }
  return result;
}

const action = getMiddle("c");
console.log(action);