class node {
  constructor(public id: string, public children: node[] = []) {
    this.id = id;
  }

  addChild(child: node) {
    this.children.push(child);
  }

  removeChild(child: node) {
    this.children = this.children.filter((node) => node.id !== child.id);
  }

  hasChild(child: node) {
    return this.children.some((node) => node.id === child.id);
  }
}

export { node };
