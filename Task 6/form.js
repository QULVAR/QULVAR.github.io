/*jslint browser: true */
window.onload = function () {
	
	function price(good, option) {
		let count = parseInt(document.getElementById("number").value);
		let price = parseInt(good.getAttribute("value"));
		let optionValue = parseInt(option.value);
		let price_field = document.getElementById("sum");
		let out = (price + optionValue) * count;
		let check_ = document.getElementById("check_");
		if (check_.checked) {
			out += 1000;
		}
		if (!isNaN(count) && !isNaN(price)) {
		  price_field.innerHTML = out + "₽";
		} else {
		  price_field.innerHTML = "";
		}
	  }
	  
			

	let good1 = document.getElementById("good1");
	let good2 = document.getElementById("good2");
	let good3 = document.getElementById("good3");
	let options = document.getElementById("options");
	let check = document.getElementById("check");
	let check_ = document.getElementById("check_");
	let option = document.getElementById("option");
	let count = document.getElementById("number");
	let flag = 0;
	

	good1.addEventListener("click", function () {
		options.className = "invisible";
		check.className = "invisible";
		option.value = "0";
		check_.checked = false;
		flag = 1;
		price(good1, option);
	});
	good2.addEventListener("click", function () {
		options.className = "visible";
		check.className = "invisible";
		check_.checked = false;
		flag = 2;
		price(good2, option);
	});
	good3.addEventListener("click", function () {
		options.className = "invisible";
		check.className = "visible";
		option.value = "0";
		check_.checked = false;
		flag = 3;
		price(good3, option);
	});
	options.addEventListener("change", function () {
		price(good2, option);
	});
	check_.addEventListener("click", function () {
		price(good3, option);
	});
	count.addEventListener("input", function () {
		if (flag == 1) {
			price(good1, option);
		} else if (flag == 2) {
			price(good2, option);
		} else if (flag == 3) {
			price(good3, option);
		}
	});
};