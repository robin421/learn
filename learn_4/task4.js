window.onload = function () {

	function left_in() {
		var inputbox = document.getElementById("num-input");
		var father = document.getElementById("father");
		if (father.childNodes.length < 0) {
			var left = document.createElement("div");
			left.innerHTML = inputbox.value;
			father.appendChild(left);
		} else {
			var left = document.createElement("div");
			left.innerHTML = inputbox.value;
			father.appendChild(left);
			father.insertBefore(left, father.childNodes[0]);
		}
	}


	function right_in() {
		var inputbox = document.getElementById("num-input");
		var father = document.getElementById("father");
		var right = document.createElement("div");
		right.innerHTML = inputbox.value;
		father.appendChild(right);
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

}
