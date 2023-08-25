
const DoublyLinkedList = require('./DoublyLinkedList'); // DoublyLinkedList

class MainClass {

    static main() {
       const   l =new  DoublyLinkedList();
       l.push(1);
       l.push(2);
       l.push(3);
       l.push(4);
       console.log("The Linked List is:");
       l.printLinkedList(l.head);

         l.pop();
         console.log("after pop:remove tail:");
         l.printLinkedList(l.head);

         l.shift();
         console.log("after shift:remove the head:");
         l.printLinkedList(l.head);

         l.unshift(5);
         console.log("after unshift:add value to  the head:");
         l.printLinkedList(l.head);


         console.log("get value at index:"+ l.get(1));

         l.set(1,4);
         console.log("after set value to index:");
         l.printLinkedList(l.head);

         l.insert(1,6);
         console.log("after insert value to index:");
         l.printLinkedList(l.head);
        

         l.remove(2);
         console.log("after remove value at index:");
         l.printLinkedList(l.head);
        



    }
  }
  MainClass.main();
  