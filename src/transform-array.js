module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  };

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next') {
          resultArr.pop();
        }
        break;
      case '--double-next':
        if (arr[i + 1] !== undefined) {
          resultArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          resultArr.push(arr[i - 1]);
        }
        break;
      default:
        resultArr.push(arr[i]);
        break;
    };
  };
  return resultArr;
};
