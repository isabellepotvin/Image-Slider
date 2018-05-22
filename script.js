

var milli = 5000;
var sliderIndex = 0;
var timeoutHandle;

var sliderImages = document.getElementById("slider-images").getElementsByTagName("img");
var sliderProgressDivs = document.getElementById("slider-progress").getElementsByTagName("div");

changeImage(0);

function changeImage(n) {
	
	if (n != null) {
		window.clearTimeout(timeoutHandle);
		
		if(n == 'next') { //if the back arrow is clicked
			sliderIndex++;
		} 
		else if(n == 'previous') {  //if the back arrow is clicked
			sliderIndex--;
		}
		else { //if a progress div is clicked
			sliderIndex = n;
		}
	}
	else {
		sliderIndex++;
	}
	
	//checks if slider index is out of bounds
	if(sliderIndex >= sliderImages.length){
		sliderIndex = 0;
	}
	else if (sliderIndex < 0) {
		sliderIndex = sliderImages.length - 1;
	}
	
	
	//changes image
	document.getElementById("image-active").removeAttribute("id");
	sliderImages[sliderIndex].setAttribute("id", "image-active");
	
	//changes progress
	document.getElementById("progress-active").removeAttribute("id");
	sliderProgressDivs[sliderIndex].setAttribute("id", "progress-active");
	
	timeoutHandle = window.setTimeout(changeImage, milli);
	
}

