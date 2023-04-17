
/*function popup(){
    alert("In order to proceed please press okay to use current location")
}*/
//my global variables
var index= ["UV Rays","Wind","Humidity","Percipatation"] 
var charac= "&#x25CB"
var time=["Morning","Afternoon","Evening"]

function Area(){
    var x= document.getElementById("City").value;
   
    if(x=="Oshuwa"){
        var metrics=["<br>"+"2-3,","<br>"+"%10km/h", "<br>"+"10%","<br>"+"0%"]
        var degree=["<br>"+"2","<br>"+"9","<br>"+"1"]

        // changes image of the city
        document.getElementById("picture").src="https://images.thestar.com/nwsVcbcxyH9mfBSWoPN7r9BTma4=/1280x1024/smart/filters:cb(1652972186334)/https://www.thestar.com/content/dam/localcommunities/oshawa_this_week/news/2022/05/24/what-does-downtown-oshawa-need-from-the-next-provincial-government/10615989_OZdowntownoshawaelection3.JPG";
        // changes the weather forcast of the week
        document.getElementById("pictureM").src="imgs/sun.png";
        document.getElementById("report").innerHTML="7"+charac;
        document.getElementById("pictureT").src="imgs/snow.png";
        document.getElementById("reportT").innerHTML="-9"+charac;
        document.getElementById("pictureW").src="imgs/rain-wind.png";
        document.getElementById("reportW").innerHTML="-4"+charac
        document.getElementById("pictureTH").src="imgs/rainycloud.png"
        document.getElementById("reportTH").innerHTML="1"+charac
        document.getElementById("reportF").innerHTML="2"+charac
        //changes weather data
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
        //changes weather of morn/afr/eve and the small pictures
        document.getElementById("forcast1").src="imgs/sun.cloud2.png"
        document.getElementById("current").innerHTML= "Monday 7"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sun.cloud2.png"
        // changes line graph
        document.getElementById("graph").src= "imgs/OshuwaLG.png"
        //changes map 
        document.getElementById("maps").src= "imgs/Oshawa.png"
        //covert temperature.
        document.getElementById("PiChart").src="imgs/oshuwaPi.png"
    
    }
    else if(x=="Toronto"){ 
        var metrics=["<br>"+"3-5", "<br>"+"40%", "<br>"+"10km","<br>"+"0%"]
        var degree=["<br>"+"5","<br>"+"14","<br>"+"3"]
        document.getElementById("forcast1").src="imgs/brightsun.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML= index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsH").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
        //weather forcast for 5 days
        document.getElementById("picture").src="https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/b8/7a.jpg";
        document.getElementById("pictureM").src="imgs/sunny.png"
        document.getElementById("report").innerHTML="13" +charac
        document.getElementById("maps").src= "imgs/brampton.png"
        document.getElementById("graph").src= "imgs/lineChart.png"
        document.getElementById("pictureT").src="imgs/sunny.png"
        document.getElementById("reportT").innerHTML="5" +charac
        document.getElementById("pictureW").src="imgs/rainycloud.png"
        document.getElementById("reportW").innerHTML="2"+charac
        document.getElementById("pictureTH").src="imgs/sun.png"
        document.getElementById("reportTH").innerHTML="7"+charac
        document.getElementById("pictureF").src="imgs/windy.png"
        document.getElementById("reportF").innerHTML="-3"+charac
         //changes weather of morn/afr/eve - toronto
        document.getElementById("current").innerHTML= "13"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac;
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sunny.cloud2.png"
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac;
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac;
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("PiChart").src="imgs/TorontoPi.png"
      }
      else if(x=="Brampton"){ 
        var metrics=["<br>"+"0-1", "<br>"+"10km/h", "<br>"+"46%","<br>"+"100%"]
        var degree=["<br>"+"14","<br>"+"14","<br>"+"3"]
        document.getElementById("forcast1").src="imgs/rain2.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
        //weather forcast for 5 days
        document.getElementById("picture").src="https://upload.wikimedia.org/wikipedia/commons/4/41/Brampton_Dominion_Building.jpg"
        document.getElementById("pictureM").src="imgs/rain2.png"
        document.getElementById("report").innerHTML="3"+charac
        document.getElementById("maps").src= "imgs/Brampton.png"
        document.getElementById("graph").src= "imgs/bramptonLG.png"
        document.getElementById("pictureT").src="imgs/clouds.png"
        document.getElementById("reportT").innerHTML="1"+charac
        document.getElementById("pictureW").src="imgs/sunny.png"
        document.getElementById("reportW").innerHTML="14"+charac
        document.getElementById("pictureTH").src="imgs/sun.png"
        document.getElementById("reportTH").innerHTML="15"+charac
        document.getElementById("pictureF").src="imgs/lighting.png"
        document.getElementById("reportF").innerHTML="4"+charac
         //changes weather of morn/afr/eve 
        document.getElementById("current").innerHTML= "Monday 3"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[1]+charac
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/rain2.png"
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/nightrain.png"
        document.getElementById("PiChart").src="imgs/BramptonPi.png"
      }else if(x=="Scarbrough"){
        var metrics=["<br>"+"2-3", "<br>"+"10km/h", "<br>"+"31%","<br>"+"0%"]
        var degree=["<br>"+"14","<br>"+"20","<br>"+"12"]
        document.getElementById("picture").src="https://www.ellishay.co.uk/wp-content/uploads/2019/12/shutterstock_257137738-1024x683.jpg"
        document.getElementById("forcast1").src="imgs/sun.png"
        document.getElementById("maps").src= "imgs/scarborough.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
        //weather forcast for 5 days
        document.getElementById("pictureM").src="imgs/sun.png"
        document.getElementById("report").innerHTML="15"+charac;
        document.getElementById("graph").src= "imgs/scarboroughLG.png"
        document.getElementById("pictureT").src="imgs/sunny.png"
        document.getElementById("reportT").innerHTML="30"+charac
        document.getElementById("pictureW").src="imgs/rain2.png"
        document.getElementById("reportW").innerHTML="20"+charac
        document.getElementById("pictureTH").src="imgs/sunny.png"
        document.getElementById("reportTH").innerHTML="35"+charac
        document.getElementById("pictureF").src="imgs/sunny.png"
        document.getElementById("reportF").innerHTML="30"+charac
        //changes weather of morn/afr/eve 
        document.getElementById("current").innerHTML= "Monday 15"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sunny.png"
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("PiChart").src="imgs/ScarPi.png"

      }
    }
function Monday(){
    var x= document.getElementById("City").value;
    
    if (x=="Toronto" ){
        var mfe=[13,5,14,3]
        var metrics=["<br>"+"2-3", "<br>"+"7km/h","<br>"+"40%","<br>"+"0%"]
        var degree=["<br>"+"5","<br>"+"14","<br>"+"3"]

        document.getElementById("forcast1").src="imgs/brightsun.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
         // for morning,afternoon, and evening section
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"3&#x25CB"
        document.getElementById("current").innerHTML="Monday 13&#x25CB"
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src="imgs/sun.png"
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("imageA").src="imgs/sun.png"
        document.getElementById("eve").innerHTML= time[1]+degree[1]+charac
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("time").innerHTML="Sunrise 6:40 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:40 am"
    }
     else if(x== "Oshuwa"){
        var metrics=["<br>"+"3-5", "<br>"+"7km/h","<br>"+"40%","<br>"+"0%"]
        var degree=["<br>"+"2","<br>"+"9","<br>"+"1"]
        var mfe=[7,2,9,1]
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML= "Monday 7&#x25CB"
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sun.cloud2.png"
        document.getElementById("aft").innerHTML=time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("forcast1").src="imgs/sun.cloud2.png"
        document.getElementById("time").innerHTML="Sunrise 6:40 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:40 am"
    
    }
         //converts temp for on the side
     else if(x== "Brampton"){
        var metrics=["<br>"+"0-1", "<br>"+"10km/h","<br>"+"50%","<br>"+"100%"]
        var degree=["<br>"+"1","<br>"+"4","<br>"+"5"]
        document.getElementById("forcast1").src="imgs/rain2.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML= "Monday 3"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src= "imgs/morningrain.png"
        document.getElementById("imageA").src="imgs/rain2.png"
        document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/nightrain.png"
        document.getElementById("time").innerHTML="Sunrise 6:40 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:40 am"
     }     

     }       
function Tuesday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        var mfe=[3,7,0]
        var metrics=["<br>"+"1-2", "<br>"+"8km/h","<br>"+"20%","<br>"+"0%"]
        var degree=["<br>"+"3","<br>"+"7","<br>"+"0"]
         //wind,uv-rays,percipitation,humidity
        document.getElementById("forcast1").src="imgs/brightsun.png"
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]

        // aft,noon,morning
        document.getElementById("eve").innerHTML= time[3]+degree[3]+charac
        document.getElementById("current").innerHTML="Tuesday"+charac
        document.getElementById("morn").innerHTML=  time[0]+degree[0]+charac
        document.getElementById("imageM").src="imgs/sunny.png";
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("imageA").src="imgs/sunny.png";
        document.getElementById("imagesE").src="imgs/cloudymoon.png";
        document.getElementById("time").innerHTML="Sunrise 6:45 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:45 am"
    }
     else if(x=="Oshuwa"){
        var metrics=["<br>"+"0-1", "<br>"+"16km/h","<br>"+"30%","<br>"+"100%"]
        var degree=["<br>"+"-4","<br>"+"-7","<br>"+"-10"]
         //wind,uv-rays,percipitation,humidity
        document.getElementById("forcast1").src="imgs/brightsun.png"
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
        // aft,morning,evening.
        document.getElementById("current").innerHTML="Tuesday -9"+charac;
        document.getElementById("forcast1").src="imgs/snow.png"
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src="imgs/snow.2.png";
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("imageA").src="imgs/snow.2.png";
        document.getElementById("imagesE").src="imgs/moon.png";
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
       document.getElementById("forcast1").src="imgs/rain2.png"
       document.getElementById("time").innerHTML="Sunrise 6:45 am"
       document.getElementById("timeSS").innerHTML="Sunset 7:45 am"
       
    }


     else if(x== "Brampton"){
        var metrics=["<br>"+"0-1", "<br>"+"20km/h","<br>"+"20%","<br>"+"0%"]
        var degree=["<br>"+"6","<br>"+"12","<br>"+"10"]
        var mfe=[6,12,-10]
            document.getElementById("forcast1").src="imgs/clouds.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
            document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
            document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
            document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Tuesday 10"+charac
            document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/rain2.png"
            document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
            document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
            document.getElementById("imagesE").src="imgs/cloudymoon.png"
            document.getElementById("time").innerHTML="Sunrise 6:45 am"
            document.getElementById("timeSS").innerHTML="Sunset 7:45 am"
        
        }
    else if(x=="Scarbrough"){
                var metrics=["<br>"+"4-5", "<br>"+"10km/h","<br>"+"51%","<br>"+"0%"]
                var degree=["<br>"+"20","<br>"+"30","<br>"+"27"]
                document.getElementById("forcast1").src="imgs/brightsun.png"
                //wind,uv-rays,percipitation,humidity
                document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
                document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
                document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
                document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
                 // for morning,afternoon, and evening section
                document.getElementById("current").innerHTML= "Tuesdays 30"+charac
                document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
                document.getElementById("imageM").src= "imgs/sunny.png"
                document.getElementById("imageA").src="imgs/sunny.png"
                document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
                document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
                document.getElementById("imagesE").src="imgs/cloudymoon.png"
                document.getElementById("time").innerHTML="Sunrise 6:45 am"
                document.getElementById("timeSS").innerHTML="Sunset 7:45 am"
    
        }
    }
    function Wenesday(){
        var x= document.getElementById("City").value;
        var metrics=["<br>"+"1-2", "<br>"+"15km/h","<br>"+"59%","<br>"+"90%"]
        var degree=["<br>"+"9","<br>"+"5","<br>"+"7"]
        if (x=="Toronto" ){
             //wind,uv-rays,percipitation,humidity
            document.getElementById("forcast1").src="imgs/rainycloud.png"
            document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
            document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
            document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
            document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
            // aft,noon,morning
            document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
            document.getElementById("current").innerHTML="Wenesday 2"+charac;
            document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
            document.getElementById("imageM").src="imgs/sun.png";
            document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
            document.getElementById("imageA").src="imgs/rain2.png";
            document.getElementById("imagesE").src="imgs/nightrain.png";
            document.getElementById("time").src="Sunrise 6:40 am"
            document.getElementById("time").innerHTML="Sunrise 6:50 am"
            document.getElementById("timeSS").innerHTML="Sunset 7:50 am"

            
         }
         else if(x=="Oshuwa"){
            //wind,uv-rays,percipitation,humidity
        var metrics=["<br>"+"0-1", "<br>"+"16km/h","<br>"+"50%","<br>"+"80%"]
        var degree=["<br>"+"-4","<br>"+"-6","<br>"+"-8"]
           document.getElementById("forcast1").src="imgs/rain-wind.png"
           document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
           document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
           document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
           document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
           // aft,morning,evening.
           document.getElementById("current").innerHTML="Wednesday -5"+charac;
           document.getElementById("morn").innerHTML=  time[0]+degree[0]+charac
           document.getElementById("imageM").src="imgs/rain2.png";
           document.getElementById("aft").innerHTML=time[1]+degree[1]+charac
           document.getElementById("imageA").src="imgs/rain-wind.png";
           document.getElementById("imagesE").src="imgs/nightrain.png";
           document.getElementById("eve").innerHTML= time[3]+degree[3]+charac
           document.getElementById("time").innerHTML="Sunrise 6:50 am"
            document.getElementById("timeSS").innerHTML="Sunset 7:50 am"
        }
        else if(x== "Brampton"){
        var metrics=["<br>"+"2-3", "<br>"+"5km/h","<br>"+"40%","<br>"+"0%"]
        var degree=["<br>"+"9","<br>"+"16","<br>"+"10"]
            document.getElementById("forcast1").src="imgs/sunny.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
            document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
            document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
            document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Wednesday 14"+charac
            document.getElementById("morn").innerHTML=  time[0]+degree[0]+charac
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/sunny.png"
            document.getElementById("aft").innerHTML=  time[2]+degree[2]+charac
            document.getElementById("eve").innerHTML=  time[3]+degree[3]+charac
            document.getElementById("imagesE").src="imgs/moon.png"
            document.getElementById("time").innerHTML="Sunrise 6:50 am"
            document.getElementById("timeSS").innerHTML="Sunset 7:50 am"
        }
            else if(x=="Scarbrough"){
                var metrics=["<br>"+"0-1", "<br>"+"15km/h","<br>"+"51%","<br>"+"100%"]
                var degree=["<br>"+"15","<br>"+"20","<br>"+"18"]
                document.getElementById("forcast1").src="imgs/rain2.png"
                //wind,uv-rays,percipitation,humidity
                document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
                document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
                document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
                document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
                 // for morning,afternoon, and evening section
                document.getElementById("current").innerHTML= "Wednesday 20"+charac
                document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
                document.getElementById("imageM").src= "imgs/rain2.png"
                document.getElementById("imageA").src="imgs/rain2.png"
                document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
                document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
                document.getElementById("imagesE").src="imgs/nightrain.png"
                document.getElementById("time").innerHTML="Sunrise 6:50 am"
                document.getElementById("timeSS").innerHTML="Sunset 7:50 am"
    
        }
           }
function Thursday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        var metrics=["<br>"+"1-2", "<br>"+"18km/h","<br>"+"5%","<br>"+"0%"]
        var degree=["<br>"+"11","<br>"+"8","<br>"+"4"]
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/sun.png"
       document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
       document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
       document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
       document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
       // aft,noon,morning
       document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
       document.getElementById("current").innerHTML="Thursday 7"+charac
       document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
       document.getElementById("imageM").src="imgs/rain2.png";
       document.getElementById("aft").innerHTML=time[1]+degree[1]+charac
       document.getElementById("imageA").src="imgs/sun.png";
       document.getElementById("imagesE").src="imgs/moon.png";
       document.getElementById("time").innerHTML="Sunrise 6:55 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:55 am"
    }else if(x=="Oshuwa"){
        var metrics=["<br>"+"0-1", "<br>"+"19km/h","<br>"+"40%","<br>"+"80%"]
        var degree=["<br>"+"0","<br>"+"2","<br>"+"-1"]
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/rainycloud.png"
       document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
       document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
       document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
       document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
       // aft,morning,evening.
       document.getElementById("current").innerHTML="Thursday 1"+charac;
       document.getElementById("morn").innerHTML=  time[0]+degree[0]+charac
       document.getElementById("imageM").src="imgs/morningrain.png";
       document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
       document.getElementById("imageA").src="imgs/rain2.png";
       document.getElementById("imagesE").src="imgs/nightrain.png";
       document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
       document.getElementById("time").innerHTML="Sunrise 6:55 am"
       document.getElementById("timeSS").innerHTML="Sunset 7:55 am"
    
    }
       else if(x== "Brampton"){
        var metrics=["<br>"+"2-3", "<br>"+"10km/h","<br>"+"40%","<br>"+"0%"]
        var degree=["<br>"+"9","<br>"+"15","<br>"+"10"]
        document.getElementById("forcast1").src="imgs/sunny.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML==index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML==index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML==index[3]+ metrics[3]
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML=  "Thursday 4"+charac
        document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
        document.getElementById("imageM").src= "imgs/sunCloud.png"
        document.getElementById("imageA").src="imgs/sunny.png"
        document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/windymoon.png"
        document.getElementById("time").innerHTML="Sunrise 6:55 am"
        document.getElementById("timeSS").innerHTML="Sunset 7:55 am"
    
    }
        else if(x=="Scarbrough"){
            var metrics=["<br>"+"4-5", "<br>"+"15km/h","<br>"+"51%","<br>"+"100%"]
            var degree=["<br>"+"25","<br>"+"35","<br>"+"23"]
            document.getElementById("forcast1").src="imgs/brightsun.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
            document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
            document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
            document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Thursday 35"+charac
            document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/sunny.png"
            document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
            document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
            document.getElementById("imagesE").src="imgs/moon.png"
            alert("Heat wave stay hydrated")
            document.getElementById("time").innerHTML="Sunrise 6:55 am"
            document.getElementById("timeSS").innerHTML="Sunset 7:55 am"
    }
    }
function Friday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        var metrics=["<br>"+"1-2", "<br>"+"27km/h","<br>"+"2%","<br>"+"0%"]
        var degree=["<br>"+"0","<br>"+"-4","<br>"+"-6"]
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/windy.png"
       document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
       document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
       document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
       document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
       // aft,noon,morning
       document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
       document.getElementById("current").innerHTML="Friday -3"+charac;
       document.getElementById("morn").innerHTML= time[0]+degree[0]+charac;
       document.getElementById("imageM").src="imgs/windy2.png";
       document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
       document.getElementById("imageA").src="imgs/windy.png";
       document.getElementById("imagesE").src="imgs/windymoon.png";
       document.getElementById("time").innerHTML="Sunrise 7:00 am"
       document.getElementById("timeSS").innerHTML="Sunset 8:00 am"
       alert("STRONG WINDS TODAY BECAREFUL")
    } else if(x=="Oshuwa"){
        var metrics=["<br>"+"0-1", "<br>"+"25km/h","<br>"+"10%","<br>"+"0%"]
        var degree=["<br>"+"1","<br>"+"2","<br>"+"0"]
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/windy.png"
       document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
       document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
       document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
       document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
       // aft,morning,evening.
       document.getElementById("current").innerHTML="Friday"+charac;
       document.getElementById("morn").innerHTML=  time[0]+degree[0]+charac
       document.getElementById("imageM").src="imgs/windy2.png";
       document.getElementById("aft").innerHTML= time[1]+degree[1]+charac
       document.getElementById("imageA").src="imgs/rain2.png";
       document.getElementById("imagesE").src="imgs/windy2.png";
       document.getElementById("eve").innerHTML= time[2]+degree[2]+charac
       document.getElementById("time").innerHTML="Sunrise 7:00 am"
       document.getElementById("timeSS").innerHTML="Sunset 8:00 am"
    }
    else if(x== "Brampton"){
        document.getElementById("time").innerHTML="Sunrise 7:00 am"
        document.getElementById("timeSS").innerHTML="Sunset 8:00 am"
        var metrics=["<br>"+"2-3", "<br>"+"38km/h","<br>"+"70%","<br>"+"100%"]
        var degree=["<br>"+"9","<br>"+"17","<br>"+"10"]
        document.getElementById("forcast1").src="imgs/lighting.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
        document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
        document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
        document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML=  "Friday 4&#x25CB"
        document.getElementById("morn").innerHTML=time[0]+degree[0]+charac
        document.getElementById("imageM").src= "imgs/morningrain.png"
        document.getElementById("imageA").src="imgs/lighting.png"
        document.getElementById("aft").innerHTML=time[1]+degree[1]+charac
        document.getElementById("eve").innerHTML=time[2]+degree[2]+charac
        document.getElementById("imagesE").src="imgs/nightrain.png"
     
    }

        else if(x=="Scarbrough"){
            var metrics=["<br>"+"4-5", "<br>"+"15km/h","<br>"+"51%","<br>"+"0%"]
            var degree=["<br>"+"23","<br>"+"30","<br>"+"19"]
            document.getElementById("forcast1").src="imgs/brightsun.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML=index[0]+ metrics[0]
            document.getElementById("elementsW").innerHTML=index[1]+ metrics[1]
            document.getElementById("elementsH").innerHTML=index[2]+ metrics[2]
            document.getElementById("elementsP").innerHTML=index[3]+ metrics[3]
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Friday 30"+charac
            document.getElementById("morn").innerHTML= time[0]+degree[0]+charac
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/sunny.png"
            document.getElementById("aft").innerHTML=  time[1]+degree[1]+charac
            document.getElementById("eve").innerHTML=  time[2]+degree[2]+charac
            document.getElementById("imagesE").src="imgs/moon.png"
            document.getElementById("time").innerHTML="Sunrise 7:00 am"
            document.getElementById("timeSS").innerHTML="Sunset 8:00 am"
    }
}
function temp(num){
var num = (num*((9/5))+30)
num= num.toFixed(0)
return num}
function Converter (){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
    var mfe=[13,5,14,3]
    var fiveDays=[13,5,2,7,-3]
    if(document.getElementById("tempconverter").checked==true){
        document.getElementById("report").innerHTML= temp(fiveDays[0])+ charac
        document.getElementById("reportT").innerHTML=temp(fiveDays[1])+ charac
        document.getElementById("reportW").innerHTML=temp(fiveDays[2])+  charac
        document.getElementById("reportTH").innerHTML=temp(fiveDays[3])+  charac
        document.getElementById("reportF").innerHTML=temp(fiveDays[4])+  charac
    }
    else if(document.getElementById("tempconverter").checked==false){
        document.getElementById("report").innerHTML= fiveDays[0]+  charac
        document.getElementById("reportT").innerHTML=fiveDays[1]+  charac
        document.getElementById("reportW").innerHTML=fiveDays[2]+  charac
        document.getElementById("reportTH").innerHTML=fiveDays[3]+  charac
        document.getElementById("reportF").innerHTML=fiveDays[4]+  charac
    }}
    else if(x=="Oshuwa" ){
        var fiveDaysO=[7,-9,-4,1,2]
        if(document.getElementById("tempconverter").checked==true){
            document.getElementById("report").innerHTML= temp(fiveDaysO[0])+  charac
            document.getElementById("reportT").innerHTML=temp(fiveDaysO[1])+  charac
            document.getElementById("reportW").innerHTML=temp(fiveDaysO[2])+  charac
            document.getElementById("reportTH").innerHTML=temp(fiveDaysO[3])+  charac
            document.getElementById("reportF").innerHTML=temp(fiveDaysO[4])+  charac

            }else if(document.getElementById("tempconverter").checked==false){
            document.getElementById("report").innerHTML= fiveDaysO[0]+  charac
            document.getElementById("reportT").innerHTML=fiveDaysO[1]+  charac
            document.getElementById("reportW").innerHTML=fiveDaysO[2]+  charac
            document.getElementById("reportTH").innerHTML=fiveDaysO[3]+  charac
            document.getElementById("reportF").innerHTML=fiveDaysO[4]+  charac
    }else if( x=="Brampton"){
    
        var fiveDaysB=[3,10,14,15,4]
        if(document.getElementById("tempconverter").checked==true){
            document.getElementById("report").innerHTML= temp(fiveDaysB[0])+  charac
            document.getElementById("reportT").innerHTML=temp(fiveDaysB[1])+  charac
            document.getElementById("reportW").innerHTML=temp(fiveDaysB[2])+  charac
            document.getElementById("reportTH").innerHTML=temp(fiveDaysB[3])+  charac
            document.getElementById("reportF").innerHTML=temp(fiveDaysB[4])+  charac

        }
        else if(document.getElementById("tempconverter").checked==false){
            document.getElementById("report").innerHTML= fiveDaysB[0]+  charac
            document.getElementById("reportT").innerHTML=fiveDaysB[1]+  charac
            document.getElementById("reportW").innerHTML=fiveDaysB[2]+  charac
            document.getElementById("reportTH").innerHTML=fiveDaysB[3]+  charac
            document.getElementById("reportF").innerHTML=fiveDaysB[4]+  charac
        }
    }
    }
    else if( x=="Scarbrough"){
        var fiveDaysS=[15,30,20,35,30]
        if(document.getElementById("tempconverter").checked==true){
            document.getElementById("report").innerHTML= temp(fiveDaysS[0])+  charac
            document.getElementById("reportT").innerHTML=temp(fiveDaysS[1])+  charac
            document.getElementById("reportW").innerHTML=temp(fiveDaysS[2])+  charac
            document.getElementById("reportTH").innerHTML=temp(fiveDaysS[3])+  charac
            document.getElementById("reportF").innerHTML=temp(fiveDaysS[4])+  charac

        }
        else if(document.getElementById("tempconverter").checked==false){
            document.getElementById("report").innerHTML= fiveDaysS[0]+  charac
            document.getElementById("reportT").innerHTML=fiveDaysS[1]+  charac
            document.getElementById("reportW").innerHTML=fiveDaysS[2]+  charac
            document.getElementById("reportTH").innerHTML=fiveDaysS[3]+  charac
            document.getElementById("reportF").innerHTML=fiveDaysS[4]+  charac
        }
}}

