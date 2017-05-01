var buttonSet =  document.getElementsByClassName('button-set')[0];
var preButton = buttonSet.firstElementChild,
	midButton = preButton.nextElementSibling,
	lastButton = buttonSet.lastElementChild;


function display(i,sets){
	if(sets[i]){
		/*首先判断存在性*/
		sets[i].classList.add('background-blue');

		/*延时处理*/
		setTimeout(function(i,sets){
			/*到时间后，先去掉蓝色*/
			sets[i-1].classList.remove('background-blue');
			/*然后立即递归，这样才能实现，一个接一个的显示*/
			/*因为没有同步的延时函数，面对setTimeout只能这样处理*/ 
			display(i,sets);
			// 传入数组，和索引
		}, 300, i+1, sets);
	}
}

preButton.addEventListener('click', function(){
	var divs = document.getElementsByTagName('div');


	function preOrder(root){
		var order = [];


		(function preTraverse(ele){
			var left = ele.firstElementChild;
			var right = ele.lastElementChild;

			order.push(ele);
			if(left){
				preTraverse(left);
			}
			if(right){
				preTraverse(right);
			}
		})(root);

		// (function display(){
		// 	order[0].classList.add('background-blue');
		// 	for(var i = 1, ele; ele = order[i]; i++){
		// 		setTimeout(function(i,order,ele){
		// 			order[i-1].classList.remove('background-blue');
		// 			ele.classList.add('background-blue');
		// 		},1000,i,order,ele) 
		// 	}
		// })();
		display(0,order);
	
	}


		var root = document.body.children[1];
		preOrder(root);
},false);

midButton.addEventListener('click', function(){
	var divs = document.getElementsByTagName('div');

	function midOrder(root){
		var order = [];
		(function midTraverse(ele){

			if(!ele){
				return;
			}

			var left = ele.firstElementChild;
			var right = ele.lastElementChild;

			if(left){
				midTraverse(left);
				order.push(left);
			}

			order.push(right);

			order.push(ele);
			if(right){
				midTraverse(right);
				order.push(right);
			}
		})(root);

		// (function display(){
		// 	order[0].classList.add('background-blue');
		// 	for(var i = 1, ele; ele = order[i]; i++){
		// 		setTimeout(function(i,order,ele){
		// 			order[i-1].classList.remove('background-blue');
		// 			ele.classList.add('background-blue');
		// 		},1000,i,order,ele) 
		// 	}
		// })();
		display(0,order);
	}

		var root = document.body.children[1];
		midOrder(root);
},false);
