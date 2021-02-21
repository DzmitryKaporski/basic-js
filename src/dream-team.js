module.exports = function createDreamTeam(arr = []) {
  if (!Array.isArray(arr)) {
    return false;
  } else {
    let arrStr = [];
    let arrStringsWithoutSpaces = [];
    let arrDreamTeam = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      typeof item === 'string' ? arrStr.push(arr[i]) : '';
    };

    for (let q = 0; q < arrStr.length; q++) {
      let stringWithoutSpaces = arrStr[q].replace(/\s/g, '');
      arrStringsWithoutSpaces.push(stringWithoutSpaces);
    };

    for (let q = 0; q < arrStringsWithoutSpaces.length; q++) {
      let str = arrStringsWithoutSpaces[q];
      let firstLetterStr = str.charAt(0);
      arrDreamTeam.push(firstLetterStr.toUpperCase());
    };

    return arrDreamTeam.sort().join('');
  };
};
