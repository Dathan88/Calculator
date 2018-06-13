let btn = document.querySelectorAll('button');
		btn.forEach((button) => {
		button.addEventListener('click', (e) => {
			 console.log(e.target);
		});
	});
