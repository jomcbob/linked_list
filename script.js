class newNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // 1
    append(data) {
        const newNodeInstance = new newNode(data)
        newNodeInstance.next = null
        if (this.head === null) {
            this.head = newNodeInstance
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNodeInstance
        }
        this.size++
    }


    // 2
    prepend(data) {
        const newNodeInstance = new newNode(data)
        newNodeInstance.next = this.head
        this.head = newNodeInstance
        this.size++
    }

    // 3
    printSize() {
        console.log(this.size)
    }

    // 4
    giveHead() {
        console.log(this.head.data)
    }

    // 5
    printTail() {
        let current = this.head

        while (current.next !== null) {
            current = current.next

            if (current.next === null) {
                console.log(current.data)
            }
        }
    }

    // 6
    at(index) {
        let current = this.head
        let num = 0

        while (current !== null) {
            if (num === index) {
                console.log(current.data)
                return
            }

            current = current.next
            num++
        }
        console.log(null)
        return
    }

    // 7
    pop() {
        if (this.size === 0) {
            return null
        }
        
        let current = this.head
        
        if (this.size === 1) {
            this.head = null
        } else {
            let prev = null
            while (current.next !== null) {
                prev = currentg
                current = current.next
            }
            
            prev.next = null
        }
    
        this.size--
        console.log(`you popped ( ${current.data} )`)
    }
    

    // 8
    contains(value) {
        let current = this.head
        while (current !== null) {
            if (current.data === value) {
                console.log(true)
                return
            }
            current = current.next
        }
        console.log(false)
        return
    }

    // 9
    find(value) {
        let current = this.head
        let num = 0
        while (current !== null) {
            if (current.data === value) {
                console.log(num)
                return
            }

            current = current.next
            num++

            if (current === null) {
                console.log(null)
            }
        }
    }

    // 10
    printList() {
        let current = this.head
        let listStr = ''
        while (current !== null) {
            listStr += ' ( ' + current.data + ' ) -> '
            current = current.next

            if (current === null) {
                listStr += 'null'
            }
        }
        console.log(listStr)
    }


    // extra credit 1 
    insertAt(value, index) {
        const newNodeInstance = new newNode(value)
        let num = 0
        let current = this.head
    
        if (index < 0 || index > this.size) {
            console.log("Index out of bounds")
            return
        }
    
        if (this.size === 0 || index === 0) {
            newNodeInstance.next = this.head;
            this.head = newNodeInstance
        } else {
            let prev = null
            while (num < index) {
                prev = current
                current = current.next
                num++
            }
            prev.next = newNodeInstance
            newNodeInstance.next = current
        }
        
        this.size++
        this.printList()
    }

        // extra credit 2
        removeAt(index) {
            if (index < 0 || index >= this.size) {
                console.log("Index out of bounds")
                return
            }
        
            let current = this.head
            let num = 0
        
            if (index === 0) {
                this.head = current.next
            } else {
                let prev = null
                while (num < index) {
                    prev = current
                    current = current.next
                    num++
                }
        
                prev.next = current.next
            }
        
            this.size--
            console.log(`you removed ( ${current.data} )`)
        }
        


}

const list = new LinkedList()

list.append('dog')
list.append("cat")
list.append("parrot")
list.append("hamster")
list.append("snake")
list.append("turtle")

list.printList()
