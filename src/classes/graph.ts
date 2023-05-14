import { node } from "./node";

class graph {
  matrix: number[][] = [];
  nodes: node[] = [];

  constructor() {}

  addNode(parentNode: string, childNode: string) {
    let parent = this.nodes.find((node) => node.id === parentNode);
    if (!parent) {
      parent = new node(parentNode);
      this.nodes.push(parent);
    }
    let child = this.nodes.find((node) => node.id === childNode);
    if (!child) {
      child = new node(childNode);
      this.nodes.push(child);
    }

    if (parent && child) {
      parent.addChild(child);
      child.addParent(parent);
    }

    this.getAdjacencyMatrix();
  }

  printAdjacencyList() {
    this.nodes.forEach((node) => {
      console.log(node.id + " -> " + node.children.map((node) => node.id));
    });
  }

  getAdjacencyMatrix() {
    this.matrix = [];

    this.nodes.forEach((node) => {
      const row: number[] = [];
      this.nodes.forEach((node2) => {
        if (node.hasChild(node2)) {
          row.push(1);
        } else {
          row.push(0);
        }
      });
      this.matrix.push(row);
    });
  }

  printAdjacencyMatrix() {
    let str = "  ";

    this.nodes.forEach((node) => {
      str += node.id + " ";
    });

    console.log(str);

    this.matrix.forEach((row, index) => {
      str = this.nodes[index].id + " ";
      row.forEach((col) => {
        str += col + " ";
      });
      console.log(str);
    });
  }

  isReflexive() {
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][i] !== 1) {
        return false;
      }
    }

    return true;
  }

  isSymmetric() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[i][j] !== this.matrix[j][i]) {
          return false;
        }
      }
    }

    return true;
  }

  isAssymetric() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (i !== j && this.matrix[i][j] === this.matrix[j][i]) {
          return false;
        } else if (i === j) {
          if (this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
    }

    return true;
  }

  isAntiSymmetric() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (i !== j && this.matrix[i][j] === 1 && this.matrix[j][i] === 1) {
          return false;
        }
      }
    }

    return true;
  }
}

export { graph };
