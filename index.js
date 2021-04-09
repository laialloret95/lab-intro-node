class SortedList {
  constructor() {
    this.items = [1,2,3],
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
    let sum = this.items.reduce((sum, value) => sum + value);
    return sum;
  }

  avg() {}
}

let list = new SortedList();
list.sum()

module.exports = SortedList;
