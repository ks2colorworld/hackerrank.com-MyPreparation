// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {

    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    // online : https://www.hackerrank.com/challenges/30-binary-trees/problem?isFullScreen=true
    // console.log(root);
    const q = [root];
    // console.log(q);
    while (0 < q.length) {
      const n = q.shift();
      if (n) {
        // console.log(n.data);
        process.stdout.write(n.data+' ');
        q.push(n.left)
        q.push(n.right)
      }
    }
    // if (!root) {
    //   return '';
    // }
    // const left = root.left;
    // const right = root.right;
    // console.log(root.data, this.levelOrder(left), this.levelOrder(right));
    // // console.log(root.data, root.left.data, root.right.data);
    // return left.data+ ' '+right.data+ ' ';
  }; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
  _input += data;
});

process.stdin.on('end', function () {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split('\n').map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});

/* 
node Day23-BinaryTrees.js < Day23-BinaryTrees-input.txt
 */