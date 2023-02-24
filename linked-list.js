// Linked List Implementation in javascript

// Creating Node
class Node {
  constructor() {
    (this.value = 0), (this.next = null);
  }
}

let head = null;
let one = null;
let two = null;
let three = null;

//Allocate three node in the heap
one = new Node();
two = new Node();
three = new Node();

//Assign value in values
one.value = 1;
two.value = 2;
three.value = 3;

//print linked list value
head = one;

while (head != null) {
  // document.write(head.value)
  console.log(head.value);
  head = head.next;
}
