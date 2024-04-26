/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (brackets[char]) { 
            stack.push(char);
        } else { 
            const lastOpenBracket = stack.pop();
            if (brackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };


