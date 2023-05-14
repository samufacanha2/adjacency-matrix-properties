import { graph } from "./classes/graph";

const graph1 = new graph();

//Parque = P
//Terminal = T
//Shopping = S
//Centro = C
//Praça = R
//Avenida = A

graph1.addNode("P", "P");
graph1.addNode("T", "T");
graph1.addNode("S", "S");
graph1.addNode("C", "C");
graph1.addNode("A", "A");
graph1.addNode("R", "R");

graph1.addNode("P", "T");
graph1.addNode("T", "P");

graph1.addNode("T", "S");
graph1.addNode("S", "T");

graph1.addNode("T", "C");
graph1.addNode("C", "T");

graph1.addNode("C", "A");
graph1.addNode("A", "C");

graph1.addNode("C", "R");
graph1.addNode("R", "C");

graph1.printAdjacencyMatrix();

console.log("isReflexive: ", graph1.isReflexive());
console.log("isSymmetric: ", graph1.isSymmetric());
console.log("isAssymetric: ", graph1.isAssymetric());
console.log("isAntiSymmetric: ", graph1.isAntiSymmetric());
