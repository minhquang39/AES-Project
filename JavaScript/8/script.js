function insertString(str, subStr, index) {
  if (index > str.length) {
    return str;
  }
  return str.substr(0, index) + subStr + str.substr(index);
}

console.log(insertString("hello world", "new", 5));
