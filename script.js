 /*----------------------------Bing-script: Home page-------------------------------*/
 //******validate input not null**********
function login(){
	
	
	var x = document.forms["myForm"]["Email"].value;
	var y = document.forms["myForm"]["password"].value;
	if (x==""){
			
		document.getElementById('emmessage').innerHTML = "This is a required field."
		$("#emmessage").show();
	
	}
	if (y==""){
			
		document.getElementById('pwmessage').innerHTML = "This is a required field."
		$("#pwmessage").show();
	
	}
	
}
 
/*----------------------------Xin-script: News-------------------------------*/
//****************function readMore**********************(){
$(document).ready(function(){
  $("#news_readless").click(function(){
    $(".news_readmore").hide();
  });
  $("#news_readmore").click(function(){
    $(".news_readmore").show();
  });
});

//********chaging the news heading paragraph color when mouse hover on it********
$(document).ready(function(){
    $(".card-header").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});

/*----------------------------Xin-script: Review-------------------------------*/
//********chaging the backgroud when mouse hover on it********
$(document).ready(function(){
    $(".col-sm-7").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});

//******hide and show**********
$(document).ready(function(){

    $(".btn btn-outline-secondary show").click(function(){
        $("div").hide();
    });


    $(".btn btn-outline-secondary hide").click(function(){
        $("div").show();
    });
});

//******rating questionair********
function myRating(){

var review_company_name = document.forms["review_ratingform"]["rating_name"].value;
var review_rating1 = document.forms["review_ratingform"]["rating1"].value;
var review_rating2 = document.forms["review_ratingform"]["rating2"].value;
var review_rating3 = document.forms["review_ratingform"]["rating3"].value;
var review_rating4 = document.forms["review_ratingform"]["rating4"].value;
//company name should not be null
if(review_company_name == ""){
 alert("Please enter a company name!");
}
//rating between 1 inclusive and 5 inclusive
if(review_rating1 == 0 || review_rating > 5){
 alert("Please enter a rating number from 1, 2, 3, 4, 5 !");
}
}

 
 
 
 
 /*----------------------------Bing-script: career guide-------------------------------*/
 //******read more and read less**********
 function myFunction(){
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
	  if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less"; 
			moreText.style.display = "inline";
		}
}

 function myFunction1(){
	var dots = document.getElementById("dots1");
	var moreText = document.getElementById("more1");
	var btnText = document.getElementById("myBtn1");
	  if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less"; 
			moreText.style.display = "inline";
		}
}

 function myFunction2(){
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("myBtn2");
	  if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less"; 
			moreText.style.display = "inline";
		}
}
 function myFunction3(){
	var dots = document.getElementById("dots3");
	var moreText = document.getElementById("more3");
	var btnText = document.getElementById("myBtn3");
	  if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less"; 
			moreText.style.display = "inline";
		}
}
