/*思路：


	1. 输入框失去焦点后判断输入框的数字，若不在10~100范围内，将弹窗提示错误
	2. 每次添加元素前都增加判断，判断father下的子元素是否有60个，若超过60个将弹窗提示，且不调用增加的方法
	3. 获取输入框的数字、生成的子元素，将输入框的数字传入声称元素的style属性得height;
	4. 获取现有内容的css属性中height的值（需要用parseInt()转化成数字类型），并传入数组中，用冒泡排序法将数组从小到大排序。再将数组中的内容依次传入父元素中的子元素的css height属性中*/

window.onload = function () {


	function left_in() {
		var inputbox = document.getElementById("num-input");
		var father = document.getElementById("father");
		if (inputbox.value > 100 || inputbox.value < 10) {
			alert("请输入10~100的数字")
		} else {
			if (father.childNodes.length > 60) {
				alert("最多只能输入60个哦")
			} else {
				if (father.childNodes.length < 0) {
					var left = document.createElement("div");
					left.style.height = inputbox.value * 3 + "px";
					father.appendChild(left);
				} else {
					var left = document.createElement("div");
					left.style.height = inputbox.value * 3 + "px";
					father.appendChild(left);
					father.insertBefore(left, father.childNodes[0]);
				}
			}
		}
	}


	function right_in() {
		var inputbox = document.getElementById("num-input");
		var father = document.getElementById("father");
		if (inputbox.value > 100 || inputbox.value < 10) {
			alert("请输入10~100的数字")
		} else {
			if (father.childNodes.length > 60) {
				alert("最多只能输入60个哦")
			} else {
				var right = document.createElement("div");
				right.style.height = inputbox.value * 3 + "px";
				father.appendChild(right);
			}
		}
	}




	var leftin_bt = document.getElementById("leftin_bt");
	leftin_bt.onclick = function () {
		left_in();
	}


	var rightin_bt = document.getElementById("rightin_bt");
	rightin_bt.onclick = function () {
		right_in();
	}



	function leftde() {
		var father = document.getElementById("father");
		father.removeChild(father.childNodes[0]);
	}

	var leftde_bt = document.getElementById("leftde_bt");
	leftde_bt.onclick = function () {
		leftde();
	}

	function rightde() {
		var father = document.getElementById("father");
		var n = father.childNodes.length;
		if (n < 1) {
			father.removeChild(father.childNodes[0]);
		} else {
			father.removeChild(father.childNodes[n - 1]);
		}
	}
	var rightde_bt = document.getElementById("rightde_bt");
	rightde_bt.onclick = function () {
		rightde();
	}



	function sortby(arr) {
		if (arr.length <= 1) {
			return arr;
		}
		for (var j = 0; j < arr.length; j++) {
			for (var i = 0; i < arr.length - j; i++) {
				if (arr[i] > arr[i + 1]) {
					var tmp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = tmp;
				}
			}
		}

		return arr;
	}

	function ss() {
		var data = [];
		var father = document.getElementById("father").getElementsByTagName("div");
		for (k = 0; k < father.length; k++) {
			var t = father[k].style.height.split("px");
			var tt = parseInt(t);
			data.push(tt);
		}
		var sorted = sortby(data);
		for (i = 0; i <= sorted.length; i++) {
			father[i].style.height = sorted[i] + "px";
		}
	}
	var sort_bt = document.getElementById("sort_bt");
	sort_bt.onclick = function () {
		ss();
	}

}
