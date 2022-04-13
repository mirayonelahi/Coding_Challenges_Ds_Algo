class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return undefined;
    }
    const value = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return value;
  }
}

describe("my test", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push(1);
    expect(stack.top).toBe(0);
  });
  it("can pop off", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
  });
});
