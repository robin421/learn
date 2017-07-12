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
}
