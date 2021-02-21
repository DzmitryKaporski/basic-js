module.exports = function countCats(matrix) {
  let allArr = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    allArr.push(...matrix[i]);
  };
  for (let q = 0; q < allArr.length; q++) {
    allArr[q] === '^^' ? count++ : '';
  };
  return count;
};
