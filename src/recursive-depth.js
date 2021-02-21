module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        item = this.calculateDepth(item);
        if (counter < item) {
          counter = item;
        }
      };
    });
    return ++counter;
  };
};