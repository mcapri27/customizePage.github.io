	document.getElementById("addToTheCartButt1").addEventListener("click", function(){
		//scale down to 30px by 30px 
		setTimeout( () => {
		document.querySelector(".addToTheCart1Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart1").style.animation = "fadeOut 1s both";
		}, 100);
		
		setTimeout( () => {  
			document.querySelector(".addToTheCart1").style.display = "none";
			document.querySelector(".addToTheCart1Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast1();
		}, 1200);  
	});
	
	//number 2
	var atcbutt2 = document.getElementById("addToTheCartButt2"); 
	
	atcbutt2.addEventListener("click", function(){
		
		const ButtVanishAnim2 = setTimeout( function(){
		document.querySelector(".addToTheCart2Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart2").style.animation = "fadeOut 0.5s both";
		}, 100); 
		
		const ButtFadeOut2 = setTimeout( function(){  
			document.querySelector(".addToTheCart2").style.display = "none";
			document.querySelector(".addToTheCart2Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast2();
		}, 1200); 
	});
	
	//number 3
	var atcbutt3 = document.getElementById("addToTheCartButt3"); 
	
	atcbutt3.addEventListener("click", function(){
		//scale down to 30px by 30px 
		setTimeout( function(){
		document.querySelector(".addToTheCart3Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart3").style.animation = "fadeOut 0.5s both";
		}, 100); 
		
		setTimeout( function(){  
			document.querySelector(".addToTheCart3").style.display = "none";
			document.querySelector(".addToTheCart3Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast3();
		}, 1200); 
	});
	
	//number 4
	var atcbutt4 = document.getElementById("addToTheCartButt4"); 
	
	atcbutt4.addEventListener("click", function(){
		//scale down to 30px by 30px 
		setTimeout( function(){
		document.querySelector(".addToTheCart4Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart4").style.animation = "fadeOut 0.5s both";
		}, 100); 
		
		setTimeout( function(){  
			document.querySelector(".addToTheCart4").style.display = "none";
			document.querySelector(".addToTheCart4Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast4();
		}, 1200); 
	});
	
	//number 5
	var atcbutt5 = document.getElementById("addToTheCartButt5"); 
	
	atcbutt5.addEventListener("click", function(){
		//scale down to 30px by 30px 
		setTimeout( function(){
		document.querySelector(".addToTheCart5Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart5").style.animation = "fadeOut 0.5s both";
		}, 100); 
		
		setTimeout( function(){  
			document.querySelector(".addToTheCart5").style.display = "none";
			document.querySelector(".addToTheCart5Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast5();
		}, 1200); 
	});
	
	//number 6
	var atcbutt6 = document.getElementById("addToTheCartButt6"); 
	
	atcbutt6.addEventListener("click", function(){
		//scale down to 30px by 30px 
		setTimeout( function(){
		document.querySelector(".addToTheCart6Label").style.animation = "fadeOut 0.25s ease both";
		document.querySelector(".addToTheCart6").style.animation = "fadeOut 0.5s both";
		}, 100); 
		
		setTimeout( function(){  
			document.querySelector(".addToTheCart6").style.display = "none";
			document.querySelector(".addToTheCart6Label").style.display = "none";
		}, 1100);
		
		setTimeout( () => { 
			return showToast6();
		}, 1200); 
	});
	
	const toastBox = document.getElementById('toastBox1');
	
	function showToast1(){
		const toast = document.createElement('div');
		toast.classList.add('toast');
		const productPicture1 = document.createElement('img');
		productPicture1.src = "printifyImages/Context3.png";
		productPicture1.classList.add('Picture1');
		const atcConfirmText = document.createElement('span');
		atcConfirmText.innerHTML = "'White Mug' has been added to cart";
		atcConfirmText.classList.add('atcPopupConfirmText');
		const productPrice1 = document.createElement('span');
		productPrice1.innerHTML = "R00.00";
		productPrice1.classList.add('indexPageProductBoxPrice');
		const cartView = document.createElement('button');
		cartView.innerHTML = "View Cart";
		cartView.classList.add('ViewCartButt');
		toastBox.appendChild(toast); 
		toastBox.appendChild(productPicture1);
		toastBox.appendChild(atcConfirmText);
		toastBox.appendChild(productPrice1);
		toastBox.appendChild(cartView);
		toastBox.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast.remove()
		}, 10000); 
	}
	
	const toastBox2 = document.getElementById('toastBox2');
	
	function showToast2(){ 
		const toast2 = document.createElement('div');
		toast2.classList.add('toast2');
		const productPicture2 = document.createElement('img');
		productPicture2.src = "printifyImages/Context.png";
		productPicture2.classList.add('Picture2');
		const atcConfirmText2 = document.createElement('span');
		atcConfirmText2.innerHTML = "'Tough Case' has been added to cart";
		atcConfirmText2.classList.add('atcPopupConfirmText2');
		const productPrice2 = document.createElement('span');
		productPrice2.innerHTML = "R00.00";
		productPrice2.classList.add('indexPageProductBoxPrice');
		const cartView2 = document.createElement('button');
		cartView2.innerHTML = "View Cart";
		cartView2.classList.add('ViewCartButt2');
		toastBox2.appendChild(toast2); 
		toastBox2.appendChild(productPicture2);
		toastBox2.appendChild(atcConfirmText2);
		toastBox2.appendChild(productPrice2);
		toastBox2.appendChild(cartView2);
		toastBox2.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox2.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast2.remove()
		}, 10000); 
	}
	
	const toastBox3 = document.getElementById('toastBox3');
	
	function showToast3(){ 
		const toast3 = document.createElement('div');
		toast3.classList.add('toast3');
		const productPicture3 = document.createElement('img');
		productPicture3.src = "printifyImages/TumblerContext 2.png";
		productPicture3.classList.add('Picture3');
		const atcConfirmText3 = document.createElement('span');
		atcConfirmText3.innerHTML = "'Skinny Tumbler With Straw' has been added to cart";
		atcConfirmText3.classList.add('atcPopupConfirmText3');
		const lineBreak3 = document.createElement('br');
		const productPrice3 = document.createElement('span');
		productPrice3.innerHTML = "R00.00";
		productPrice3.classList.add('indexPageProductBoxPrice');
		const cartView3 = document.createElement('button');
		cartView3.innerHTML = "View Cart";
		cartView3.classList.add('ViewCartButt3');
		toastBox3.appendChild(toast3); 
		toastBox3.appendChild(productPicture3);
		toastBox3.appendChild(atcConfirmText3);
		toastBox3.appendChild(productPrice3);
		toastBox3.appendChild(cartView3);
		toastBox3.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox3.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast3.remove()
		}, 10000); 
	}
	
	const toastBox4 = document.getElementById('toastBox4');
	
	function showToast4(){
		const toast4 = document.createElement('div');
		toast4.classList.add('toast4');
		const productPicture4 = document.createElement('img');
		productPicture4.src = "printifyImages/FernFloorMatContext 2.png";
		productPicture4.classList.add('Picture4');
		const atcConfirmText4 = document.createElement('span');
		atcConfirmText4.innerHTML = "'Heavy Duty Floor Mat' has been added to cart";
		atcConfirmText4.classList.add('atcPopupConfirmText4');
		const productPrice4 = document.createElement('span');
		productPrice4.innerHTML = "R00.00";
		productPrice4.classList.add('indexPageProductBoxPrice');
		const cartView4 = document.createElement('button');
		cartView4.innerHTML = "View Cart";
		cartView4.classList.add('ViewCartButt');
		toastBox4.appendChild(toast4); 
		toastBox4.appendChild(productPicture4);
		toastBox4.appendChild(atcConfirmText4);
		toastBox4.appendChild(productPrice4);
		toastBox4.appendChild(cartView4);
		toastBox4.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox4.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast4.remove()
		}, 10000); 
	}
	
	const toastBox5 = document.getElementById('toastBox5');
	
	function showToast5(){ 
		const toast5 = document.createElement('div');
		toast5.classList.add('toast5');
		const productPicture5 = document.createElement('img');
		productPicture5.src = "printifyImages/MCcCandleContext 1.png";
		productPicture5.classList.add('Picture5');
		const atcConfirmText5 = document.createElement('span');
		atcConfirmText5.innerHTML = "'Mango Coconut Scented Candle' has been added to cart";
		atcConfirmText5.classList.add('atcPopupConfirmText5');
		const productPrice5 = document.createElement('span');
		productPrice5.innerHTML = "R00.00";
		productPrice5.classList.add('indexPageProductBoxPrice');
		const cartView5 = document.createElement('button');
		cartView5.innerHTML = "View Cart";
		cartView5.classList.add('ViewCartButt5');
		toastBox5.appendChild(toast5); 
		toastBox5.appendChild(productPicture5);
		toastBox5.appendChild(atcConfirmText5);
		toastBox5.appendChild(productPrice5);
		toastBox5.appendChild(cartView5);
		toastBox5.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox5.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast5.remove()
		}, 10000); 
	}
	
	const toastBox6 = document.getElementById('toastBox6');
	
	function showToast6(){ 
		const toast6 = document.createElement('div');
		toast6.classList.add('toast6');
		const productPicture6 = document.createElement('img');
		productPicture6.src = "printifyImages/ClockClose-up.png";
		productPicture6.classList.add('Picture6');
		const atcConfirmText6 = document.createElement('span');
		atcConfirmText6.innerHTML = "'Acrylic Wall Clock' has been added to cart";
		atcConfirmText6.classList.add('atcPopupConfirmText6');
		const lineBreak6 = document.createElement('br');
		const productPrice6 = document.createElement('span');
		productPrice6.innerHTML = "R00.00";
		productPrice6.classList.add('indexPageProductBoxPrice');
		const cartView6 = document.createElement('button');
		cartView6.innerHTML = "View Cart";
		cartView6.classList.add('ViewCartButt6');
		toastBox6.appendChild(toast6); 
		toastBox6.appendChild(productPicture6);
		toastBox6.appendChild(atcConfirmText6);
		toastBox6.appendChild(productPrice6);
		toastBox6.appendChild(cartView6);
		toastBox6.style.animation = "PopupSlideInFromRight 1.75s ease-in-out both"; 
		
		const slideoutPopupAfterSlideIn = setTimeout( function(){
		toastBox6.style.animation = "PopupSlideOutFromViewRight 1.5s ease-in-out both"; 
		}, 7500);

		const removePopupDiv = setTimeout( function(){
		toast6.remove()
		}, 10000); 
	}
	
	
	
