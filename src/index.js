
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resaulArr = []
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          resaulArr.push(matrix[i][j])
        }
      } else {
        for (let j = matrix[i].length - 1; j > -1; j--) {
          resaulArr.push(matrix[i][j])
        }
      }
    }
  }
  return resaulArr;
}
