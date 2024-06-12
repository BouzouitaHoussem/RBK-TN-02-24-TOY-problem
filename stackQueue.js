/**

* Write a stack using your preferred instantiation pattern. 

* Avoid using native array methods i.e., push, pop, and length.

* Once you're done, implement a queue using two stacks.

*/

/**

 * Stack Class

 */

var Stack = function() {
    this.storage={}
    this.val=0

    // add an item to the top of the stack

    this.push = function(value) {
      this.storage[this.val]=value
      this.val++

    };

    // remove an item from the top of the stack

    this.pop = function() {
      if(this.size()>0){
        this.val--
        var del=this.storage[this.val]
        delete this.storage[this.val]
        return del
      }
      else{
         return 'the stack is already empty'
      }

    };

    // return the number of items in the stack

    this.size = function() {
      return this.val

    };

   };

   /**

    * Queue Class

    */

   var Queue = function() {
    this.storagetwo={}

    // Use two `stack` instances to implement your `queue` Class

    var inbox = new Stack();

    var outbox = new Stack();

    // called to add an item to the `queue`

    this.enqueue = function(value) {
      this.storagetwo[outbox]=value
      outbox++
        

      // TODO: implement `enqueue`

    };

    // called to remove an item from the `queue`

    this.dequeue = function() {
      if(this.size()>0){
        var del=this.storagetwo[inbox]
        delete this.storagetwo[inbox]
        inbox++
        return del
      }
      else{
        return 'the queue is already empty'
      }

      // TODO: implement `dequeue`

    };

    // should return the number of items in the queue

    this.size = function() {
      return outbox-inbox

      // TODO: implement `size`

    };

   };

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   //ignore the below code // //

   module.exports = Queue; // //

   // // // // // // // // // /
