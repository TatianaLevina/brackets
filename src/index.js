module.exports = function check(str, bracketsConfig) {
  let history = new Array();
  for (let i = 0; i < str.length; i++) {
    for (let bracketType = 0; bracketType < bracketsConfig.length; bracketType++) {
      if (bracketsConfig[bracketType][0] === bracketsConfig[bracketType][1]) {
        if (str[i] === bracketsConfig[bracketType][0]){
          if (history.length === 0 || history.at(-1)[0] !== bracketType){
            history.push([bracketType, 1]);
          } else {
            history.pop();
          } 
          break;
        }  
      } else if (str[i] === bracketsConfig[bracketType][0]) {
        if (history.length === 0 || history.at(-1)[0] !== bracketType) {
          history.push([bracketType, 1]);
        } else {
          history.at(-1)[1] += 1;
        }
        break;
      } else if (str[i] === bracketsConfig[bracketType][1]) {
        if (history.length === 0 || history.at(-1)[0] !== bracketType) {
          return false;
        }
        history.at(-1)[1] -= 1;
        if (history.at(-1)[1] === 0) {
          history.pop();
        }
        break;
      }
    }
  }
  return history.length === 0;
}
