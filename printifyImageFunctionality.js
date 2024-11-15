	var slider_img	= document.querySelector(".mugProductPic1");
	var images = ["Context3.png",
					"Context1.png", 
					"Right.png", 
					"Left.png", 
					"Front.png",];
	var i = 0;
	
	function prev(){
		if (i <= 0 ) i = images.length;
		i--;
		return setImg();
	}
	
	function next(){
		if( i >= images.length-1 ) i = -1;
		i++;
		return setImg();
	}
	
	function setImg(){
		return slider_img.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images[i]);
	}
	
	var slider_img2	= document.querySelector(".mugProductPic2");
	var images2 = ["Context.png",
					"Front%20and%20Back.png", 
					"Front%20and%20Side.png"];
	var i = 0;
	
	function prev2(){
		if (i <= 0 ) i = images2.length;
		i--;
		return setImg2();
	}
	
	function next2(){
		if( i >= images2.length-1 ) i = -1;
		i++;
		return setImg2();
	}
	
	function setImg2(){
		return slider_img2.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images2[i]);
	}
	
	function setImg(){
		return slider_img.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images[i]);
	}
	
	var slider_img3	= document.querySelector(".mugProductPic3");
	var images3 = ["TumblerContext%202.png",
					"TumblerContext%201.png",
					"TumblerClose-up.png",
					"Open.png", 
					"TumblerRight.png",
					"TumblerLeft.png",
					"TumblerBack.png",
					"TumblerFront.png"];
	var i = 0;
	
	function prev3(){
		if (i <= 0 ) i = images3.length;
		i--;
		return setImg3();
	}
	
	function next3(){
		if( i >= images3.length-1 ) i = -1;
		i++;
		return setImg3();
	}
	
	function setImg3(){
		return slider_img3.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images3[i]);
	}
	
	//number 4
	var slider_img4	= document.querySelector(".mugProductPic4");
	var images4 = ["FernFloorMatContext%202.png",
					"FernFloorMatContext%201.png",
					"FernFloorMatFront.png",
					"FernFloorMatDesign.png"];
	var i = 0;
	
	function prev4(){
		if (i <= 0 ) i = images4.length;
		i--;
		return setImg4();
	}
	
	function next4(){
		if( i >= images4.length-1 ) i = -1;
		i++;
		return setImg4();
	}
	
	function setImg4(){
		return slider_img4.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images4[i]);
	}
	
	//number 5
	var slider_img5	= document.querySelector(".mugProductPic5");
	var images5 = ["MCcCandleContext%201.png",
					"MCcCandleContext%203.png",
					"MCcCandleContext%202.png",
					"MCcCandleFront.png", 
					"MCcCandleOpen.png",
					"MCccCandleDesign.png"];
	var i = 0;
	
	function prev5(){
		if (i <= 0 ) i = images5.length;
		i--;
		return setImg5();
	}
	
	function next5(){
		if( i >= images5.length-1 ) i = -1;
		i++;
		return setImg5();
	}
	
	function setImg5(){
		return slider_img5.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images5[i]);
	}
	
	//number 6
	var slider_img6	= document.querySelector(".mugProductPic6");
	var images6 = ["ClockClose-up.png",
					"ClockFront.png",
					"ClockContext%202.png",
					"ClockContext%203.png",
					"ClockContext%201.png"];
	var i = 0;
	
	function prev6(){
		if (i <= 0 ) i = images6.length;
		i--;
		return setImg6();
	}
	
	function next6(){
		if( i >= images6.length-1 ) i = -1;
		i++;
		return setImg6();
	}
	
	function setImg6(){
		return slider_img6.setAttribute("src", "file:///C:/docs/Professor%20Yard/" + images6[i]);
	}
	