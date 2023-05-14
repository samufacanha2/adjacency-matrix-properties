class node {
  constructor(
    public id: string,
    public parent: node[] = [],
    public children: node[] = []
  ) {
    this.id = id;
    this.parent = parent;
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

  addParent(parent: node) {
    this.parent.push(parent);
  }
}

export { node };
