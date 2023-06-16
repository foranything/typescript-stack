조금 더 복잡한 문제를 제공해 보겠습니다. 다음 클래스를 작성해 보세요:

```typescript
class Stack<T> {
    // 여기에 코드를 작성하세요.
}
```

여기서 `T`는 일반적인 타입입니다. 이 클래스는 다음의 메서드를 가지고 있어야 합니다:

1. `push(item: T): void` - 스택에 항목을 추가합니다.
2. `pop(): T | undefined` - 스택의 최상위 항목을 제거하고 반환합니다. 스택이 비어있다면 `undefined`를 반환해야 합니다.
3. `peek(): T | undefined` - 스택의 최상위 항목을 반환하지만 제거하지는 않습니다. 스택이 비어있다면 `undefined`를 반환해야 합니다.
4. `isEmpty(): boolean` - 스택이 비어있는지 확인합니다.

이 클래스를 이용하면, 다음과 같은 코드가 작동해야 합니다:

```typescript
let stack = new Stack<number>();
console.log(stack.isEmpty()); // true
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined
```

이 문제는 제네릭 타입 `T`, 클래스, 그리고 기본적인 스택 연산에 대한 이해를 필요로 합니다.