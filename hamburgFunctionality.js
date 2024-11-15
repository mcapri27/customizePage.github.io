	const menuButt = document.getElementById("hamburgButt");
	
	menuButt.addEventListener("click", function(){
		setTimeout( () => {
		document.querySelector(".blurry").style.display = "block";
		document.querySelector(".blurry").style.animation = "fadeIn 0.8s ease-in-out both"; 
		}, 100);
		
		setTimeout( () => {
		document.querySelector(".accountPageCats").style.animation = "hamburgSlideIn 1s ease-in-out both";
		}, 400);
	});
	
	const closeMenuButt = document.getElementById("closeButtonMenu");
	
	closeMenuButt.addEventListener("click", function(){
		setTimeout( () => {
			document.querySelector(".blurry").style.animation = "fadeOut 1s ease-in-out both";
		}, 100);
		
		setTimeout( () => {
			document.querySelector(".accountPageCats").style.animation = "hamburgSlideOut 1s ease-in-out both";
		}, 400);
		
		setTimeout( () => {
			document.querySelector(".blurry").style.display = "none";
		}, 1100);
	});