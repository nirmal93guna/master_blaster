app.directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {

                var offSet = this.pageYOffset,
                    height = this.innerHeight,
                    scrolledPercent = (offSet / height * 100);
                    document.getElementsByClassName("mileStone")[0].style.marginTop = offSet/19.2;
                    
                    document.getElementsByClassName("endTitle")[0].style.zIndex = "-999";
                    document.getElementsByClassName("endTitle")[0].style.opacity = "0.0";  
                    


                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace1")[0].children[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace1")[0].children[1].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "1"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";  

                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0";        
                    // console.log(scrolledPercent);                           

                if(scrolledPercent < 80) {
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "1.0";                    
                    document.getElementsByClassName("wordsSpace1")[0].children[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("wordsSpace1")[0].children[1].style.opacity = "0.0"; 
                } else if (scrolledPercent < 160) {
            	    document.getElementsByClassName("div11")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace1")[0].children[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace1")[0].children[1].style.opacity = "1.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "1"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";  

                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0";     

	            } else if (scrolledPercent < 320) {

                    document.getElementsByClassName("div11")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";  

                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "1"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0";                    
                    
                } else if (scrolledPercent < 480) {
              	    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "1.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "1";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
	
	            } else if (scrolledPercent < 640) {

                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "1.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "1.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "1";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
                    
                } else if (scrolledPercent < 800) {

            	    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "1"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
	
            	} else if (scrolledPercent < 960) {
            
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "1.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "1"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
                    
                } else if (scrolledPercent < 1120) {
	                
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "1.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "1";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
	
            	} else if (scrolledPercent < 1280) {
            
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "1.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "0.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "1.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "1";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
                    
                } else if (scrolledPercent < 1440) {
            
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "1.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace5")[0].children[0].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace5")[0].children[1].style.opacity = "1.0";
                    document.getElementsByClassName("wordsSpace5")[0].children[2].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].children[0].style.display = "block";
                    document.getElementsByClassName("wordsSpace5")[0].children[1].style.display = "block";


                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "1"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "0.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "0"; 
	
	            } else if (scrolledPercent < 1520) {
                    document.getElementsByClassName("wordsSpace5")[0].children[0].style.display = "none";
                    document.getElementsByClassName("wordsSpace5")[0].children[1].style.display = "none";
                    document.getElementsByClassName("wordsSpace5")[0].children[2].style.opacity = "1.0";
                } else if (scrolledPercent < 1750) {
                
                    document.getElementsByClassName("div11")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div12")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div13")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("div14")[0].style.opacity = "0.0";
                    document.getElementsByClassName("div15")[0].style.opacity = "1.0";

                    document.getElementsByClassName("wordsSpace1")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace3")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.opacity = "0.0";
                    document.getElementsByClassName("wordsSpace5")[0].style.opacity = "0.0";   

                    document.getElementsByClassName("wordsSpace1")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace2")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace3")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("wordsSpace4")[0].style.zIndex = "0";
                    document.getElementsByClassName("wordsSpace5")[0].style.zIndex = "0"; 

                    document.getElementsByClassName("chartSpace")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart2")[0].style.opacity = "0.0"; 
                    document.getElementsByClassName("chart3")[0].style.opacity = "0.0";
                    document.getElementsByClassName("chart4")[0].style.opacity = "1.0";   
                    
                    document.getElementsByClassName("chartSpace")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart2")[0].style.zIndex = "0"; 
                    document.getElementsByClassName("chart3")[0].style.zIndex = "0";
                    document.getElementsByClassName("chart4")[0].style.zIndex = "1"; 
                    
                } 
                else {
                    document.getElementsByClassName("endTitle")[0].style.zIndex = "99";
                    document.getElementsByClassName("endTitle")[0].style.opacity = "1.0";
                }
                scope.$apply();
            });
        };
    });