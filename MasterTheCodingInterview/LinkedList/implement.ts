type myNode = {
    value: any,
    next: myNode | null
}


class myLinkedList {
    head: myNode
    tail: myNode;
    length: number;

    constructor(value: any) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(value: any) {
        const newNode: myNode = { value: value, next: null }
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
        return this;
    }
}

const linkedList = new myLinkedList(10)

console.log(linkedList);
linkedList.append(5);
linkedList.append(16);
linkedList.append(7);
