var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
}; 

// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, 
// instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list. 

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]