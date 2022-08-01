// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// S O L U T I O N

function reverseWords(str) {
  // Go for it
  str = str.split(' ');
  str = str.map(x => x.split('').reverse());
  str = str.map(x => x.join(''));
  return str.join(' ');
}
