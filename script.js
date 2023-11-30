 document.addEventListener('DOMContentLoaded', function () {
	const fnameInput = document.getElementById('fname');
	 fnameInput.addEventListener('blur',function () {
		 fnameInput.value = fnameInput.value.toUpperCase();
	 });
});