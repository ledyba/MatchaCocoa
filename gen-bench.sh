#! /bin/bash

cat > bench/sm.js <<EOF
module.exports=$(stack exec matcha-cocoa js-statemachine words.txt);
EOF
cat > bench/naive.js <<EOF
module.exports=$(stack exec matcha-cocoa js-naive words.txt);
EOF
cat > bench/regex.js <<EOF
let pat = new RegExp("$(stack exec matcha-cocoa regex words.txt)");
/**
 * @arg {string} str
 */
module.exports = function(str) {
  return pat.test(str);
};
EOF
	
	
	
