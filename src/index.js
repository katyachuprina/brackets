module.exports = function check(str, bracketsConfig) {
  let strLength1 = str.length;
  let strLength2 = '';

  while (strLength2 !== strLength1) {
    strLength1 = str.length;
    bracketsConfig.forEach(bracketPair => {
      bracketPair = bracketPair.join('')

      while (str.indexOf(bracketPair) >= 0) {
        str = str.replace(bracketPair,'')
      }     
    }) 
    strLength2 = str.length
  }
    
  return str.length === 0
}
