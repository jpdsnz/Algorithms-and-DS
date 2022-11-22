//------------ Searching Notes ------------//
/*

//------ Linear Search -------//
//Best case: O(1), Worst: O(n) - will have to go through the entire list if item is at end or can't find item

Example:

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');
beasts.findIndex(function(item){
  return item === 'Godzilla';
})

beasts.find(function(item){
  return item === 'Godzilla';
})

beasts.includes('Godzilla');

//------ Binary Search -------//
  - Knowing the list is sorted, can discard half the items instead of 1 at a time!
  - Essentially is a binary search tree

//------ Breadth First Search Traversal -------//
  1. Start with root node
  2. Move left to right across 2nd level
  3. Move Left to right across 3rd level...
  4. Repeat..until you find node you are looking for tree ends
  Notes: Uses additional memory because you need to track every node
  and it's children in order!

  * look at bfs.js for how the code looks!

  //------ Depth First Search Traversal -------//
    1. Start with root node
    2. Move down to next level on left
    3. Move down to next level child (going deep first)
    4. Check if there are any other children
    5. If no more children, go back to root
    6. Repeat process for right side!
    Notes: Has a lower memory requirement, because it's not necessary to store all child
    pointers at each level.

    * look at bfs.js for how the code looks!


    //------ BFS vs. DFS -------//
    BFS:  O(n), Shortest path, closer nodes, more memory
    DFS:  O(n), Less memory, does path exist?, can get slow

//------ Interview Questions ------//
If you know a solution is not far from the root of the tree?
  BFS
If the tree is very wide?
  DFS, b/c BFS will need too much memory and it needs to keep track of nodes with a queue

If the tree is very deep and solutions are rare?
  BFS, because DFS will take a long time with this type of tree because it is deep, b/c
  solutions are rare, it will repeat

If the solutions are frequent but located deep in the tree?
  DFS, because you should be able to find it quicker

Determining whether a path exists between two nodes?
  DFS

Finding the shortest path?
  BFS



//------- Extra Cases -------//
  BFS, DFS: Does not take account the weights of graphs!
  //---
  Bellman-Ford: Weighted graph with negative weights, can take a long time to run, O(n^2)
  Dijkstra:     Faster than Bellman-Ford, but can't take into account negative weight!
*/
