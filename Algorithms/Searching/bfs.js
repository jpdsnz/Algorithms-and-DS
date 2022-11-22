//------- Node Class -------//
class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//------ BST Class ------//
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(this.root === null)
      this.root = newNode;
    else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Go Left
          if(!currentNode.left)
          {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        else{
          //Go Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value){
    //Return node we are looking for or return null if cannot find
    if(!this.root)
      return false;
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value)
        currentNode = currentNode.left;
      else if(value > currentNode.value)
        currentNode = currentNode.right;
      else if(currentNode.value === value)
        return currentNode;
    }
    return false; //Did not find anything!
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

  breadthFirstSearch(){ //The queue will get very large for very wide tree! Memory consumption could be large!
    let currentNode = this.root;
    let list = []; //Where the answer goes.
    let queue = []; // Keep track of the lv we are at so we can access the children
    queue.push(currentNode);

    while(queue.length > 0){ //nothing left in queue
      currentNode = queue.shift(); //Shift takes first item in the queue first person in roller coaster goes. (remove first item in queue)
      console.log(currentNode.value);
      list.push(currentNode.value); // add 9
      if(currentNode.left)
        queue.push(currentNode.left); //add 4 to q
      if(currentNode.right)
        queue.push(currentNode.right);
    }
    return list;
  }



 //Recursive approach
  breadthFirstSearchR(queue, list){ //have to pass queue and list because recursive!
    if(!queue.length) //base case: if queue = 0!
      return list;
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left)
      queue.push(currentNode.left); //add 4 to q
    if(currentNode.right)
      queue.push(currentNode.right);
    return this.breadthFirstSearchR(queue, list);
  }

  DFSInOrder(queue, list){
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder(queue, list){
    return traversePostOrder(this.root, []);
  }

  DFSPreOrder(queue, list){
    return traversePreOrder(this.root, []);
  }


// End BST class
}

function traverseInOrder(node, list){
  console.log(node.value);
  if(node.left)
    traverseInOrder(node.left, list);
  list.push(node.value);
  if(node.right)
    traverseInOrder(node.right, list);
  return list;
}

function traversePreOrder(node, list){
  console.log(node.value);
  list.push(node.value); //Push first!
  if(node.left)
    traversePreOrder(node.left, list);
  if(node.right)
    traversePreOrder(node.right, list);
  return list;
}

function traversePostOrder(node, list){
  console.log(node.value);
  if(node.left)
    traversePostOrder(node.left, list);
  if(node.right)
    traversePostOrder(node.right, list);
  list.push(node.value); //Push first!
  return list;
}

//------ Execution ------//
//      9
//  4     20
//1   6  15  170

//---- What the searches should look like ----//
//BFS = [9, 4, 20, 1, 6, 15, 170]
//DFS = [9, 4, 1, 6, 20, 15, 170]
//---- DFS Traversals ----///
  //InOrder   = [1, 4, 6, 9, 15, 20, 170] //(Left, Root, Right) Done in number order
  //preOrder  = [9, 4, 1, 6, 20, 15, 170] //(Root, left, Right) Good for recreating a traverse
  //postOrder = [1, 6, 4, 15, 170, 20, 9] //(Left, Right, Root)

  //Memory consumption is O(height of the tree)


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//console.log(tree.lookup(20));
//console.log(tree); //Show the tree in console

//tree.breadthFirstSearch();
//tree.breadthFirstSearchR([tree.root], []); //pass root node, and an empty array!

//DFS Traversals
//console.log(tree.DFSInOrder());
//console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

//console.log(JSON.stringify(traverse(tree.root)));
//tree.remove(4);
//console.log(JSON.stringify(traverse(tree.root)));



function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null :
  traverse(node.left);
  tree.right = node.right === null ? null :
  traverse(node.right);
  return tree;
}
