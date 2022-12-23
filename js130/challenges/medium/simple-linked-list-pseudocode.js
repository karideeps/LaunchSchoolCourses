/*

declare class `Element`
  constructor(datum, next)
    this.datum = datum
    this.next = next

  datum()
    returns this.data

  isTail()
    return !!this.next

  next()
    return this.next


declare class `SimpleLinkedList`
  constructor()
    this.head = undefined;
  push(datum)
    let head = new Element(datum, this.head)
    this.head = head;

  pop()
    let previousHead = this.head();
    this.head = previousHead.next();
    return previousHead.datum();

  head()
    return this.head;

  size()
    let size = 0
    if (!this.head()) return size
    let currentElement = this.head;
    while (currentElement.next()) {
      currentElement = currentElement.next();
      size += 1
    }
    return size

  isEmpty()

  peek()
    return this.head ? head.datum() || null;

  static fromArray(array)
    let list = new SimpleLinkedList();
    if (!array) return list;
    REVERSE `array`
    forEach element in `array`
      list.push(element)
    return list

  toArray()
    let array = [];
    let currentElement = this.head;
    if !this.head return array
    while (currentElement) {
      array.push(currentElement.datum())
      currentElement = this.head.next();
    }
    return array.reverse();

  reverse();
    return SimpleLinkedList.fromArray(list.toArray.reverse());





*/