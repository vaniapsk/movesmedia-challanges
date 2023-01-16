
const reverseKGroup = (headList, k) => {
    if (!headList || k < 2) {
      return headList;
    }
    
    var count = 0;
    var linkedListHead = headList;
    var finalLinkedList = headList;
    var tmp = null;
    
    while (linkedListHead && count < k) {
      linkedListHead = linkedListHead.next;
      count++;
    }
    
    if (count === k) {
      linkedListHead = reverseKGroup(linkedListHead, k);
      while (count-- > 0) {
        tmp = finalLinkedList.next;
        finalLinkedList.next = linkedListHead;
        linkedListHead = finalLinkedList;
        finalLinkedList = tmp;
      }
      finalLinkedList = linkedListHead;
    }
    
    return finalLinkedList;
  };
  
      console.log(reverseKGroup([1,2,3,4,5], 2))
  