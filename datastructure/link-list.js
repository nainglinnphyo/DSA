class Node {
     constructor(data, next = null) {
          this.data = data;
          this.next = next;
     }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
