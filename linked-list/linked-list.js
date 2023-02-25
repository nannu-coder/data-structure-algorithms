//Create Node
class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

//Create List
class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const list = new Linkedlist(4);
list.append(5);
list.append(7);
list.prepend(1);
console.log(list);
