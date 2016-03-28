
    

$(document).ready(function(){
    
    //this is to load data to arrays.
    var totalCalories = [240 ,240, 350, 350, 200, 200, 370, 410, 220, 220, 320, 320, 280, 300, 220, 220, 330, 350, 140, 140, 210, 180, 190, 180, 170, 190, 140, 150, 190, 190, 150, 150, 380, 360, 190, 190, 170, 210, 200, 200, 250, 390, 170, 190, 270, 270, 390, 380, 200, 200, 210, 200, 200, 200, 360, 350, 320, 310, 190, 190, 170, 170, 250, 210, 160, 170, 130, 150, 120, 160, 210, 210, 260, 250, 220, 230, 170, 170, 190, 190, 440, 460, 190, 190, 200, 200, 230, 240, 180, 180, 210, 205, 230, 240, 260, 280,170,170];
    
    /*function sortCalories(a,b) {
    	return a - b;
    }

    console.log(totalCalories.sort(sortCalories));*/


    var energyDensity = [4.0, 4.0, 4.1, 4.1, 4.0, 4.0, 3.7, 4.1, 4.0, 4.0, 3.8, 3.8, 3.7, 4.0, 3.3, 3.3, 3.7, 3.9, 3.7, 3.7, 4.2, 4.0, 4.2, 4.0, 3.8, 4.2, 3.9, 4.3, 3.8, 3.8, 3.8, 3.8, 4.5, 4.2, 4.2, 4.2, 3.8, 4.7, 3.1, 3.1, 3.9, 4.5, 3.8, 4.2, 4.0, 4.0, 4.0, 3.9, 4.0, 4.0, 4.2, 4.0, 4.0, 4.0, 4.4, 4.3, 4.4, 4.2, 4.2, 4.2, 4.3, 4.3, 4.2, 4.4, 3.6, 4.3, 3.3, 4.3, 3.5, 4.7, 3.5, 3.5, 4.6, 4.5, 4.0, 4.2, 4.3, 4.0, 4.2, 4.2, 3.7, 3.8, 4.2, 4.2, 4.0, 4.0, 3.8, 4.0, 3.6, 3.6, 5.3, 5.1, 3.5, 3.7, 4.3, 4.7, 2.8, 2.8];
    var totalGrams = [60, 60, 85, 85, 50, 50, 100, 100, 55, 55, 85, 85, 75, 75, 67, 67, 90, 90, 38, 38, 50, 45, 45, 45, 45, 45, 36, 35, 50, 50, 40, 40, 85, 85, 45, 45, 45, 45, 65, 65, 64, 86, 45, 45, 68, 68, 97, 97, 50, 50, 50, 50, 50, 50, 82, 81, 73, 73, 45, 45, 40, 40, 60, 48, 44, 40, 40, 35, 34, 34, 60, 60, 56, 56, 55, 55, 40, 43, 45, 45, 120, 120, 45, 45, 50, 50, 60, 60, 50, 50, 40, 40, 65, 65, 60, 60, 60, 60];

    var proteinGrams =[17, 17, 30, 30, 15, 15, 27, 31, 13, 13, 32, 32, 20, 20, 18, 18, 28, 28, 13, 13, 14, 10, 12, 12, 10, 10, 5, 5, 14, 14, 10, 10, 26, 25, 15, 15, 14, 15, 21, 21, 30, 30, 12, 12, 20, 20, 30, 30, 14, 15, 14, 14, 15, 15, 30, 30, 25, 25, 15, 15, 11, 11, 17, 15, 10, 7, 6, 9, 3, 2, 20, 20, 12, 12, 11, 10, 15, 15, 16, 16, 30, 30, 17, 17, 20, 20, 20, 20, 13, 13, 13, 14, 22, 22, 17, 20, 20, 20];
    var carbGrams = [27, 27, 36, 36, 23, 23, 55, 44, 30, 31, 33, 33, 37, 38, 33, 32, 40, 37, 17, 17, 24, 24, 21, 22, 23, 20, 22, 19, 23, 23, 19, 17, 31, 36, 17, 16, 19, 14, 28, 28, 18, 26, 20, 19, 30, 30, 40, 40, 21, 21, 23, 21, 21, 21, 30, 30, 30, 29, 19, 19, 18, 19, 23, 18, 22, 19, 24, 16, 23, 18, 25, 27, 30, 30, 32, 31, 16, 17, 17, 15, 63, 58, 14, 14, 16, 18, 24, 22, 23, 23, 10, 10, 29, 31, 22, 20, 24, 25];
    var fatGrams = [8, 8, 10, 10, 6, 6, 4, 13, 5, 4.5, 10, 10, 7, 8, 6, 7, 10, 13, 3, 3, 7, 5, 6, 5, 5, 8, 4, 6, 6, 6, 5, 7, 19, 19, 8, 8, 7, 11, 6, 6, 6, 18, 5, 8, 8, 8, 13, 12, 7, 7, 7, 7, 7, 7, 13, 12, 11, 11, 6, 6, 6, 5, 14, 11, 9, 11, 5, 7, 4.5, 13, 6, 5, 10, 9, 6, 9, 5, 4.5, 6, 9, 7, 12, 8, 8, 6, 5, 8, 9, 6, 6, 13, 12, 3, 2, 15, 16, 5, 5];

    var fiberGrams=[6, 6, 1, 1, 1, 1, 2, 2, 1, 0, 2, 2, 2, 2, 14, 14, 9, 8, 0, 0, 3, 1, 3, 3, 2, 2, 3, 3, 5, 5, 4, 4, 4, 2, 3, 3, 1, 1, 20, 20, 1, 2, 3, 3, 4, 4, 3, 4, 2, 1, 1, 1, 5, 5, 5, 5, 5, 5, 4, 4, 3, 3, 9, 5, 11, 6, 10, 5, 9, 5, 4, 4, 0, 0, 4, 3, 0, 1, 1, 4, 8, 8, 1, 1, 1, 1, 2, 1, 5, 5, 1, 1, 2, 0, 5, 4, 18, 16];
    var sugarGrams=[1, 1, 26, 26, 16, 16, 24, 31, 17, 19, 2, 2, 29, 26, 9, 9, 14, 14, 10, 10, 15, 18, 14, 15, 17, 14, 13, 8, 8, 8, 9, 7, 8, 8, 4, 4, 10, 4, 8, 8, 8, 19, 13, 12, 20, 20, 30, 29, 18, 17, 14, 17, 11, 10, 15,  15, 13, 13, 8, 9, 8, 8, 1, 1, 1, 3, 1, 2, 1, 0, 12, 14, 19, 20, 13, 15, 3, 3, 2, 2, 12, 10, 5, 5, 2, 3, 0, 0, 2, 2, 4, 5, 8, 7, 13, 13, 3, 2];
    var saGrams=[17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 28, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 8, 8, 7, 2, 5, 0, 0, 11, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 7, 7, 7, 8, 12, 11, 0, 0, 0, 0, 0, 0, 15, 13, 13, 8, 0, 0, 4, 4, 6, 7, 12, 11, 9, 9, 0, 0, 0, 0, 0, 0, 0, 4];

    var brand=["EAS", "EAS", "EAS", "EAS", "EAS", "EAS", "Met RX", "Met RX", "Met RX", "Met RX", "Met RX", "Met RX", "ProMax", "ProMax", "ProMax", "ProMax", "ProMax", "ProMax", "ProMax", "ProMax", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Zone Perfect", "Boundless Nutrition", "Boundless Nutrition", "Boundless Nutrition", "Boundless Nutrition", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Oh Yeah!", "Supreme Protein", "Supreme Protein", "Luna", "Luna", "Clif", "Clif", "Clif", "Clif", "Balance", "Balance", "Balance", "Balance", "Balance", "Balance", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Muscle Milk", "Atkins", "Atkins", "Atkins", "Atkins", "Atkins", "Atkins", "Atkins", "Atkins", "Power Bar", "Power Bar", "Power Bar", "Power Bar", "Power Bar", "Power Bar", "Detour", "Detour", "Detour", "Detour", "Detour", "Detour", "Pure Protein", "Pure Protein", "Pure Protein", "Pure Protein", "thinkThin", "thinkThin", "thinkThin", "thinkThin", "Power Crunch", "Power Crunch", "Optimum Nutrition", "Optimum Nutrition", "Risebar", "Risebar", "Quest", "Quest"];
    var lineName=["Advantege Carb Control", "Advantege Carb Control", "Myoplex 30", "Myoplex 30", "Lean 15", "Lean 15", "Big 100", "Big 100", "Nos Pumped", "Nos Pumped", "Protein Plus", "Protein Plus", "Original", "Original", "Lower Sugar", "Lower Sugar", "Pro Series", "Pro Series", "Fit 'N Crisp", "Fit 'N Crisp", "Original", "Original", "Greek Yogurt", "Greek Yogurt", "Perfectly Simple", "Perfectly Simple", "Kidz", "Kidz", "Oatmega", "Oatmega", "Perfect Fit Protein Cookie", "Perfect Fit Protein Cookie", "Original", "Original", "Good Grab", "Good Grab", "Trail Mix", "Trail Mix", "Victory", "Victory", "Original", "Original", "Protein", "Protein", "Builder's", "Builder's", "Builder's Max", "Builder's Max", "Original", "Original", "Gold", "Gold", "Bare", "Bare", "Crunch", "Crunch", "High Protein", "High Protein", "Snack", "Snack", "Collegiate", "Collegiate", "Advantage Meals", "Advantage Meals", "Advantage", "Advantage", "Day Break", "Day Break", "Endulge", "Endulge", "Protein Plus", "Protein Plus", "Recovery", "Recovery", "Triple Threat", "Triple Threat", "Lower Sugar", "Lower Sugar", "Lean Muscle", "Lean Muscle", "Oatmeal", "Oatmeal", "Baked", "Baked", "Original", "Original", "High Protein", "High Protein", "Protein + Fiber", "Protein + Fiber", "Original", "Original", "100% Whey Crisp Bar", "100% Whey Crisp Bar", "Protein+", "Protein+", "Protein Bars", "Protein Bars"];
    var flavor=["double chocolate crisp", "chocolate peanut butter crisp", "chocolate caramel", "chocolate peanut butter", "chocolate peanut butter", "chocolate mint", "chocolate chip graham cracker", "peanut butter caramel crunch", "chocolate mixed berry", "orange creamsicle", "chocolate roasted peanut", "chocolate fudge deluxe", "double fudge brownie", "nutty butter crisp", "chocolate fudge", "peanut butter chocolate", "triple chocolate crisp", "peanut butter crisp", "vanilla marshmallow", "cinnamon crisp", "chocolate peanut butter", "chocolate chip cookie dough", "chocolate", "vanilla berry", "oatmeal chocolate chip", "peanut crunch", "yellow cupcake", "peanut butter chocolate chip", "mocha", "dark chocolate peanut", "chocolate chip", "peanut butter", "chocolate and caramel", "peanut butter crunch", "chocolate and caramel", "peanut butter and caramel", "peanut, chocolate, and raisins", "cashews, almonds, and peanuts", "fudge brownie", "peanut butter chip", "chocolate chip cookie dough", "caramel nut chocolate", "chocolate", "chocolate peanut butter", "chocolate", "chocolate peanut butter", "caramel peanut", "chocolate chip cookie dough", "chocolate craze", "peanut butter", "caramel nut blast", "chocolate peanut butter", "chocolate almond", "peanut butter", "chocolate peanut butter", "vanilla almond yogurt", "chocolate peanut caramel", "vanilla toffee crunch", "chocolate peanut caramel", "vanilla toffee crunch", "chocolate peanut butter", "cookies 'n creme", "chocolate peanut butter", "peanut butter granola", "caramel double chocolate", "cashew trail mix", "chocolate oatmeal", "apple crisp", "chocolate caramel mousse", "peanut butter cups", "chocolate peanut butter", "vanilla", "peanut butter caramel crisp", "cookies n cream caramel crisp", "chocolate peanut butter", "caramel peanut fusion", "neapolitan", "chocolate chip caramel", "cookie dough caramel crisp", "peanut butter chocolate", "chocolate chip cookie dough", "peanut butter chocolate chip", "double chocolate vanilla", "double chocolate peanut butter", "chocolate peanut butter", "chewy chocolate chip", "brownie crunch", "creamy peanut butter", "chocolate almond coconut", "chocolate peanut butter toffee", "triple chocolate", "french vanilla", "double rich chocolate", "marshmallow treat", "chocolate carob chip", "almond honey", "apple pie", "banana nut muffin"];

    var bars = [];

    for (i=0; i<energyDensity.length; i++){

    	var bar = {
    		brandOb: brand[i],
    		lineNameOb: lineName[i],
    		flavorOb: flavor[i],

    		energyDensityOb: energyDensity[i],
    		caloriesOb: totalCalories[i],
    		gramsOb: totalGrams[i],

    		proteinOb: proteinGrams[i],
    		carbOb: carbGrams[i],
    		fatOb: fatGrams[i],

    		fiberOb: fiberGrams[i],
    		sugarOb: sugarGrams[i],
    		saGramsOb: saGrams[i]
    	};
    	bars.push(bar);

    }



    var calories_max = Math.max.apply(Math, totalCalories);
    var edensity_max = Math.max.apply(Math, energyDensity);
    var grams_max = Math.max.apply(Math, totalGrams);



	//draw calories
	$('#draw_calories').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";


		//above code is happening
		for (i=0; i<totalCalories.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (totalCalories[i]/calories_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + brand[i] + "</span>" + "<br />" + lineName[i] + "<br />" + flavor[i] +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ totalCalories[i] + " " + " kilocalories" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});
	
	//draw ed
	$('#draw_density').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").attr("class", "nope");
		
		for (i=0; i<energyDensity.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (energyDensity[i]/edensity_max)*400+"px";

			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + brand[i] + "</span>" + "<br />" + lineName[i] + "<br />" + flavor[i] +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);
		
			$("ul#eDensity").append("<li><span id='units'>"+ energyDensity[i] +"</span></li>");
			$("#eDensity li").eq(i).css("top", bar_ypos);
			$("#eDensity li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");
		}
		
	});
	
	//draw grams
	$('#draw_grams').click(function(){
		//highlight selected menu
		$("a.general").css("background-color","");
		$(this).css("background-color","#178E88");
		

		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();


		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.nope").attr("class", "yup");
		
		for (i=0; i<totalGrams.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (totalGrams[i]/grams_max)*400 +"px";

			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + brand[i] + "</span>" + "<br />" + lineName[i] + "<br />" + flavor[i] +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);


		
			$("ul#tGrams").append("<li><span id='units'>"+ totalGrams[i] + " " + "grams" +"</span></li>");
			$("#tGrams li").eq(i).css("top", bar_ypos);
			$("#tGrams li").eq(i).animate({width: bar_length}, 400);
			$("#wrapper").eq(i).css("height", 4500 + "px");
		}

	});




	$('#protein_toggle').toggle(function(){
  		//var proteinDisplay = [];

  		$(this).css("background-color", "#BA4A5D");
    	
    	for (i=0; i< proteinGrams.length; i++){
	    	

	    	var bar_ypos = i*45+"px";
			var bar_length = Math.floor((proteinGrams[i]/grams_max )*400) +"px";
			var bar_start = 0;

			if($("ul#fatDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length !==0) {
				var bar_start = Math.floor((carbGrams[i]/grams_max )*400) + Math.floor((fatGrams[i]/grams_max )*400 + 40) + "px";
			} else if ($("ul#fatDisplay").has("li").length == 0 && $("ul#carbDisplay").has("li").length !==0){
				var bar_start = Math.floor((carbGrams[i]/grams_max )*400 + 40 )+ "px";
			} else if ($("ul#fatDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length ==0){
				var bar_start = Math.floor((fatGrams[i]/grams_max )*400 + 40) + "px";
			} else {
				var bar_start = 40 + "px";
			}

		
		/*var data = {
				arrBrand: "<span id='barBrand'>" + brand[i] + "</span>",
				arrLine: lineName[i],
				arrFlavor: flavor[i],
				arrProtein: proteinGrams[i]
			};
			proteinDisplay.push(data); */

			$("ul#proteinDisplay").append("<li><span id='units'>"+ proteinGrams[i] + " " + "grams" +"</span></li>");
			$("#proteinDisplay li").eq(i).css({"top": bar_ypos, "left": bar_start});
			$("#proteinDisplay li").eq(i).animate({width: bar_length}, 400);

	}},
    	function(){
    		$(this).css("background-color", "");
	
			if ($("ul#proteinDisplay li:first-child").css("left") == "40px"){
				if($("ul#fatDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length !==0) {

					if ($("ul#fatDisplay li:first-child").css("left") > $("ul#carbDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#carbDisplay li").length; i++){
							var newPosition = parseFloat($("ul#fatDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#carbDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#fatDisplay li").animate({left:40 + "px"}, 400);
					} else if ($("ul#fatDisplay li:first-child").css("left") < $("ul#carbDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#fatDisplay li").length; i++){
							var newPosition = parseFloat($("ul#carbDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#fatDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#carbDisplay li").animate({left: 40 + "px"}, 400);
				
					} 
				} else if ($("ul#fatDisplay").has("li").length == 0 && $("ul#carbDisplay").has("li").length !==0){
				
					$("ul#carbDisplay li").animate({left: 40 + "px"}, 400);
					
				
				} else if ($("ul#fatDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length ==0){
				
					$("ul#fatDisplay li").animate({left: 40 + "px"}, 400);
				}
			} else if (parseFloat($("ul#fatDisplay li:first-child").css("left")) > parseFloat($("ul#proteinDisplay li:first-child").css("left"))){
				
				for (i=0; i<= $("ul#fatDisplay li").length; i++){
					var newPosition = parseFloat($("ul#proteinDisplay li").eq(i).css("left"));
					$("ul#fatDisplay li").eq(i).animate({left: newPosition}, 400);
				}


			} else if (parseFloat($("ul#carbDisplay li:first-child").css("left")) > parseFloat($("ul#proteinDisplay li:first-child").css("left"))) {
			
				for (i=0; i<= $("ul#carbDisplay li").length; i++){
					var newPosition = parseFloat($("ul#proteinDisplay li").eq(i).css("left"));
					$("ul#carbDisplay li").eq(i).animate({left: newPosition}, 400);
				}

			}
			

			$("ul#proteinDisplay").empty();
	});



	$('#carb_toggle').toggle(function(){

    	$(this).css("background-color", "#4976B7");

    	for (i=0; i< carbGrams.length; i++){
	    	
    		

	    	var bar_ypos = i*45+"px";
			var bar_length = Math.floor((carbGrams[i]/grams_max )*400) +"px";
			var bar_start = 0;

			if($("ul#fatDisplay").has("li").length !== 0 && $("ul#proteinDisplay").has("li").length !==0) {
				var bar_start = Math.floor((proteinGrams[i]/grams_max )*400) + Math.floor((fatGrams[i]/grams_max )*400 + 40) + "px";
			} else if ($("ul#fatDisplay").has("li").length == 0 && $("ul#proteinDisplay").has("li").length !==0){
				var bar_start = Math.floor((proteinGrams[i]/grams_max )*400 + 40) + "px";
			} else if ($("ul#fatDisplay").has("li").length !== 0 && $("ul#proteinDisplay").has("li").length ==0){
				var bar_start = Math.floor((fatGrams[i]/grams_max )*400 + 40) + "px";
			} else {
				var bar_start = 40 + "px";
			}

			$("ul#carbDisplay").append("<li><span id='units'>"+ carbGrams[i] + " " + "grams" +"</span></li>");
			$("#carbDisplay li").eq(i).css({"top": bar_ypos, "left": bar_start});
			$("#carbDisplay li").eq(i).animate({width: bar_length}, 400);

	}},
    	function(){

    		$(this).css("background-color", "");

			if ($("ul#carbDisplay li:first-child").css("left") == "40px"){
				if($("ul#fatDisplay").has("li").length !== 0 && $("ul#proteinDisplay").has("li").length !==0) {

					if ($("ul#fatDisplay li:first-child").css("left") > $("ul#proteinDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#fatDisplay li").length; i++){
							var newPosition = parseFloat($("ul#proteinDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#fatDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#proteinDisplay li").animate({left: 40 + "px"}, 400);

						
					} else if ($("ul#fatDisplay li:first-child").css("left") < $("ul#proteinDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#proteinDisplay li").length; i++){
							var newPosition = parseFloat($("ul#fatDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#proteinDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#fatDisplay li").animate({left:40 + "px"}, 400);
					} 
				} else if ($("ul#fatDisplay").has("li").length == 0 && $("ul#proteinDisplay").has("li").length !==0){
				
					$("ul#proteinDisplay li").animate({left: 40 + "px"}, 400);
					
				
				} else if ($("ul#fatDisplay").has("li").length !== 0 && $("ul#proteinDisplay").has("li").length ==0){
				
					$("ul#fatDisplay li").animate({left: 40 + "px"}, 400);
				}
			} else if (parseFloat($("ul#fatDisplay li:first-child").css("left")) > parseFloat($("ul#carbDisplay li:first-child").css("left"))){
				
				for (i=0; i<= $("ul#fatDisplay li").length; i++){
					var newPosition = parseFloat($("ul#carbDisplay li").eq(i).css("left"));
					$("ul#fatDisplay li").eq(i).animate({left: newPosition}, 400);
				}


			} else if (parseFloat($("ul#proteinDisplay li:first-child").css("left")) > parseFloat($("ul#carbDisplay li:first-child").css("left"))) {
			
				for (i=0; i<= $("ul#proteinDisplay li").length; i++){
					var newPosition = parseFloat($("ul#carbDisplay li").eq(i).css("left"));
					$("ul#proteinDisplay li").eq(i).animate({left: newPosition}, 400);
				}

			}

			$("ul#carbDisplay").empty();
	});

	$('#fat_toggle').toggle(function(){
		$(this).css("background-color", "#B5A048");
    	
    	for (i=0; i< fatGrams.length; i++){
	    
	    	var bar_ypos = i*45+"px";
			var bar_length = Math.floor((fatGrams[i]/grams_max )*400) +"px";
			var bar_start = 0;

			if($("ul#proteinDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length !==0) {
				var bar_start = Math.floor((carbGrams[i]/grams_max )*400) + Math.floor((proteinGrams[i]/grams_max )*400 + 40) + "px";
			} else if ($("ul#proteinDisplay").has("li").length == 0 && $("ul#carbDisplay").has("li").length !==0){
				var bar_start = Math.floor((carbGrams[i]/grams_max )*400 + 40) + "px";
			} else if ($("ul#proteinDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length ==0){
				var bar_start = Math.floor((proteinGrams[i]/grams_max )*400 + 40) + "px";
			} else {
				var bar_start = 40 + "px";
			}

			$("ul#fatDisplay").append("<li><span id='units'>"+ fatGrams[i] + " " + "grams" +"</span></li>");
			$("#fatDisplay li").eq(i).css({"top": bar_ypos, "left": bar_start});
			$("#fatDisplay li").eq(i).animate({width: bar_length}, 400);

	}},
    	function(){
    		$(this).css("background-color", "");

    		if ($("ul#fatDisplay li:first-child").css("left") == "40px"){
				if($("ul#proteinDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length !==0) {

					if ($("ul#proteinDisplay li:first-child").css("left") > $("ul#carbDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#carbDisplay li").length; i++){
							var newPosition = parseFloat($("ul#proteinDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#carbDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#proteinDisplay li").animate({left:40 + "px"}, 400);
					} else if ($("ul#proteinDisplay li:first-child").css("left") < $("ul#carbDisplay li:first-child").css("left")){
						
						for (i=0; i<= $("ul#proteinDisplay li").length; i++){
							var newPosition = parseFloat($("ul#carbDisplay li").eq(i).css("width"))+ 40 + "px";
							$("ul#proteinDisplay li").eq(i).animate({left: newPosition}, 400);
						}
						$("ul#carbDisplay li").animate({left: 40 + "px"}, 400);
				
					} 
				} else if ($("ul#proteinDisplay").has("li").length == 0 && $("ul#carbDisplay").has("li").length !==0){
				
					$("ul#carbDisplay li").animate({left: 40 + "px"}, 400);
					
				
				} else if ($("ul#proteinDisplay").has("li").length !== 0 && $("ul#carbDisplay").has("li").length ==0){
				
					$("ul#proteinDisplay li").animate({left: 40 + "px"}, 400);
				}
			} else if (parseFloat($("ul#proteinDisplay li:first-child").css("left")) > parseFloat($("ul#fatDisplay li:first-child").css("left"))){
				
				for (i=0; i<= $("ul#proteinDisplay li").length; i++){
					var newPosition = parseFloat($("ul#fatDisplay li").eq(i).css("left"));
					$("ul#proteinDisplay li").eq(i).animate({left: newPosition}, 400);
				}


			} else if (parseFloat($("ul#carbDisplay li:first-child").css("left")) > parseFloat($("ul#fatDisplay li:first-child").css("left"))) {
			
				for (i=0; i<= $("ul#carbDisplay li").length; i++){
					var newPosition = parseFloat($("ul#fatDisplay li").eq(i).css("left"));
					$("ul#carbDisplay li").eq(i).animate({left: newPosition}, 400);
				}

			}
			
			$("ul#fatDisplay").empty();

	});


	$('#sort_calories').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByCalories(a, b) {
		     return a.caloriesOb - b.caloriesOb;
		}

		bars.sort(orderByCalories);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].caloriesOb/calories_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].caloriesOb + " " + " kilocalories" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});

	
	$('#sort_ED').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByED(a, b) {
		     return a.energyDensityOb - b.energyDensityOb;
		}

		bars.sort(orderByED);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].energyDensityOb/edensity_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].energyDensityOb + "</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});


	$('#sort_grams').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByGrams(a, b) {
		     return a.gramsOb - b.gramsOb;
		}

		bars.sort(orderByGrams);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].gramsOb/grams_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].gramsOb + " " + "grams" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});

		$('#sort_protein').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByProtein(a, b) {
		     return a.proteinOb - b.proteinOb;
		}

		bars.sort(orderByProtein);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].proteinOb/grams_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].proteinOb + " " + "grams" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});

		$('#sort_carb').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByCarb(a, b) {
		     return a.carbOb - b.carbOb;
		}

		bars.sort(orderByCarb);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].carbOb/grams_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].carbOb + " " + "grams" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});

		$('#sort_fat').click(function(){
		//highlight selected menu
		$("a").css("background-color","");
		$(this).css("background-color","#178E88");
		
		//remove drawn bars first, if previously drawn.
		$("ul#tCalories").empty();
		$("ul#eDensity").empty();
		$("ul#tGrams").empty();
		$("ul#barDescription").empty();
		$("ul#proteinDisplay").empty();
		$("ul#carbDisplay").empty();
		$("ul#fatDisplay").empty();

		$("ul#calorieSort").empty();
		$("ul#edSort").empty();
		$("ul#gramSort").empty();
		$("ul#proteinSort").empty();
		$("ul#carbSort").empty();
		$("ul#fatSort").empty();

		$("a.yup").className = "nope";

		function orderByFat(a, b) {
		     return a.fatOb - b.fatOb;
		}

		bars.sort(orderByFat);


		//above code is happening
		for (i=0; i<bars.length; i++){
		
		var bar_ypos = i*45+"px";
		var bar_length = (bars[i].fatOb/grams_max)*400+"px";

			
			//actual data from the array is added as text inside span tags
			$("ul#barDescription").append("<li>"+ "<span id='barBrand'>" + bars[i].brandOb + "</span>" + "<br />" + bars[i].lineNameOb + "<br />" + bars[i].flavorOb +"</li>");
			$("#barDescription li").eq(i).css("top", bar_ypos);		

			$("ul#tCalories").append("<li><span id='units'>"+ bars[i].fatOb + " " + "grams" +"</span></li>");
			$("#tCalories li").eq(i).css("top", bar_ypos);	
			$("#tCalories li").eq(i).animate({width: bar_length}, 400);	
			$("#wrapper").eq(i).css("height", 4500 + "px");

		}
	});

});

