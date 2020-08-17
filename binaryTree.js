const tree = {
	value: "A",
	left: {
		value: "B",
		left: {
			value: "D",
		},
		right: {
			value: "E",
		},
	},
	right: {
		value: "C",
		right: {
			value: "F",
		},
	},
};
// 先序遍历
function preorder(node) {
	if (!node) {
		return;
	}
	console.log(node.value);
	preorder(node.left);
	preorder(node.right);
}
// 中序遍历
function inoreder(node) {
    if (!node) {
		return;
	}
	inoreder(node.left);
	console.log(node.value);
	inoreder(node.right);
}
// 后序遍历
function postorder(node) {
     if (!node) {
		return;
	}
	postorder(node.left);
	postorder(node.right);
	console.log(node.value);
}
postorder(tree);
