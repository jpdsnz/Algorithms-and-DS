//------- Node Class -------//
class Graph{
  constructor(){
    this.numberOfNodes = 0;
    this.adjacentList = {}; //object
  }
  addVertex(node){
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2){
    //Undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections(){
    const allNodes = Object.keys
    (this.adjacentList);
    for(let node of allNodes){
      let nodeConnections =
      this.adjacentList[node];
      let connections = "";
      let vertex;
      for(vertex of nodeConnections){
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections(); //Prints out answer to check!

//------ Notes on Graphs ------//
/*
//Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]; //Node 0 connected to 2, node 2 connected to 3, node 2 connected to 1 etc.

//Adjacent List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]; // The index of array shows what it is connected to: eg: index 1 connected to 2 and 3


//Adjacent Matrix
const graph = [
  [0, 0, 1, 0], // node 0 is connected to node 2
  [0, 0, 1, 1], // node 1 connected to 2 and 3
  [1, 1, 0, 1], // node 2 connected to 0, 1, and 3
  [0, 1, 1, 0] //node 3 conncecte to 1, 2
]
*/
