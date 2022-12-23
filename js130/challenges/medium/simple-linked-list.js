class SimpleLinkedList {
  constructor() {
    this.headElement = undefined;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!array || array.length === 0) return list;
    let reversedArray = array.slice().reverse();
    reversedArray.forEach(element => list.push(element));
    return list;
  }

  size() {
    let size = 0;
    let currentElement = this.headElement;
    while (currentElement) {
      currentElement = currentElement.next();
      size += 1;
    }
    return size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(storedDatum) {
    let headElement = new Element(storedDatum, this.headElement);
    this.headElement = headElement;
  }

  peek() {
    return this.headElement ? this.headElement.datum() : null;
  }

  head() {
    return this.headElement;
  }

  pop() {
    let previousHead = this.headElement;
    this.headElement = previousHead.next();
    return previousHead.datum();
  }

  toArray() {
    let array = [];
    let currentElement = this.headElement;
    while (currentElement) {
      array.push(currentElement.datum());
      currentElement = currentElement.next();
    }
    return array;
  }

  reverse() {
    let currentElement = this.headElement;
    let nextElement = this.headElement.next();
    currentElement.nextElement = undefined;

    while (nextElement) {
      let nextElementNextElement = nextElement.next();
      nextElement.nextElement = currentElement;
      currentElement = nextElement;
      nextElement = nextElementNextElement;
    }

    this.headElement = currentElement;

    return this;

    // return SimpleLinkedList.fromArray(this.toArray().reverse()); this code creates new objects so it is memory inefficient
  }
}

class Element {
  constructor(storedDatum, nextElement) {
    this.storedDatum = storedDatum;
    this.nextElement = nextElement;
  }

  datum() {
    return this.storedDatum;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.nextElement || null;
  }
}

module.exports = { SimpleLinkedList, Element };