class Stack<T> {
  #stack: T[] = [];

  push(item: T): void {
    this.#stack.push(item);
  }

  pop(): T | undefined {
    const item = this.#stack.pop();
    return item;
  }
  peek(): T | undefined {
    return this.#stack.at(-1);
  }
  isEmpty(): boolean {
    return this.#stack.length === 0;
  }
}
