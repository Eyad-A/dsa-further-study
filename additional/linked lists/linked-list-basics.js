class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    traverseEveryOther() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count % 2 === 0) console.log(currentNode.val);
      currentNode = currentNode.next;
      count++;
    }
  }
    find(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    append(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

const train = new LinkedList();
train.append('engine');
train.append('car1');
train.append('car2');

const favColors = new LinkedList();
favColors.append('black');
favColors.append('gray');
favColors.append('maroon');