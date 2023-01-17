"use strict";
class rectangle {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 0;
        this.height = height !== null && height !== void 0 ? height : 0;
    }
    CalcCircumference() {
        return 2 * (this.width + this.height);
    }
    static whoAmI() {
        return `I am rectangle`;
    }
}
let rectang = new rectangle(8, 6);
console.log(rectang.CalcCircumference());
console.log(rectangle.whoAmI());
////////////////////////////////////////////////////////////////////////////
class square extends rectangle {
    constructor(length) {
        super(length, length);
        this.length = length;
    }
    CalcCircumference() {
        return 4 * this.length;
    }
    static whoAmI() {
        return `I am square`;
    }
}
const squr = new square(5);
console.log(squr.CalcCircumference());
console.log(square.whoAmI());
class Queue {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = [];
    }
    enqueue(item) {
        if (this.size() == this.capacity) {
            throw Error("this queue has reached its max capacity");
        }
        this.storage.push(item);
    }
    dequeue() {
        return this.storage.shift();
    }
    size() {
        return this.storage.length;
    }
    print() {
        return this.storage;
    }
}
const queue = new Queue();
queue.enqueue("SA");
queue.enqueue("S");
console.log(queue.dequeue());
queue.size();
console.log(queue.print());
