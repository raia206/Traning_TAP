const Node = require('./node'); // Import the node class


class DoublyLinkedList {

    constructor() {
      this.head = null;  
      this.tail = null; 
      this.lenght=0;  
    }
    

    push(value) {
      const newNode = new Node(value);  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.lenght++;
    }
   
        pop() {
            if (!this.tail) {
              // Empty list, nothing to remove
              return null;
            }
            const removedNode = this.tail;
            if (this.head === this.tail) {
              // Single node in the list
              this.head = null;
              this.tail = null;
            } else {
              this.tail.prev.next = null;
              this.tail = this.tail.prev;
            }
            this.lenght--;
return removedNode;
          }




        shift()
        {
if(!this.head)
{
    return null;
}
const removedNode = this.tail;

if(this.head==this.tail)
{
    this.head=null;
    this.tail=null;
}
else{
    this.head.next.prev=null;
    this.head=this.head.next;
}
this.lenght--;
return removedNode;
        }
        
        


        unshift(value) {
            const newNode = new Node(value);
            if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
            } else {
              newNode.next = this.head;
              this.head.prev = newNode;
                      this.head = newNode;
            }
            this.lenght++;
          }




          get(index) {
            if (index < 0) {
              return null;
            }
            let currentNode;
              currentNode = this.head;
              for (let i = 0; i < index; i++)
               {
                currentNode = currentNode.next;
              }
              return currentNode.value;
            }
    

            set(index, val)  
            {
                if (index < 0) {
                    return null;
                  }
                  let currentNode;
                    currentNode = this.head;
                    for (let i = 0; i < index; i++)
                     {
                      currentNode = currentNode.next;
                    }
                    currentNode.value=val;
            }



           insert(index, val)  {
            const newNode = new Node(val);  

              if (index < 0||index>this.lenght) {
                    return false;
                  }
                  if (index === 0) {
                    this.unshift(val);
                  }
                   else if (index === this.length) {
                    this.push(val);
                  } 
                  else {
                  let currentNode;
                    currentNode = this.head;
                    for (let i = 0; i < index; i++)
                     {
                      currentNode = currentNode.next;

                    }
                    newNode.next = currentNode;
                    newNode.prev = currentNode.prev;
                    currentNode.prev.next = newNode;
                    currentNode.prev = newNode;
                    this.length++;
            }
            return true;
        }

        remove(index) {
            if (index < 0||index>this.lenght) {
                return null;
              }
              if (index === 0) {
                removedNode = this.head;
                this.head = this.head.next;
                if (this.head) {
                  this.head.prev = null;
                } else {
                  this.tail = null; 
                }
              } else if (index === this.length - 1) {
                removedNode = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;
              }
              else{
              let currentNode;
              currentNode = this.head;
              for (let i = 0; i < index; i++)
               {
                currentNode = currentNode.next;

              }
              currentNode.prev.next=currentNode.next;
              currentNode.next.prev=currentNode.prev;
this.lenght--;
}
        }

    

 printLinkedList(head) {
        let current = head;
      
        while (current !== null) {
          console.log(current.value);
          current = current.next;
        }
      }
  }

  

  module.exports =DoublyLinkedList ; // Export the Doublylinkedlist class