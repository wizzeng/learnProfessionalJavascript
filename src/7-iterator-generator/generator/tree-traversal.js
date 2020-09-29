class Node {
    left = null;
    right = null;
    value = null;

    constructor(value) {
        this.value = value;
    }
}

function* traversalTree(root) {
    if (root) {
        console.log(root.value);
        yield root.value;
        yield* traversalTree(root.left);
        yield* traversalTree(root.right);
    }
}

const tree = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(5);
const node5 = new Node(6);
const node6 = new Node(7);
const node7 = new Node(8);
const node8 = new Node(9);
const node9 = new Node(10);


tree.left = node1;
tree.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = node5;
node2.right = node6;

node3.left = node7;
node3.right = node8;

node4.left = node9;


const traversalValue = [...traversalTree(tree)];
console.log(traversalValue);