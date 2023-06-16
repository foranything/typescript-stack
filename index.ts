class Stack<T> {
  #_stack: T[] = [];

  push(item: T): void {
    this.#_stack.push(item);
  }

  pop(): T | undefined {
    const item = this.#_stack.pop();
    return item;
  }
  peek(): T | undefined {
    return this.#_stack.at(-1);
  }
  isEmpty(): boolean {
    return this.#_stack.length === 0;
  }
}
