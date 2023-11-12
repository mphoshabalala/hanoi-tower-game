const stackBars = [
  { id: 0, height: 30, width: 200, color: "black" },
  { id: 1, height: 30, width: 160, color: "blue" },
  { id: 2, height: 30, width: 120, color: "purple" },
  { id: 3, height: 30, width: 80, color: "red" },
];

let currItemID = null;
let moves = 0;

const stand1 = document.querySelector("#stack-1-stand");
const stand2 = document.querySelector("#stack-2-stand");
const stand3 = document.querySelector("#stack-3-stand");

const movesSelector = document.querySelector("#moves");

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

const storage1 = document.getElementById("storage-1");
const storage2 = document.getElementById("storage-2");
const storage3 = document.getElementById("storage-3");

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const up = document.getElementById("up");
const down = document.getElementById("down");
// push(), pop(), peak(), length(), isEmpty(), clear();
class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    // 1) insert an item to the first position
    this._items[this._count] = item;
    // 2) increase the count
    this._count++;
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("id", item.id);
    bar.style.cssText = `background-color: ${item.color}; 
                  width: ${item.width}px;
                  padding: ${item.height}px;`;
    return bar;
  }
  pop() {
    // 1) check if the stack is not empty
    if (this._items.length < 1) {
      return " No Items in the stack";
    }
    // 2) set the previous item as the current item
    const currentItem = this._items[this._count - 1];
    // minus 1 from the count
    this._count--;
    // 3) shift items in the stack
    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }
    // 4) set the length of the stack as the count
    this._items.length = this._count;

    // return currentItem
    return currentItem;
  }
  peak() {
    // check if the stack is not empty
    if (this.isEmpty()) {
      return "No items in stack";
    }
    // return the last item in the stack
    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  clear() {}
}

function poppedItemID(id) {
  return id;
}

// initial stack
const stack1 = new Stack();
stand1.appendChild(stack1.push(stackBars[0]));
stand1.appendChild(stack1.push(stackBars[1]));
stand1.appendChild(stack1.push(stackBars[2]));
stand1.appendChild(stack1.push(stackBars[3]));

select1.addEventListener("click", () => {
  if (storage1.childElementCount === 0) {
    currItemID = stack1.pop().id;
    storage1.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  } else if (storage1.childElementCount > 0) {
    console.log(currItemID);
    storage1.removeChild(document.getElementById(currItemID));
    stand1.appendChild(stack1.push(stackBars[currItemID]));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  }
});

// stack 2
const stack2 = new Stack();

select2.addEventListener("click", () => {
  if (storage2.childElementCount === 0) {
    currItemID = stack2.pop().id;
    storage2.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  } else if (storage2.childElementCount > 0) {
    storage2.removeChild(document.getElementById(currItemID));
    stand2.appendChild(stack2.push(stackBars[currItemID]));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  }
});

// // stack 3
const stack3 = new Stack();

select3.addEventListener("click", () => {
  if (storage3.childElementCount === 0) {
    currItemID = stack3.pop().id;
    storage3.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  } else if (storage3.childElementCount > 0) {
    storage3.removeChild(document.getElementById(currItemID));
    stand3.appendChild(stack3.push(stackBars[currItemID]));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  }
});

next.addEventListener("click", () => {
  if (storage1.childElementCount > 0) {
    storage2.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  } else if (storage2.childElementCount > 0) {
    storage3.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  }
});

prev.addEventListener("click", () => {
  if (storage2.childElementCount > 0) {
    storage1.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  } else if (storage3.childElementCount > 0) {
    storage2.appendChild(document.getElementById(currItemID));
    moves++;
    movesSelector.innerText = `Moves completed: ${moves}`;
  }
});

// movesSelector.innerText = `Moves completed: ${moves}`;

// up.addEventListener("click", () => {});
