module.exports = function tiny(string) {
  if (typeof string !== 'string') throw new TypeError('Tiny expects a string!')
  return string.replace(/\s/g, '')
}