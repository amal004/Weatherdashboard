
/*function popup(){
    alert("In order to proceed please press okay to use current location")
}*/
function Area(){
    var x= document.getElementById("City").value;
   
    if(x=="Oshuwa"){
        
        // changes image of the city
        document.getElementById("picture").src="https://images.thestar.com/nwsVcbcxyH9mfBSWoPN7r9BTma4=/1280x1024/smart/filters:cb(1652972186334)/https://www.thestar.com/content/dam/localcommunities/oshawa_this_week/news/2022/05/24/what-does-downtown-oshawa-need-from-the-next-provincial-government/10615989_OZdowntownoshawaelection3.JPG";
        // changes the weather forcast of the week
        document.getElementById("pictureM").src="imgs/sun.png";
        document.getElementById("report").innerHTML="7&#x25CB;";
        document.getElementById("pictureT").src="imgs/snow.png";
        document.getElementById("reportT").innerHTML="-9&#x25CB;";
        document.getElementById("pictureW").src="imgs/rain-wind.png";
        document.getElementById("reportW").innerHTML="-4&#x25CB;"
        document.getElementById("pictureTH").src="imgs/rainycloud.png"
        document.getElementById("reportTH").innerHTML="1&#x25CB;"
        document.getElementById("reportF").innerHTML="2&#x25CB;"
        //changes weather data
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"2-3"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"10km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"10%"
        //changes weather of morn/afr/eve
        document.getElementById("forcast1").src="imgs/sun.cloud2.png"
        document.getElementById("current").innerHTML= "Monday 7&#x25CB"
        document.getElementById("morn").innerHTML= "Morning Monday"+"<br>"+"2&#x25CB"
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sun.cloud2.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"9&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"1&#x25CB"
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        // changes line graph
        document.getElementById("graph").src= "imgs/OshuwaLG.png"
        //changes map 
        document.getElementById("maps").src= "imgs/Oshawa.png"
    }
    else if(x=="Toronto"){ 
       

        document.getElementById("forcast1").src="imgs/brightsun.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"3-5"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"7km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
        //weather forcast for 5 days
        document.getElementById("picture").src="https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/b8/7a.jpg";
        document.getElementById("pictureM").src="imgs/sunny.png"
        document.getElementById("report").innerHTML="13&#x25CB;"
        document.getElementById("maps").src= "imgs/brampton.png"
        document.getElementById("graph").src= "imgs/lineChart.png"
        document.getElementById("pictureT").src="imgs/sunny.png"
        document.getElementById("reportT").innerHTML="5&#x25CB;"
        document.getElementById("pictureW").src="imgs/rainycloud.png"
        document.getElementById("reportW").innerHTML="2&#x25CB;"
        document.getElementById("pictureTH").src="imgs/sun.png"
        document.getElementById("reportTH").innerHTML="7&#x25CB;"
        document.getElementById("pictureF").src="imgs/windy.png"
        document.getElementById("reportF").innerHTML="-3&#x25CB;"
         //changes weather of morn/afr/eve - toronto
        document.getElementById("current").innerHTML= "13&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"5&#x25CB"
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sunny.cloud2.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"14&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"3&#x25CB"
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        var fiveDays=[13,5,2,7,-3]
            
         if(document.getElementById("tempconverter").checked==true){
            document.getElementById("report").innerHTML= "&#x25CB;"
            document.getElementById("reportT").innerHTML=temp(1)+ "&#x25CB;"
            document.getElementById("reportW").innerHTML=temp(2)+ "&#x25CB;"
            document.getElementById("reportTH").innerHTML=temp[3]+ "&#x25CB;"
            document.getElementById("reportF").innerHTML=temp[4]+ "&#x25CB;"

                
            
        }

      }
      else if(x=="Brampton"){ 
        document.getElementById("forcast1").src="imgs/rain2.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"10km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"60%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"100%"
        //weather forcast for 5 days
        document.getElementById("picture").src="https://upload.wikimedia.org/wikipedia/commons/4/41/Brampton_Dominion_Building.jpg"
        document.getElementById("pictureM").src="imgs/rain2.png"
        document.getElementById("report").innerHTML="3&#x25CB;"
        document.getElementById("maps").src= "imgs/Brampton.png"
        document.getElementById("graph").src= "imgs/bramptonLG.png"
        document.getElementById("pictureT").src="imgs/clouds.png"
        document.getElementById("reportT").innerHTML="10&#x25CB;"
        document.getElementById("pictureW").src="imgs/sunny.png"
        document.getElementById("reportW").innerHTML="14&#x25CB;"
        document.getElementById("pictureTH").src="imgs/sun.png"
        document.getElementById("reportTH").innerHTML="15&#x25CB;"
        document.getElementById("pictureF").src="imgs/lighting.png"
        document.getElementById("reportF").innerHTML="4&#x25CB;"
         //changes weather of morn/afr/eve 
        document.getElementById("current").innerHTML= "Monday 13&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"5&#x25CB"
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/rain2.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"14&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"3&#x25CB"
        document.getElementById("imagesE").src="imgs/nightrain.png"
      }

    }

function Monday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        

        
        document.getElementById("forcast1").src="imgs/rain2.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"10km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"60%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"100%"
         // for morning,afternoon, and evening section
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"3&#x25CB"
        document.getElementById("current").innerHTML="Monday 13&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"5&#x25CB"
        document.getElementById("imageM").src="imgs/sun.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"14&#x25CB"
        document.getElementById("imageA").src="imgs/sun.png"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"3&#x25CB"
        document.getElementById("imagesE").src="imgs/cloudymoon.png"}
     else if(x== "Oshuwa"){
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"3-5"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"7km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML= "Monday 7&#x25CB"
        document.getElementById("morn").innerHTML= "Morning Monday"+"<br>"+"2&#x25CB"
        document.getElementById("imageM").src= "imgs/sun.png"
        document.getElementById("imageA").src= "imgs/sun.cloud2.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"9&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"1&#x25CB"
        document.getElementById("imagesE").src="imgs/cloudymoon.png"
        document.getElementById("forcast1").src="imgs/sun.cloud2.png"}
     else if(x== "Brampton"){
        document.getElementById("forcast1").src="imgs/rain2.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"10km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"50%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"100%"
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML= "Monday 3&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"1&#x25CB"
        document.getElementById("imageM").src= "imgs/morningrain.png"
        document.getElementById("imageA").src="imgs/rain2.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"4&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"5&#x25CB"
        document.getElementById("imagesE").src="imgs/nightrain.png"

     }            
}
function Tuesday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
         //wind,uv-rays,percipitation,humidity
        document.getElementById("forcast1").src="imgs/brightsun.png"
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"1-2";
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"8km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"20%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"

        // aft,noon,morning
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"0&#x25CB";
        
        document.getElementById("current").innerHTML="Tuesday 5&#x25CB";
        document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"3&#x25CB";
        document.getElementById("imageM").src="imgs/sunny.png";
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"7&#x25CB";
        document.getElementById("imageA").src="imgs/sunny.png";
        document.getElementById("imagesE").src="imgs/cloudymoon.png";
    }
     else if(x=="Oshuwa"){
         //wind,uv-rays,percipitation,humidity
        document.getElementById("forcast1").src="imgs/brightsun.png"
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1)";
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"16km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"30%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"100%"
        // aft,morning,evening.
        document.getElementById("current").innerHTML="Tuesday -9&#x25CB";
        document.getElementById("forcast1").src="imgs/snow.png"
        document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"-4&#x25CB";
        document.getElementById("imageM").src="imgs/snow.2.png";
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"-7&#x25CB";
        document.getElementById("imageA").src="imgs/snow.2.png";
        document.getElementById("imagesE").src="imgs/moon.png";
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"-10&#x25CB";
       document.getElementById("forcast1").src="imgs/rain2.png"


        } else if(x== "Brampton"){
            document.getElementById("forcast1").src="imgs/clouds.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1"
            document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"20km/h"
            document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"20%"
            document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Tuesday 10&#x25CB"
            document.getElementById("morn").innerHTML= "Morning"+"<br>"+"6&#x25CB"
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/rain2.png"
            document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"12&#x25CB"
            document.getElementById("eve").innerHTML= "Evening"+"<br>"+"10&#x25CB"
            document.getElementById("imagesE").src="imgs/cloudymoon.png"
        }
    }
    function Wenesday(){
        var x= document.getElementById("City").value;
        if (x=="Toronto" ){
             //wind,uv-rays,percipitation,humidity
            document.getElementById("forcast1").src="imgs/rainycloud.png"
            document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"1-2";
            document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"15km/h"
            document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"59%"
            document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"90%"
            // aft,noon,morning
            document.getElementById("eve").innerHTML= "Evening"+"<br>"+"7&#x25CB";
            document.getElementById("current").innerHTML="Wenesday 2&#x25CB";
            document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"9&#x25CB";
            document.getElementById("imageM").src="imgs/sun.png";
            document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"5&#x25CB";
            document.getElementById("imageA").src="imgs/rain2.png";
            document.getElementById("imagesE").src="imgs/nightrain.png";
         }
         else if(x=="Oshuwa"){
            //wind,uv-rays,percipitation,humidity
           document.getElementById("forcast1").src="imgs/rain-wind.png"
           document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1";
           document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"16km/h"
           document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"50%"
           document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"80%"
           // aft,morning,evening.
           document.getElementById("current").innerHTML="Wednesday -5&#x25CB";
           document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"-4&#x25CB";
           document.getElementById("imageM").src="imgs/rain2.png";
           document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"-6&#x25CB";
           document.getElementById("imageA").src="imgs/rain-wind.png";
           document.getElementById("imagesE").src="imgs/nightrain.png";
           document.getElementById("eve").innerHTML= "Evening"+"<br>"+"-8&#x25CB"}
        else if(x== "Brampton"){
            document.getElementById("forcast1").src="imgs/sunny.png"
            //wind,uv-rays,percipitation,humidity
            document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"2-3"
            document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"5km/h"
            document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
            document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
             // for morning,afternoon, and evening section
            document.getElementById("current").innerHTML= "Wednesday 14&#x25CB"
            document.getElementById("morn").innerHTML= "Morning"+"<br>"+"9&#x25CB"
            document.getElementById("imageM").src= "imgs/sun.png"
            document.getElementById("imageA").src="imgs/sunny.png"
            document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"16&#x25CB"
            document.getElementById("eve").innerHTML= "Evening"+"<br>"+"10&#x25CB"
            document.getElementById("imagesE").src="imgs/moon.png"}
            else if(x== "Brampton"){
                document.getElementById("forcast1").src="imgs/sunny.png"
                //wind,uv-rays,percipitation,humidity
                document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"2-3"
                document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"5km/h"
                document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
                document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
                 // for morning,afternoon, and evening section
                document.getElementById("current").innerHTML= "Wednesday 14&#x25CB"
                document.getElementById("morn").innerHTML= "Morning"+"<br>"+"9&#x25CB"
                document.getElementById("imageM").src= "imgs/sun.png"
                document.getElementById("imageA").src="imgs/sunny.png"
                document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"16&#x25CB"
                document.getElementById("eve").innerHTML= "Evening"+"<br>"+"10&#x25CB"
                document.getElementById("imagesE").src="imgs/moon.png"}
           }



function Thursday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/sun.png"
       document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"1-2";
       document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"18km/h"
       document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"5%"
       document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"

       // aft,noon,morning
       document.getElementById("eve").innerHTML= "Evening"+"<br>"+"4&#x25CB";
       document.getElementById("current").innerHTML="Thursday 7&#x25CB";
       document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"11&#x25CB";
       document.getElementById("imageM").src="imgs/rain2.png";
       document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"8&#x25CB";
       document.getElementById("imageA").src="imgs/sun.png";
       document.getElementById("imagesE").src="imgs/moon.png";}

    else if(x=="Oshuwa"){
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/rainycloud.png"
       document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1";
       document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"19km/h"
       document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
       document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"80%"
       // aft,morning,evening.
       document.getElementById("current").innerHTML="Thursday 1&#x25CB";
       document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"0&#x25CB";
       document.getElementById("imageM").src="imgs/morningrain.png";
       document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"2&#x25CB";
       document.getElementById("imageA").src="imgs/rain2.png";
       document.getElementById("imagesE").src="imgs/nightrain.png";
       document.getElementById("eve").innerHTML= "Evening"+"<br>"+"-1&#x25CB"}
       else if(x== "Brampton"){
        document.getElementById("forcast1").src="imgs/sunny.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"2-3"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"10km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"40%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML=  "Thursday4&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"9&#x25CB"
        document.getElementById("imageM").src= "imgs/sunCloud.png"
        document.getElementById("imageA").src="imgs/sunny.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"17&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"10&#x25CB"
        document.getElementById("imagesE").src="imgs/windymoon.png"}
       

    }





function Friday(){
    var x= document.getElementById("City").value;
    if (x=="Toronto" ){
        
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/windy.png"
       document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"1-2";
       document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"27km/h"
       document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"2%"
       document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
       // aft,noon,morning
       document.getElementById("eve").innerHTML= "Evening"+"<br>"+"-6&#x25CB";
       document.getElementById("current").innerHTML="Friday -3&#x25CB";
       document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"0&#x25CB";
       document.getElementById("imageM").src="imgs/windy2.png";
       document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"-4&#x25CB";
       document.getElementById("imageA").src="imgs/windy.png";
       document.getElementById("imagesE").src="imgs/windymoon.png";
    } else if(x=="Oshuwa"){
        //wind,uv-rays,percipitation,humidity
       document.getElementById("forcast1").src="imgs/windy.png"
       document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"0-1";
       document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"25km/h"
       document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"10%"
       document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"0%"
       // aft,morning,evening.
       document.getElementById("current").innerHTML="Friday 2&#x25CB";
       document.getElementById("morn").innerHTML=  "Morning"+"<br>"+"1&#x25CB";
       document.getElementById("imageM").src="imgs/windy2.png";
       document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"2&#x25CB";
       document.getElementById("imageA").src="imgs/rain2.png";
       document.getElementById("imagesE").src="imgs/windy2.png";
       document.getElementById("eve").innerHTML= "Evening"+"<br>"+"0&#x25CB"
    }
    else if(x== "Brampton"){
        document.getElementById("forcast1").src="imgs/lighting.png"
        //wind,uv-rays,percipitation,humidity
        document.getElementById("elementsU").innerHTML="UV Rays"+ "<br>"+"2-3"
        document.getElementById("elementsW").innerHTML="Wind"+ "<br>"+"38km/h"
        document.getElementById("elementsH").innerHTML="Humidity"+ "<br>"+"70%"
        document.getElementById("elementsP").innerHTML="Percipatation"+ "<br>"+"100%"
         // for morning,afternoon, and evening section
        document.getElementById("current").innerHTML=  "Friday 4&#x25CB"
        document.getElementById("morn").innerHTML= "Morning"+"<br>"+"9&#x25CB"
        document.getElementById("imageM").src= "imgs/morningrain.png"
        document.getElementById("imageA").src="imgs/lighting.png"
        document.getElementById("aft").innerHTML= "Afternoon"+"<br>"+"17&#x25CB"
        document.getElementById("eve").innerHTML= "Evening"+"<br>"+"10&#x25CB"
        document.getElementById("imagesE").src="imgs/nightrain.png"}
       
}

function temp(num){
    console.log("test")
var num = (num*(Math.floor(9/5))+30)
return num
}
function Converter (){
    var fiveDays=[13,5,2,7,-3]
    if(document.getElementById("tempconverter").checked==true){
        document.getElementById("report").innerHTML= temp(fiveDays[0])+ "&#x25CB;"
        document.getElementById("reportT").innerHTML=temp(fiveDays[1])+ "&#x25CB;"
        document.getElementById("reportW").innerHTML=temp(fiveDays[2])+ "&#x25CB;"
        document.getElementById("reportTH").innerHTML=temp(fiveDays[3])+ "&#x25CB;"
        document.getElementById("reportF").innerHTML=temp(fiveDays[4])+ "&#x25CB;"

            
        
    }
}