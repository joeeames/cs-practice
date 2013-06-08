/* given a binode {node1: binode, node2: binode}
as a tree structure where node1 is left and node2 is right, convert to ll where node1 is prev & node2 is next

*/

function BiNode(value) {
	this.value = value;
	this.node1 = null;
	this.node2 = null;
}

var root = new BiNode(8);
root.node1 = new BiNode(4);
root.node1.node1 = new BiNode(2);
root.node1.node1.node2 = new BiNode(3);
root.node1.node2 = new BiNode(6);
root.node1.node2.node1 = new BiNode(5);
root.node2 = new BiNode(12);
root.node2.node1 = new BiNode(10);
root.node2.node1.node1 = new BiNode(9);
root.node2.node2 = new BiNode(17);
root.node2.node2.node1 = new BiNode(14);
root.node2.node2.node2 = new BiNode(21);
root.node2.node2.node2.node1 = new BiNode(19);



var prev = null;
visit(root);
console.log(root);

function visit(node) {
	if(node.node1) {
		visit(node.node1);
	}
	node.node1 = prev;
	if(prev) {
		prev.node2 = node;
	}
	prev = node;
	if(node.node2) {
		visit(node.node2);
	}
}

