
   app.controller('masterBlasterController', function($scope) {

       $scope.wordsOne = "Have you ever seen GOD ??!!"
       $scope.wordsTwo = "I have seen GOD. He bats for India at number 4 in tests.";
       $scope.wordsTwoSay = "Hayden";

       $scope.wordsThree = "Have you ever wondered why Sachin is regarded as the best Cricketer in the whole world !!";
       $scope.wordsFour = "Let me prove you !!";

       $scope.wordsFive = "The following facts prove that he has played at his best when India is playing against the then World No.1 teams....";

       $scope.wordsSix = "The following facts prove that among the players who have played most number of ODIs, his average is at the top...";

       $scope.wordsSeven = "Lets see the Consistency of Sachin at every stage of his career....";

       $scope.wordsEight = "But still People say that, when Sachin plays well.. India LOSES";
       $scope.wordsNine = "Do you believe that...!!???";
       $scope.wordsTen = "This chart provides the Average score of Sachin when India Won and when India lost the match... Decide for Yourself..!!"
       $scope.Final = "To Sachin, the man we all want to be";
       $scope.FinalSay = "Andrew Symonds";



       $scope.graph1Array = []; 
       $scope.graph2Array = [
                             { playerName : "M Jayawardane", playerAvg : 33.37, classTeam: "sl" },
                             { playerName : "R Ponting", playerAvg : 42.03, classTeam: "au" },
                             { playerName : "JH Kallis", playerAvg : 44.36, classTeam: "sa" },
                             { playerName : "Sangakkara", playerAvg : 41.98, classTeam: "sl" }
                             ];
       $scope.graph3Array = [];
       $scope.graph4Array = [];
       
      
       
    //    D3 Chart data
      
         d3.csv("data/sachin.csv", function(data) {
             chartData(data);
         });

         function chartData(data) {
    //         console.log(data);
             var flag;
             var scorelen;             
             var dateLen;
             var sliceScore = [];
             var countMatches1 = 0;
             var countMatches2 = 0;
             var countMatches3 = 0;
             var yearCheck;
             var recordScore1 = 0;
             var recordScore2= 0;
             var recordScore3 = 0;
             var notOut = 0;
             var innings = 0;
             var totMatches;
             var totalScore = 0;
             var intScore;
             var scoreCount1 = 0;
             var scoreCount2 = 0;
             var scoreCount3 = 0;                          
             var scoreCount4 = 0;             
             var scoreCountMat1 = 0;
             var scoreCountMat2 = 0;
             var scoreCountMat3 = 0;
             var scoreCountMat4 = 0;
             var winCount = 0;
             var loseCount = 0;
             var winTot = 0;
             var loseTot = 0;
             var margin = {top: 20, right: 30, bottom: 30, left: 40};
             var maxWidth = 800 - margin.left - margin.right;
             var detailWidth  = 150;
             var detailHeight = 75;
             var detailMargin = 15;
             
             for(var i = 0; i < data.length; i++) {
            	 
            	 
            	 flag = data[i].batting_score.endsWith("*");
            	 if (flag){
                	 scoreLen = data[i].batting_score.length;
                	 sliceScore[i] = data[i].batting_score.slice(0,scoreLen-1);
                	 data[i].batting_score = sliceScore[i];
                	 notOut++;
            	 }   
            	 
            	 
            	 
            	 // For graph 1
            	 dateLen = data[i].date.length;
            	 
            	 yearCheck = data[i].date.slice(dateLen-4, dateLen);
            	 if( yearCheck > 1988){
            		 rankOne = "v West Indies";
            		 if( yearCheck > 1994){
            			 rankOne = "v South Africa";
            			 if( yearCheck > 2000){
            				 rankOne = "v Australia"; 
            				 if(data[i].opposition == rankOne){
            					 if(parseInt(data[i].batting_score)){
                    				 recordScore3 = recordScore3 + parseInt(data[i].batting_score);
                    				 countMatches3++;
            					 }
            				 }            				             				 
            			 }
            			 if(data[i].opposition == rankOne){
            				 if(parseInt(data[i].batting_score)){
                				 recordScore2 = recordScore2 + parseInt(data[i].batting_score);
                				 countMatches2++;
        					 }
            			 }
            		 }
            		 if(data[i].opposition == rankOne){
            			 if(parseInt(data[i].batting_score)){
            				 recordScore1 = recordScore1 + parseInt(data[i].batting_score);
            				 countMatches1++;
    					 }
        			 }
            		 
            	 }            	      	             	 
          
            	 
            	 //For graph2
            	 intScore = parseInt(data[i].batting_score);
            	 if(!(isNaN(intScore))) {
            		 totalScore = totalScore + parseInt(data[i].batting_score);
            		 innings++;            		 
            	 }
            	 
            	 // For graph3
                 if( yearCheck < 1995){
                    if(parseInt(data[i].batting_score)){
              			scoreCount1 = scoreCount1 + parseInt(data[i].batting_score);
                          scoreCountMat1++;
                    }            		 
            	 }
            	else if( yearCheck < 2001){
                    if(parseInt(data[i].batting_score)){
         				 scoreCount2 = scoreCount2 + parseInt(data[i].batting_score);
                          scoreCountMat2++;
                    }
            	}
            	else if( yearCheck < 2007){
                    if(parseInt(data[i].batting_score)){
                		 scoreCount3 = scoreCount3 + parseInt(data[i].batting_score);
                         scoreCountMat3++;
                    }
        		}
                else {
                    if(parseInt(data[i].batting_score)){
                		scoreCount4 = scoreCount4 + parseInt(data[i].batting_score);
                        scoreCountMat4++;
                    }                        			                          
                }          

                //For graph4       
                if(data[i].match_result == "won") {
                    winCount++;
                    if(parseInt(data[i].batting_score)){
                        winTot = winTot + parseInt(data[i].batting_score);
                    }                        		                
                }
                else {
                    loseCount++;
                    if(parseInt(data[i].batting_score)){
                        loseTot = loseTot + parseInt(data[i].batting_score);
                    }                        		                
                }


             }
             
          	 // Chart for Graph1
             
             $scope.graph1Array = [
                     { Score : recordScore1/countMatches1, Years : '1989-94', classTeam : "wi", oppos : "vs West Indies" },
                     { Score : recordScore2/countMatches2, Years : '1995-00', classTeam : "sa", oppos : "vs South Africa" },
                     { Score : recordScore3/countMatches3, Years : '2000-12', classTeam : "au", oppos : "vs Australia" }
          	 ];
          	 
             
             
             var data = $scope.graph1Array;

                    //    getDimensions();
                       //console.log(margin);
                       var margin = {top: 20, right: 30, bottom: 40, left: 40},
                           width = 460 - margin.left - margin.right,
                           height = 400 - margin.top - margin.bottom;

                       var x = d3.scale.ordinal()
                           .domain(data.map(function(d) { return d.Years; }))
                           .rangeRoundBands([0, width], .1);

                       var y = d3.scale.linear()
                           .domain([0, 60])
                           .range([height, 0]);

                       var xAxis = d3.svg.axis()
                           .scale(x)
                           .orient("bottom");

                       var yAxis = d3.svg.axis()
                           .scale(y)
                           .orient("left");
                       
                       var tip = d3.tip()
                       		.attr('class', 'd3-tip')
                       		.offset([-10, 0])
                       		.html(function(d) { return d.oppos;	})

                       var chart = d3.select(".chart")
                           .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                         .append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                       
                       chart.call(tip);
                       // Add data
                       chart.selectAll(".bar")
                             .data(data)
                             .enter()
                             .append("rect")
                             .attr("class", function(d) { return d.classTeam; })
                             .attr("x", function(d) { return x(d.Years); })
                             .attr("y", function(d) { return y(d.Score); })
                             .attr("height", function(d) { return height - y(d.Score); })
                             .attr("width", x.rangeBand())
                       		 .on('mouseover', tip.show)
                       		 .on('mouseout', tip.hide);

                       // y axis and label
                       chart.append("g")
                           .attr("class", "y axis")
                           .call(yAxis)
                         .append("text")
                           .attr("transform", "rotate(-90)")
                           .attr("x", -height/2)
                           .attr("y", -margin.bottom)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Average");
                       // x axis and label
                       chart.append("g")
                           .attr("class", "x axis")
                           .attr("transform", "translate(0," + height + ")")
                           .call(xAxis)
                         .append("text")
                           .attr("x", width / 2)
                           .attr("y", margin.bottom - 10)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Years");
                       // chart title
                       chart.append("text")
                         .text("Performance Against then Best Teams")
                         .attr("x", width / 4)
                         .attr("class","title");
             
             
             
         // 	 Chart for graph2 goes here
             
                       $scope.graph2Array[4] = { playerName : "SR Tendulkar", playerAvg : (totalScore/((data.length - notOut) - (data.length - innings))).toFixed(2), classTeam : "in" };
                       //console.log($scope.graph2Array[3]);
                       
                       var data = $scope.graph2Array;

                       var margin = {top: 20, right: 30, bottom: 40, left: 40},
                           width = 460 - margin.left - margin.right,
                           height = 400 - margin.top - margin.bottom;

                       var x = d3.scale.ordinal()
                           .domain(data.map(function(d) { return d.playerName; }))
                           .rangeRoundBands([0, width], .1);

                       var y = d3.scale.linear()
                           .domain([0, 60])
                           .range([height, 0]);

                       var xAxis = d3.svg.axis()
                           .scale(x)
                           .orient("bottom");

                       var yAxis = d3.svg.axis()
                           .scale(y)
                           .orient("left");
                       
                       var tip = d3.tip()
                       		.attr('class', 'd3-tip')
                       		.offset([-10, 0])
                       		.html(function(d) { return d.playerAvg;	})

                       var chart = d3.select(".chart2")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                         .append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                       
                       chart.call(tip);
                       // Add data
                       chart.selectAll(".bar")
                             .data(data)
                             .enter()
                             .append("rect")
                             .attr("class", function(d) { return d.classTeam; })
                             .attr("x", function(d) { return x(d.playerName); })
                             .attr("y", function(d) { return y(d.playerAvg); })
                             .attr("height", function(d) { return height - y(d.playerAvg); })
                             .attr("width", x.rangeBand())
                       		 .on('mouseover', tip.show)
                       		 .on('mouseout', tip.hide);

                       // y axis and label
                       chart.append("g")
                           .attr("class", "y axis")
                           .call(yAxis)
                         .append("text")
                           .attr("transform", "rotate(-90)")
                           .attr("x", -height/2)
                           .attr("y", -margin.bottom)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Average");
                       // x axis and label
                       chart.append("g")
                           .attr("class", "x axis")
                           .attr("transform", "translate(0," + height + ")")
                           .call(xAxis)
                         .append("text")
                           .attr("x", width / 2)
                           .attr("y", margin.bottom - 10)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Top Batsmen");
                       // chart title
                       chart.append("text")
                         .text("Average of players who have played most no of ODIs")
                         .attr("x", width / 10)
                         .attr("class","title");    


                //chart for graph3 goes here


                         $scope.graph3Array = [
                             { yearBet : "89-95" , scoreTot : (scoreCount1/scoreCountMat1).toFixed(2) , classTeam : "in" },
                             { yearBet : "95-02" , scoreTot : (scoreCount2/scoreCountMat2).toFixed(2) , classTeam : "in" },
                             { yearBet : "02-08" , scoreTot : (scoreCount3/scoreCountMat3).toFixed(2) , classTeam : "in" },
                             { yearBet : "08-13" , scoreTot : (scoreCount4/scoreCountMat4).toFixed(2) , classTeam : "in" }
                         ]

                    //  	 console.log($scope.graph3Array);

                         var data = $scope.graph3Array;

                       var margin = {top: 20, right: 30, bottom: 40, left: 40},
                           width = 460 - margin.left - margin.right,
                           height = 400 - margin.top - margin.bottom;

                       var x = d3.scale.ordinal()
                           .domain(data.map(function(d) { return d.yearBet; }))
                           .rangeRoundBands([0, width], .1);

                       var y = d3.scale.linear()
                           .domain([0, 60])
                           .range([height, 0]);

                       var xAxis = d3.svg.axis()
                           .scale(x)
                           .orient("bottom");

                       var yAxis = d3.svg.axis()
                           .scale(y)
                           .orient("left");
                       
                       var tip = d3.tip()
                       		.attr('class', 'd3-tip')
                       		.offset([-10, 0])
                       		.html(function(d) { return d.scoreTot;	})

                       var chart = d3.select(".chart3")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                         .append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                       
                       chart.call(tip);
                       // Add data
                       chart.selectAll(".bar")
                             .data(data)
                             .enter()
                             .append("rect")
                             .attr("class", function(d) { return d.classTeam; })
                             .attr("x", function(d) { return x(d.yearBet); })
                             .attr("y", function(d) { return y(d.scoreTot); })
                             .attr("height", function(d) { return height - y(d.scoreTot); })
                             .attr("width", x.rangeBand())
                       		 .on('mouseover', tip.show)
                       		 .on('mouseout', tip.hide);

                       // y axis and label
                       chart.append("g")
                           .attr("class", "y axis")
                           .call(yAxis)
                         .append("text")
                           .attr("transform", "rotate(-90)")
                           .attr("x", -height/2)
                           .attr("y", -margin.bottom)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Average");
                       // x axis and label
                       chart.append("g")
                           .attr("class", "x axis")
                           .attr("transform", "translate(0," + height + ")")
                           .call(xAxis)
                         .append("text")
                           .attr("x", width / 2)
                           .attr("y", margin.bottom - 10)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Top Batsmen");
                       // chart title
                       chart.append("text")
                         .text("Consistency")
                         .attr("x", width / 10)
                         .attr("class","title");

                // chart for graph 4 goes here

                $scope.graph4Array = [
                    { matResult : "Won", avgScore : (winTot/winCount).toFixed(2) , classTeam : "sa"},
                    { matResult : "Lost", avgScore : (loseTot/loseCount).toFixed(2) , classTeam : "wi"}
                ]


                       var data = $scope.graph4Array;

                       var margin = {top: 20, right: 30, bottom: 40, left: 40},
                           width = 460 - margin.left - margin.right,
                           height = 400 - margin.top - margin.bottom;

                       var x = d3.scale.ordinal()
                           .domain(data.map(function(d) { return d.matResult; }))
                           .rangeRoundBands([0, width], .1);

                       var y = d3.scale.linear()
                           .domain([0, 60])
                           .range([height, 0]);

                       var xAxis = d3.svg.axis()
                           .scale(x)
                           .orient("bottom");

                       var yAxis = d3.svg.axis()
                           .scale(y)
                           .orient("left");
                       
                       var tip = d3.tip()
                       		.attr('class', 'd3-tip')
                       		.offset([-10, 0])
                       		.html(function(d) { return d.avgScore;	})

                       var chart = d3.select(".chart4")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                         .append("g")
                           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                       
                       chart.call(tip);
                       // Add data
                       chart.selectAll(".bar")
                             .data(data)
                             .enter()
                             .append("rect")
                             .attr("class", function(d) { return d.classTeam; })
                             .attr("x", function(d) { return x(d.matResult); })
                             .attr("y", function(d) { return y(d.avgScore); })
                             .attr("height", function(d) { return height - y(d.avgScore); })
                             .attr("width", x.rangeBand())
                       		 .on('mouseover', tip.show)
                       		 .on('mouseout', tip.hide);

                       // y axis and label
                       chart.append("g")
                           .attr("class", "y axis")
                           .call(yAxis)
                         .append("text")
                           .attr("transform", "rotate(-90)")
                           .attr("x", -height/2)
                           .attr("y", -margin.bottom)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Average");
                       // x axis and label
                       chart.append("g")
                           .attr("class", "x axis")
                           .attr("transform", "translate(0," + height + ")")
                           .call(xAxis)
                         .append("text")
                           .attr("x", width / 2)
                           .attr("y", margin.bottom - 10)
                           .attr("dy", ".71em")
                           .style("text-anchor", "end")
                           .text("Top Batsmen");
                       // chart title
                       chart.append("text")
                         .text("Lost and Won Avg")
                         .attr("x", width / 10)
                         .attr("class","title");
                         
         }
         
    });



    