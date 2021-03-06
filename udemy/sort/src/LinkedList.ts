import { Sorter } from "./Sorter";
import { Node } from "./Node";

export class LinkedList extends Sorter {
  head: Node | null = null;
  constructor() {
    super();
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
  print(): void {
    if (!this.head) {
      throw new Error("List is empty");
    }
    let node: Node | null = this.head;
    while (node.next) {
      console.log(node.data);
      node = node.next;
    }
  }
}
