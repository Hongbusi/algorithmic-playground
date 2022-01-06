/**
 * @source https://leetcode-cn.com/problems/simplify-path
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function(path) {
  const names = path.split('/');
  const stack = [];
  for (const name of names) {
    if (name === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== '.') {
      stack.push(name);
    }
  }

  return '/' + stack.join('/');
};
