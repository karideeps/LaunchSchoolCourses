class CustomSet {
  constructor(array) {
    this.array = array || [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  contains(number) {
    return this.array.includes(number);
  }

  isSubset(argumentSet) {
    if (this.isEmpty()) return true;
    return this.array.every(element => {
      return argumentSet.contains(element);
    });
  }

  isDisjoint(argumentSet) {
    if (this.isEmpty() || argumentSet.isEmpty()) return true;
    return !this.array.some(element => {
      return argumentSet.contains(element);
    });
  }

  isSame(argumentSet) {
    if (this.isEmpty() && argumentSet.isEmpty()) return true;
    if (this.array.length !== argumentSet.array.length) return false;
    return this.array.every(element => {
      return argumentSet.contains(element);
    });
  }

  add(element) {
    if (!this.contains(element)) this.array.push(element);
    return this;
  }

  intersection(argumentSet) {
    let array =  this.array.filter(element => {
      return argumentSet.contains(element);
    });
    return new CustomSet(array);
  }

  difference(argumentSet) {
    if (this.isEmpty()) return new CustomSet();
    let array = this.array.filter(element => {
      return !argumentSet.contains(element);
    });
    return new CustomSet(array);
  }

  union(argumentSet) {
    let combinedArray = this.array.concat(argumentSet.array);
    let returnSet = new CustomSet();
    combinedArray.forEach(element => returnSet.add(element));
    return returnSet;
  }
}

module.exports = CustomSet;