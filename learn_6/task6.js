/*#task6


	1. 获取输入框中的值，通过分隔符号提取出一个数组，根据数组长度，创建对象，并分别传入数组中的值。
	2. 将元素中的数组元素进行遍历，用indexOf()模糊匹配，并用addLstener添加blur失焦事件*/

window.onload = function () {

	function left_in() {
		var data = [];
		var inputbox = document.getElementById("num-input").value;
		data = inputbox.split(",");
		var father = document.getElementById("father");
		for (j = 0; j < data.length; j++) {
			var left = document.createElement("div");
			left.innerHTML = data[j];
			father.appendChild(left);
			father.insertBefore(left, father.childNodes[0]);
		}

	}

	var leftin_bt = document.getElementById("leftin_bt");
	leftin_bt.onclick = function () {
		left_in();
	}



	function right_in() {
		var data = [];
		var inputbox = document.getElementById("num-input").value;
		data = inputbox.split(",");
		var father = document.getElementById("father");
		for (j = 0; j < data.length; j++) {
			var right = document.createElement("div");
			right.innerHTML = data[j];
			father.appendChild(right);
		}
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


	function clean() {
		var library = document.getElementById("father").getElementsByTagName("div");
		for (j = 0; j < library.length; i++) {
			library[i].style.backgroundColorr = "while";
		}

	}

	function search() {
		var library = document.getElementById("father").getElementsByTagName("div");
		var input_s = document.getElementById("search").value;
		for (i = 0; i < library.length; i++) {
			var c = library[i].innerHTML.indexOf(input_s);
			if (c > -1) {
				library[i].style.color = "blue";
			} else {
				library[i].style.color = "white";
			}
		}
	}
	document.getElementById("search").addEventListener("blur", search);

}
