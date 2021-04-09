class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    let sum = this.items.reduce((sum, value) => sum + value);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let avg = this.sum() / this.length;
    return avg
  }
}

module.exports = SortedList;
