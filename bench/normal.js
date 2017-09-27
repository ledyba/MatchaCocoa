const WORDS = require('./words.js');
/**
 * @arg {string} str
 */
module.exports = function(str) {
  for(var i=0;i<WORDS.length; i++){
    if(str.indexOf(WORDS[i]) >= 0){
      return true;
    }
  }
  return false;
};