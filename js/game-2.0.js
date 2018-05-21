/* Phaser.IO game example */

var mainChain = function() 
{

    /* JIO SDK 2.0 integration */
   /* var jioConf = { "autoControl": ["volume", "exit"], "gameName": "ludoChamp", "gameVersion": "1.0.0"};
    var jioSDK = new Jiogames(jioConf);*/
    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) 
    {
        switch (e.key) {
          
            case "Backspace":
            //   console.log("EXIT");
             //  e.preventDefault();
              //  jioSDK.exit(0);
             // game.destroy();
           //  document.close();
            // process.exit(-1);
                break;
            default:
                break;
        }
    }


 /* JIO SDK 2.0 integration */

//  var hidden, visibilityChange; 
//  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
//    hidden = "hidden";
//    visibilityChange = "visibilitychange";
//  } else if (typeof document.msHidden !== "undefined") {
//    hidden = "msHidden";
//    visibilityChange = "msvisibilitychange";
//  } else if (typeof document.webkitHidden !== "undefined") {
//    hidden = "webkitHidden";
//    visibilityChange = "webkitvisibilitychange";
//  }
//  document.addEventListener(visibilityChange, handleVisibilityChange, false);

//  function handleVisibilityChange() {
//     if (document[hidden]) {
     
//     console.log("NOT VISIBLE NOW");
 
//     } else {
//         console.log("IS VISIBLE NOW");
    
//     }
//   }
 
 /*var jioConf = { "autoControl": ["volume", "exit"], "gameName": "ludoChamp", "gameVersion": "1.0.0"};
 
 window.jioSDK = new Jiogames(jioConf);
 document.addEventListener('keydown', handleKeyDown);

 function handleKeyDown(e) 
 {
    switch (e.key) {
        case "0":
            if (game.paused) 
            {
                console.log("gameResumed");
                //banner.setText("");
               // music && music.play();
                game && game.gameResumed();
            } else {
                console.log("gamePaused");
              //  banner.setText("Game paused");
               // music && music.pause();
                game && game.gamePaused();
            }
            break;

         case "Backspace":
         console.log("EXIT");
         e.preventDefault();
        // jioSDK.exit(0);
    

            break;
        default:
            break;
    }
 }*/
 /* JIO ads related code */
 /*  cacheAds = function() {
     VMAX.jioSDK_adId = "ludochamp"; // <ins ads id in index.html
     VMAX.jioSDK_adReady = false;



     console.log("calling cache Jio Ad")
     VMAX.cacheAd(VMAX.jioSDK_adId);
     VMAX.onAdReady = function(AdPlacementId) {
         VMAX.jioSDK_adReady = true;
         console.log("VMAX: onAdReady");
     }
     VMAX.onAdError = function(AdPlacementId, errorCode) {
         console.log("VMAX: onAdError: ", errorCode);
         VMAX.jioSDK_adReady = false;
     }
     VMAX.onAdClose = function(AdPlacementId) {
         console.log("onAdClose");
         setTimeout(function() {
             console.log("VMAX: onAdClose");
             cacheAds(); // call cache on every ad close and get prepared for next ad
         }, 3000);
     }
     
 }

 showAds = function() { // use this showAds func in your game levels/game over or maintain your ad frequency when to show ads
     if(VMAX.jioSDK_adReady){
         VMAX.showAd(VMAX.jioSDK_adId);
         console.log("showing ads on id: ", VMAX.jioSDK_adId);
     }
 }*/


    /*function cacheAds()
    {
        console.log("INSIDE CACHE AD");
        VMAX.jioSDK_adId = "ludochamp"; // <ins ads id in index.html
        VMAX.jioSDK_adReady=false;
        console.log("calling cache Jio Ad")
        VMAX.cacheAd(VMAX.jioSDK_adId);
        VMAX.onAdReady = function(AdPlacementId) {
        VMAX.jioSDK_adReady=true;
        console.log("jio ads cached");
        }
        VMAX.onAdError = function(AdPlacementId, errorCode) {
        console.log("jio ads cache error: ",errorCode);
        VMAX.jioSDK_adReady=false;
        }
        VMAX.onAdClose = function(AdPlacementId){
        setTimeout(function() {
        console.log("jio ads: onAdClose");
        cacheAds(); // call cache on every ad close and get prepared for next ad
        }, 3000);
        }
    }*/
    
   // function showAds() { // use this showAds func in your game levels/game over or maintain your ad frequency when to show ads

   // cacheAds(); 
//    console.log("Not showing ads on debug build");
//    return;

//    if(Phaser.Device.desktop)
//    {
//         console.log("Not showing ads on desktop");
//         return;
//    }

    // console.log("INSIDE SHOWING AD");
    // //if(VMAX.jioSDK_adReady)
    // {
    //     VMAX.jioSDK_adId = "ludochamp";
    //     VMAX.showAd(VMAX.jioSDK_adId);
    //     console.log("showing ads on id: ", VMAX.jioSDK_adId);
    // }
    /*else{
        console.log("AD IS NOT READY");
    }*/
   // }

    //cacheAds(); //

    // cacheAds(); /// cache once on page load*/

    /* JIO SDK integration ends */



    /*JIO SDK END */




    /*Google analytics begin */
    
        /**
    * Init game, init google analytics
    */

  
/*
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 
*/




    var jioSDK;
    
//  window.jioSDK = new Jiogames();
//     jioSDK.myAdspotkey = "e7ba7705"; // The adspot key shared
//     jioSDK.myGameSource = "com.jio.ludochamp";// The package name of your game
    function initSDK()
     {
        //  console.log("JIO SDK :"+jioSDK);
        jioSDK = new Jiogames();
        jioSDK.myAdspotkey = "7f877c43"; // The adspot key shared
        jioSDK.myGameSource = "com.jio.jiogames";// The package name of your game
    //   console.log("CALLED INIT");
    //   console.log("JIO SDK :"+jioSDK);

        // console.log("VERSION :"+ jioSDK.version);
      }

    function sendScore(val)
    {
        jioSDK.postScore(val);
    }
 
    function jioCacheAd()
    {
        jioSDK.cacheAd(jioSDK.myAdspotkey, jioSDK.myGameSource);
    }

    function jioShowAd()
    {
        //return;
        jioSDK.showAd(jioSDK.myAdspotkey, jioSDK.myGameSource);
    }

    function showAds()
    {
        // return;
        // if(game)
        jioShowAd();
    }

    function getResoFactor()
    {
     
      // console.log("TOUCH"+game.device.touch);
        //  canvas_height_max=2048;
        //  canvas_width_max=2048; 


        // canvas_width = window.innerWidth * window.devicePixelRatio;
        // canvas_height = window.innerHeight * window.devicePixelRatio;
        // aspect_ratio = canvas_width / canvas_height;
        // if (aspect_ratio > 1) scale_ratio = canvas_height / canvas_height_max;
        //     else scale_ratio = canvas_width / canvas_width_max;
        //     console.log("RESO FACTOR :"+scale_ratio);


       //console.log("WIDTH :"+window.screen.width+"::"+"INNER WIDTH :"+window.innerWidth)
       // aspect_ratio = canvas_width / canvas_height;
        
        
        //Phone screen height:

    }

   
 
    function initGoogleAnalytics() 
    {
  

    /* ga('create', 'UA-50604869-3', 'auto');
     ga('send', 'pageview');
     //console.log(ga);
   
     sendGAEvent("GameLaunch","Launched"," ");*/
    }

    function sendGAEvent(category,action,label=" ")
    {
        // ga('send', 'event', category, action, label);
        
    }
    
    function receivedInputFromMP(playerNo,placeOfAction)
    {
        return;
        console.log("INPUT GOT FROM :"+playerNo+"::"+placeOfAction);
    }

    function wantInputFromMP(playerNo,placeOfAction)
    {
        return;
        console.log("WANT FROM :"+playerNo+"::"+placeOfAction);

    }



    var sixCounter=0;
    
    function getMax()
    {
        var a=randomiser(1,100);
        var max=5;
        var percentForSix=100;
        if(sixCounter==0)
        {
          //   console.log("No six in previous step so max is 6");
            max=6;
        }
        if(sixCounter==1)
        {
           
            percentForSix=50;
            if(a<=percentForSix)
            {
           //     console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }

        }
        else if(sixCounter==2)
        {
            percentForSix=25;
            if(a<=percentForSix)
            {
              //  console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter==3)
        {
            percentForSix=10;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter==4)
        {
            percentForSix=10;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter>4)
        {
            percentForSix=5;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
      //  console.log("REQD PERCENT :"+ percentForSix+"::"+"CURR PERCENT : "+a);
        return max;

    }


//GA-CODE : UA-50604869-3 
 
    
    /*Google analytics end*/

    ///


    var redAdjustCounter=0;
    var redAdjustedOnce=[];

    var yellowAdjustCounter=0;
    var yellowAdjustedOnce=[];

    var greenAdjustCounter=0;
    var greenAdjustedOnce=[];

    var blueAdjustCounter=0;
    var blueAdjustedOnce=[];


    function calOffsets()
    {
      //  console.log("CALCULATING HERE");
        redAdjustedOnce=[];
        redAdjustCounter=0;

        yellowAdjustedOnce=[];
        yellowAdjustCounter=0;

        greenAdjustedOnce=[];
        greenAdjustCounter=0;

        blueAdjustedOnce=[];
        blueAdjustCounter=0;

    
      
        offsetPos(1,red1curr,1);
        offsetPos(1,red2curr,2);
        offsetPos(1,red3curr,3);
        offsetPos(1,red4curr,4);


        offsetPos(2,yellow1curr,1);
        offsetPos(2,yellow2curr,2);
        offsetPos(2,yellow3curr,3);
        offsetPos(2,yellow4curr,4);

        offsetPos(3,green1curr,1);
        offsetPos(3,green2curr,2);
        offsetPos(3,green3curr,3);
        offsetPos(3,green4curr,4);

        offsetPos(4,blue1curr,1);
        offsetPos(4,blue2curr,2);
        offsetPos(4,blue3curr,3);
        offsetPos(4,blue4curr,4);

        circleOffsets();
        getTokensOnTop();


    }

 
    function offsetPos(color,curr,tokenNo)
    {
        var allTokens=[red1curr,red2curr,red3curr,red4curr,yellow1curr,yellow2curr,yellow3curr,yellow4curr,green1curr,green2curr,green3curr,green4curr,blue1curr,blue2curr,blue3curr,blue4curr];
        var arrX=[];
        var arrY=[];  
 
        




 


        if(color==1)
        {
            arrX=redNodeX;
            arrY=redNodeY;

            if(tokenNo==1)
            {
                allTokens[0]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[1]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[2]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[3]=-1;
            }


        }else if(color==2)
        {
            arrX=yellowNodeX;
            arrY=yellowNodeY;

            if(tokenNo==1)
            {
                allTokens[4]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[5]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[6]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[7]=-1;
            }
        }
        else if(color==3)
        {
            arrX=greenNodeX;
            arrY=greenNodeY;

            if(tokenNo==1)
            {
                allTokens[8]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[9]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[10]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[11]=-1;
            }
        }
        else if(color==4)
        {
            arrX=blueNodeX;
            arrY=blueNodeY;
            if(tokenNo==1)
            {
                allTokens[12]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[13]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[14]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[15]=-1;
            }
        } 

     
        var redOverLapping=[];
        var yellowOverLapping=[];
        var greenOverLapping=[];
        var blueOverLapping=[];

        var redCounter=0;
        var yellowCounter=0;
        var greenCounter=0;
        var blueCounter=0;

        for(var i=0;i<allTokens.length;i++)
        {

            if(allTokens[i]<0 || allTokens[i]>=56)//Caged or at home.  
            continue;
             
            if(i<=3) //CHECK FOR REDS
             {
                
                if(arrX[curr]==redNodeX[allTokens[i]] && arrY[curr]==redNodeY[allTokens[i]])
                {
                    
                    if( redAdjustedOnce.includes(i+1)==false && redOverLapping.includes(i+1)==false)
                    {
                        redOverLapping[redCounter]=(i+1); //Red x is overlapping on this tile.
                        redCounter++;
                    }
                   
                    if(color==1) //Also add the one which is currently overlapping
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) //Yellow
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }
                    else if(color==3) //Green
                    {
                        if(greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                        {
                            greenOverLapping[greenCounter]=tokenNo;
                            greenCounter++;
                        }
                    }
                    else if(color==4) //Blue
                    {
                        if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                        {
                            blueOverLapping[blueCounter]=tokenNo;
                            blueCounter++;
                        }
                    }

                }
            }
            else if(i>=4 && i<=7 ) //CHECK FOR YELLOW
            {
                 if(arrX[curr]==yellowNodeX[allTokens[i]] && arrY[curr]==yellowNodeY[allTokens[i]])
                {
                     if( yellowAdjustedOnce.includes((i+1)-4)==false && yellowOverLapping.includes((i+1)-4)==false)
                    {
                         yellowOverLapping[yellowCounter]=((i+1)-4); //yellow x is overlapping on this tile.
                         yellowCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else if(color==3) //Green
                    {
                        if(greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                        {
                            greenOverLapping[greenCounter]=tokenNo;
                            greenCounter++;
                        }
                    }
                    else if(color==4) //Blue
                    {
                        if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                        {
                            blueOverLapping[blueCounter]=tokenNo;
                            blueCounter++;
                        }
                    }



                }
            }
            else if(i>=8 && i<=11) //CHECK FOR GREEN
           {
                 if(arrX[curr]==greenNodeX[allTokens[i]] && arrY[curr]==greenNodeY[allTokens[i]])
                 {
                    if( greenAdjustedOnce.includes((i+1)-8)==false && greenOverLapping.includes((i+1)-8)==false)
                    {
                         greenOverLapping[greenCounter]=((i+1)-8); //green x is overlapping on this tile.
                         greenCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else if(color==3) //Also add the one which is currently overlapping
                 {
                     if( greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                     {
                         greenOverLapping[greenCounter]=tokenNo;
                         greenCounter++;
                     }
                 }
                 else if(color==4) 
                 {
                     if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                     {
                         blueOverLapping[blueCounter]=tokenNo;
                         blueCounter++;
                     }
                 }
                }

           }
           else if(i>=12 && i<=15) //CHECK FOR BLUE
           {
                 if(arrX[curr]==blueNodeX[allTokens[i]] && arrY[curr]==blueNodeY[allTokens[i]])
                 {

                    if( blueAdjustedOnce.includes((i+1)-12)==false && blueOverLapping.includes((i+1)-12)==false)
                    {
                        blueOverLapping[blueCounter]=((i+1)-12); //blue x is overlapping on this tile.
                        blueCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else  if(color==3) //Also add the one which is currently overlapping
                 {
                     if( greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                     {
                         greenOverLapping[greenCounter]=tokenNo;
                         greenCounter++;
                     }
                 }
                 else if(color==4) 
                 {
                    if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                    {
                        blueOverLapping[blueCounter]=tokenNo;
                        blueCounter++;
                    }
                 }
                 }

            }
            
        }

        var offsetSetterXred=-8-8;
        var offsetSetterXyel=-3;
        var offsetSetterXgreen=-3
        var offsetSetterXblue=-8-8;

        var offsetSetterXredfactor=2;
        var offsetSetterXyelfactor=2;
        var offsetSetterXgreenfactor=2;
        var offsetSetterXbluefactor=2;

        var offsetSetterYred=0;
        var offsetSetterYyel=0;
        var offsetSetterYgreen=0;
        var offsetSetterYblue=0;
 
        var offsetSetterYredfactor=0;
        var offsetSetterYyelfactor=0;
        var offsetSetterYgreenfactor=0;
        var offsetSetterYbluefactor=0;


        var totalMultiElementsOnThisTile=-1;
        var colorsOnTile=[];
        var tileCounter=0;
        if(redCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=1; //Red is present on this tile.
            tileCounter++;
        }

        if(yellowCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=2; //Yellow is present on this tile.
            tileCounter++;
        }

        if(greenCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=3; //Green is present on this tile.
            tileCounter++;
        }

        if(blueCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=4; //Blue is present on this tile.
            tileCounter++;
        }

         if(totalMultiElementsOnThisTile==0)
        {
            //One color is on same tile.
            offsetSetterXred=-20; //-9
            offsetSetterXredfactor=-3;

            offsetSetterXyel=-9;
            offsetSetterXyelfactor=-3;

            offsetSetterXgreen=-9;
            offsetSetterXgreenfactor=-3;

            offsetSetterXblue=-9;
            offsetSetterXbluefactor=-3;



          
        }

        if(totalMultiElementsOnThisTile==1)
        {
            
            //Two color types on same tile
            //Get the two color types. - DONE.
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            //console.log("TWO COLORS SAME TILE COLOR 1:"+color1+"::"+"COLOR 2 :"+color2);
            if(color1==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }


            if(color2==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }



      
        }
        else if(totalMultiElementsOnThisTile==2)
        {
            //Three color types on same tile
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            var color3=colorsOnTile[2];


            if(color1==1) //red //MIDDLE
            {
                offsetSetterXred=-9;
                offsetSetterXredfactor=-3;
                
                offsetSetterYred=-6;
            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-9;
                offsetSetterXyelfactor=-3;
            
                offsetSetterYyel=-6;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-9;
                offsetSetterXgreenfactor=-3;

                offsetSetterYgreen=-6;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-9;
                offsetSetterXbluefactor=-3;

                offsetSetterYblue=-6;
            }

//----
            if(color2==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }
//----
            if(color3==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color3==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color3==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color3==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }




        }
        else if(totalMultiElementsOnThisTile==3)
        {
            //Four color types on same tile
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            var color3=colorsOnTile[2];
            var color4=colorsOnTile[3];
            //console.log("FOUR COLORS SAME TILE COLOR 1:"+color1+"::"+"COLOR 2 :"+color2+":: COLOR 3 :"+color3+":: COLOR 4 :"+color4);
            //Color 1 and 2 ,will be on top.

            if(color1==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;

                offsetSetterYred=-6;
            

            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            
                offsetSetterYyel=-6;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            
                offsetSetterYgreen=-6;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;

                offsetSetterYblue=-6;
            }
            //----
            if(color2==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;

                offsetSetterYred=-6;

            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;

                offsetSetterYyel=-6;

            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;

                offsetSetterYgreen=-6;

            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;

                offsetSetterYblue=-6;

            }
            //----
            if(color3==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color3==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color3==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color3==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }
            //----
            if(color4==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color4==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color4==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color4==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }





        }


        if(redCounter>0)
        {
          
            redOverLapping.sort(function(a, b){return b-a});
            for(var i=0; i<redOverLapping.length;i++)
             {
                var token=redOverLapping[i];

             
                if(token==1  && redAdjustedOnce.includes(token)==false)
                {
                    red1.x= (redNodeX[red1curr]+offsetSetterXred);
                    red1.y= (redNodeY[red1curr]-14+offsetSetterYred);
                   
                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;

                    redAdjustCounter++;
                }
                else if(token==2  && redAdjustedOnce.includes(token)==false)
                {
                    red2.x= ( redNodeX[red2curr]+offsetSetterXred);
                    red2.y= ( redNodeY[red2curr]-14+offsetSetterYred);

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;

                }
                else if(token==3  && redAdjustedOnce.includes(token)==false)
                {
                     red3.x= ( redNodeX[red3curr]+offsetSetterXred);
                     red3.y= ( redNodeY[red3curr]-14+offsetSetterYred);

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;
                 }
                else if(token==4  && redAdjustedOnce.includes(token)==false)
                {
 
                    red4.x= (redNodeX[red4curr]+offsetSetterXred);
                    red4.y= (redNodeY[red4curr]-14+offsetSetterYred);

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;
                }
             
            }

        }
         else
        {

            //console.log("HERE");
            if(redAdjustedOnce.includes(1)==false && redOverLapping.includes(1)==false){
            if(red1curr>=0 && red1curr<=56)
            {
             

               if(red1curr==0){
                game.add.tween(red1).to( { x:redNodeX[red1curr] ,y: redNodeY[red1curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                game.add.tween(red1BlackCircle).to( { x:redNodeX[red1curr] ,y: redNodeY[red1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                game.add.tween(red1Circle).to( { x:redNodeX[red1curr] ,y: redNodeY[red1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);

               }
             else{
                red1.x= ( redNodeX[red1curr]);
                red1.y= (redNodeY[red1curr]);
             }
            }
            }
             
            if(redAdjustedOnce.includes(2)==false && redOverLapping.includes(2)==false){
            if(red2curr>=0 && red2curr<=56)
            {
                if(red2curr==0)
                {
                    game.add.tween(red2).to( { x:redNodeX[red2curr] ,y: redNodeY[red2curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(red2BlackCircle).to( { x:redNodeX[red2curr] ,y: redNodeY[red2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(red2Circle).to( { x:redNodeX[red2curr] ,y: redNodeY[red2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else
                {
                    red2.x= (redNodeX[red2curr]);
                    red2.y= (redNodeY[red2curr]);
                }
         
            }

        }
            if(redAdjustedOnce.includes(3)==false && redOverLapping.includes(3)==false)  {
                if(red3curr>=0 && red3curr<=56)
                {
                    if(red3curr==0)
                    {
                        game.add.tween(red3).to( { x:redNodeX[red3curr] ,y: redNodeY[red3curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(red3BlackCircle).to( { x:redNodeX[red3curr] ,y: redNodeY[red3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(red3Circle).to( { x:redNodeX[red3curr] ,y: redNodeY[red3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }
                    else{
                        red3.x= (redNodeX[red3curr]);
                        red3.y= (redNodeY[red3curr]);
                    }
                

                }
                
            }
          

            if(redAdjustedOnce.includes(4)==false && redOverLapping.includes(4)==false){
                if(red4curr>=0 && red4curr<=56)
                {
                    if(red4curr==0)
                    {
                        game.add.tween(red4).to( { x:redNodeX[red4curr] ,y: redNodeY[red4curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(red4BlackCircle).to( { x:redNodeX[red4curr] ,y: redNodeY[red4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(red4Circle).to( { x:redNodeX[red4curr] ,y: redNodeY[red4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }   
                    else{
                        red4.x= (redNodeX[red4curr]); 
                        red4.y= (redNodeY[red4curr]);
                    }
                   


                }
            }
         

        }

 

        if(yellowCounter>0)
        {

            yellowOverLapping.sort(function(a, b){return b-a});

             for(var i=yellowOverLapping.length;i>=0;i--)
            {
                var token=yellowOverLapping[i];

           
             

                if(token==1 && yellowAdjustedOnce.includes(token)==false)
                {
                  
                    yellow1.x= (yellowNodeX[yellow1curr]+offsetSetterXyel);
                    yellow1.y= (yellowNodeY[yellow1curr]-14+offsetSetterYyel);
                   
                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                   
                }
                else if(token==2 && yellowAdjustedOnce.includes(token)==false)
                {
                    yellow2.x= (yellowNodeX[yellow2curr]+offsetSetterXyel);
                    yellow2.y= (yellowNodeY[yellow2curr]-14+offsetSetterYyel);

                 
                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                }
                else if(token==3 && yellowAdjustedOnce.includes(token)==false)
                {
                    //console.log("4");

                    yellow3.x= (yellowNodeX[yellow3curr]+offsetSetterXyel);
                    yellow3.y= (yellowNodeY[yellow3curr]-14+offsetSetterYyel);

                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                  
                 }
                else if(token==4 && yellowAdjustedOnce.includes(token)==false)
                {
                    yellow4.x= (yellowNodeX[yellow4curr]+offsetSetterXyel);
                    yellow4.y= (yellowNodeY[yellow4curr]-14+offsetSetterYyel);

                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                    
                 }

          
            }

        } else{
            
            if(yellowAdjustedOnce.includes(1)==false) 
            if(yellow1curr>=0 && yellow1curr<=56)
            {
                if(yellow1curr==0)
                {
                    game.add.tween(yellow1).to( { x:yellowNodeX[yellow1curr] ,y: yellowNodeY[yellow1curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow1BlackCircle).to( { x:yellowNodeX[yellow1curr] ,y: yellowNodeY[yellow1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow1Circle).to( { x:yellowNodeX[yellow1curr] ,y: yellowNodeY[yellow1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else
                {
                    yellow1.x= (yellowNodeX[yellow1curr]);
                    yellow1.y= (yellowNodeY[yellow1curr]);
                }
                

            }
            
            if(yellowAdjustedOnce.includes(2)==false) 
            if(yellow2curr>=0 && yellow2curr<=56)
            {
                if(yellow2curr==0)
                {
                    game.add.tween(yellow2).to( { x:yellowNodeX[yellow2curr] ,y: yellowNodeY[yellow2curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow2BlackCircle).to( { x:yellowNodeX[yellow2curr] ,y: yellowNodeY[yellow2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow2Circle).to( { x:yellowNodeX[yellow2curr] ,y: yellowNodeY[yellow2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else
                {
                    yellow2.x= (yellowNodeX[yellow2curr]);
                    yellow2.y= (yellowNodeY[yellow2curr]);
                }

            }

            if(yellowAdjustedOnce.includes(3)==false) 
            if(yellow3curr>=0 && yellow3curr<=56)
            {
                if(yellow3curr==0)
                {
                    game.add.tween(yellow3).to( { x:yellowNodeX[yellow3curr] ,y: yellowNodeY[yellow3curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow3BlackCircle).to( { x:yellowNodeX[yellow3curr] ,y: yellowNodeY[yellow3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow3Circle).to( { x:yellowNodeX[yellow3curr] ,y: yellowNodeY[yellow3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                yellow3.x= (yellowNodeX[yellow3curr]);
                yellow3.y= (yellowNodeY[yellow3curr]);
                }
            }

            if(yellowAdjustedOnce.includes(4)==false) 
            if(yellow4curr>=0 && yellow4curr<=56)
            {
                if(yellow4curr==0)
                {
                    game.add.tween(yellow4).to( { x:yellowNodeX[yellow4curr] ,y: yellowNodeY[yellow4curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow4BlackCircle).to( { x:yellowNodeX[yellow4curr] ,y: yellowNodeY[yellow4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(yellow4Circle).to( { x:yellowNodeX[yellow4curr] ,y: yellowNodeY[yellow4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                    yellow4.x= (yellowNodeX[yellow4curr]);
                    yellow4.y= (yellowNodeY[yellow4curr]);
                }
            }
        } 

        if(greenCounter>0)
        {
            greenOverLapping.sort(function(a, b){return b-a});


             for(var i=greenOverLapping.length;i>=0;i--)
            {
                var token=greenOverLapping[i];

           
             

                if(token==1 && greenAdjustedOnce.includes(token)==false)
                {
                  
                    green1.x= (greenNodeX[green1curr]+offsetSetterXgreen);
                    green1.y= (greenNodeY[green1curr]-14+offsetSetterYgreen);
                   
                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++; 
                   
                }
                else if(token==2 && greenAdjustedOnce.includes(token)==false)
                {
                    green2.x= (greenNodeX[green2curr]+offsetSetterXgreen);
                    green2.y= (greenNodeY[green2curr]-14+offsetSetterYgreen);

                 
                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                }
                else if(token==3 && greenAdjustedOnce.includes(token)==false)
                {
                    green3.x= (greenNodeX[green3curr]+offsetSetterXgreen);
                    green3.y= (greenNodeY[green3curr]-14+offsetSetterYgreen);

                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                  
                 }
                else if(token==4 && greenAdjustedOnce.includes(token)==false)
                {
                    green4.x= (greenNodeX[green4curr]+offsetSetterXgreen);
                    green4.y= (greenNodeY[green4curr]-14+offsetSetterYgreen);

                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                    
                 }

          

                

            }

        } else{
            
            if(greenAdjustedOnce.includes(1)==false) 
            if(green1curr>=0 && green1curr<=56)
            {
                if(green1curr==0)
                {
                 //   console.log("1");
                    game.add.tween(green1).to( { x:greenNodeX[green1curr] ,y: greenNodeY[green1curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green1BlackCircle).to( { x:greenNodeX[green1curr] ,y: greenNodeY[green1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green1Circle).to( { x:greenNodeX[green1curr] ,y: greenNodeY[green1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                green1.x= (greenNodeX[green1curr]);
                green1.y= (greenNodeY[green1curr]);
                }

            }
            
            if(greenAdjustedOnce.includes(2)==false) 
            if(green2curr>=0 && green2curr<=56)
            {
                if(green2curr==0)
                {
               //     console.log("2");

                    game.add.tween(green2).to( { x:greenNodeX[green2curr] ,y: greenNodeY[green2curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green2BlackCircle).to( { x:greenNodeX[green2curr] ,y: greenNodeY[green2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green2Circle).to( { x:greenNodeX[green2curr] ,y: greenNodeY[green2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                    green2.x= (greenNodeX[green2curr]);
                    green2.y= (greenNodeY[green2curr]);
                }

            }

            if(greenAdjustedOnce.includes(3)==false) 
            if(green3curr>=0 && green3curr<=56)
            {
                if(green3curr==0)
                {
             //       console.log("3");

                    game.add.tween(green3).to( { x:greenNodeX[green3curr] ,y: greenNodeY[green3curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green3BlackCircle).to( { x:greenNodeX[green3curr] ,y: greenNodeY[green3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green3Circle).to( { x:greenNodeX[green3curr] ,y: greenNodeY[green3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                    green3.x= (greenNodeX[green3curr]);
                    green3.y= (greenNodeY[green3curr]);
                }

            }

            if(greenAdjustedOnce.includes(4)==false) 
            if(green4curr>=0 && green4curr<=56)
            {
                if(green4curr==0)
                {
                 //   console.log("4");

                    game.add.tween(green4).to( { x:greenNodeX[green4curr] ,y: greenNodeY[green4curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green4BlackCircle).to( { x:greenNodeX[green4curr] ,y: greenNodeY[green4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                    game.add.tween(green4Circle).to( { x:greenNodeX[green4curr] ,y: greenNodeY[green4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
    
                }
                else{
                green4.x= (greenNodeX[green4curr]);
                green4.y= (greenNodeY[green4curr]);
                }

            }
        } 



        if(blueCounter>0)
        {

          // console.log("BLUE COUNTER :"+blueCounter);
     
         blueOverLapping.sort(function(a, b){return b-a});


           for(var i=0; i<blueOverLapping.length;i++)
            {
                var token=blueOverLapping[i];

              

                if(token==1 && blueAdjustedOnce.includes(token)==false)
                {
                    blue1.x= (blueNodeX[blue1curr]+offsetSetterXblue);
                    blue1.y= (blueNodeY[blue1curr]-14+offsetSetterYblue);
                   
                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                }
                else if(token==2 && blueAdjustedOnce.includes(token)==false)
                {
                    blue2.x= (blueNodeX[blue2curr]+offsetSetterXblue);
                    blue2.y= (blueNodeY[blue2curr]-14+offsetSetterYblue);

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;

                }
                else if(token==3 && blueAdjustedOnce.includes(token)==false)
                {
                    blue3.x= (blueNodeX[blue3curr]+offsetSetterXblue);
                    blue3.y= (blueNodeY[blue3curr]-14+offsetSetterYblue);

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                 }
                else if(token==4 && blueAdjustedOnce.includes(token)==false)
                {
 
                    blue4.x= (blueNodeX[blue4curr]+offsetSetterXblue);
                    blue4.y= (blueNodeY[blue4curr]-14+offsetSetterYblue);

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                 }

                
                

            }

        }
         else
         {

            if(blueAdjustedOnce.includes(1)==false && blueOverLapping.includes(1)==false)
            {
                if(blue1curr>=0 && blue1curr<=56)
                {
                    if(blue1curr==0)
                    {
                        game.add.tween(blue1).to( { x:blueNodeX[blue1curr] ,y: blueNodeY[blue1curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue1BlackCircle).to( { x:blueNodeX[blue1curr] ,y: blueNodeY[blue1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue1Circle).to( { x:blueNodeX[blue1curr] ,y: blueNodeY[blue1curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }
                    else
                    {
                        blue1.x= (blueNodeX[blue1curr]);
                        blue1.y= (blueNodeY[blue1curr]);
                    }
                }

               
            }
            
             
            if(blueAdjustedOnce.includes(2)==false && blueOverLapping.includes(2)==false)
            {
                if(blue2curr>=0 && blue2curr<=56)
                {
                    if(blue2curr==0)
                    {
                        game.add.tween(blue2).to( { x:blueNodeX[blue2curr] ,y: blueNodeY[blue2curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue2BlackCircle).to( { x:blueNodeX[blue2curr] ,y: blueNodeY[blue2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue2Circle).to( { x:blueNodeX[blue2curr] ,y: blueNodeY[blue2curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }
                    else
                    {
                        blue2.x= (blueNodeX[blue2curr]);
                        blue2.y= (blueNodeY[blue2curr]);
                    }
                }

               
            }

            if(blueAdjustedOnce.includes(3)==false && blueOverLapping.includes(3)==false)  
            {
                if(blue3curr>=0 && blue3curr<=56)
                {
                    if(blue3curr==0)
                    {
                        game.add.tween(blue3).to( { x:blueNodeX[blue3curr] ,y: blueNodeY[blue3curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue3BlackCircle).to( { x:blueNodeX[blue3curr] ,y: blueNodeY[blue3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue3Circle).to( { x:blueNodeX[blue3curr] ,y: blueNodeY[blue3curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }
                    else
                    {
                        blue3.x= (blueNodeX[blue3curr]);
                        blue3.y= (blueNodeY[blue3curr]);
                    }
                }

               
            }

            if(blueAdjustedOnce.includes(4)==false && blueOverLapping.includes(4)==false)
            {
                if(blue4curr>=0 && blue4curr<=56)
                {
                    if(blue4curr==0)
                    {
                        game.add.tween(blue4).to( { x:blueNodeX[blue4curr] ,y: blueNodeY[blue4curr] }, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue4BlackCircle).to( { x:blueNodeX[blue4curr] ,y: blueNodeY[blue4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
                        game.add.tween(blue4Circle).to( { x:blueNodeX[blue4curr] ,y: blueNodeY[blue4curr] +40}, 500, Phaser.Easing.Quadratic.Out,100);
        
                    }
                    else
                    {
                        blue4.x= (blueNodeX[blue4curr]);
                        blue4.y= (blueNodeY[blue4curr]);
                    }
                }

               
            }

        }




    }
 
   

     





    function getCurrFromColor(color,tokenNo){
        if(color==1)
        {
            if(tokenNo==1)
            return red1curr;
            else if(tokenNo==2)
            return red2curr;
            else if(tokenNo==3)
            return red3curr;
            else if(tokenNo==4)
            return red4curr;
        }else if(color==2)
        {
            if(tokenNo==1)
            return yellow1curr;
            else if(tokenNo==2)
            return yellow2curr;
            else if(tokenNo==3)
            return yellow3curr;
            else if(tokenNo==4)
            return yellow4curr;
        }else if(color==3)
        {
            if(tokenNo==1)
            return green1curr;
            else if(tokenNo==2)
            return green2curr;
            else if(tokenNo==3)
            return green3curr;
            else if(tokenNo==4)
            return green4curr;
        }else if(color==4)
        {
            if(tokenNo==1)
            return blue1curr;
            else if(tokenNo==2)
            return blue2curr;
            else if(tokenNo==3)
            return blue3curr;
            else if(tokenNo==4)
            return blue4curr;
        }
    }

 

    function getNodeXFromColor(color,curr)
    {
        xOffset=-8;
      
        if(color==1)
        return redNodeX[curr]+xOffset;
        else if(color==2)
        return yellowNodeX[curr]+xOffset;
        else if(color==3)
        return greenNodeX[curr]+xOffset;
        else if(color==4)
        return blueNodeX[curr]+xOffset;
    }  
    function getNodeYFromColor(color,curr)
    {
        yOffset=-14;
        if(color==1)
        return redNodeY[curr]+yOffset;
        else if(color==2)
        return yellowNodeY[curr]+yOffset;
        else if(color==3)
        return greenNodeY[curr]+yOffset;
        else if(color==4)
        return blueNodeY[curr]+yOffset;
    }

    function getTokenFromColor(color,tokenNo)
    {
        if(color==1)
        {
            if(tokenNo==1)
            return red1;
            else if(tokenNo==2)
            return red2;
            else if(tokenNo==3)
            return red3;
            else if(tokenNo==4)
            return red4;
        }
        else if(color==2)
        {
            if(tokenNo==1)
            return yellow1;
            else if(tokenNo==2)
            return yellow2;
            else if(tokenNo==3)
            return yellow3;
            else if(tokenNo==4)
            return yellow4;
        }
        else if(color==3)
        {
            if(tokenNo==1)
            return green1;
            else if(tokenNo==2)
            return green2;
            else if(tokenNo==3)
            return green3;
            else if(tokenNo==4)
            return green4;
        }
        else if(color==4)
        {
            if(tokenNo==1)
            return blue1;
            else if(tokenNo==2)
            return blue2;
            else if(tokenNo==3)
            return blue3;
            else if(tokenNo==4)
            return blue4;
        }
    }



    function handlePause()
    {
        gamePaused=true;
      //  gamePauseBG.visible=true;
      
        playButtonImg.visible=false;
        groupPause.visible=false; 
        hideForPause();
        hidePointers();
        hideBadges();
        pauseBGactive(true);
    }

    function handleResume()
    {
        gamePaused=false;
     //   gamePauseBG.visible=false;
        pauseBGactive(false);
        playButtonImg.visible=false;
        groupPause.visible=true; 
        showAfterPause();

    }


     function onResize()
     {
        //console.log("RESIZED!!")
     }

    /* JIO SDK integration ends */

 

    var bgMusic,audioSrc1,audioSrc2,audioSrc3,audioSrc4,audioSrc5,audioSrc6;


    // var canvasWidth = window.screen.width,//240
    //     canvasHeight = window.screen.height,//320
    //     banner;


    //    var canvasWidth = window.innerWidth * window.devicePixelRatio;
    //    var canvasHeight = window.innerHeight * window.devicePixelRatio;


    //     // if(Phaser.Device.desktop)
    //     // {
    //     //     canvasWidth=1080;
    //     //     canvasHeight=1920;
    //     // }   

    //    gameWidth=canvasWidth;
    //    gameHeight=canvasHeight;

     
        
       gameWidth=1080;
       gameHeight= 1920;
    
       canvasHeight=gameHeight;
       canvasWidth=gameWidth;


        var score = 0;

    //console.log("CALCULATED WIDTH :"+canvasWidth+"::"+"CALCULATED HEIGHT :"+canvasHeight);




    // var game = window.game = new Phaser.Game(canvasWidth, canvasHeight, Phaser.AUTO, 'LUDOCHAMP', { preload: preload, create: create, update: update  });
    
    // var game = window.game = new Phaser.Game(window.screen.availWidth * window.devicePixelRatio, window.screen.availHeight * window.devicePixelRatio, Phaser.CANVAS, 'LUDOCHAMP', { init: init, preload: preload, create: create, update: update, resize: onResize }); 
   
    var game = window.game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'LUDOCHAMP', { init: init, preload: preload, create: create, update: update, resize: onResize },true); 

    function init() 
    {   
        //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
      //  console.log("CAN WIDTH :"+canvasWidth+"::"+"CAN H :"+canvasHeight);
    }

    // game.scale.refresh();

    


   var redNodeX=[];
   var redNodeY=[];

   var greenNodeX=[];
   var greenNodeY=[];

   var blueNodeX=[];
   var blueNodeY=[];

   var yellowNodeX=[];
   var yellowNodeY=[];

   var safePosX=[];
   var safePosY=[];

    // var redNodeX=[103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13, 13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,       118,118,118,118,118,118,118];

    // var redNodeY=[250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,             265,250,235,220,205,190,175];
    
    // var greenNodeX=[28, 43, 58, 73, 88, 103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,     13,28,41,56,71,86,101];

    // var greenNodeY=[145,145,145,145,145,130,115,100,85, 70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,         160,160,160,160,160,160,160]; 

    // var yellowNodeX=[133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,   118,118,118,118,118,118 ];

    // var yellowNodeY=[70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,    70,85,100,115,130,145];

    // var blueNodeX=[208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223   ,208,193,178,163,148,133];

    // var blueNodeY=[175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160    ,160,160,160,160,160,160];
   
    // var safePosX=[103, 28, 133, 208, 43,103,193,133];
    // var safePosY=[250, 145, 70, 175, 175,85,145,235];
    


    


    var textObj;
    
    var introArtObj;


    var textRedObj;
    var textBlueObj;
    var textGreenObj;
    var textYellowObj;

    var textDiceObj;
    var textEnterToRollObj;
    

    var titleBG;
    var titleCupBG;
     //mainbg;
    var boardBG;



    
   // var inGameBG;
   // var inDifficultyBG;
    var splashBG;

    
    var chooseModeTextObj;

    var versusAITextObj;
    var twoPlayerTextObj;
    var fourPlayerTextObj;


    var menuStatus=false;
    var modeStatus=false; 
    var selectColorStatus=false;
    var gameStatus=false;
    var gameOverStatus=false;


    var playerWonTextObj;

    var winningTokenRedObj;
    var winningTokenBlueObj;
    var winningTokenGreenObj;
    var winningTokenYellowObj;

   // var gameOverBG;
    //var gamePauseBG;

    var playButtonImg;
    var pauseButtonImg;

    var gamePaused=false;

    var tokensActiveBeforePause=[];
    var flashActiveBeforePause=[];
    var enterTextAvtiveBeforePause=false;
    var playerTextActiveBeforePause=[];
    var dicesActiveBeforePause=[];

    var blackCircleActiveBeforePause=[];
    var dockActiveBeforePause=[];

    function hideForPause()
    {
        boardBG.visible=false;

        titleBG.visible=true;
        titleCupBG.visible=true;

        mainArr=[red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4,green1,green2,green3,green4,blue1,blue2,blue3,blue4];

        for(var i=0;i<mainArr.length;i++)
        {
            if(mainArr[i].visible==true)
            {
                //console.log("I IS VISIBLE:"+i);
                mainArr[i].visible=false;
                tokensActiveBeforePause[i]=true;
            }else{
                tokensActiveBeforePause[i]=false;

            }
        }

        mainArr=[redFlashBG,greenFlashBG,blueFlashBG,yellowFlashBG];
        for(var i=0;i<mainArr.length;i++)
        {
            if(mainArr[i].visible==true)
            {
                mainArr[i].visible=false;
                flashActiveBeforePause[i]=true;
            }else{
                flashActiveBeforePause[i]=false;

            }
        }
        if(textEnterToRollObj.visible==true)
        {
            enterTextAvtiveBeforePause=true
            textEnterToRollObj.visible=false;
        }
      

        mainArr=[textRedObj,textBlueObj,textGreenObj,textYellowObj];
        for(var i=0;i<mainArr.length;i++)
        {
            if(mainArr[i].visible==true)
            {
                playerTextActiveBeforePause[i]=true;
                mainArr[i].visible=false;
            }else{
                playerTextActiveBeforePause[i]=false;

            }
        }

        mainArr=[dice1,dice2,dice3,diceBase,diceDot1,diceDot2,diceDot3,diceDot4,diceDot5,diceDot6];

        for(var i=0;i<mainArr.length;i++)
        {
            if(mainArr[i].visible==true)
            {
                dicesActiveBeforePause[i]=true;
                mainArr[i].visible=false;
            }else{
                dicesActiveBeforePause[i]=false;

            }
        }


        circleArr=[red1Circle,red2Circle,red3Circle,red4Circle,yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle,green1Circle,green2Circle,green3Circle,green4Circle,blue1Circle,blue2Circle,blue3Circle,blue4Circle
            ,red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle,yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle,green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle
            ,blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle
            ];
           
            for(var i=0;i<circleArr.length;i++)
            {
                if(circleArr[i].visible==true)
                {
                    circleArr[i].visible=false;
                    blackCircleActiveBeforePause[i]=true;
                }else{
                    blackCircleActiveBeforePause[i]=false;

                }

            }

            docks=[redDock,yellowDock,greenDock,blueDock,redDockMarker,yellowDockMarker,greenDockMarker,blueDockMarker];
            for(var i=0;i<docks.length;i++)
            {
                if(docks[i].visible==true)
                {
                    docks[i].visible=false;
                    dockActiveBeforePause[i]=true;
                }else{
                    dockActiveBeforePause[i]=false;

                }
            }

    }

    function clearPauseArrays()
    {

    }

    function showAfterPause()
    {
        boardBG.visible=true;

        titleBG.visible=false;
        titleCupBG.visible=false;

        mainArr=[red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4,green1,green2,green3,green4,blue1,blue2,blue3,blue4];

        for(var i=0;i<mainArr.length;i++)
        {
            if(tokensActiveBeforePause[i]==true)
            {
               // console.log("I WAS VISIBLE:"+i);

                mainArr[i].visible=true;
                tokensActiveBeforePause[i]=false;
            }
        }

        mainArr=[redFlashBG,greenFlashBG,blueFlashBG,yellowFlashBG];
        for(var i=0;i<mainArr.length;i++)
        {
            if(flashActiveBeforePause[i]==true)
            {
                mainArr[i].visible=true;
                flashActiveBeforePause[i]=false;
            }
        }
        if(enterTextAvtiveBeforePause==true)
        {
            enterTextAvtiveBeforePause=false;
            textEnterToRollObj.visible=true;
        }
      

        mainArr=[textRedObj,textBlueObj,textGreenObj,textYellowObj];
        for(var i=0;i<mainArr.length;i++)
        {
            if(playerTextActiveBeforePause[i]==true)
            {
                playerTextActiveBeforePause[i]=false;
                mainArr[i].visible=true;
            }
        }

        mainArr=[dice1,dice2,dice3,diceBase,diceDot1,diceDot2,diceDot3,diceDot4,diceDot5,diceDot6];

        for(var i=0;i<mainArr.length;i++)
        {
            if(dicesActiveBeforePause[i]==true)
            {
                dicesActiveBeforePause[i]=false;
                mainArr[i].visible=true;
            }
        }

        circleArr=[red1Circle,red2Circle,red3Circle,red4Circle,yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle,green1Circle,green2Circle,green3Circle,green4Circle,blue1Circle,blue2Circle,blue3Circle,blue4Circle
            ,red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle,yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle,green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle
            ,blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle
            ];
           
            for(var i=0;i<circleArr.length;i++)
            {
                if( blackCircleActiveBeforePause [i]==true)
                {
                    circleArr[i].visible=true;
                    blackCircleActiveBeforePause[i]=false;
                }

            }

            docks=[redDock,yellowDock,greenDock,blueDock,redDockMarker,yellowDockMarker,greenDockMarker,blueDockMarker];
            for(var i=0;i<docks.length;i++)
            {
                if(dockActiveBeforePause[i]==true)
                {
                    docks[i].visible=true;
                    dockActiveBeforePause[i]=false;
                }
            }


    }


   

   

    function resetGame ()
    {
     
        noOfPlayerBGActive(false);

        modeBGactive(false);
       //  inGameBG.visible=false;
        boardBG.visible=false;

        titleBG.visible=true;
        titleCupBG.visible=true;

        pauseBGactive(false);
        difficultyBGactive(false);
   
        colorCounter=0;


        // player1.visible=false;
        // player2.visible=false;
        // player3.visible=false;
        // player4.visible=false;

         gameOverBGactive(false); 
        
         groupPause.visible=false;
        playButtonImg.visible=false;

        red1.visible=false;
        red2.visible=false;
        red3.visible=false;
        red4.visible=false;

        yellow1.visible=false;
       yellow2.visible=false;
       yellow3.visible=false;
       yellow4.visible=false;

       green1.visible=false;
       green2.visible=false;
       green3.visible=false;
       green4.visible=false;

       blue1.visible=false;
       blue2.visible=false;
       blue3.visible=false;
       blue4.visible=false;

    //    r_2.visible=false;
    //    r_4.visible=false;
    //    r_6.visible=false;
    //    r_8.visible=false;

    //    g_2.visible=false;
    //    g_4.visible=false;
    //    g_6.visible=false;
    //    g_8.visible=false;

    //    y_2.visible=false;
    //    y_4.visible=false;
    //    y_6.visible=false;
    //    y_8.visible=false;

    //    b_2.visible=false;
    //    b_4.visible=false;
    //    b_6.visible=false;
    //    b_8.visible=false;

       circleArr=[red1Circle,red2Circle,red3Circle,red4Circle,yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle,green1Circle,green2Circle,green3Circle,green4Circle,blue1Circle,blue2Circle,blue3Circle,blue4Circle
        ,red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle,yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle,green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle
        ,blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle
        ];
       
        for(var i=0;i<circleArr.length;i++)
        circleArr[i].visible=false;

       menuStatus=true;
       modeStatus=false;
       selectColorStatus=false;
       gameStatus=false;
       gameOverStatus=false;
       selectDifficultyStatus=false;
       selectNoOfPlayerStatus=false;
       tokenHomeInShowAds=false;
       tokenKillShowAds=false;

     //  introBG.visible=true;
       
      // inModeBG.visible=false;
     // modeBGactive(false);
      // inPickBG.visible=false;
      markerSelectActive(false); 
      introBGactive(true);
     // inGameBG.visible=false;
        boardBG.visible=false;

        titleBG.visible=true;
        titleCupBG.visible=true;
      
       redFlashBG.visible=false;
       yellowFlashBG.visible=false;
       greenFlashBG.visible=false;
       blueFlashBG.visible=false;

       textRedObj.text=" ";
       textYellowObj.text=" ";
       textGreenObj.text=" ";
       textBlueObj.text=" ";

       textGreenObj.visible=false;
       textRedObj.visible=false;
       textBlueObj.visible=false;
       textGreenObj.visible=false;

   //    textEnterToRollObj.text=" ";

       textEnterToRollObj.visible=false;
       playerWonTextObj.text=" ";
       winningTokenBlueObj.visible=false;
       winningTokenRedObj.visible=false;
       winningTokenGreenObj.visible=false;
       winningTokenYellowObj.visible=false;

       textDiceObj.text=" ";

       //play

       hidePointers();
       changeBgMusic(true);
       playButtonImg.visible=false;
       playButtonImg.scale.setTo(getScaleFactor( 0.6),getScaleFactor (0.6));

       groupPause.visible=false;
    //    pauseButtonImg.scale.setTo(getScaleFactor (0.6), getScaleFactor (0.6));
       
      /* dice1.visible=false;
       dice2.visible=false;
       dice3.visible=false;
       diceBase.visible=false; 


       dice1.x=103;
       dice1.y=282;
       dice2.x=103;
       dice2.y=282;
       dice3.x=103;
       dice3.y=282;
       diceBase.x=103;
       diceBase.y=282;*/
       groupBackButton.visible=false;
       settingIcon.visible=true;
       buttonSetting.visible=true;
        console.log("RESETED GAME");
    }


    var buttonTest;
    var buttonPause;

    var redDock,yellowDock,greenDock,blueDock; 
    var redDockMarker,yellowDockMarker,greenDockMarker,blueDockMarker;

    var noOfplayerPanel;

    function preload() {

        console.log("load your assets");


        // game.load.crossOrigin = 'Anonymous';
        // game.stage.backgroundColor = '#1B2631';
        game.load.bitmapFont('myFont', 'font/font.png', 'font/font.fnt');
        game.load.image('panel','img/UI_panel.png');

 
        game.load.image('red_dock','img/red_dock.png');
        game.load.image('yellow_dock','img/yellow_dock.png');
        game.load.image('green_dock','img/green_dock.png');
        game.load.image('blue_dock','img/blue_dock.png');


        game.load.image("playButton",'img/PlayButton.png');
         game.load.image("pauseButton",'img/PauseButton.png');

        // game.load.image('','img/.png');
        game.load.image('markerButtonActive','img/markerSelectActive.png');//,168,140,2,0,0);

        game.load.image("setting_bg","img/setting_bg.png");

         game.load.image('markerButtonDeactive','img/markerSelectDeactive.png');//,168,140,2,0,0);
         game.load.image('smallButton','img/smallButton.png');
         game.load.image('settingIcon','img/settings.png');


         game.load.audio('menuMusic','sound/menu_music.mp3');
         game.load.audio('gameMusic','sound/bg_music.mp3');

         game.load.audio('diceRoll','sound/dice_roll.mp3');
         game.load.audio('six','sound/All sixes.mp3');
         game.load.audio('gameOver','sound/game_won_player_ai.mp3');
         game.load.audio('move','sound/marker_move.mp3');
         game.load.audio('kill','sound/opponent_capture.mp3');
         game.load.audio('secured','sound/marker_secured.mp3');

        // game.load.image('inGame','img/Ludo_board_bg.png');

       game.load.image("//  // mainbg",'img/Ludo_board_bg.png'); //
        game.load.image("titleBG",'img/Ludo_title.png');
        game.load.image("titleCupBG",'img/cup.png');


        game.load.image("boardBG",'img/Ludo_board.png');

       // game.load.image('introArt','img/LudoChampTitleFrontBG.png');
        //game.load.image('inGame','img/inGame.png');
        
        game.load.image("rollDice",'img/Roll_Dice.png')

        // game.load.image('red','img/red.png');
        // game.load.image('green','img/green.png');
        // game.load.image('yellow','img/yellow.png');
        // game.load.image('blue','img/blue.png');

        game.load.image('redToken','img/red_token.png');
        game.load.image('greenToken','img/green_token.png');
        game.load.image('yellowToken','img/yellow_token.png');
        game.load.image('blueToken','img/blue_token.png');


        game.load.image('circle','img/circle.png');
        game.load.image('blackCircle','img/black_ring.png');

        game.load.spritesheet('button','img/start_spritesheet.png',560,141,2,0,0);
        game.load.spritesheet('gameOnButton','img/play_spritesheet.png',456,153,2,0,0);
        game.load.spritesheet('buttonSmall','img/button_yellow.png',200,(326/2),2,0,0);
        game.load.image('back','img/back.png');

 
        game.load.image('redFlash','img/redFlash.png');
        game.load.image('blueFlash','img/blueFlash.png');
        game.load.image('greenFlash','img/greenFlash.png');
        game.load.image('yellowFlash','img/yellowFlash.png');


        // game.load.image('R_2','img/Numbers/R_2.png');
        // game.load.image('R_4','img/Numbers/R_4.png');
        // game.load.image('R_6','img/Numbers/R_6.png');
        // game.load.image('R_8','img/Numbers/R_8.png');


        // game.load.image('B_2','img/Numbers/B_2.png');
        // game.load.image('B_4','img/Numbers/B_4.png');
        // game.load.image('B_6','img/Numbers/B_6.png');
        // game.load.image('B_8','img/Numbers/B_8.png');


        // game.load.image('G_2','img/Numbers/G_2.png');
        // game.load.image('G_4','img/Numbers/G_4.png');
        // game.load.image('G_6','img/Numbers/G_6.png');
        // game.load.image('G_8','img/Numbers/G_8.png');

        // game.load.image('Y_2','img/Numbers/Y_2.png');
        // game.load.image('Y_4','img/Numbers/Y_4.png');
        // game.load.image('Y_6','img/Numbers/Y_6.png');
        // game.load.image('Y_8','img/Numbers/Y_8.png');


        // game.load.image('rp','img/Red_Pointer.png');
        // game.load.image('bp','img/Blue_Pointer.png');
        // game.load.image('yp','img/Yellow_Pointer.png');
        // game.load.image('gp','img/Green_Pointer.png');


       /* for(var i=0;i<14;i++){
            game.load.image('d'+(i+1),'img/DICE/'+(i+1)+'.png');
        }
        
        game.load.image('db','img/DICE/FINAL.png');*/


     /*   game.load.image('d1','img/Dice_01.png');
        game.load.image('d2','img/Dice_02.png');
        game.load.image('d3','img/Dice_03.png');
        game.load.image('db','img/Dice_Base.png'); */

        game.load.image('rd1','img/Dices/Red/Red_Dice_01.png');
        game.load.image('rd2','img/Dices/Red/Red_Dice_02.png');
        game.load.image('rd3','img/Dices/Red/Red_Dice_03.png');
        game.load.image('rdb','img/Dices/Red/Red_Dice_Base.png'); 

        game.load.image('yd1','img/Dices/Yellow/Yellow_Dice_01.png');
        game.load.image('yd2','img/Dices/Yellow/Yellow_Dice_02.png');
        game.load.image('yd3','img/Dices/Yellow/Yellow_Dice_03.png');
        game.load.image('ydb','img/Dices/Yellow/Yellow_Dice_Base.png'); 

        game.load.image('gd1','img/Dices/Green/Green_Dice_01.png');
        game.load.image('gd2','img/Dices/Green/Green_Dice_02.png');
        game.load.image('gd3','img/Dices/Green/Green_Dice_03.png');
        game.load.image('gdb','img/Dices/Green/Green_Dice_Base.png'); 
    
        game.load.image('bd1','img/Dices/Blue/Blue_Dice_01.png');
        game.load.image('bd2','img/Dices/Blue/Blue_Dice_02.png');
        game.load.image('bd3','img/Dices/Blue/Blue_Dice_03.png');
        game.load.image('bdb','img/Dices/Blue/Blue_Dice_Base.png'); 

        game.load.image('d1','img/Dices/Dots/dot1.png');
        game.load.image('d2','img/Dices/Dots/dot2.png');
        game.load.image('d3','img/Dices/Dots/dot3.png');
        game.load.image('d4','img/Dices/Dots/dot4.png');
        game.load.image('d5','img/Dices/Dots/dot5.png');
        game.load.image('d6','img/Dices/Dots/dot6.png');

        game.load.image('dicePointer','img/pointer.png');

        game.load.image("splash","img/RooshSplash.png");

        game.load.image("music_art","img/music.png");
        game.load.image("sfx_art","img/sfx.png");
        game.load.image("cancel","img/cancel.png");



        gameSDK = gameSDK;

        //console.log(gameSDK.getContentLanguage());

    }

    // var player1;
    // var player2;
    // var player3;
    // var player4; 

    var red1;
    var red2;
    var red3;
    var red4;

    var yellow1;
    var yellow2;
    var yellow3;
    var yellow4;

    var green1;
    var green2;
    var green3;
    var green4;

    var blue1;
    var blue2;
    var blue3;
    var blue4;
    

    var greenFlashBG;
    var blueFlashBG;
    var redFlashBG;
    var yellowFlashBG;

    var red1curr=-1;
    var red2curr=-1;
    var red3curr=-1;
    var red4curr=-1;
    
    var yellow1curr=-1;
    var yellow2curr=-1;
    var yellow3curr=-1;
    var yellow4curr=-1;

    var green1curr=-1;
    var green2curr=-1;
    var green3curr=-1;
    var green4curr=-1;

    var blue1curr=-1;
    var blue2curr=-1;
    var blue3curr=-1;
    var blue4curr=-1;



    var r_2;
    var r_4;
    var r_6;
    var r_8;

    var b_2;
    var b_4;
    var b_6;
    var b_8;

    var g_2;
    var g_4;
    var g_6;
    var g_8;

    var y_2;
    var y_4;
    var y_6;
    var y_8;

    var textCur1Obj;
    var textCur2Obj;
    var textCur3Obj;
    var textCur4Obj; 


    var textCur1ObjAI;
    var textCur2ObjAI;
    var textCur3ObjAI;
    var textCur4ObjAI; 

  //  var redCurrs=[red1curr,red2curr];
    var tempCurr=0;


    function changeBgMusic(isMenu)
    {
       //  bgMusic.stop();
       if(!isMusicActive)
       {
         return;
       }

    //    if(isMenu==null)
    //    {
    //        if(gameStatus || gameov)
    //    }

   

       if(bgMusic!=null && bgMusic!=undefined)
       {
        // bgMusic.pause();
         bgMusic.destroy();
       }
    
      
    
        if(isMenu){
           // game.cache.removeSound('gameMusic');
             bgMusic = game.add.audio('menuMusic');
             bgMusic.loop = true;
            
        }
        else{
           //  console.log("This??");
            //game.cache.removeSound('menuMusic');
            bgMusic = game.add.audio('gameMusic');
             bgMusic.loop = true;
        }
         bgMusic.play();
    }

    function stopBGMusic()
    {
        if(bgMusic!=null && bgMusic!=undefined)
       {
        // bgMusic.pause();
       //  bgMusic.destroy();
         bgMusic.stop();
       }
    }

    var currAudioSrc=0;

function initAudioSrc(){
 
    audioSrc1=game.add.audio('move');
 
    audioSrc2=game.add.audio('secured');
 
    audioSrc3=game.add.audio('kill');
 
    audioSrc4=game.add.audio('gameOver');
 
    audioSrc5=game.add.audio('diceRoll');
 
    audioSrc6= game.add.audio('six');
}

    function changeAudioSrc(type)
    {
        if(!isSfxActive)
        {
            return;
        }
        if(currAudioSrc==type)
        {
            //Do nothing.
        }else{
          /*  if(audioSrc1!=null && audioSrc1!=undefined)
            audioSrc1.destroy();*/
        }


        if(type==0)//Marker Move
        { 
            audioSrc1.loop = false;
            audioSrc1.play();
        }
        else if(type==1)//Marker secured
        {   audioSrc2.loop = false;
            audioSrc2.play();}
        else if(type==2) //Kill
        {   audioSrc3.loop = false;
            audioSrc3.play();}
        else if(type==3) //End Round
        {   audioSrc4.loop = false;
            audioSrc4.play();}
        else if(type==4) //Dice roll
        {   audioSrc5.loop = false;
            audioSrc5.play();}
        else if(type==5)
        {   audioSrc6.loop = false;
            audioSrc6.play();}

      
       
        
         currAudioSrc=type;
       




    }
/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('BuildInfo.packageName    =' + BuildInfo.packageName);
    console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName);
    console.log('BuildInfo.displayName    =' + BuildInfo.displayName);
    console.log('BuildInfo.name           =' + BuildInfo.name);
    console.log('BuildInfo.version        =' + BuildInfo.version);
    console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode);
    console.log('BuildInfo.debug          =' + BuildInfo.debug);
    console.log('BuildInfo.buildType      =' + BuildInfo.buildType);
    console.log('BuildInfo.flavor         =' + BuildInfo.flavor);
}*/
/*cordova.getAppVersion.getAppName(function(name){
    // My App Name
    console.log("App Name", name);
});*/
     
    var buttonVsComputer;
    var buttonVsPlayer;

    var button2Player;
    var button4Player;
    var button2PlayerVs2Computer;

    var buttonEasy;
    var buttonMedium;
    var buttonHard;

    var buttonRestart;
    var buttonHome;

    var buttonResumePause;
    var buttonRestartPause;
    var buttonHomePause;

    var buttonBack;

    var backIcon;
    var settingIcon;

    var groupBackButton;


    function handleBack()
    {
            if(menuStatus==true)
            {          

                // console.log("HERE 1");

            }
            else if(modeStatus==true)
            {

                // console.log("HERE 2");

            }
            else if(selectNoOfPlayerStatus)
            { 
               // console.log("HERE 3");
               showButtons();

               selectNoOfPlayerStatus=false;
               modeStatus=true;
           
               noOfPlayerBGActive(false,true);
              buttonSetting.visible=true;
              settingIcon.visible=true;
              groupBackButton.visible=false;

            }
            else if(selectDifficultyStatus)
            {
               
                // console.log("HERE 4");
                selectDifficultyStatus=false;
                selectNoOfPlayerStatus=true;
                modeStatus=false;
            
                noOfPlayerBGActive(true,true);
                difficultyBGactive(false);
              //  buttonBack.visible=true;

                //buttonSetting.visible=true;

            }
            else if(selectColorStatus==true)
            {
                // console.log("HERE 5 vs AI"+gameModevsAI);
                if(gameModevsAI)
                {
                    selectColorStatus=false;

                    difficultyBGactive(true);
                    selectDifficultyStatus=true;
                     markerSelectActive(false);  
                 }else{
                    selectColorStatus=false;
                    markerSelectActive(false);
                    selectNoOfPlayerStatus=true;
                 
                    noOfPlayerBGActive(true,true);
                 }
                
            }
    }

    function handleVsPlayer()
    {
        //if(key==52)
        {
          console.log("VS PLAYER ");

          selectNoOfPlayerStatus=true;
          modeStatus=false;
          modeBGactive(false,true);
          gameModevsAI=false;
          //console.log("SET GAME MODE VS AI FALSE");
          noOfPlayerBGActive(true,true);
          switchSettingStatus(false);
          buttonSetting.visible=false;
          settingIcon.visible=false;

          groupBackButton.visible=true;
         // group


        }
         
    }
    function handleVsComputer()
    {

        console.log("VS COMPUTER ");
        // showAds();
        //if(key==53)
        {
            modeStatus = false;
            selectNoOfPlayerStatus = true;
            // inModeBG.visible=false;
            gameModevsAI = true;
            // console.log("SET GAME MODE VS AI TRUE");

            modeBGactive(false,true);
            difficultyBGactive(false);
            noOfPlayerBGActive(true,true);
            switchSettingStatus(false);
            buttonSetting.visible=false;
            groupBackButton.visible=true;
            settingIcon.visible=false;

        }
    }


    function handle2Player()
    {


        if (gameModevsAI) 
        {
            gameModeType = 0;
            noOfPlayerBGActive(false);
            selectDifficultyStatus = true;
            difficultyBGactive(true);
        }

        else 
        {

            gameModeType = 1;
            selectColorStatus = true;
            noOfPlayerBGActive(false);
            markerSelectActive(true)
        }




        selectNoOfPlayerStatus = false;
    }

    function handle4Player()
    {
       // if(key==53) //5 //vs 4
        {
            if(gameModevsAI)
            {
                gameModeType=3;
                selectDifficultyStatus=true;
                noOfPlayerBGActive(false);
                difficultyBGactive(true);
            }
            else{
                gameModeType=2;
         //      selectColorStatus=true;
                noOfPlayerBGActive(false);
             //   markerSelectActive(true)
             setColorPlayer(playerColor[0]);


             selectColorStatus=false;
              markerSelectActive(false);
            // inGameBG.visible=true;
             boardBG.visible=true;

             titleBG.visible=false;
            titleCupBG.visible=false;

             gameStatus=true;

             setDiceRolledStatus(false);
             setShouldRollDiceStatus(true);
             setChanceStatus(true);
             
            // chanceAIStatus=false;
            setAIChanceStatus(false); 
            animateBGStatus=true;
             console.log("Your turn ! press 5 to roll dice");
            

             resetDiceSprites();
            //  showAds();
             initPlaces();
             hideBadges();
            }
        }
        selectNoOfPlayerStatus=false;

    }

    function handle2PlayerVs2Computer()
    {
        //if(key==54) //5 //vs 4
        {
            if(gameModevsAI)
            {
             
            }
            else{
                gameModeType=4;
                selectColorStatus=true;
                noOfPlayerBGActive(false);
                markerSelectActive(true)
            }
        }
        selectNoOfPlayerStatus=false;

    }


    function handleEasy()
    {
        //if(key==52)//4
        {
            console.log("EASY");
            aiDifficultyMode=0;
        }
        // else if(key==53) //5
        // {
        //     console.log("MEDIUM");
        //     aiDifficultyMode=1;
        // }
        // else if(key==54)//6
        // {
        //     console.log("HARD");
        //     aiDifficultyMode=2;
        // }else{
        //     return;
        // }
        //inDifficultyBG.visible=false;
        difficultyBGactive(false);
        selectDifficultyStatus=false;
        selectColorStatus=true;
     //   inPickBG.visible=true;
        markerSelectActive(true);  
       // selectColorStatus=true;
        selectDifficultyStatus=false;
    }
    var groupPause;

    function handleMedium()
    {
  //  else if(key==53) //5
        {
            console.log("MEDIUM");
            aiDifficultyMode=1;
        }

        difficultyBGactive(false);
        selectDifficultyStatus=false;
        selectColorStatus=true;
     //   inPickBG.visible=true;
        markerSelectActive(true);  
      //  selectColorStatus=true;
        selectDifficultyStatus=false;
    }

    function handleHard()
    {
       // else if(key==54)//6
        {
            console.log("HARD");
            aiDifficultyMode=2;
        }


        difficultyBGactive(false);
        selectDifficultyStatus=false;
        selectColorStatus=true;
     //   inPickBG.visible=true;
        markerSelectActive(true);  
       // selectColorStatus=true;
        selectDifficultyStatus=false;
    }

    function create() 
    {

        // var cacheBG= game.cache.getImage('inGame'); 
       // game.stage.backgroundColor = "#4488AA";

         // dog = game.add.sprite(game.world.centerX-dogImage.width/2, game.world.centerY-  dogImage.height/2, 'dog');
       //console.log(  document.getElementById("parentDiv").clientHeight);
        // inDifficultyBG=game.add.sprite(0,0,'inDifficulty');
       //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
       game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
    //    game.stage.scale.pageAlignHorizontally = true;
    //    game.stage.scale.pageAlignVeritcally = true;
    //    game.stage.scale.refresh();

       game.scale.pageAlignHorizontally = true;
       game.scale.pageAlignVertically = true;
       game.scale.refresh();

 
       

       var offseter=70;


       var prevXvel=470; //520
       var prevYvel=1420; //1215
      
    //    prevXvel=initFirstX(prevXvel);
    //    prevYvel=initFirstY(prevYvel);

        initSDK();

       for(var i=0;i<57;i++)
       {
           if(i<=4)
           {
               redNodeX[i]=prevXvel;
               redNodeY[i]=prevYvel-offseter;
               prevYvel=redNodeY[i];
           }
           else if(i>4 && i<=10)
           {
               redNodeX[i]=prevXvel-offseter;
               redNodeY[i]=prevYvel-offseter;
                prevXvel=redNodeX[i];

           }
           else if(i>10 && i<=12)
           {
                //console.log("HERE???")
                prevYvel=redNodeY[i-1];
                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel-offseter;
                
           }
           else if(i>12 && i<=17)
           {
                prevXvel=redNodeX[i-1];
                redNodeX[i]=prevXvel+offseter;
                redNodeY[i]=prevYvel-offseter;
           }
           else if(i==18)
           {
                 prevYvel=redNodeY[i-1];
                 prevXvel=redNodeX[i-1];

                redNodeX[i]=prevXvel+offseter;
                redNodeY[i]=prevYvel-offseter;
               
           }
           else if(i>18 && i<=23)
           {
                 prevYvel=redNodeY[i-1];
                 prevXvel=redNodeX[i-1];

                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel-offseter;
               
           }
           else if(i>23 && i<=25)
           {
               prevYvel=redNodeY[i-1];
                redNodeX[i]=prevXvel+offseter;
                redNodeY[i]=prevYvel;
                 prevXvel=redNodeX[i];
           }
           else if(i>25 && i<=30)
           {
                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel+offseter;
                 prevYvel=redNodeY[i];
           }
           else if(i==31)
           {
                prevYvel=redNodeY[i-1];
                prevXvel=redNodeX[i-1];
                redNodeX[i]=prevXvel+offseter;
                redNodeY[i]=prevYvel+offseter;
                prevXvel=redNodeX[i];
           }
           else if(i>31 && i<=36)
           {
                prevYvel=redNodeY[i-1];
                prevXvel=redNodeX[i-1];
                redNodeX[i]=prevXvel+offseter;
                redNodeY[i]=prevYvel;
                 prevXvel=redNodeX[i];
           }
           else if(i>36 && i<=38)
           {
                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel+offseter;
                 prevYvel=redNodeY[i];
           }
           else if(i>38 && i<=43)
           {
                redNodeX[i]=prevXvel-offseter;
                redNodeY[i]=prevYvel;
                 prevXvel=redNodeX[i];
           }
           else if(i==44)
           {
                prevYvel=redNodeY[i-1];
                prevXvel=redNodeX[i-1];
                redNodeX[i]=prevXvel-offseter;
                redNodeY[i]=prevYvel+offseter;
                prevXvel=redNodeX[i];
           }
           else if(i>44 && i<=49)
           {
            prevYvel=redNodeY[i-1];
            prevXvel=redNodeX[i-1];
                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel+offseter;
                 prevYvel=redNodeY[i];
           }
           else if(i==50)
           {
                redNodeX[i]=prevXvel-offseter;
                redNodeY[i]=prevYvel;
                 prevXvel=redNodeX[i];
           }
           else if(i>50)
           {
                redNodeX[i]=prevXvel;
                redNodeY[i]=prevYvel-offseter;
                prevYvel=redNodeY[i];
           }
       
       }

        prevXvel=redNodeX[25];
        prevYvel=redNodeY[25];
      
       for(var i=0;i<57;i++)
       {
           if(i<=4)
           {
               yellowNodeX[i]=prevXvel;
               yellowNodeY[i]=prevYvel+offseter;
               prevYvel=yellowNodeY[i];
           }
           else if(i>4 && i<=10)
           {
            yellowNodeX[i]=prevXvel+offseter;
            yellowNodeY[i]=prevYvel+offseter;
                prevXvel=yellowNodeX[i];

           }
           else if(i>10 && i<=12)
           {
                //console.log("HERE???")
                prevYvel=yellowNodeY[i-1];
                yellowNodeX[i]=prevXvel;
                yellowNodeY[i]=prevYvel+offseter;
                
           }
           else if(i>12 && i<=17)
           {
                prevXvel=yellowNodeX[i-1];
                prevYvel=yellowNodeY[i-1];

                yellowNodeX[i]=prevXvel-offseter;
                yellowNodeY[i]=prevYvel;
           }
           else if(i==18)
           {
                 prevYvel=yellowNodeY[i-1];
                 prevXvel=yellowNodeX[i-1];

                 yellowNodeX[i]=prevXvel-offseter;
                 yellowNodeY[i]=prevYvel+offseter;
               
           }
           else if(i>18 && i<=23)
           {
                 prevYvel=yellowNodeY[i-1];
                 prevXvel=yellowNodeX[i-1];

                 yellowNodeX[i]=prevXvel;
                 yellowNodeY[i]=prevYvel+offseter;
               
           }
           else if(i>23 && i<=25)
           {
               prevYvel=yellowNodeY[i-1];
               yellowNodeX[i]=prevXvel-offseter;
               yellowNodeY[i]=prevYvel;
                 prevXvel=yellowNodeX[i];
           }
           else if(i>25 && i<=30)
           {
            yellowNodeX[i]=prevXvel;
            yellowNodeY[i]=prevYvel-offseter;
                 prevYvel=yellowNodeY[i];
           }
           else if(i==31)
           {
                prevYvel=yellowNodeY[i-1];
                prevXvel=yellowNodeX[i-1];
                yellowNodeX[i]=prevXvel-offseter;
                yellowNodeY[i]=prevYvel-offseter;
                prevXvel=yellowNodeX[i];
           }
           else if(i>31 && i<=36)
           {
                prevYvel=yellowNodeY[i-1];
                prevXvel=yellowNodeX[i-1];
                yellowNodeX[i]=prevXvel-offseter;
                yellowNodeY[i]=prevYvel;
                 prevXvel=yellowNodeX[i];
           }
           else if(i>36 && i<=38)
           {
                yellowNodeX[i]=prevXvel;
                 yellowNodeY[i]=prevYvel-offseter;
                 prevYvel=yellowNodeY[i];
           }
           else if(i>38 && i<=43)
           {
            yellowNodeX[i]=prevXvel+offseter;
            yellowNodeY[i]=prevYvel;
                 prevXvel=yellowNodeX[i];
           }
           else if(i==44)
           {
                prevYvel=yellowNodeY[i-1];
                prevXvel=yellowNodeX[i-1];
                yellowNodeX[i]=prevXvel+offseter;
                yellowNodeY[i]=prevYvel-offseter;
                prevXvel=yellowNodeX[i];
           }
           else if(i>44 && i<=49)
           {
            prevYvel=yellowNodeY[i-1];
            prevXvel=yellowNodeX[i-1];
            yellowNodeX[i]=prevXvel;
            yellowNodeY[i]=prevYvel-offseter;
                 prevYvel=yellowNodeY[i];
           }
           else if(i==50)
           {
            yellowNodeX[i]=prevXvel+offseter;
            yellowNodeY[i]=prevYvel;
                 prevXvel=yellowNodeX[i];
           }
           else if(i>50)
           {
            yellowNodeX[i]=prevXvel;
            yellowNodeY[i]=prevYvel+offseter;
                prevYvel=yellowNodeY[i];
           }
       
       }
       prevXvel=redNodeX[38];
       prevYvel=redNodeY[38];

       for(var i=0;i<57;i++)
       {
           if(i<=4)
           {
               blueNodeX[i]=prevXvel-offseter;
               blueNodeY[i]=prevYvel;
                prevXvel=blueNodeX[i];
           }
           else if(i==5)
           {
                blueNodeX[i]=prevXvel-offseter;
                blueNodeY[i]=prevYvel+offseter;
           }
           else if(i>5 && i<=10)
           {
                prevXvel=blueNodeX[i-1];
                prevYvel=blueNodeY[i-1];

                blueNodeX[i]=prevXvel;
                blueNodeY[i]=prevYvel+offseter;
                prevYvel=blueNodeY[i];
           }
           else if(i>10 && i<=12)
           {
                //console.log("HERE???")
                prevYvel=blueNodeY[i-1];

                blueNodeX[i]=prevXvel-offseter;
                blueNodeY[i]=prevYvel;
                prevXvel=blueNodeX[i];
                
           }
           else if(i>12 && i<=17)
           {
                prevXvel=blueNodeX[i-1];
                prevYvel=blueNodeY[i-1];

                blueNodeX[i]=prevXvel;
                blueNodeY[i]=prevYvel-offseter;
           }
           else if(i==18)
           {
                 prevYvel=blueNodeY[i-1];
                 prevXvel=blueNodeX[i-1];

                 blueNodeX[i]=prevXvel-offseter;
                 blueNodeY[i]=prevYvel-offseter;
               
           }
           else if(i>18 && i<=23)
           {
                 prevYvel=blueNodeY[i-1];
                 prevXvel=blueNodeX[i-1];

                 blueNodeX[i]=prevXvel-offseter;
                 blueNodeY[i]=prevYvel;
               
           }
           else if(i>23 && i<=25)
           {
               prevXvel=blueNodeX[i-1];
               prevYvel=blueNodeY[i-1];

               blueNodeX[i]=prevXvel;
               blueNodeY[i]=prevYvel-offseter;
                prevXvel=blueNodeX[i];
           }
           else if(i>25 && i<=30)
           {
            prevXvel=blueNodeX[i-1];
            prevYvel=blueNodeY[i-1];

            blueNodeX[i]=prevXvel+offseter;
            blueNodeY[i]=prevYvel;
                 prevYvel=blueNodeY[i];
           }
           else if(i==31)
           {
                prevYvel=blueNodeY[i-1];
                prevXvel=blueNodeX[i-1];
                blueNodeX[i]=prevXvel+offseter;
                blueNodeY[i]=prevYvel-offseter;
                prevXvel=blueNodeX[i];
           }
           else if(i>31 && i<=36)
           {
                prevYvel=blueNodeY[i-1];
                prevXvel=blueNodeX[i-1];
                blueNodeX[i]=prevXvel;
                blueNodeY[i]=prevYvel-offseter;
                 prevYvel=blueNodeY[i];
           }
           else if(i>36 && i<=38)
           {
            blueNodeX[i]=prevXvel+offseter;
            blueNodeY[i]=prevYvel;
                 prevXvel=blueNodeX[i];
           }
           else if(i>38 && i<=43)
           {
                blueNodeX[i]=prevXvel;
                blueNodeY[i]=prevYvel+offseter;
                 prevYvel=blueNodeY[i];
           }
           else if(i==44)
           {
                prevYvel=blueNodeY[i-1];
                prevXvel=blueNodeX[i-1];
                blueNodeX[i]=prevXvel+offseter;
                blueNodeY[i]=prevYvel+offseter;
                prevXvel=blueNodeX[i];
           }
           else if(i>44 && i<=49)
           {
                prevYvel=blueNodeY[i-1];
                prevXvel=blueNodeX[i-1];
                blueNodeX[i]=prevXvel+offseter;
                blueNodeY[i]=prevYvel;
                prevYvel=blueNodeY[i];
           }
           else if(i==50)
           {
               //prevYvel = blueNodeY[i - 1];
               prevXvel = blueNodeX[i - 1];
               blueNodeX[i] = prevXvel;
               blueNodeY[i] = prevYvel + offseter;
               prevYvel = blueNodeY[i];
           }
           else if(i>50)
           {
                blueNodeX[i]=prevXvel-offseter;
                blueNodeY[i]=prevYvel;
                prevXvel=blueNodeX[i];
           }
       
       }

       prevXvel=redNodeX[12];
       prevYvel=redNodeY[12];

       for(var i=0;i<57;i++)
       {
           if(i<=4)
           {
               greenNodeX[i]=prevXvel+offseter;
               greenNodeY[i]=prevYvel;
                prevXvel=greenNodeX[i];
           }
           else if(i==5)
           {
            greenNodeX[i]=prevXvel+offseter;
            greenNodeY[i]=prevYvel-offseter;
           }
           else if(i>5 && i<=10)
           {
                prevXvel=greenNodeX[i-1];
                prevYvel=greenNodeY[i-1];

                greenNodeX[i]=prevXvel;
                greenNodeY[i]=prevYvel-offseter;
                prevYvel=greenNodeY[i];
           }
           else if(i>10 && i<=12)
           {
                //console.log("HERE???")
                prevYvel=greenNodeY[i-1];

                greenNodeX[i]=prevXvel+offseter;
                greenNodeY[i]=prevYvel;
                prevXvel=greenNodeX[i];
                
           }
           else if(i>12 && i<=17)
           {
                prevXvel=greenNodeX[i-1];
                prevYvel=greenNodeY[i-1];

                greenNodeX[i]=prevXvel;
                greenNodeY[i]=prevYvel+offseter;
           }
           else if(i==18)
           {
                 prevYvel=greenNodeY[i-1];
                 prevXvel=greenNodeX[i-1];

                 greenNodeX[i]=prevXvel+offseter;
                 greenNodeY[i]=prevYvel+offseter;
               
           }
           else if(i>18 && i<=23)
           {
                 prevYvel=greenNodeY[i-1];
                 prevXvel=greenNodeX[i-1];

                 greenNodeX[i]=prevXvel+offseter;
                 greenNodeY[i]=prevYvel;
               
           }
           else if(i>23 && i<=25)
           {
               prevXvel=greenNodeX[i-1];
               prevYvel=greenNodeY[i-1];

               greenNodeX[i]=prevXvel;
               greenNodeY[i]=prevYvel+offseter;
                prevXvel=greenNodeX[i];
           }
           else if(i>25 && i<=30)
           {
            prevXvel=greenNodeX[i-1];
            prevYvel=greenNodeY[i-1];

            greenNodeX[i]=prevXvel-offseter;
            greenNodeY[i]=prevYvel;
                 prevYvel=greenNodeY[i];
           }
           else if(i==31)
           {
                prevYvel=greenNodeY[i-1];
                prevXvel=greenNodeX[i-1];
                greenNodeX[i]=prevXvel-offseter;
                greenNodeY[i]=prevYvel+offseter;
                prevXvel=greenNodeX[i];
           }
           else if(i>31 && i<=36)
           {
                prevYvel=greenNodeY[i-1];
                prevXvel=greenNodeX[i-1];
                greenNodeX[i]=prevXvel;
                greenNodeY[i]=prevYvel+offseter;
                 prevYvel=greenNodeY[i];
           }
           else if(i>36 && i<=38)
           {
            greenNodeX[i]=prevXvel-offseter;
            greenNodeY[i]=prevYvel;
                 prevXvel=greenNodeX[i];
           }
           else if(i>38 && i<=43)
           {
            greenNodeX[i]=prevXvel;
            greenNodeY[i]=prevYvel-offseter;
                 prevYvel=greenNodeY[i];
           }
           else if(i==44)
           {
                prevYvel=greenNodeY[i-1];
                prevXvel=greenNodeX[i-1];
                greenNodeX[i]=prevXvel-offseter;
                greenNodeY[i]=prevYvel-offseter;
                prevXvel=greenNodeX[i];
           }
           else if(i>44 && i<=49)
           {
                prevYvel=greenNodeY[i-1];
                prevXvel=greenNodeX[i-1];
                greenNodeX[i]=prevXvel-offseter;
                greenNodeY[i]=prevYvel;
                prevYvel=greenNodeY[i];
           }
           else if(i==50)
           {
               //prevYvel = blueNodeY[i - 1];
               prevXvel = greenNodeX[i - 1];
               greenNodeX[i] = prevXvel;
               greenNodeY[i] = prevYvel - offseter;
               prevYvel = greenNodeY[i];
           }
           else if(i>50)
           {
                greenNodeX[i]=prevXvel+offseter;
                greenNodeY[i]=prevYvel;
                prevXvel=greenNodeX[i];
           }
       
       }

        safePosX=[redNodeX[0], greenNodeX[0], yellowNodeX[0], blueNodeX[0], redNodeX[8],greenNodeX[8],yellowNodeX[8],blueNodeX[8]];
        safePosY=[redNodeY[0], greenNodeY[0], yellowNodeY[0], blueNodeY[0], redNodeY[8],greenNodeY[8],yellowNodeY[8],blueNodeY[8]];

        // for(var i=0;i<safePosX.length;i++)
        // {
        //     console.log("SAFE X :"+safePosX[i]+"::"+"SAFE Y :"+safePosY[i]);
        // }

  
      // console.log("x 10 :"+redNodeX[10]+",x 11:"+redNodeX[11]+"::"+"y 10 :"+redNodeY[10]+",y 11 :"+redNodeY[11])
       cacheBG= game.cache.getImage('boardBG'); 
      

      //  inGameBG = game.add.sprite(canvasWidth/2 - cacheBG.width/2 , canvasHeight/2 -  cacheBG.height/2, 'boardBG');
        boardBG = game.add.sprite(canvasWidth/2 - cacheBG.width/2 , (canvasHeight/2 -  cacheBG.height/2)-40, 'boardBG');
        

 
       //  cacheBG= game.cache.getImage('redFlash'); 
         redFlashBG=game.add.sprite(((canvasWidth/2 - cacheBG.width/2) )  , (canvasHeight/2 -  cacheBG.height/2)-40, 'redFlash');

      //  cacheBG= game.cache.getImage('greenFlash'); 
        greenFlashBG=game.add.sprite(((canvasWidth/2 - cacheBG.width/2) )  , (canvasHeight/2 -  cacheBG.height/2)-40, 'greenFlash');

      //  cacheBG= game.cache.getImage('blueFlash'); 
         blueFlashBG=game.add.sprite(((canvasWidth/2 - cacheBG.width/2) ) , (canvasHeight/2 -  cacheBG.height/2)-40, 'blueFlash');

      //  cacheBG=game.cache.getImage('yellowFlash'); 
         yellowFlashBG=game.add.sprite(((canvasWidth/2 - cacheBG.width/2) ) , (canvasHeight/2 -  cacheBG.height/2)-40, 'yellowFlash');

         scaler=4.7;
        // redFlashBG.scale.setTo(scaler,scaler);
        // greenFlashBG.scale.setTo(scaler,scaler);
        // blueFlashBG.scale.setTo(scaler,scaler);
        // yellowFlashBG.scale.setTo(scaler,scaler);


       // textObj= game.add.text(0, 0, '', { fill: '#ffffff' });
       var style = { font: "bold 28px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        textRedObj=game.add.text(0,0,'',style);//{ fill: '#ffffff' });//,style);
        textYellowObj=game.add.text(0,0,'',style);//{ fill: '#ffffff' });//,style);
        textBlueObj=game.add.text(0,0,'',style);//{ fill: '#ffffff' });//,style);
        textGreenObj=game.add.text(0,0,'',style);//{ fill: '#ffffff' });//,style);
        textEnterToRollObj=game.add.sprite(0,0,'rollDice');

        textRedObj.anchor.setTo(0.5,0.5);
        textYellowObj.anchor.setTo(0.5,0.5);
        textBlueObj.anchor.setTo(0.5,0.5);
        textGreenObj.anchor.setTo(0.5,0.5);

      
       
        // arr=[textRedObj,textYellowObj,textBlueObj,textGreenObj];

        // for(var i=0;i<arr.length;i++)
        // {
        //     arr[i].anchor.setTo(0.5);
        // }



        


            // button.onInputOver.add(over, this);
            // button.onInputOut.add(out, this);
            // button.onInputUp.add(up, this);

         textDiceObj=game.add.text(0,0,'',{ fill: '#a36315' });

 
        
        // player1=game.add.sprite(0,0,'red');
        // player2=game.add.sprite(0,0,'green');
        // player3=game.add.sprite(0,0,'blue');
        // player4=game.add.sprite(0,0,'yellow');

        redDock=game.add.sprite(0,0,'red_dock');
        yellowDock=game.add.sprite(0,0,'yellow_dock');
        greenDock=game.add.sprite(0,0,'green_dock');
        blueDock=game.add.sprite(0,0,'blue_dock');

        redDockMarker=game.add.sprite(0,0,"redToken");
        yellowDockMarker=game.add.sprite(0,0,"yellowToken");
        greenDockMarker=game.add.sprite(0,0,"greenToken");
        blueDockMarker=game.add.sprite(0,0,"blueToken");


        docks=[redDock,yellowDock,greenDock,blueDock,redDockMarker,yellowDockMarker,greenDockMarker,blueDockMarker];
        for(var i=0;i<docks.length;i++)
        {
            docks[i].anchor.setTo(0.5,0.5);
            docks[i].visible=false;
            if(i>3)
            docks[i].scale.setTo(0.6,0.6);
        }
        redDock.angle=180;
        greenDock.angle=180;

        var xDiceOffset=getXtoken(105);
        var yDiceOffset=getYtoken(282);

        redDice1=game.add.sprite(xDiceOffset,yDiceOffset,'rd1');
        redDice2=game.add.sprite(xDiceOffset,yDiceOffset,'rd2');
        redDice3=game.add.sprite(xDiceOffset,yDiceOffset,'rd3'); 
        redDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'rdb');

        yellowDice1=game.add.sprite(xDiceOffset,yDiceOffset,'yd1');
        yellowDice2=game.add.sprite(xDiceOffset,yDiceOffset,'yd2');
        yellowDice3=game.add.sprite(xDiceOffset,yDiceOffset,'yd3'); 
        yellowDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'ydb');

        greenDice1=game.add.sprite(xDiceOffset,yDiceOffset,'gd1');
        greenDice2=game.add.sprite(xDiceOffset,yDiceOffset,'gd2');
        greenDice3=game.add.sprite(xDiceOffset,yDiceOffset,'gd3'); 
        greenDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'gdb');

        blueDice1=game.add.sprite(xDiceOffset,yDiceOffset,'bd1');
        blueDice2=game.add.sprite(xDiceOffset,yDiceOffset,'bd2');
        blueDice3=game.add.sprite(xDiceOffset,yDiceOffset,'bd3'); 
        blueDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'bdb');

        diceDot1=game.add.sprite(xDiceOffset,yDiceOffset,'d1');
        diceDot2=game.add.sprite(xDiceOffset,yDiceOffset,'d2');
        diceDot3=game.add.sprite(xDiceOffset,yDiceOffset,'d3');
        diceDot4=game.add.sprite(xDiceOffset,yDiceOffset,'d4');
        diceDot5=game.add.sprite(xDiceOffset,yDiceOffset,'d5');
        diceDot6=game.add.sprite(xDiceOffset,yDiceOffset,'d6');

        dicePointer=game.add.sprite(0,0,'dicePointer');


        var allDiceImgs=[redDice1,redDice2,redDice3,redDiceBase,yellowDice1,yellowDice2,yellowDice3,yellowDiceBase,greenDice1,greenDice2,greenDice3,greenDiceBase,blueDice1,blueDice2,blueDice3,blueDiceBase,diceDot1,diceDot2,diceDot3,diceDot4,diceDot5,diceDot6];

        var diceScale=0.4;
        for(var i=0;i<allDiceImgs.length;i++)
        {
            allDiceImgs[i].anchor.setTo(0.5);
            allDiceImgs[i].scale.setTo(diceScale);
            allDiceImgs[i].visible=false;
        }
        dicePointer.visible=false;
        dicePointer.anchor.setTo(0.5);

        // red1=game.add.sprite(0,0,'red');
        // red2=game.add.sprite(0,0,'red');
        // red3=game.add.sprite(0,0,'red');
        // red4=game.add.sprite(0,0,'red');

        // yellow1=game.add.sprite(0,0,'yellow');
        // yellow2=game.add.sprite(0,0,'yellow');
        // yellow3=game.add.sprite(0,0,'yellow');
        // yellow4=game.add.sprite(0,0,'yellow');

        // blue1=game.add.sprite(0,0,'blue');
        // blue2=game.add.sprite(0,0,'blue');
        // blue3=game.add.sprite(0,0,'blue');
        // blue4=game.add.sprite(0,0,'blue');

        // green1=game.add.sprite(0,0,'green');
        // green2=game.add.sprite(0,0,'green');
        // green3=game.add.sprite(0,0,'green');
        // green4=game.add.sprite(0,0,'green');

        red1=game.add.sprite(0,0,'redToken');
        red2=game.add.sprite(0,0,'redToken');
        red3=game.add.sprite(0,0,'redToken');
        red4=game.add.sprite(0,0,'redToken');


       



        yellow1=game.add.sprite(0,0,'yellowToken');
        yellow2=game.add.sprite(0,0,'yellowToken');
        yellow3=game.add.sprite(0,0,'yellowToken');
        yellow4=game.add.sprite(0,0,'yellowToken');



        blue1=game.add.sprite(0,0,'blueToken');
        blue2=game.add.sprite(0,0,'blueToken');
        blue3=game.add.sprite(0,0,'blueToken');
        blue4=game.add.sprite(0,0,'blueToken');

        green1=game.add.sprite(0,0,'greenToken');
        green2=game.add.sprite(0,0,'greenToken');
        green3=game.add.sprite(0,0,'greenToken');
        green4=game.add.sprite(0,0,'greenToken');


        red1Circle=game.add.sprite(0,0,'circle');
        red2Circle=game.add.sprite(0,0,'circle');
        red3Circle=game.add.sprite(0,0,'circle');
        red4Circle=game.add.sprite(0,0,'circle');

        yellow1Circle=game.add.sprite(0,0,'circle');
        yellow2Circle=game.add.sprite(0,0,'circle');
        yellow3Circle=game.add.sprite(0,0,'circle');
        yellow4Circle=game.add.sprite(0,0,'circle');

        green1Circle=game.add.sprite(0,0,'circle');
        green2Circle=game.add.sprite(0,0,'circle');
        green3Circle=game.add.sprite(0,0,'circle');
        green4Circle=game.add.sprite(0,0,'circle');

        blue1Circle=game.add.sprite(0,0,'circle');
        blue2Circle=game.add.sprite(0,0,'circle');
        blue3Circle=game.add.sprite(0,0,'circle');
        blue4Circle=game.add.sprite(0,0,'circle');


        red1BlackCircle=game.add.sprite(0,0,'blackCircle');
        red2BlackCircle=game.add.sprite(0,0,'blackCircle');
        red3BlackCircle=game.add.sprite(0,0,'blackCircle');
        red4BlackCircle=game.add.sprite(0,0,'blackCircle');

        yellow1BlackCircle=game.add.sprite(0,0,'blackCircle');
        yellow2BlackCircle=game.add.sprite(0,0,'blackCircle');
        yellow3BlackCircle=game.add.sprite(0,0,'blackCircle');
        yellow4BlackCircle=game.add.sprite(0,0,'blackCircle');

        green1BlackCircle=game.add.sprite(0,0,'blackCircle');
        green2BlackCircle=game.add.sprite(0,0,'blackCircle');
        green3BlackCircle=game.add.sprite(0,0,'blackCircle');
        green4BlackCircle=game.add.sprite(0,0,'blackCircle');

        blue1BlackCircle=game.add.sprite(0,0,'blackCircle');
        blue2BlackCircle=game.add.sprite(0,0,'blackCircle');
        blue3BlackCircle=game.add.sprite(0,0,'blackCircle');
        blue4BlackCircle=game.add.sprite(0,0,'blackCircle');

        mainArr=[red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4,green1,green2,green3,green4,blue1,blue2,blue3,blue4];

        for(var i=0;i<mainArr.length;i++)
        {
            mainArr[i].scale.setTo(0.7,0.7);
            mainArr[i].anchor.setTo(0.5,0.5);
        }

        circleArr=[red1Circle,red2Circle,red3Circle,red4Circle,yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle,green1Circle,green2Circle,green3Circle,green4Circle,blue1Circle,blue2Circle,blue3Circle,blue4Circle
                    ,red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle,yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle,green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle
                    ,blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle
        ];

        for(var i=0;i<circleArr.length;i++)
        {
            circleArr[i].anchor.setTo(0.5,0.5);
        }
        createGroups();


         textCur1ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur2ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur3ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur4ObjAI=game.add.text(0,0,'',{ fill: 'black' }); 


 
        // mainbg=game.add.sprite(canvasWidth/2 - cacheBG.width/2 , canvasHeight/2 -  cacheBG.height/2, '//  // mainbg');
        titleCupBG=game.add.sprite(800,500, 'titleCupBG'); //y:500
        titleCupBG.anchor.setTo(0.5,0.5);
        titleCupBG.angle=-5;
        titleBG=game.add.sprite(canvasWidth/2,canvasHeight/2 - 300, 'titleBG');
        titleBG.anchor.setTo(0.5);
        titleBG.scale.setTo(0.8,0.8);
         


        
       // introArtObj=game.add.sprite(0,0,'introArt');
        initGameOverScreen();
        winningTokenBlueObj=game.add.sprite(0,0,'blueToken');
        winningTokenRedObj=game.add.sprite(0,0,'redToken');
        winningTokenGreenObj=game.add.sprite(0,0,'greenToken');
        winningTokenYellowObj=game.add.sprite(0,0,'yellowToken');

        playerWonTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });

        // winningTokenRedObj.width=30;winningTokenRedObj.height=30;
        // winningTokenBlueObj.width=30;winningTokenBlueObj.height=30;
        // winningTokenGreenObj.width=30;winningTokenGreenObj.height=30;
        // winningTokenYellowObj.width=30;winningTokenYellowObj.height=30;


        var scaleFactor=getScaleFactor(1.2);
        // winningTokenRedObj.scale.setTo(scaleFactor,scaleFactor);
        // winningTokenBlueObj.scale.setTo(scaleFactor,scaleFactor);
        // winningTokenGreenObj.scale.setTo(scaleFactor,scaleFactor);
        // winningTokenYellowObj.scale.setTo(scaleFactor,scaleFactor); 

        var offsetY=211;
        // playerWonTextObj.x=getXtoken( 100);
        playerWonTextObj.y=getYtoken(211);

        playerWonTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor (0.6));

        winningTokenRedObj.x=getXtoken(60);
        winningTokenRedObj.y=getYtoken (offsetY-8);

        winningTokenBlueObj.x=getXtoken(60);
        winningTokenBlueObj.y=getYtoken( offsetY-8);

        winningTokenGreenObj.x=getXtoken (60);
        winningTokenGreenObj.y=getYtoken( offsetY-8);

        winningTokenYellowObj.x=getXtoken (60);
        winningTokenYellowObj.y=getYtoken( offsetY-8);

      

        
        // player1.width = 20; player1.height = 20;
        //  player2.width = 20; player2.height = 20;
        //  player3.width = 20; player3.height = 20;
        //  player4.width = 20; player4.height = 20;


      


        // a
        // r_4=game.add.sprite(0, 0, 'R_4');
        // r_6=game.add.sprite(0, 0, 'R_6');
        // r_8=game.add.sprite(0, 0, 'R_8');

        // g_2=game.add.sprite(0, 0, 'G_2');
        // g_4=game.add.sprite(0, 0, 'G_4');
        // g_6=game.add.sprite(0, 0, 'G_6');
        // g_8=game.add.sprite(0, 0, 'G_8');

        // y_2=game.add.sprite(0, 0, 'Y_2');
        // y_4=game.add.sprite(0, 0, 'Y_4');
        // y_6=game.add.sprite(0, 0, 'Y_6');
        // y_8=game.add.sprite(0, 0, 'Y_8');

        // b_2=game.add.sprite(0, 0, 'B_2');
        // b_4=game.add.sprite(0, 0, 'B_4');
        // b_6=game.add.sprite(0, 0, 'B_6');
        // b_8=game.add.sprite(0, 0, 'B_8');


        playButtonImg=game.add.sprite(0,0,'playButton');
        

        playButtonImg.x=getXtoken(200);
        playButtonImg.y=getYtoken(290);


        pauseButtonImg=game.add.sprite(0,0,'pauseButton');
        pauseX=getXtoken(200);
        pauseY=getYtoken(290);
        pauseButtonImg.x=pauseX+35;
        pauseButtonImg.y= pauseY;  
        pauseButtonImg.scale.setTo(0.5,0.5);

        // pauseButtonImg.inputEnabled=true;
        // pauseButtonImg.events.onInputDown.add(handlePause, this);
        // buttonPause=game.add.sprite(pauseX,pauseY,'smallButton');
        buttonPause= game.add.button(pauseX-20,pauseY-20, 'buttonSmall',  handlePause , this, 1, 1, 0);
        groupPause=game.add.group();
        groupPause.add(buttonPause);
        groupPause.add(pauseButtonImg);
        pauseButtonImg.tint=rgbToHex(163, 99, 21);



         initPressEnter();
        initModeSelect();
        initNoOfPlayerSelect();
        initDifficultySelect();
        initMarkerSelect();
        initPauseScreen();

        initReusableUI();

        initMenuUIGroup();

        initSetting();

       // splashBG=game.add.sprite(0,0,'splash');
        splashBG=game.add.sprite(canvasWidth/2 - cacheBG.width/2 , canvasHeight/2 -  cacheBG.height/2, 'splash');

       




        // play menu music
       

        

        initAudioSrc();
        
        initPointers();
        resetGame();
        initGoogleAnalytics();
        getResoFactor();
        menuStatus=false;



       game.input.onTap.add(onTap, this);

       debugText=game.add.text(0,0,'',{ fill: '#a36315' });
       var s ="ASPECT RATIO :"+ canvasWidth/canvasHeight + "::"+",WIDTH :"+canvasWidth +",HEIGHT :"+ canvasHeight;
       // console.log(canvasWidth)
       // console.log(canvasHeight)

       //debugText.text=s;

   
   }
   
   function up() {
       console.log('button up', arguments);
   }
   
   function over() {
       console.log('button over');
   }
   
   function out() {
       console.log('button out');
   }
   
   function actionOnClick () 
   {
        console.log("OVER HERE??");
   }


    var pressEnterRect;
    var pressEnterTextObj;

    var selectModeRect;
    var selectModeRectBG;
    var selectModeTextObj;



    var singlePlayerTextObj;
    var twoPlayerTextObj;


    var selectDifficultyRect;
    var selectDifficultyRectBG;
    var selectDifficultyTextObj;
    var easyTextObj;
    var mediumTextObj;
    var hardTextObj;
    
    var selectNoOfPlayerRect;
    var selectNoOfPlayerRectBG;
    var selectNoOfPlayerTextObj;
    var playersTwoTextObj;
    var playersFourTextObj;
    var playerTwoVsTwoAIObj;

    var selectMarkerRectBG;
    var selectMarkerRect;
    var selectMarkerTextObj;

    var markerRedObj;
    var markerBlueObj;
    var markerGreenObj;
    var markerYellowObj;

    var buttonSelectRedMarker;
    var buttonSelectYellowMarker;
    var buttonSelectGreenMarker;
    var buttonSelectBlueMarker;


    var pauseRectBG;
    var pauseRect;
    var pauseTextObj;
    var pauseRestartTextObj;
    var pauseHomeTextObj;
    var pauseResumeTextObj;



    var gameOverRectBG;
    var gameOverRect;
    var gameOverRectTextObj;
    var gameOverWinnerTextObj;
    var winnerRect;
    var gameOverHomeTextObj;
    var gameOverRestartTextObj;

    var press4TextObj;
    var press5TextObj;
    var press6TextObj;
    var press8TextObj;

    var press4RectObj;
    var press5RectObj;
    var press6RectObj;
    var press8RectObj;

    var buttonPlay;
    
    function Test()
   {

   }
    function initGameOverScreen()
    {
        gameOverRectBG = game.add.graphics(100,100);
        gameOverRectBG.lineStyle(1, 0x0000FF, 1);
        // gameOverRectBG.beginFill(0x012A5E);
        // gameOverRectBG.drawRect(-85, 50, 210 , 145);
        // gameOverRectBG.endFill();

        gameOverRect = game.add.graphics(100,100);
        gameOverRect.lineStyle(1, 0x0000FF, 1);
        // gameOverRect.beginFill(0x214983);
        // gameOverRect.drawRect(-45, 55, 140 , 20);
        // gameOverRect.endFill();

        winnerRect = game.add.graphics(100,100);
        winnerRect.lineStyle(1, 0x0000FF, 1);
        // winnerRect.beginFill(0x214983);
        // winnerRect.drawRect(-25, 109, 110 , 20);
        // winnerRect.endFill();

        buttonRestart= game.add.button(0, 0, 'button',  handleRestart , this, 1, 1, 0);
        buttonHome= game.add.button(0, 0, 'button',  handleHome , this, 1, 1, 0);

       // buttonTest = game.add.button(0, 0, 'button',  Test , this, 1, 1, 0);

     

        gameOverRectTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverRectTextObj.text="GAME OVER";
        gameOverRectTextObj.scale.setTo(getScaleFactor( 0.5),getScaleFactor(0.5));
        gameOverRectTextObj.x=canvasWidth/2;
        gameOverRectTextObj.y=canvasHeight/2 + 150;

        gameOverRectTextObj.anchor.setTo(0.5);


        gameOverWinnerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverWinnerTextObj.text="WINNER!!";
        gameOverWinnerTextObj.scale.setTo(getScaleFactor(0.5), getScaleFactor (0.5));
        gameOverWinnerTextObj.x=canvasWidth/2;
        gameOverWinnerTextObj.y= canvasHeight/2 + 100;

        gameOverWinnerTextObj.anchor.setTo(0.5);



        gameOverRestartTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        gameOverRestartTextObj.text="RESTART";
        gameOverRestartTextObj.scale.setTo(getScaleFactor (0.5),getScaleFactor (0.5));
        gameOverRestartTextObj.x=canvasWidth/2;
        gameOverRestartTextObj.y=canvasHeight/1.3;

        gameOverRestartTextObj.anchor.setTo(0.5,0);



        gameOverHomeTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        gameOverHomeTextObj.text="HOME";
        gameOverHomeTextObj.scale.setTo(getScaleFactor (0.5), getScaleFactor (0.5));
        gameOverHomeTextObj.x= canvasWidth/2;
        gameOverHomeTextObj.y=canvasHeight/1.1;

        gameOverHomeTextObj.anchor.setTo(0.5,0);



        buttonRestart.x=gameOverRestartTextObj.x-300;
        buttonRestart.y=gameOverRestartTextObj.y-20;
        
        buttonHome.x=gameOverHomeTextObj.x-300;
        buttonHome.y=gameOverHomeTextObj.y-20;

        // buttonRestart.anchor.setTo(0.5);

        // buttonHome.anchor.setTo(0.5);

        
    }

    function initReusableUI()
    {
        press4RectObj = game.add.graphics(0,0);
        press4RectObj.lineStyle(1, 0x0000FF, 1);
        press4RectObj.beginFill(0x214983);
        press4RectObj.drawRect(0, 0, 70 , 20);
        press4RectObj.endFill();
        press4RectObj.visible=false;


        press5RectObj = game.add.graphics(0,0);
        press5RectObj.lineStyle(1, 0x0000FF, 1);
        press5RectObj.beginFill(0x214983);
        press5RectObj.drawRect(0, 0, 70 , 20);
        press5RectObj.endFill();
        press5RectObj.visible=false;

        
        press6RectObj = game.add.graphics(0,0);
        press6RectObj.lineStyle(1, 0x0000FF, 1);
        press6RectObj.beginFill(0x214983);
        press6RectObj.drawRect(0, 0, 70 , 20);
        press6RectObj.endFill();
        press6RectObj.visible=false;

        press8RectObj = game.add.graphics(0,0);
        press8RectObj.lineStyle(1, 0x0000FF, 1);
        press8RectObj.beginFill(0x214983);
        press8RectObj.drawRect(0, 0, 70 , 20);
        press8RectObj.endFill();
        press8RectObj.visible=false;


        press4TextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        press4TextObj.text="PRESS 4";
        press4TextObj.scale.setTo(0.5,0.5);
        press4TextObj.visible=false;

        press5TextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        press5TextObj.text="PRESS 5";
        press5TextObj.scale.setTo(0.5,0.5);
        press5TextObj.visible=false;
     
        press6TextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        press6TextObj.text="PRESS 6";
        press6TextObj.scale.setTo(0.5,0.5);
        press6TextObj.visible=false;

        press8TextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        press8TextObj.text="PRESS 8";
        press8TextObj.scale.setTo(0.5,0.5);
        press8TextObj.visible=false;

        menuDiceObj=game.add.sprite(0,0,'rd2');
        menuDiceObj.scale.setTo(0.6,0.6);
        menuDiceObj.x=45;
        menuDiceObj.y=175;

        console.log("TOUCH :"+game.touch);
        

    }

    function initPressEnter()
    {
                //RECTS DISABLED FOR TOUCH SCREEN.

        pressEnterRect = game.add.graphics(100,100);
        pressEnterRect.lineStyle(2, 0x0000FF, 1);
      //  pressEnterRect.beginFill(0x012A5E);
       // pressEnterRect.drawRect(-40, 85, 120, 20);
        //pressEnterRect.endFill();


        pressEnterTextObj=game.add.text(0,0,'',{ fill: '#a36315' });

        pressEnterTextObj.text="TAP ANYWHERE";

        //var scaleFactor=(0.6*canvasWidth)/240;

        pressEnterTextObj.scale.setTo(getScaleFactor(0.6) ,getScaleFactor(0.6));


        pressEnterTextObj.x=  canvasWidth/4; //63 ; 
        // console.log("WIDTH :"+ canvasWidth+"::"+"CANVAS HEIGHT :"+ canvasHeight);
        // console.log("canvasWidth/4"+ canvasWidth/4);
        pressEnterTextObj.y=   canvasHeight/1.8;  //186;
     //   console.log("canvasHeight/2"+ canvasHeight/2);


        pressEnterRect.visible=false;
        pressEnterTextObj.visible=false;


    }


    function getScaleFactor(val)
    {
        return (val*canvasWidth)/240;
    }



    function initModeSelect()
    {
        //RECTS DISABLED FOR TOUCH SCREEN.

        selectModeRectBG = game.add.graphics(100,100);
        selectModeRectBG.lineStyle(1, 0x0000FF, 1);
       // selectModeRectBG.beginFill(0x012A5E);
       // selectModeRectBG.drawRect(-80, 70, 200 , 120);
        //selectModeRectBG.endFill();

        selectModeRect = game.add.graphics(100,100);
        selectModeRect.lineStyle(1, 0x0000FF, 1);
       // selectModeRect.beginFill(0x214983);
       // selectModeRect.drawRect(-60, 80, 160 , 20);
       // selectModeRect.endFill();

       //buttonVsPlayer = game.add.button(0, 0, 'button', (  function() {   handleVsPlayer();}) , this, 1, 1, 0);
       buttonVsPlayer = game.add.button(0, 0, 'button',  handleVsPlayer , this, 1, 1, 0);
       buttonVsComputer = game.add.button(0, 0, 'button',  handleVsComputer , this, 1, 1, 0);

       

      // buttonSelectRedMarker = game.add.button(0, 0, 'markerButton',(function() {   markerSelect(1);})   , this, 1, 1, 0);
      // buttonSelectYellowMarker = game.add.button(0, 0, 'markerButton',(function() {   markerSelect(2);})   , this, 1, 1, 0);
       //buttonSelectGreenMarker = game.add.button(0, 0, 'markerButton',  (function() {   markerSelect(3);}) , this, 1, 1, 0);
       //buttonSelectBlueMarker = game.add.button(0, 0, 'markerButton', (function() {   markerSelect(4);})  , this, 1, 1, 0);




      
  
        selectModeTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        selectModeTextObj.text=" ";//SELECT MODE
        selectModeTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor(0.6));
        selectModeTextObj.x=canvasWidth/3.5;
        selectModeTextObj.y=canvasHeight/1.8;

      
    


      //  var style = { font: "bold 48px myFont", fill: "#fff" };//, boundsAlignH: "center", boundsAlignV: "middle" };


        singlePlayerTextObj=game.add.text(0,0,'',{ fill: '#a36315' });//,font:"myFont"});
        singlePlayerTextObj.text="VS PLAYER";
        singlePlayerTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        singlePlayerTextObj.x=canvasWidth/2;
        singlePlayerTextObj.y=canvasHeight/1.6;

        twoPlayerTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        twoPlayerTextObj.text="VS COMPUTER";
        twoPlayerTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        twoPlayerTextObj.x=canvasWidth/2;
        twoPlayerTextObj.y=canvasHeight/1.4;

        singlePlayerTextObj.anchor.setTo(0.5,0);
        twoPlayerTextObj.anchor.setTo(0.5,0);
        


       


        selectModeTextObj.visible=false;
        //menuDiceObj.visible=false;



    }

  


    function initDifficultySelect()
    {
      
        selectDifficultyRectBG = game.add.graphics(100,100);
        selectDifficultyRectBG.lineStyle(1, 0x0000FF, 1);
        // selectDifficultyRectBG.beginFill(0x012A5E);
        // selectDifficultyRectBG.drawRect(-80, 50, 200 , 150);
        // selectDifficultyRectBG.endFill();

        selectDifficultyRect = game.add.graphics(100,100);
        selectDifficultyRect.lineStyle(1, 0x0000FF, 1);
        // selectDifficultyRect.beginFill(0x214983);
        // selectDifficultyRect.drawRect(-60, 60, 160 , 20);
        // selectDifficultyRect.endFill();


        buttonEasy = game.add.button(0, 0, 'button',  handleEasy , this, 1, 1, 0);
        buttonMedium = game.add.button(0, 0, 'button',  handleMedium , this, 1, 1, 0);
        buttonHard = game.add.button(0, 0, 'button',  handleHard , this, 1, 1, 0);
 

        

        selectDifficultyTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectDifficultyTextObj.text="SELECT DIFFICULTY";
        selectDifficultyTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        selectDifficultyTextObj.x=canvasWidth/2; //55
        selectDifficultyTextObj.y=canvasHeight/2 + 200;//162
        selectDifficultyTextObj.anchor.setTo(0.5);

        easyTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        easyTextObj.text="EASY";
        easyTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor(0.6));
        easyTextObj.x=canvasWidth/2 ; //130
        easyTextObj.y=canvasHeight/2 + 400;//198

        easyTextObj.anchor.setTo(0.5,0);

        mediumTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        mediumTextObj.text="MEDIUM";
        mediumTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor(0.6));
        mediumTextObj.x=canvasWidth/2 ;
        mediumTextObj.y=easyTextObj.y+150; //233

        mediumTextObj.anchor.setTo(0.5,0);

        hardTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        hardTextObj.text="HARD";
        hardTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor(0.6));
        hardTextObj.x=canvasWidth/2 ;
        hardTextObj.y=mediumTextObj.y+150;//268

        hardTextObj.anchor.setTo(0.5,0);

        // buttonEasy.anchor.setTo(0.5);
        // buttonMedium.anchor.setTo(0.5);
        // buttonHard.anchor.setTo(0.5);

        buttonEasy.x=easyTextObj.x-300;
        buttonEasy.y=easyTextObj.y-20;

        buttonMedium.x=mediumTextObj.x-300;
        buttonMedium.y=mediumTextObj.y-20;

        buttonHard.x=hardTextObj.x-300;
        buttonHard.y=hardTextObj.y-20;



    }

    function initNoOfPlayerSelect()
    {

        //RECTS DISABLED FOR TOUCH SCREEN.

        selectNoOfPlayerRectBG = game.add.graphics(100,100);
        selectNoOfPlayerRectBG.lineStyle(1, 0x0000FF, 1);
        // selectNoOfPlayerRectBG.beginFill(0x012A5E);
        // selectNoOfPlayerRectBG.drawRect(-65, 50, 180 , 160);
        // selectNoOfPlayerRectBG.endFill();

        selectNoOfPlayerRect = game.add.graphics(100,100);
        selectNoOfPlayerRect.lineStyle(1, 0x0000FF, 1);
        // selectNoOfPlayerRect.beginFill(0x214983);
        // selectNoOfPlayerRect.drawRect(-45, 65, 140 , 20);
        // selectNoOfPlayerRect.endFill();

        button2Player = game.add.button(0, 0, 'button',  handle2Player , this, 1, 1, 0);
        button4Player = game.add.button(0, 0, 'button',  handle4Player , this, 1, 1, 0);
        button2PlayerVs2Computer = game.add.button(0, 0, 'button',  handle2PlayerVs2Computer , this, 1, 1, 0);
 

        selectNoOfPlayerTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        selectNoOfPlayerTextObj.text=" ";//SELECT PLAYERS
        selectNoOfPlayerTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        selectNoOfPlayerTextObj.x=canvasWidth/3.5;//68
        selectNoOfPlayerTextObj.y=canvasHeight/1.8; //168

        playersTwoTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        playersTwoTextObj.text="2 PLAYERS";
        playersTwoTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        playersTwoTextObj.x=canvasWidth/2;//120
        playersTwoTextObj.y=canvasHeight/2.55;

        playersFourTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        playersFourTextObj.text="4 PLAYERS";
        playersFourTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        playersFourTextObj.x=canvasWidth/2;
        playersFourTextObj.y=canvasHeight/1.34;

        playerTwoVsTwoAIObj=game.add.text(0,0,'',{ fill: '#a36315' });
        playerTwoVsTwoAIObj.text="2P & 2 COM";//"2 PLAYERS &"+"\n"+"2 COMPUTER";
        playerTwoVsTwoAIObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        playerTwoVsTwoAIObj.x=canvasWidth/2;
        playerTwoVsTwoAIObj.y=canvasHeight/1.34;



        playersTwoTextObj.anchor.setTo(0.5,0);
        playersFourTextObj.anchor.setTo(0.5,0);
        playerTwoVsTwoAIObj.anchor.setTo(0.5,0);
   
    }

    var markerSelected=0;
    function markerSelect(val)
    {
      //  console.log("Val:"+val);
        arr=[buttonSelectRedMarker,buttonSelectYellowMarker,buttonSelectGreenMarker,buttonSelectBlueMarker];
        markerSelected=val;

// /        console.log("SELECTED :"+val);
        for(var i=0;i<arr.length;i++)
        {
            if(val==i)
            {
                arr[i].loadTexture('markerButtonActive');//sprite = 'markerButtonActive';
              //  console.log("HERE");
            }else{
                arr[i].loadTexture('markerButtonDeactive');// = '';

            }
        }
    }

    function handlePlay()
    {

        selectColorListener(markerSelected+1);
    }
    var textPlayObj;

    function initMarkerSelect()
    {
       
        //DISABLE DRAW RECT FOR TOUCH

        selectMarkerRectBG = game.add.graphics(100,100);
        selectMarkerRectBG.lineStyle(1, 0x0000FF, 1);
        // selectMarkerRectBG.beginFill(0x012A5E);
        // selectMarkerRectBG.drawRect(-50, 50, 150 , 160);
        // selectMarkerRectBG.endFill();

        selectMarkerRect = game.add.graphics(100,100);
        selectMarkerRect.lineStyle(1, 0x0000FF, 1);
        // selectMarkerRect.beginFill(0x214983);
        // selectMarkerRect.drawRect(-45, 55, 140 , 20);
        selectMarkerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectMarkerTextObj.text="SELECT MARKER";
        selectMarkerTextObj.anchor.setTo(0.5);

        selectMarkerTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        selectMarkerTextObj.x=canvasWidth/2;//68
        selectMarkerTextObj.y=canvasHeight/2+150; //158

       markerRedObj= game.add.sprite(0,0,'redToken');
       markerBlueObj= game.add.sprite(0,0,'blueToken');
       markerGreenObj= game.add.sprite(0,0,'greenToken');
       markerYellowObj= game.add.sprite(0,0,'yellowToken');

       buttonSelectRedMarker = game.add.sprite(0, 0, 'markerButtonActive');
       buttonSelectYellowMarker = game.add.sprite(0, 0, 'markerButtonDeactive');
       buttonSelectGreenMarker = game.add.sprite(0, 0, 'markerButtonDeactive');
       buttonSelectBlueMarker = game.add.sprite(0, 0, 'markerButtonDeactive');

       buttonPlay=game.add.button(0, 0, 'gameOnButton',  handlePlay , this, 1, 1, 0);
      // buttonPlay.anchor.setTo(0.5);

       textPlayObj=game.add.text(0,0,'',{ fill: '#a36315' });
       textPlayObj.text="PLAY";
       textPlayObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));

       textPlayObj.anchor.setTo(0.5);

    //    buttonPlay.x=canvasWidth/2;
    //    buttonPlay.y=canvasHeight/2+600;

       textPlayObj.x=canvasWidth/2;
       textPlayObj.y=canvasHeight/2+600;

       buttonPlay.x=textPlayObj.x-230;
       buttonPlay.y=textPlayObj.y-70;


       arr=[buttonSelectRedMarker,buttonSelectYellowMarker,buttonSelectGreenMarker,buttonSelectBlueMarker,markerRedObj,markerBlueObj,markerYellowObj,markerGreenObj];

       for(var i=0;i<arr.length;i++)
       {
           arr[i].anchor.setTo(0.5);

       }
       
       

    //    var scaleFactor=getScaleFactor(1.2);
    //    markerRedObj.scale.setTo(scaleFactor,scaleFactor);
    //    markerBlueObj.scale.setTo(scaleFactor,scaleFactor);
    //    markerGreenObj.scale.setTo(scaleFactor,scaleFactor);
    //    markerYellowObj.scale.setTo(scaleFactor,scaleFactor); 

       var yFactor=canvasHeight/15;//33
       var xFactor=canvasWidth/2 - 300;//135

       var xOffseter=200;

       markerRedObj.x=xFactor;
       markerRedObj.y=canvasHeight/2+300;

       buttonSelectRedMarker.x=markerRedObj.x;
       buttonSelectRedMarker.y=markerRedObj.y+150;

       markerGreenObj.x=markerRedObj.x+xOffseter;
       markerGreenObj.y=markerRedObj.y;
       buttonSelectGreenMarker.x=markerGreenObj.x;
       buttonSelectGreenMarker.y=markerGreenObj.y+150;

       markerYellowObj.x=markerGreenObj.x+xOffseter;
       markerYellowObj.y=markerGreenObj.y;
       buttonSelectYellowMarker.x=markerYellowObj.x;
       buttonSelectYellowMarker.y=markerYellowObj.y+150;

       markerBlueObj.x=markerYellowObj.x+xOffseter;
       markerBlueObj.y=markerYellowObj.y;
       buttonSelectBlueMarker.x=markerBlueObj.x;
       buttonSelectBlueMarker.y=markerBlueObj.y+150;


       buttonSelectRedMarker.inputEnabled=true;
       buttonSelectGreenMarker.inputEnabled=true;
       buttonSelectYellowMarker.inputEnabled=true;
       buttonSelectBlueMarker.inputEnabled=true;

       buttonSelectRedMarker.events.onInputDown.add((function() {   markerSelect(0);}), this);
       buttonSelectYellowMarker.events.onInputDown.add((function() {   markerSelect(1);}), this);
       buttonSelectGreenMarker.events.onInputDown.add((function() {   markerSelect(2);}), this);
       buttonSelectBlueMarker.events.onInputDown.add((function() {   markerSelect(3);}), this);

     





    //    markerRedObj.inputEnabled=true;
    //    markerYellowObj.inputEnabled=true;
    //    markerGreenObj.inputEnabled=true;
    //    markerBlueObj.inputEnabled=true;

    //    markerRedObj.events.onInputDown.add((function() {   selectColorListener(1);}), this);
    //    markerYellowObj.events.onInputDown.add((function() {   selectColorListener(2);}), this);
    //    markerGreenObj.events.onInputDown.add((function() {   selectColorListener(3);}), this);
    //    markerBlueObj.events.onInputDown.add((function() {   selectColorListener(4);}), this);


    }
    var groupButtonVsPlayer,groupButtonVsComputer;
    var groupButtonVsTwo,groupButtonVsFour,groupButton2PlayerVs2AI;

    function initMenuUIGroup()
    {
       
    //     noOfplayerPanel=game.add.sprite(540,900,'panel');//1350
    //     noOfplayerPanel.anchor.setTo(1,0);

    //    noOfplayerPanel.height=1800; //900
    //     noOfplayerPanel.width=900;
 // mainbg
       //  noOfplayerPanel.scale.setTo(0,0);
      //  game.add.tween(noOfplayerPanel.scale).to({ x: 2, y: 2});


        
         
         //game.add.tween(groupButtonVsPlayer).from( { y: 1000 }, 500, Phaser.Easing.Quadratic.Out, true,300);

        //noOfplayerPanel.scale.setTo(1,1);

        groupButtonVsPlayer=game.add.group();
        groupButtonVsPlayer.add(buttonVsPlayer);
        groupButtonVsPlayer.add(singlePlayerTextObj);

        groupButtonVsComputer=game.add.group();
        groupButtonVsComputer.add(buttonVsComputer);
        groupButtonVsComputer.add(twoPlayerTextObj);


        groupButtonVsTwo=game.add.group();
        groupButtonVsTwo.add(button2Player);
        groupButtonVsTwo.add(playersTwoTextObj);


        groupButtonVsFour=game.add.group();
        groupButtonVsFour.add(button4Player);
        groupButtonVsFour.add(playersFourTextObj);

        groupButton2PlayerVs2AI=game.add.group();
        groupButton2PlayerVs2AI.add(button2PlayerVs2Computer);
        groupButton2PlayerVs2AI.add(playerTwoVsTwoAIObj);


        //buttonSetting=game.add.sprite(canvasWidth-100,100,"smallButton");
        buttonSetting=game.add.button(canvasWidth-100, 100, 'buttonSmall',  handleSetting , this, 1, 1, 0);
        // buttonSetting.inputEnabled=true;
        // buttonSetting.events.onInputDown.add(handleSetting , this);
        buttonSetting.anchor.setTo(0.5,0.5);

        settingIcon=game.add.sprite(buttonSetting.x,buttonSetting.y-20,"settingIcon");
        // settingIcon.inputEnabled=true;
        // settingIcon.events.onInputDown.add(handleSetting , this);
        settingIcon.anchor.setTo(0.5,0.5);
        settingIcon.scale.setTo(0.5,0.5);
        settingIcon.tint=rgbToHex(163, 99, 21);

        // buttonBack=game.add.sprite(100,100,"markerButtonDeactive");
        buttonBack=game.add.button(150, 100, 'buttonSmall',  handleBack , this, 1, 1, 0);
        // buttonBack.inputEnabled=true;
        // buttonBack.events.onInputDown.add(handleBack , this);
        buttonBack.anchor.setTo(0.5,0.5);

        backIcon=game.add.sprite(150,80,"back");
        backIcon.anchor.setTo(0.5,0.5);

        backIcon.scale.setTo(0.5,0.5);
        backIcon.tint=rgbToHex(163, 99, 21);

        groupBackButton=game.add.group();
        groupBackButton.add(buttonBack);
        groupBackButton.add(backIcon);
        groupBackButton.visible=false;
         

    }

    var buttonSetting;
    var showingSetting=false;
    var settingRect;
    var groupSettings;
    var buttonSfx;
    var buttonMusic;
    var isMusicActive=true;
    var isSfxActive=true;
    var cancelMiusic;
    var cancelSfx;

  //  var 

    function hasKey(key)
    {
        // return false;
        if(localStorage.getItem(key))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function getInt(key)
    {
        if(hasKey(key))
        {
            return localStorage.getItem(key);
        }else{
            return 0;
        }
      
    }

    function setInt(key,value)
    {
        // return;
         localStorage.setItem(key,value);
      
    }

    function initSetting()
    {
        settingRect = game.add.sprite(0,0,"setting_bg");
        // settingRect.lineStyle(10, 0x005ADF, 6);
        // settingRect.beginFill(0xC6C6C6);
        // settingRect.drawRect(0,0, 120 , 300);
        // settingRect.endFill();
        settingRect.scale.setTo(0.65,0.65);
        settingRect.anchor.setTo(0.5,0.5);
        settingRect.x=buttonSetting.x+5;
        settingRect.y=buttonSetting.y+190; //180

      

        
        showingSetting=false;

       // buttonSfx=game.add.text(0,0,'',{ fill: '#a36315' });
       // buttonSfx.text="SFX";
      //  buttonSfx.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        buttonSfx=game.add.sprite(0, 0, 'sfx_art');

    
        buttonSfx.x=settingRect.x;
        buttonSfx.y=settingRect.y-40;

        // buttonSfx.scale.setTo(0.5,0.5);

        // buttonMusic=game.add.text(0,0,'',{ fill: '#a36315' });
        // buttonMusic.text="SFX";
      //  buttonSfx.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        buttonMusic=game.add.sprite(0, 0, 'music_art');
        buttonMusic.x=settingRect.x;
        buttonMusic.y=settingRect.y+95;

        buttonSfx.tint=rgbToHex(163, 99, 21);
        buttonMusic.tint=rgbToHex(163, 99, 21);


        buttonSfx.anchor.setTo(0.5);
        buttonMusic.anchor.setTo(0.5);

        buttonSfx.scale.setTo(0.55,0.55);
        buttonMusic.scale.setTo(0.55,0.55);

        cancelMiusic =game.add.sprite(0, 0, 'cancel');
        // cancelMiusic.lineStyle(1, 0x005ADF, 6);
        // cancelMiusic.beginFill(0xC6C6C6);
        // cancelMiusic.drawRect(0,0, 20 , 120);
        // cancelMiusic.endFill();
        cancelMiusic.anchor.setTo(0.5,0.5);
        cancelMiusic.x=buttonMusic.x;
        cancelMiusic.y=buttonMusic.y;
        // cancelMiusic.angle=120;

        cancelMiusic.scale.setTo(0.5,0.5);
        
        cancelSfx = game.add.sprite(0, 0, 'cancel');
        // cancelSfx.lineStyle(1, 0x005ADF, 6);
        // cancelSfx.beginFill(0xC6C6C6);
        // cancelSfx.drawRect(0,0, 20 , 120);
        // cancelSfx.endFill();
        cancelSfx.anchor.setTo(0.5,0.5);
        cancelSfx.x=buttonSfx.x;
        cancelSfx.y=buttonSfx.y;
        // cancelSfx.angle=120;
        cancelSfx.scale.setTo(0.5,0.5);


        groupSettings=game.add.group();
         groupSettings.add(settingRect);
        groupSettings.add(buttonSfx);
        groupSettings.add(buttonMusic);
        groupSettings.add(cancelSfx);
        groupSettings.add(cancelMiusic);
        // groupSettings.add(settingIcon);
        // groupSettings.add(buttonSetting);


        buttonSfx.inputEnabled = true;
        buttonMusic.inputEnabled = true;

        buttonSfx.events.onInputDown.add(handleSfx , this);
        buttonMusic.events.onInputDown.add(handleMusic , this);


        groupSettings.visible=false;

        if(!hasKey("sfxDisabled"))
        {
            setInt("sfxDisabled",0);
            setInt("musicDisabled",0);

            console.log("NO LOCAL STORAGE");


        }else{
            console.log("YES LOCAL STORAGE");
        }
        

        if(getInt("sfxDisabled")==1)
        {
          isSfxActive=false;
         cancelSfx.visible=true;
        }else{
          isSfxActive=true;
         cancelSfx.visible=false;


        }


        if(getInt("musicDisabled")==1)
        {
          isMusicActive=false;
         cancelMiusic.visible=true;
        }else{
          isMusicActive=true;
         cancelMiusic.visible=false;


        }
    }

    function handleMusic()
    {
        if(isMusicActive)
        {
            isMusicActive=false;
            cancelMiusic.visible=true;
            stopBGMusic();
            setInt("musicDisabled",1);
        }
        else
        {
            isMusicActive=true;
            cancelMiusic.visible=false;
            changeBgMusic(true);

            setInt("musicDisabled",0);

        }
    }


    function handleSfx()
    {
        if(isSfxActive)
        {
            isSfxActive=false;
            cancelSfx.visible=true;
            setInt("sfxDisabled",1);

        }
        else
        {
            isSfxActive=true;
            cancelSfx.visible=false;
            setInt("sfxDisabled",0);


        }
    }

    function handleSetting()
    {
        if(showingSetting)
        {
             
            switchSettingStatus(false);

        }
        else
        {
             
            switchSettingStatus(true);

        }

       
    }

    function switchSettingStatus(status)
    {
        if(!status)
        {
            showingSetting=false;
            groupSettings.visible=false;


        }
        else
        {
            showingSetting=true;
            groupSettings.visible=true;

        }
    }

    function showButtons()
    {
     //   console.log("CALLED THIS");
    // console.log(" x :"+groupButtonVsPlayer.x);
        groupButtonVsPlayer.x=0;
        groupButtonVsComputer.x=0;
        game.add.tween(groupButtonVsPlayer).from( { y: 1000 }, 500, Phaser.Easing.Quadratic.Out, true,300);
        game.add.tween(groupButtonVsComputer).from( { y: 1000 }, 500, Phaser.Easing.Quadratic.Out, true,500);
    }

    function noOfPlayerAnim(isEntry)
    {
        if(isEntry)
        {
            groupButtonVsTwo.x=0;
            groupButtonVsFour.x=0;
            groupButton2PlayerVs2AI.x=0;
            game.add.tween(groupButtonVsTwo).from( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(groupButtonVsFour).from( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(groupButton2PlayerVs2AI).from( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);

        }
        else
        {
           
            game.add.tween(groupButtonVsTwo).to( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(groupButtonVsFour).to( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(groupButton2PlayerVs2AI).to( { x: 1000 }, 500, Phaser.Easing.Quadratic.Out, true);

        }
    }

    function initPauseScreen()
    {
        pauseRectBG = game.add.graphics(100,100);
        pauseRectBG.lineStyle(1, 0x0000FF, 1);
        // pauseRectBG.beginFill(0x012A5E);
        // pauseRectBG.drawRect(-50, 50, 150 , 100);
        // pauseRectBG.endFill();

        pauseRect = game.add.graphics(100,100);
        pauseRect.lineStyle(1, 0x0000FF, 1);
        // pauseRect.beginFill(0x214983);
        // pauseRect.drawRect(-45, 55, 140 , 20);
        // pauseRect.endFill();

        buttonResumePause=game.add.button(0, 0, 'button',  handleResume , this, 1, 1, 0);
        buttonRestartPause= game.add.button(0, 0, 'button',  handleRestart , this, 1, 1, 0);
        buttonHomePause= game.add.button(0, 0, 'button',  handleHome , this, 1, 1, 0);


        pauseTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        pauseTextObj.text="GAME PAUSED";
        pauseTextObj.scale.setTo(getScaleFactor( 0.5) , getScaleFactor (0.5));
        pauseTextObj.x=canvasWidth/2;
        pauseTextObj.y=canvasHeight/2 +150;

        pauseTextObj.anchor.setTo(0.5);


        pauseResumeTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        pauseResumeTextObj.text="RESUME";
        pauseResumeTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor (0.5));
        pauseResumeTextObj.x=canvasWidth/2;
        pauseResumeTextObj.y=canvasHeight/1.6;

        pauseResumeTextObj.anchor.setTo(0.5,0);


        buttonResumePause.x=pauseResumeTextObj.x-300;
        buttonResumePause.y=pauseResumeTextObj.y-20;

        // buttonResumePause.anchor.setTo(0.5,0);
        
        pauseRestartTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        pauseRestartTextObj.text="RESTART";
        pauseRestartTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor (0.5));
        pauseRestartTextObj.x=canvasWidth/2 ;
        pauseRestartTextObj.y=canvasHeight/1.4;

        pauseRestartTextObj.anchor.setTo(0.5,0);


        buttonRestartPause.x=pauseRestartTextObj.x-300;
        buttonRestartPause.y=pauseRestartTextObj.y-20;
        // buttonRestartPause.anchor.setTo(0.5,0);


        pauseHomeTextObj=game.add.text(0,0,'',{ fill: '#a36315' });
        pauseHomeTextObj.text="HOME";
        pauseHomeTextObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        pauseHomeTextObj.x=canvasWidth/2;
        pauseHomeTextObj.y=canvasHeight/1.24;

        pauseHomeTextObj.anchor.setTo(0.5,0);


        buttonHomePause.x=pauseHomeTextObj.x-300;
        buttonHomePause.y=pauseHomeTextObj.y-20;
        // buttonHomePause.anchor.setTo(0.5,0);

    }


    



    function noOfPlayerBGActive(status,isAnim=false)
    {
        
        

         // mainbg.visible=status;

        press4TextObj.visible=status;
        press4RectObj.visible=status;
        press5TextObj.visible=status;
        press5RectObj.visible=status;
        press6TextObj.visible=false;
        press6RectObj.visible=false;
        playerTwoVsTwoAIObj.visible=false;

        button2Player.visible=status;
        button4Player.visible=status;
        button2PlayerVs2Computer.visible=false;

        
        var isAi=gameModevsAI;

        if(status)
        {
            var offsetText=100;
            var diffInY=3;  
            var diffInX=4;
            var yFactor=canvasHeight/10; //This is the spacing factor
         
            press4RectObj.x=offsetText-diffInX;
            press4RectObj.y=canvasHeight/1.6;

            press4TextObj.x=offsetText;
            press4TextObj.y=press4RectObj.y+diffInY;
            playersTwoTextObj.y=press4RectObj.y+diffInY;
           
            press5RectObj.x=offsetText-diffInX;
            press5RectObj.y= press4RectObj.y+yFactor;

            press5TextObj.x=offsetText;
            press5TextObj.y= press5RectObj.y+diffInY;
            playersFourTextObj.y=press5RectObj.y+diffInY;


            press6RectObj.x=offsetText-diffInX;
            press6RectObj.y= press5RectObj.y+yFactor;

            press6TextObj.x=offsetText;
            press6TextObj.y= press6RectObj.y+diffInY;
            playerTwoVsTwoAIObj.y=press6RectObj.y+diffInY;

            button2Player.x=playersTwoTextObj.x-300;
            button2Player.y=playersTwoTextObj.y-20;

            button4Player.x=playersFourTextObj.x-300;
            button4Player.y=playersFourTextObj.y-20;

            if(isAi)
            {
                //console.log("SHOWING VS AI");
            }
            else
            {
               // if(isAnim==false)
                {
                    press6TextObj.visible=true;
                    press6RectObj.visible=true;
                    playerTwoVsTwoAIObj.visible=true;
                    button2PlayerVs2Computer.visible=true;
                }
                



                button2PlayerVs2Computer.x=playerTwoVsTwoAIObj.x-300;
                button2PlayerVs2Computer.y=playerTwoVsTwoAIObj.y-20;

            }
            
 
        }

        if(isAnim==false)
       {
            selectNoOfPlayerRectBG.visible=status;
            selectNoOfPlayerRect.visible=status;
            selectNoOfPlayerTextObj.visible=status;

            playersTwoTextObj.visible=status;
            playersFourTextObj.visible=status;
        }

        else 
        {
            if(status==true)
            {
                selectNoOfPlayerRectBG.visible=status;
                selectNoOfPlayerRect.visible=status;
                selectNoOfPlayerTextObj.visible=status;
    
                playersTwoTextObj.visible=status;
                playersFourTextObj.visible=status;

                //Play entry anim
                noOfPlayerAnim(true);
            }
            else
            {
                if(!isAi)
                {
                    playerTwoVsTwoAIObj.visible=true;
                    button2PlayerVs2Computer.visible=true;

                }
                button2Player.visible=true;
                button4Player.visible=true;
                //Play exit anim
                noOfPlayerAnim(false);
            }
        }
        setActiveKeypadUI(false);
    }

    function gameOverBGactive(status)
    {
        gameOverRectBG.visible=status;
        gameOverRect.visible=status;
        gameOverRectTextObj.visible=status;
        // mainbg.visible=status;
        gameOverHomeTextObj.visible=status;
        gameOverRestartTextObj.visible=status;
        gameOverWinnerTextObj.visible=status;
        winnerRect.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press5RectObj.visible=status;
        press5TextObj.visible=status;

        buttonRestart.visible=status;
        buttonHome.visible=status;

        if(status)
        {
            var offsetText=60;
            var diffInY=3;
            var diffInX=4;
            var yFactor=32;
         
             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y= 235;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;
        }

        setActiveKeypadUI(false);
    }
    function pauseBGactive(status)
    {
        pauseRectBG.visible=status;
        pauseRect.visible=status;
        pauseTextObj.visible=status;
        // mainbg.visible=status;
        pauseHomeTextObj.visible=status;
        pauseRestartTextObj.visible=status;
        pauseResumeTextObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press5RectObj.visible=status;
        press5TextObj.visible=status;

        buttonRestartPause.visible=status;
        buttonHomePause.visible=status;
        buttonResumePause.visible=status;

        

        if(status)
        {
            var offsetText=60;
            var diffInY=3;
            var diffInX=4;
            var yFactor=32;
         
             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y= 185;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;

        }
        else
        {
           // console.trace("THIS ?");
        }

        setActiveKeypadUI(false);
    }


    function introBGactive(status)
    {
        pressEnterRect.visible=false;
        pressEnterTextObj.visible=false;
        
       if(status)
       {

        //if(menuStatus==true)
        {          
            //Disable menu status
            menuStatus=false;
            // introBG.visible=false;
            introBGactive(false);
            //Prepare for modestatus
            modeStatus=true;
             //inModeBG.visible=true;
            modeBGactive(true);
          }
       }
      //  introArtObj.visible=status;
        // mainbg.visible=status;
    }

    function setActiveKeypadUI(status)
    {
        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press8RectObj.visible=status;
        press8TextObj.visible=status;
    }

    function markerSelectActive(status)
    {

      //   // mainbg.visible=status;
        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press8RectObj.visible=status;
        press8TextObj.visible=status;
        markerRedObj.visible=status;
        markerBlueObj.visible=status;
        markerYellowObj.visible=status;
        markerGreenObj.visible=status;
        selectMarkerRectBG.visible=status;
        selectMarkerRect.visible=status;
        selectMarkerTextObj.visible=status;

        arr=[buttonSelectRedMarker,buttonSelectBlueMarker,buttonSelectGreenMarker,buttonSelectYellowMarker,buttonPlay,textPlayObj];
        for(var i=0;i<arr.length;i++)
        {
            arr[i].visible=status;
        }
        
        var offsetText=60;
        var diffInY=3;
        var diffInX=4;
        var yFactor=32;


        if(status)
        {
             press4RectObj.x=offsetText-diffInX;
             press4RectObj.y=185;

            press4TextObj.x=offsetText;
            press4TextObj.y=press4RectObj.y+diffInY;

           

             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y=  press4RectObj.y+yFactor;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;

           
             press8RectObj.x=offsetText-diffInX;
             press8RectObj.y=  press6RectObj.y+yFactor;


             press8TextObj.x=offsetText;
             press8TextObj.y= press8RectObj.y+diffInY;

        }
        setActiveKeypadUI(false);

    }


    function modeBGactive(status,isAnim=false)
    {
        // mainbg.visible=status;
        selectModeRectBG.visible=status;
        selectModeRect.visible=status;
        selectModeTextObj.visible=status;

        menuDiceObj.visible=false;

        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;

        if(isAnim==false)
        {
            //console.log("THIS>???"+singlePlayerTextObj.y);
            singlePlayerTextObj.visible=status;
            twoPlayerTextObj.visible=status;

            buttonVsComputer.visible=status;
            buttonVsPlayer.visible=status;

            // groupButtonVsComputer.visible=true;
            // groupButtonVsPlayer.visible=true;
            
        }else{
            if(status==true)
            {
                //Play entry anim
            }else{
                //Play exit anim
                 
                game.add.tween(groupButtonVsPlayer).to( { x: -1000 }, 500, Phaser.Easing.Quadratic.Out, true);

                game.add.tween(groupButtonVsComputer).to( { x: -1000 }, 500, Phaser.Easing.Quadratic.Out, true);
        

                
            }
        }
     


   


        if(status)
        {
            press4TextObj.x=30;
            press4TextObj.y=223;

            press5TextObj.x=30;
            press5TextObj.y=253;

             press4RectObj.x=25;
             press4RectObj.y=220;

             press5RectObj.x=25;
             press5RectObj.y=250;

            // buttonVsComputer.anchor.setTo(0.5);
            // buttonVsPlayer.anchor.setTo(0.5,0.5);
           
            buttonVsComputer.x=twoPlayerTextObj.x-300;
            buttonVsComputer.y=twoPlayerTextObj.y-20;

            buttonVsPlayer.x=singlePlayerTextObj.x-300;
            buttonVsPlayer.y=singlePlayerTextObj.y-20;

            menuDiceObj.x=45;
            menuDiceObj.y=175;
         
        }
        setActiveKeypadUI(false);
    }


    


    function difficultyBGactive(status)
    {
        // mainbg.visible=status;
        selectDifficultyRect.visible=status;
        selectDifficultyRectBG.visible=status;
        selectDifficultyTextObj.visible=status;

        
        if(status)
        {
            press4TextObj.x=30;
            press4TextObj.y=198;

            press4RectObj.x=25;
            press4RectObj.y=195;


            press5TextObj.x=30;
            press5TextObj.y=233;

            press5RectObj.x=25;
            press5RectObj.y=230;


            press6TextObj.x=30;
            press6TextObj.y=270;

            press6RectObj.x=25;
            press6RectObj.y=267;
         
        }

        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;

        easyTextObj.visible=status;
        mediumTextObj.visible=status;
        hardTextObj.visible=status;

        buttonEasy.visible=status;
        buttonMedium.visible=status;
        buttonHard.visible=status;

        

        setActiveKeypadUI(false);


     
    }

    



    var splashStatus=true;
    var splashTimer=0;
    var splashTimerEnd=2;
    
    function rgbToHex(red, green, blue)
    {
        var rgb = blue | (green << 8) | (red << 16);
      //  return '#' + (0x1000000 + rgb).toString(16).slice(1)
        return '0x' + (0x1000000 + rgb).toString(16).slice(1);
    }

    function resetVariables()
    {
         red1curr=-1;
         red2curr=-1;
         red3curr=-1;
         red4curr=-1;
        
         yellow1curr=-1;
         yellow2curr=-1;
         yellow3curr=-1;
         yellow4curr=-1;
    
         green1curr=-1;
         green2curr=-1;
         green3curr=-1;
         green4curr=-1;
    
         blue1curr=-1;
         blue2curr=-1;
         blue3curr=-1;
         blue4curr=-1;

         idleMoveCounter=0;
         idleMoveCounterAI=0;



        animateDiceStatus=false;
      

         shouldObserverDiceResult=false;


         selectColorStatus=false;
//         inPickBG.visible=false;
         markerSelectActive(false);
        // inGameBG.visible=true;
         boardBG.visible=true;
         titleBG.visible=false;
         titleCupBG.visible=false;

         gameStatus=true;


         setDiceRolledStatus(false,true);
         setShouldRollDiceStatus(false,true);
         setChanceStatus(false,true);
         setPlayerReady(false,true)
         setSelectionTokenStatus(false,true);

         //chanceAIStatus=false;
        setAIChanceStatus(false,true);
         animateBGStatus=true;
         animateKillStatus=false;

         chanceCounter=0;
         chanceCounter2=0;
         aiChanceCounter=0;

         // aiReady=false;
         setAIReadyStatus(false,true);
       /*  aiPrepared=false;*/
//         aiReactedStatus=false;
  //       aiCanMove=false;
          setAIReactedStatus(false,true);
          setAICanMoveStatus(false,true);
         moveEndedStatus=false;
         repeatMove=false;


         // gameOverBG.visible=false;
         gameOverBGactive(false);
         playerWonTextObj.text=" ";
         winningTokenBlueObj.visible=false;
         winningTokenRedObj.visible=false;
         winningTokenGreenObj.visible=false;
         winningTokenYellowObj.visible=false;
 
       //  gamePauseBG.visible=false;
         pauseBGactive(false);
         gamePaused=false;

         resetDice();
         hideBadges();
         hidePointers();
         resetDiceSprites();

         setDiceRolledStatus(false);
         setShouldRollDiceStatus(true);
         setChanceStatus(true);
         
        // chanceAIStatus=false;
        setAIChanceStatus(false); 

    }

    function getAICanMoveStatus()
    {
        return aiCanMove[colorCounter];
    }

    function setAICanMoveStatus(setActive,resetAll=false)
    {
        aiCanMove[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiCanMove[i]=setActive;
            }
         
        }
    }

    function getAIReactedStatus()
    {
     
      return aiReactedStatus[colorCounter];

    }

    function setAIReactedStatus(setActive,resetAll=false)
    {
       
        aiReactedStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiReactedStatus[i]=setActive;
            }
         
        }
    }

    function getAIChanceStatus()
    {
     
        
        return chanceAIStatus[colorCounter];
       
    }

    function setAIChanceStatus(setActive,resetAll=false)
    {
     
        chanceAIStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                chanceAIStatus[i]=setActive;
            }
         
        }

        
    }

    var debugText;
    function initFirstX(val)
    {
      
        return ((val*canvasWidth)/1082);

    }

    function initFirstY(val)
    {
        return ((val*canvasHeight)/1650);
    }


    function getXtoken(val)
    {
        return ((val*canvasWidth)/240);
    }

    function getYtoken(val)
    {
        return ((val*canvasHeight)/320);

    }
    function initDice()
    {
        // color=playerColor[0];
        // changeDiceColor(color);
        resetDice();
        resetDiceSprites();
        diceBase.visible=true;
        diceDot1.visible=true;


    }
    function initRoll()
    {

        initDice();
    }

    function activateCircle(color)
    {

        redCircleAll=[red1Circle,red2Circle,red3Circle,red4Circle];
        yellowCircleAll=[yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle];
        greenCircleAll=[green1Circle,green2Circle,green3Circle,green4Circle];
         blueCircleAll=[blue1Circle,blue2Circle,blue3Circle,blue4Circle];

       redCircleBlackAll=[red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle];
        yellowCircleBlackAll=[yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle];
        greenCircleBlackAll=[green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle];
        blueCircleBlackAll=[blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle];

        var colorCircle;
        var colorBlackCircle;


        if(color==1)
        {
            colorCircle=redCircleAll;
            colorBlackCircle=redCircleBlackAll;
            redDock.visible=true;
            redDockMarker.visible=true;
        }
        else if(color==2)
        {
            colorCircle=yellowCircleAll;
            colorBlackCircle=yellowCircleBlackAll;
            yellowDock.visible=true;
            yellowDockMarker.visible=true;
        }
        else if(color==3)
        {
            colorCircle=greenCircleAll;
            colorBlackCircle=greenCircleBlackAll;
            greenDock.visible=true;
            greenDockMarker.visible=true;
        }
        else if(color==4)
        {
            colorCircle=blueCircleAll;
            colorBlackCircle=blueCircleBlackAll;
            blueDock.visible=true;
            blueDockMarker.visible=true;
        }


       for(var i=0;i<redCircleAll.length;i++)
       {
           colorCircle[i].visible=true;
           colorBlackCircle[i].visible=true;
       }
    }

    function placeDiceOnDock(color=null)
    {
        var diceSprites=[dice1,dice2,dice3,diceBase,diceDot1,diceDot2,diceDot3,diceDot4,diceDot5,diceDot6];
         
        if(color==null)
        color=playerColor[colorCounter];

        if(color==1)//Red
        {  
            for(var i=0;i<diceSprites.length;i++)
            {
                diceSprites[i].x=redDock.x+47;
                diceSprites[i].y=redDock.y;

            }

        }
        else if(color==2)//Yellow
        {
            for(var i=0;i<diceSprites.length;i++)
            {
                diceSprites[i].x=yellowDock.x-47;
                diceSprites[i].y=yellowDock.y;

            }
        }
        else if(color==3) //Green
        {
            for(var i=0;i<diceSprites.length;i++)
            {
                diceSprites[i].x=greenDock.x+47;
                diceSprites[i].y=greenDock.y;

            }
        }
        else if(color==4)//Blue
        {
            for(var i=0;i<diceSprites.length;i++)
            {
                diceSprites[i].x=blueDock.x-47;
                diceSprites[i].y=blueDock.y;

            }
        }
    }
    function initPlaces()
    {
     //  console.log("GAME IS VS AI ? :"+gameModevsAI);

        setInputOnToken(true);

        changeBgMusic(false);
        groupBackButton.visible=false;

        
        //mainArr=[red1,red2,red3];

        yOffseter1=16;
        yOffseter2=20;

        red1.x= getXtoken(35);
        red1.y= getYtoken(213-yOffseter1);
 
        red2.x=getXtoken(64);
        red2.y=getYtoken(213-yOffseter1);

        red3.x=getXtoken(35);
        red3.y=getYtoken(240-yOffseter2);

        red4.x=getXtoken(64);
        red4.y=getYtoken(240-yOffseter2);


        red1Circle.x=red1.x;
        red2Circle.x=red2.x;
        red3Circle.x=red3.x;
        red4Circle.x=red4.x;

        red1Circle.y=red1.y+40;
        red2Circle.y=red2.y+40;
        red3Circle.y=red3.y+40;
        red4Circle.y=red4.y+40;


        blue1.x=getXtoken(170+5);
        blue1.y=getYtoken(213-yOffseter1);

        blue2.x=getXtoken(200+5);
        blue2.y=getYtoken(213-yOffseter1);

        blue3.x=getXtoken(170+5);
        blue3.y=getYtoken(240-yOffseter2);

        blue4.x=getXtoken(200+5);
        blue4.y=getYtoken(240-yOffseter2);


        
        green1.x=getXtoken(35);
        green1.y=getYtoken(108-yOffseter1);

        green2.x=getXtoken(64);
        green2.y=getYtoken(108-yOffseter1);

        green3.x=getXtoken(35);
        green3.y=getYtoken(130-yOffseter1);

        green4.x=getXtoken(64);
        green4.y=getYtoken(130-yOffseter1); 



        yellow1.x=getXtoken(170+5);
        yellow1.y=getYtoken(108-yOffseter1);

        yellow2.x=getXtoken(200+5);
        yellow2.y=getYtoken(108-yOffseter1);

        yellow3.x=getXtoken(170+5);
        yellow3.y=getYtoken(130-yOffseter1);

        yellow4.x=getXtoken(200+5);
        yellow4.y=getYtoken(130-yOffseter1);


     
        blue1.visible=false;
        blue2.visible=false;
        blue3.visible=false;
        blue4.visible=false;

        green1.visible=false;
        green2.visible=false;
        green3.visible=false;
        green4.visible=false;

        red1.visible=false;
        red2.visible=false;
        red3.visible=false;
        red4.visible=false;

        yellow1.visible=false;
        yellow2.visible=false;
        yellow3.visible=false;
        yellow4.visible=false;



        textRedObj.visible=false;
        textYellowObj.visible=false;
        textBlueObj.visible=false;
        textGreenObj.visible=false;


        textEnterToRollObj.visible=false;
        textEnterToRollObj.x=getXtoken(37);
        textEnterToRollObj.y=getYtoken(127);
        textEnterToRollObj.scale.setTo(getScaleFactor( 0.7),getScaleFactor(0.7));


        // textRedObj.x=getXtoken(38);
        // textRedObj.y=getYtoken(238);
        textRedObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));
        //redDock.visible=true;
        redDock.x=200;
        redDock.y=1600;//1600

        textRedObj.x=redDock.x+20;
        textRedObj.y=redDock.y-135;

       // redDockMarker.visible=true;
        redDockMarker.x=redDock.x-74;
        redDockMarker.y=redDock.y-5;

       // console.log("textYellowObj.x+200; :"+(textRedObj.y+175))



        // textYellowObj.x=getXtoken(150);
        // textYellowObj.y=getYtoken(74);
        textYellowObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));

        //yellowDock.visible=true;
        yellowDock.x=875; 
        yellowDock.y=335; //334

        textYellowObj.x=yellowDock.x-20;
        textYellowObj.y=yellowDock.y+145;

       // yellowDockMarker.visible=true;
        yellowDockMarker.x=yellowDock.x+74;
        yellowDockMarker.y=yellowDock.y;


        textBlueObj.x=getXtoken(150);
        textBlueObj.y=getYtoken(238);
        textBlueObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));

       // blueDock.visible=true;
        blueDock.x=875;
        blueDock.y=1600;//1600

        textBlueObj.x=blueDock.x-20;
        textBlueObj.y=blueDock.y-135;
        //blueDockMarker.visible=true;
        blueDockMarker.x=blueDock.x+74;
        blueDockMarker.y=blueDock.y;

        // textGreenObj.x=getXtoken(38);
        // textGreenObj.y=getYtoken(74);
        textGreenObj.scale.setTo(getScaleFactor(0.5),getScaleFactor(0.5));

       // greenDock.visible=true;
        greenDock.x=200;
        greenDock.y=335;//1600

        textGreenObj.x=greenDock.x+20;
        textGreenObj.y=greenDock.y+145;
        //greenDockMarker.visible=true;
        greenDockMarker.x=greenDock.x-74;
        greenDockMarker.y=greenDock.y-5;


        textDiceObj.text=" ";
        textDiceObj.x=getXtoken(111);
        textDiceObj.y=getYtoken(285);
      
           


          textRedObj.text="COMPUTER";
          textYellowObj.text="COMPUTER";
          textGreenObj.text="COMPUTER";
          textBlueObj.text="COMPUTER";
       //  textEnterToRollObj.text="Press Enter to roll the dice";
       //  showAds();
          textEnterToRollObj.visible=false;
        if(playerColor[0]==1 || playerColor[0]==2 )
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;




            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;

            activateCircle(1);
            activateCircle(2);




        }


        if(playerColor[0]==3 || playerColor[0]==4)
        {
            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;

            activateCircle(3);
            activateCircle(4);

        }

        if(getColor()==1){
            textRedObj.text="YOU";
           
  
        }else if(getColor()==2){
            textYellowObj.text="YOU";
            // textYellowObj.x+=getXtoken(23);
           // textRedObj.x-=getXtoken(23);

          
        }else if(getColor()==3){
            textGreenObj.text="YOU";
           
        }else if(getColor()==4){
            textBlueObj.text="YOU";
            // textBlueObj.x+= getXtoken (23);
            // textGreenObj.x-= getXtoken (23);

        }

        if(gameModeType==0) //Player vs computer
        {
            // if(getColor()==1)
            // {
            //     //Player is red
            //     //Comp is yellow 
            //     redPointerTextObj.text="YOU";
            //     yellowPointerTextObj.text="COM";
            // }
            // else if(getColor()==1)
            // {
            //     //Comp is red
            //     //Player is yellow 
            //     redPointerTextObj.text="COM";
            //     yellowPointerTextObj.text="YOU";
            // }
            // else if(getColor()==3)
            // {
            //     //Player is green
            //     //Comp is blue 
            //     bluePointerTextObj.text="COM";
            //     greenPointerTextObj.text="YOU";
            // }
            // else if(getColor()==4)
            // {
            //     //Player is blue
            //     //Comp is green

            //     bluePointerTextObj.text="YOU";
            //     greenPointerTextObj.text="COM";
            // }
        }

        if(gameModeType==1) //PLAYER VS PLAYER
        {
            if(getColor()==1)
            {
                textRedObj.text="PLAYER 1";
                // textRedObj.x-= getXtoken(20);

                textYellowObj.text="PLAYER 2";
                // textYellowObj.x+=getXtoken(10);
               // textRedObj.x-=23;

            //    redPointerTextObj.text="P1";
            //    yellowPointerTextObj.text="P2";
      
            }
            else if(getColor()==2){
                textYellowObj.text="PLAYER 1";
               // textYellowObj.x-= getXtoken (20);
 //               textRedObj.x-=23;
                 textRedObj.text="PLAYER 2";
                //  textRedObj.x+= getXtoken (10);


            //    redPointerTextObj.text="P2";
            //    yellowPointerTextObj.text="P1";
              
            }else if(getColor()==3){
                textGreenObj.text="PLAYER 1";
                // textGreenObj.x-= getXtoken (15);

                textBlueObj.text="PLAYER 2";
//                textBlueObj.x+=23;


            //    bluePointerTextObj.text="P2";
            //    greenPointerTextObj.text="P1";

            }else if(getColor()==4){
                textBlueObj.text="PLAYER 1";
                // textBlueObj.x-= getXtoken (20);

                // textGreenObj.x+= getXtoken (3);
                textGreenObj.text="PLAYER 2";

                // bluePointerTextObj.text="P1";
                // greenPointerTextObj.text="P2";
            }
        }


        if(gameModeType==2) //PLAYER VS PLAYER VS PLAYER VS PLAYER
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;


            textRedObj.text="PLAYER 1";
           // textRedObj.x-=20;


            textGreenObj.text="PLAYER 2";
           // textGreenObj.x-=15;

            textYellowObj.text="PLAYER 3";
          //  textYellowObj.x+=10;
       
            textBlueObj.text="PLAYER 4";
          //  textBlueObj.x+=10;
 
            // redPointerTextObj.text="P1";
            // greenPointerTextObj.text="P2";
            // yellowPointerTextObj.text="P3";
            // bluePointerTextObj.text="P4";
            
            activateCircle(1);
            activateCircle(2);
            activateCircle(3);
            activateCircle(4);

        }
        if(gameModeType==3) //YOU vs 3 Computer
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;

 
          


            if(getColor()==1)
            {
                textRedObj.text="YOU";
              //  textRedObj.x-=20;

                textYellowObj.text="COMPUTER 2";
                // textYellowObj.x-=5;

                textGreenObj.text="COMPUTER 1";
                // textGreenObj.x-=30;
           
                textBlueObj.text="COMPUTER 3";
                // textBlueObj.x-=5; 

                // redPointerTextObj.text="YOU";
                // greenPointerTextObj.text="COM";
                // yellowPointerTextObj.text="COM";
                // bluePointerTextObj.text="COM";
            }
            else if(getColor()==2){
                textYellowObj.text="YOU";
               // textYellowObj.x-=20;

                textRedObj.text="COMPUTER 2";
                // textRedObj.x-=6;

                textBlueObj.text="COMPUTER 1";
                // textBlueObj.x-=5; 

                textGreenObj.text="COMPUTER 3";
                // textGreenObj.x-=30;

                // redPointerTextObj.text="COM";
                // greenPointerTextObj.text="COM";
                // yellowPointerTextObj.text="YOU";
                // bluePointerTextObj.text="COM";

            }else if(getColor()==3){
                textGreenObj.text="YOU";
                //textGreenObj.x-=15;

                textBlueObj.text="COMPUTER 2";
                // textBlueObj.x-=5;

                textRedObj.text="COMPUTER 3";
                // textRedObj.x-=30;

                textYellowObj.text="COMPUTER 1";
            //    textYellowObj.x-=4;

            //    redPointerTextObj.text="COM";
            //    greenPointerTextObj.text="YOU";
            //    yellowPointerTextObj.text="COM";
            //    bluePointerTextObj.text="COM";

            }else if(getColor()==4){
                textBlueObj.text="YOU";
              //  textBlueObj.x-=20;

                textGreenObj.text="COMPUTER 2";
                // textGreenObj.x-=5;


                textYellowObj.text="COMPUTER 3";
                // textYellowObj.x-=5;

                textRedObj.text="COMPUTER 1";
                // textRedObj.x-=30;

                // redPointerTextObj.text="COM";
                // greenPointerTextObj.text="COM";
                // yellowPointerTextObj.text="COM";
                // bluePointerTextObj.text="YOU";


            }
            activateCircle(1);
            activateCircle(2);
            activateCircle(3);
            activateCircle(4);
            
        }
        if(gameModeType==4)  //Player 1 vs Player 2 vs Com1 vs Com2
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;

            activateCircle(1);
            activateCircle(2);
            activateCircle(3);
            activateCircle(4);


           


            if(getColor()==1)
            {
                textRedObj.text="PLAYER 1";
                // textRedObj.x-=20;

                textYellowObj.text="PLAYER 2";
                // textYellowObj.x+=10;

                textGreenObj.text="COMPUTER 1";
                // textGreenObj.x-=30;
           
                textBlueObj.text="COMPUTER 2";
                // textBlueObj.x-=5; 

                // redPointerTextObj.text="P1";
                // greenPointerTextObj.text="COM";
                // yellowPointerTextObj.text="P2";
                // bluePointerTextObj.text="COM";
            }
            else if(getColor()==2){
                textYellowObj.text="PLAYER 1";
                // textYellowObj.x-=20;

                textRedObj.text="PLAYER 2";
                // textRedObj.x+=10;

                textBlueObj.text="COMPUTER 1";
                // textBlueObj.x-=5; 

                textGreenObj.text="COMPUTER 3";
                // textGreenObj.x-=30;

                // redPointerTextObj.text="P2";
                // greenPointerTextObj.text="COM";
                // yellowPointerTextObj.text="P1";
                // bluePointerTextObj.text="COM";
              
            }else if(getColor()==3){
                textGreenObj.text="PLAYER 1";
                // textGreenObj.x-=15;

                textBlueObj.text="PLAYER 2";
                // textBlueObj.x+=5;

                textRedObj.text="COMPUTER 2";
                // textRedObj.x-=30;

                textYellowObj.text="COMPUTER 1";
            //    textYellowObj.x-=4;

            //    redPointerTextObj.text="COM";
            //    greenPointerTextObj.text="P1";
            //    yellowPointerTextObj.text="COM";
            //    bluePointerTextObj.text="P2";

            }else if(getColor()==4){
                textBlueObj.text="PLAYER 1";
                // textBlueObj.x-=20;

                // textGreenObj.x+=3;
                textGreenObj.text="PLAYER 2";


                textYellowObj.text="COMPUTER 2";
                // textYellowObj.x-=4;

                textRedObj.text="COMPUTER 1";
                // textRedObj.x-=30;


                // redPointerTextObj.text="COM";
                // greenPointerTextObj.text="P2";
                // yellowPointerTextObj.text="COM";
                // bluePointerTextObj.text="P1";

            }
 
            
        }
      // playButtonImg.visible=true;//DEBUG ONLY
       
        //REAL CODE.
        playButtonImg.visible=false;
        groupPause.visible=true;
        changeDiceColor(getColor());
      //  diceBase.visible=false;
        initCirclePos();
        initRoll();

     

    }

 


    //var focused = document.activeElement;
    // dummy element
   /* var dummyEl = document.getElementById('hunter-prey');

    // check for focus
    var focused = (document.activeElement === dummyEl);*/
    function getBadge1(color)
    {
        if(color==1)
        {
            return r_2;
        }else if(color==2)
        {
            return y_2;
        }else if(color==3)
        {
            return g_2;
        }else if(color==4)
        {
            return b_2;
        }
    }
    
    function getBadge2(color)
    {
        if(color==1)
        {
            return r_4;
        }else if(color==2)
        {
            return y_4;
        }else if(color==3)
        {
            return g_4;
        }else if(color==4)
        {
            return b_4;
        }
    }
    function getBadge3(color)
    {
        if(color==1)
        {
            return r_6;
        }else if(color==2)
        {
            return y_6;
        }else if(color==3)
        {
            return g_6;
        }else if(color==4)
        {
            return b_6;
        }
    }

    function getBadge4(color)
    {
        if(color==1)
        {
            return r_8;
        }else if(color==2)
        {
            return y_8;
        }else if(color==3)
        {
            return g_8;
        }else if(color==4)
        {
            return b_8;
        }
    }


    function getColorCounter()
    {
        return colorCounter;
    }

    function setColorCounter(value)
    {
        colorCounter=value;
    }

    function repeatColor()
    {
       
      /*  if(gameModeType==0)
        return;*/
        colorCounter--;
      /*  if(onKill==false)     
        {
         
        }
        else
        {
            console.log("IT IS ON KILL");
        }*/
        //console.log("REPEATING COLOR : COLOR COUNTER :"+colorCounter );
    }

    function incColor()
    {

     

        /*if(gameModeType==0)
        return;*/

        var temp=1;

        if(gameModeType==2 || gameModeType==3 || gameModeType==4 )
        temp=3;

      //  console.log("TEMP IN INC COLOR IS :"+temp);
        colorCounter++;



        if(colorCounter>temp)
        colorCounter=0;


       // console.log("INCREASING COLOR : COLOR COUNTER :"+colorCounter );
    }

    var colorCounter=0;

    function getColorEnemy()
    {
        return playerColor[colorCounter];
    }
    function getColor()
    {
      /*  if(gameModeType==0)
        {
            colorCounter=0;
          //  return playerColor[0];
        }
        else if(gameModeType==1)
        {
            colorCounter++;
            if(colorCounter>1)
            colorCounter=0;
        }
        else if(gameModeType==2)
        {
            colorCounter++;
            if(colorCounter>3)
            colorCounter=0;
        } */

         //console.log("Color counter :"+colorCounter+"::"+"Player color :"+playerColor[colorCounter]);
        
        return playerColor[colorCounter];
    }

    function hideBadges()
    {
        // return;
        color=getColor();

     
        // console.log("HIDE BADGES COLOR :"+color); 

        // textCur1Obj=getBadge1(color);
        // textCur2Obj=getBadge2(color);
        // textCur3Obj=getBadge3(color);
        // textCur4Obj=getBadge4(color);

        //  console.log( "WHAT IS THIS :"+textCur1Obj);
        // textCur1Obj.visible=false;
        // textCur2Obj.visible=false;
        // textCur3Obj.visible=false;
        // textCur4Obj.visible=false;  

        getCircle(1)[0].visible=false;
        getCircle(2)[0].visible=false;
        getCircle(3)[0].visible=false;
        getCircle(4)[0].visible=false;
         
      
     
    }

    function showBadges()
    {

        return;

        color=getColor();

        textCur1Obj=getBadge1(color);
        textCur2Obj=getBadge2(color);
        textCur3Obj=getBadge3(color);
        textCur4Obj=getBadge4(color); 
     

        if(canUpdateBadges(getCur1()))
        {
        textCur1Obj.visible=true;
        }
        if(canUpdateBadges(getCur2()))
        {
        textCur2Obj.visible=true;
        }
        if(canUpdateBadges(getCur3()))
        {
        textCur3Obj.visible=true;
        }
        if(canUpdateBadges(getCur4()))
        {
        textCur4Obj.visible=true; 
        }

       

        xOffset=3;
        yOffset=6;

        textCur1Obj.x= getNode1().x+xOffset;
        textCur1Obj.y= getNode1().y-yOffset;


        textCur2Obj.x= getNode2().x+xOffset;
        textCur2Obj.y= getNode2().y-yOffset;

        textCur3Obj.x= getNode3().x+xOffset;
        textCur3Obj.y= getNode3().y-yOffset;

        textCur4Obj.x= getNode4().x+xOffset;
        textCur4Obj.y= getNode4().y-yOffset; 

 
    }

    var dicePointer;

    var redPointer;
    var bluePointer;
    var greenPointer;
    var yellowPointer;


    var redPointerTextObj;
    var bluePointerTextObj;
    var greenPointerTextObj;
    var yellowPointerTextObj;

    var dice1;
    var dice2;
    var dice3;
    var diceBase;

    var redDice1;
    var redDice2;
    var redDice3;
    var redDiceBase;

    var yellowDice1;
    var yellowDice2;
    var yellowDice3;
    var yellowDiceBase;

    var greenDice1;
    var greenDice2;
    var greenDice3;
    var greenDiceBase;

    var blueDice1;
    var blueDice2;
    var blueDice3;
    var blueDiceBase;


    

    var diceTimer=0;
    var diceTimerEnd=0.03;
    var diceIndex=0;

    var animateDiceStatus=false;

    function resetDice(){
        diceBase.visible=false;
        dice1.visible=false;
        dice2.visible=false;
        dice3.visible=false;
        diceIndex=-1;
        diceTimer=0;
        diceResultTimer=0;
    }

    function animateDice(dt)
    {
        if(diceTimer>=diceTimerEnd)
        {
           /*for(var i=0;i<14;i++){
            if(diceIndex==i){
                dices[i].visible=true;
            }else{
                dices[i].visible=false;
            }
           }*/

            if(diceIndex==0){
                changeAudioSrc(4);
                resetDiceSprites();
                dice1.visible=true;
                dice2.visible=false;
                dice3.visible=false; 
                diceBase.visible=false;
                textDiceObj.text="";
            }else if(diceIndex==1){
               dice1.visible=false;
                dice2.visible=true;
                dice3.visible=false; 
                diceBase.visible=false;
                textDiceObj.text="";
            }else if(diceIndex==2){
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=true; 
                diceBase.visible=false;
                textDiceObj.text="";
            } else if(diceIndex==3)
            {
                dice1.visible=true;
                dice2.visible=false;
                dice3.visible=false;
                diceBase.visible=false; 
                textDiceObj.text="";
            }
            else if(diceIndex==4)
            {
               dice1.visible=false;
                dice2.visible=true;
                dice3.visible=false;
                diceBase.visible=false; 
                textDiceObj.text="";
            }
            else if(diceIndex==5)
            {
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=true;
                diceBase.visible=false; 
                textDiceObj.text="";
            } 


       
            if(diceIndex>=6)
            {
                diceIndex=-1;
                animateDiceStatus=false;
                diceBase.visible=true;
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=false; 
                diceRoll();
               // afterDiceRollLogic();
                 shouldObserverDiceResult=true;
            }
            diceTimer=0;
            diceIndex++;
            //console.log("DICE INDEX :"+diceIndex);
        }
        else
        {
            diceTimer+=dt;
        }


    }

  //  var custumFont=game.add.sprite(0, 0, 'R_2');
    function hidePointers()
    {
        dicePointer.visible=false;

        // redPointer.visible=false;
        // bluePointer.visible=false;
        // greenPointer.visible=false;
        // yellowPointer.visible=false;
        // redPointerTextObj.visible=false;
        // bluePointerTextObj.visible=false;
        // greenPointerTextObj.visible=false;
        // yellowPointerTextObj.visible=false;
    }
//var style={font :"myFont" };
//var style = { font: "bold 48px myFont", fill: "#fff" };//, boundsAlignH: "center", boundsAlignV: "middle" };

    function initPointers(){
        return;
        redPointer=game.add.sprite(0, 0, 'rp');
        bluePointer=game.add.sprite(0, 0, 'bp');
        greenPointer=game.add.sprite(0, 0, 'gp');
        yellowPointer=game.add.sprite(0, 0, 'yp');
       
      
 
        redPointer.x= getXtoken(30);
        redPointer.y= getYtoken(270);
       

        yellowPointer.x=getXtoken(170);
        yellowPointer.y=getYtoken(25);


        greenPointer.x=getXtoken(30);
        greenPointer.y=getYtoken(25);

        bluePointer.x=getXtoken(170);
        bluePointer.y=getYtoken(270);

        
      
    
        var xOffset=30;
        var yOffset= 20;


        redPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
 
         redPointerTextObj.x=redPointer.x+xOffset;
        redPointerTextObj.y=redPointer.y+yOffset;

        redPointerTextObj.stroke = '#000000';
        redPointerTextObj.strokeThickness = 3;


        yellowPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
        
        yellowPointerTextObj.x=yellowPointer.x+xOffset;
        yellowPointerTextObj.y=yellowPointer.y+yOffset;

        yellowPointerTextObj.stroke = '#000000';
        yellowPointerTextObj.strokeThickness = 3;

        greenPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
 
       greenPointerTextObj.x=greenPointer.x+xOffset;
       greenPointerTextObj.y=greenPointer.y+yOffset;

        greenPointerTextObj.stroke = '#000000';
        greenPointerTextObj.strokeThickness = 3;

        bluePointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
        

        bluePointerTextObj.x=bluePointer.x+xOffset;
        bluePointerTextObj.y=bluePointer.y+yOffset;

        bluePointerTextObj.stroke = '#000000';
        bluePointerTextObj.strokeThickness = 3;

        scaler=4.7;

        allPointersAndText=[redPointer,redPointerTextObj,yellowPointer,yellowPointerTextObj,greenPointer,greenPointerTextObj,bluePointer,bluePointerTextObj];
        for(var i=0;i<allPointersAndText.length;i++)
        {
            allPointersAndText[i].scale.setTo(scaler,scaler);
        }

    }


    function updatePointers(dt,isAi)
    {

      

        if(gameOverStatus)
        {   
            hidePointers();
            return;
        }
        
        offset=3;
        animAngle += dt* 20;    //    20;

        color=getColor();
        dicePointer.visible=true;
        if(color==1)
        {
            dicePointer.angle=270;
            dicePointer.x=redDock.x+200;
            dicePointer.y=redDock.y;
            dicePointer.x+= Math.sin(redDock.x+animAngle)*offset; 
         }
        else if(color==2)
        {
            //console.log("2");

            dicePointer.angle=90;
            dicePointer.x=yellowDock.x-200;
            dicePointer.y=yellowDock.y;

            dicePointer.x+= Math.sin(yellowDock.x+animAngle)*offset; 

        }
        else if(color==3)
        {
           // console.log("3");

            dicePointer.angle=270;
            dicePointer.x=greenDock.x+200;
            dicePointer.y=greenDock.y;
            dicePointer.x+= Math.sin(greenDock.x+animAngle)*offset; 



            //Green 
        }
        else if(color==4)
        {
            //console.log("4");

            dicePointer.angle=90;
            dicePointer.x=blueDock.x-200;
            dicePointer.y=blueDock.y;
            //Blue
            dicePointer.x+= Math.sin(blueDock.x+animAngle)*offset; 

        }

        return;
        color =0;
        
       /* if(animAngle >= 360)
        animAngle = 0;
        else*/



        //console.log("ANIM ANGLE :"+animAngle);

        if(isAi)
        {
            color=getColorEnemy();
        }
        else
        {
            color=getColor();
        }

//console.log("COLOR :"+color);
        if(color==1)
        {
            redPointer.visible=true;
            redPointer.y+= Math.sin(animAngle)*offset;
            redPointerTextObj.visible=true;
            redPointerTextObj.y+= Math.sin(animAngle)*offset;

            //Red
        }
        else if(color==2)
        {
            yellowPointer.visible=true;
            yellowPointer.y+= Math.sin(animAngle)*offset;

            yellowPointerTextObj.visible=true;
            yellowPointerTextObj.y+= Math.sin(animAngle)*offset;
            //Yellow
        }
        else if(color==3)
        {
              greenPointer.visible=true;
              greenPointer.y+= Math.sin(animAngle)*offset;

            greenPointerTextObj.visible=true;
            greenPointerTextObj.y+= Math.sin(animAngle)*offset;
            //Green 
        }
        else if(color==4)
        {
            bluePointer.visible=true;
            bluePointer.y+= Math.sin(animAngle)*offset;

            bluePointerTextObj.visible=true;
            bluePointerTextObj.y+= Math.sin(animAngle)*offset;
            //Blue
        }
     //console.log("ANIM ANGLE :"+animAngle)
      
    }

    function debugbadges(){
        xOffset=0;
        yOffset=6;
        textCur1ObjAI.text="1";
        textCur2ObjAI.text="2";
        textCur3ObjAI.text="3";
        textCur4ObjAI.text="4";

        textCur1ObjAI.x= red1.x+xOffset;
        textCur1ObjAI.y= red1.y-yOffset;


        textCur2ObjAI.x= red2.x+xOffset;
        textCur2ObjAI.y= red2.y-yOffset;

        textCur3ObjAI.x= red3.x+xOffset;
        textCur3ObjAI.y= red3.y-yOffset;

        textCur4ObjAI.x= red4.x+xOffset;
        textCur4ObjAI.y= red4.y-yOffset; 

       // console.log("HERE");
    }

    

    function updateBadges(dt){

        
        showBadges();
        color=getColor();
        
       
        animAngle += dt*10;

        var offset=0.2;
        var speed=500;
        
        if(canUpdateBadges(getCur1()))
        {

       //     textCur1Obj.y += Math.sin(animAngle)*offset;
            getNode1().y+= Math.sin(animAngle)*offset;
            getCircle(1)[0].visible=true;
            getCircle(1)[0].angle+=dt*speed;
        } 
        else
        {
            getCircle(1)[0].visible=false;

        }

        if(canUpdateBadges(getCur2()))
        {
         //   textCur2Obj.y += Math.sin(animAngle)*offset;
            getNode2().y+= Math.sin(animAngle)*offset;
            getCircle(2)[0].visible=true;
            getCircle(2)[0].angle+=dt*speed;

        }
        else{
            getCircle(2)[0].visible=false;

        }
        if(canUpdateBadges(getCur3()))
        {
         //   textCur3Obj.y += Math.sin(animAngle)*offset;
            getNode3().y+= Math.sin(animAngle)*offset;
            getCircle(3)[0].visible=true;
            getCircle(3)[0].angle+=dt*speed;
        }
        else{
            getCircle(3)[0].visible=false;
        }

        if( canUpdateBadges(getCur4()))
        {
         //   textCur4Obj.y += Math.sin(animAngle)*offset; 
            getNode4().y+= Math.sin(animAngle)*offset;
            getCircle(4)[0].visible=true;
            getCircle(4)[0].angle+=dt*speed;

        }
        else{
            getCircle(4)[0].visible=false;

        }

        


    }
 
    function canUpdateBadges(curr)
    {
         if((diceNo<6) &&  (curr <0)) //Element is caged and dice is not six.
           {
              // console.log("1");
                return false;
           }
           else if((diceNo>=6) && (curr <0))  //If dice is six and element is caged.
            {
             //   console.log("2");
                 return true;
            }
        else if((curr>=0) &&  ((curr+diceNo)>56))  //If element is out and can not reach it's destination.
            {
              //  console.log("3");
                return false;
            }
        else if((curr>=0) &&  ((curr+diceNo)<=56))  //If element is out and can  reach it's destination.
             {
              //  console.log("4");
                 return true;
            }
         else 
            {
              //  console.log("5");
                 return false;
            }

            
         

    }


    var aiDifficultyMode=2;

    function AIsafeSpotFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    function AItokenOutFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    function AIkillFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    var startSix=0;
    
    var aiSafeSpotCounter=0;
    var aitokenOutCounter=0;
    var aiKillCounter=0;
    
    function firstSixFactor()
    {
        difficultyMode=aiDifficultyMode;
        if(difficultyMode==0)
        return 2;
        else if(difficultyMode==1)
        return 3;
        else if(difficultyMode==2)
        return 4; 
    }


    function setInputOnToken(setActive)
    {
        //if(color==1)
        {
            //console.log("HERE");
            //Red
            red1.inputEnabled = setActive;
            red2.inputEnabled = setActive;
            red3.inputEnabled = setActive;
            red4.inputEnabled = setActive;

            red1.events.onInputDown.add((function() {   tokenListener(1,1);}) , this);
            red2.events.onInputDown.add((function() {   tokenListener(1,2);}), this);
            red3.events.onInputDown.add((function() {   tokenListener(1,3);}), this);
            red4.events.onInputDown.add((function() {   tokenListener(1,4);}), this);

            redDiceBase.inputEnabled=setActive;
            redDiceBase.events.onInputDown.add((function() {   DiceListener(1);}), this);

       //     console.log("1");
 

        }
        //else if(color==2)
        {
            //Yellow
            yellow1.inputEnabled = setActive;
            yellow2.inputEnabled = setActive;
            yellow3.inputEnabled = setActive;
            yellow4.inputEnabled = setActive;

            
            yellow1.events.onInputDown.add((function() {   tokenListener(2,1);}), this);
            yellow2.events.onInputDown.add((function() {   tokenListener(2,2);}), this);
            yellow3.events.onInputDown.add((function() {   tokenListener(2,3);}), this);
            yellow4.events.onInputDown.add((function() {   tokenListener(2,4);}), this);
         //   console.log("2");
            yellowDiceBase.inputEnabled=setActive;
            yellowDiceBase.events.onInputDown.add((function() {   DiceListener(2);}), this);

        }
        //else if(color==3)
        {
            //Green
            green1.inputEnabled = setActive;
            green2.inputEnabled = setActive;
            green3.inputEnabled = setActive;
            green4.inputEnabled = setActive;

            green1.events.onInputDown.add((function() {   tokenListener(3,1);}), this);
            green2.events.onInputDown.add((function() {   tokenListener(3,2);}), this);
            green3.events.onInputDown.add((function() {   tokenListener(3,3);}), this);
            green4.events.onInputDown.add((function() {   tokenListener(3,4);}), this);
       //     console.log("3");
            greenDiceBase.inputEnabled=setActive;
            greenDiceBase.events.onInputDown.add((function() {   DiceListener(3);}), this);

        }
      //  else if(color==4)
        {
            //Blue
            blue1.inputEnabled = setActive;
            blue2.inputEnabled = setActive;
            blue3.inputEnabled = setActive;
            blue4.inputEnabled = setActive;

            blue1.events.onInputDown.add((function() {   tokenListener(4,1);}), this);
            blue2.events.onInputDown.add((function() {   tokenListener(4,2);}), this);
            blue3.events.onInputDown.add((function() {   tokenListener(4,3);}), this);
            blue4.events.onInputDown.add((function() {   tokenListener(4,4);}), this);
        //    console.log("4");
            blueDiceBase.inputEnabled=setActive;
            blueDiceBase.events.onInputDown.add((function() {   DiceListener(4);}), this);

        }


       

    }


    function selectColorListener(color)
    {
        if(color==4)//8
        {
            playerColor[0]=4;//blue
        }
        else if(color==2)//6
        {
            playerColor[0]=2;//yellow
        }
        else if(color==1)//4
        {
            playerColor[0]=1;//red
        }
        else if(color==3) //5
        {
            playerColor[0]=3;//green
        }
        else
        {
            return;
        }
        console.log("PLAYER COLOR :"+playerColor[0]);
        setColorPlayer(playerColor[0]);


        selectColorStatus=false;
         markerSelectActive(false);
       // inGameBG.visible=true;
        boardBG.visible=true;
        titleBG.visible=false;
        titleCupBG.visible=false;

        gameStatus=true;

        setDiceRolledStatus(false);
        setShouldRollDiceStatus(true);
        setChanceStatus(true);
        
       // chanceAIStatus=false;
       setAIChanceStatus(false); 
       animateBGStatus=true;
       console.log("Your turn ! press 5 to roll dice");
      // placeDiceOnDock();
         //textEnterToRollObj.visible=true;
       // textEnterToRollObj.text="Press Enter to roll the dice";

       resetDiceSprites();
    //    showAds();
        initPlaces();
        hideBadges();
    }

    function DiceListener(color)
    {
            if( color!=getColor())
            {
            //    console.log("RETURNING FROM HERE");
                return;
            }
             if(getShouldRollDiceStatus()   && !getDiceRolledStatus())
              {
                
                //if(key==13 || key==53)
                {    
                    receivedInputFromMP("1","DICE ROLL");
                  //  console.log("CALLED THIS 1");
                    animateDiceStatus=true;
                    textEnterToRollObj.visible=false;
                    hidePointers();
                    setShouldRollDiceStatus(false);
                }
                // else
                // {
                //     return;
                // }
                  
                }


    }


   function tokenListener(color,tokenNo)
    {
        //console.log("YEAH YOU CLICKED :"+"color :"+color+"::"+"tokenNo :"+tokenNo);

        if( color!=getColor())
        {
        //    console.log("RETURNING FROM HERE");
            return;
        }
        if(getSelectTokenStatus())  
        {

            //if(key==50)//2
            if(tokenNo==1)
            {
                if(getCur1()<0)
                {
                    if(diceNo<6)
                    {
                        return;
                    }  
                    else
                    {
                        diceNo=1;
                    }
                }
                else
                {
                    if((getCur1()+diceNo)>56){
                        return;
                    }
                } 

                selectedTokenNo=1;
                targetPlayerEnd=getCur1()+diceNo;
            //    console.log("Target player end :"+targetPlayerEnd +"1");
            }
            else if(tokenNo==2)
            {
                if(getCur2()<0)
                {
                    if( diceNo<6)
                    {
                        return;
                    }  
                    else
                    {
                        diceNo=1;
                    }
                } else
                {
                    if((getCur2()+diceNo)>56){
                        return;
                    }
                } 

                selectedTokenNo=2;
                targetPlayerEnd=getCur2()+diceNo;
              //  console.log("Target player end :"+targetPlayerEnd +"2");
            }
            else if(tokenNo==3)//6
            {
                if(getCur3()<0)
                {
                    if( diceNo<6)
                    {
                        return;
                    }  
                    else
                    {
                        diceNo=1;
                    }
                }
                  else
                {
                    if((getCur3()+diceNo)>56){
                        return;
                    }
                } 

                selectedTokenNo=3;
                targetPlayerEnd=getCur3()+diceNo;
             //   console.log("Target player end :"+targetPlayerEnd +"3");
            }
            else if(tokenNo==4)//8
            {
                if(getCur4()<0)
                {
                    if( diceNo<6)
                    {
                        return;
                    }  
                    else
                    {
                        diceNo=1;
                    }
                } 
                 else
                {
                    if((getCur4()+diceNo)>56){
                        return;
                    }
                } 

                selectedTokenNo=4;
                targetPlayerEnd=getCur4()+diceNo;
           //     console.log("Target player end :"+targetPlayerEnd +"4");
            }
            else
            {

                return;
            }
        










            setSelectionTokenStatus(false);
            //selectTokenStatus=false;
        //    playerReady=true;
            setPlayerReady(true);
            timer=0.3;//So that first move is instant.
        }

    }
    
    function getReqdVal(isAi)
    {
        var arr=[];
        var reqd=6;
        if(isAi){
            arr=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        }
        else{
            arr=[getCur1(),getCur2(),getCur3(),getCur4()];
        }

        for(var i=0;arr.length;i++)
        {
           // arr[i]
            reqd= 56 - arr[i];
            
            
             
            if(reqd>0)
             {
                if(reqd>=6)
                reqd=6;
                break;
             }
             
        }

        return reqd;


    }


    //Events : Wins , Ad-Displayed , Mins for bucket (1,5,10,15,20,30), Restart(AI or 2P) , GameOver(AI or 2P), MidWay End (AI or 2P)(LOGIC:IF GAMESTATUS AND CLOSED).




    var animAngle=0;
    function animateMarker(_set, _index, dt)
    {
      /*  if(animAngle >= 360)
        animAngle = 0;
        else*/
        animAngle += dt*10;

        animVal1 = Math.sin(animAngle)*0.09;
        animVal2 = Math.sin(animAngle)*0.09;
        animVal3 = Math.sin(animAngle)*0.09;
        animVal4 = Math.sin(animAngle)*0.09;

        if(_set == 1)//RED
        {
            if(_index == 1)
            {
                red1.y += getYtoken( animVal1);
            }
            if(_index == 2)
            {
                red2.y +=getYtoken(  animVal2);
            }
            if(_index == 3)
            {
                red3.y += getYtoken( animVal3);
            }
            if(_index == 4)
            {
                red4.y += getYtoken( animVal4);
            }
        }
        if(_set == 2)//YELLOW
        {
            if(_index == 1)
            {
                yellow1.y +=getYtoken(  animVal1);
            }
            if(_index == 2)
            {
                yellow2.y += getYtoken( animVal2);
            }
            if(_index == 3)
            {
                yellow3.y += getYtoken( animVal3);
            }
            if(_index == 4)
            {
                yellow4.y += getYtoken( animVal4);
            }
            
        }
        if(_set == 3)//GREEN
        {
            if(_index == 1)
            {
                green1.y += getYtoken( animVal1);
            }
            if(_index == 2)
            {
                green2.y += getYtoken(animVal2);
            }
            if(_index == 3)
            {
                green3.y += getYtoken(animVal3);
            }
            if(_index == 4)
            {
                green4.y += getYtoken(animVal4);
            }
        }
        if(_set == 4)//BLUE
        {
            if(_index == 1)
            {
                blue1.y += getYtoken(animVal1);
            }
            if(_index == 2)
            {
                blue2.y +=getYtoken( animVal2);
            }
            if(_index == 3)
            {
                blue3.y += getYtoken(animVal3);
            }
            if(_index == 4)
            {
                blue4.y += getYtoken(animVal4);
            }
        }
    } 
    function hideBG()
    {
        redFlashBG.visible=false;
        yellowFlashBG.visible=false;
        greenFlashBG.visible=false;
        blueFlashBG.visible=false;
        //console.log("HIDE BG 3");
    }

    var animColor=0;
    var animColorAngle=0;
 

    function animateBG (color, dt)
    {
        if(animateBGStatus==false)
        {

         //   console.log("HIDE BG 1");
         //textDiceObj.text=diceNo;
         hideBG();
         return; 
        }
        //textDiceObj.text=" ";
        var _val = 150;

        if(color == 1)
        {
        
            if(redFlashBG.visible==false)
             redFlashBG.visible=true;

           

             redFlashBG.tint=rgbToHex(_val+animColor,0,0); 
              

        }
        if(color == 2)
        {
            if(yellowFlashBG.visible==false)
            yellowFlashBG.visible=true;
      
    
          yellowFlashBG.tint=rgbToHex(_val+animColor,_val+animColor,0);

        }
        if(color == 3)
        {
            if(greenFlashBG.visible==false)
            greenFlashBG.visible=true;
          
             greenFlashBG.tint=rgbToHex (0,_val+animColor,0);
        }
        if(color == 4)
        {
            if(blueFlashBG.visible==false)
            blueFlashBG.visible=true;
          
            blueFlashBG.tint=rgbToHex(0,0,_val+animColor);
        }
 
       

        /*if(animColorAngle >= 360)
        animColorAngle = 0;
        else*/
        animColorAngle += dt*5;

        animColor += Math.sin(animColorAngle)*3.2; 

       //console.log(""+animColor);
    } 
 
    var animateBGStatus;

    function checkForLastTurns(isAi)
    {
        var allPlayerToken=[getCur1(),getCur2(),getCur3(),getCur4()];
        var allAiToken=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        var allToken=[];

        if(isAi)
        {
            allToken=allAiToken;
        }
        else{
            allToken=allPlayerToken;
        }

        var canPlayThisTurn=false;

        for(var i=0;i<allToken.length;i++)
        {
           // console.log("VALUE OF I :"+allToken[i]+"::"+"dice NO :"+diceNo);
            if(allToken[i]<0 && diceNo>=6)
            {
                canPlayThisTurn=true;
                break;
            }

            if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
            {
                canPlayThisTurn=true;
                break;
            }
        }



        if(!canPlayThisTurn)
        {
            if(isAi)
            {
                idleMoveCounterAI++;
            }else{
                idleMoveCounter++;
            }
           // console.log("Not repeat move");
            sixCounter=0;
            endMove(isAi);
        }

        // console.log("CAN PLAY THIS TURN :"+canPlayThisTurn);
        return canPlayThisTurn;

    }


    var diceResultObserverTime=0.8;
    var diceResultTimer=0;
    var shouldObserverDiceResult=false;

    function diceResultObservance(dt)
    {
        if(diceResultTimer>=diceResultObserverTime)
        {

            diceResultTimer=0;
            shouldObserverDiceResult=false;
            afterDiceRollLogic();
        }
        else
        {
            diceResultTimer+=dt;
        }
    }


    function initCirclePos()
    {
        red1Circle.x=red1.x;
        red2Circle.x=red2.x;
        red3Circle.x=red3.x;
        red4Circle.x=red4.x;

        red1Circle.y=red1.y+40;
        red2Circle.y=red2.y+40;
        red3Circle.y=red3.y+40;
        red4Circle.y=red4.y+40;


        red1BlackCircle.x=red1.x;
        red2BlackCircle.x=red2.x;
        red3BlackCircle.x=red3.x;
        red4BlackCircle.x=red4.x;

        red1BlackCircle.y=red1.y+40;
        red2BlackCircle.y=red2.y+40;
        red3BlackCircle.y=red3.y+40;
        red4BlackCircle.y=red4.y+40;


        yellow1Circle.x=yellow1.x;
        yellow2Circle.x=yellow2.x;
        yellow3Circle.x=yellow3.x;
        yellow4Circle.x=yellow4.x;

        yellow1Circle.y=yellow1.y+40;
        yellow2Circle.y=yellow2.y+40;
        yellow3Circle.y=yellow3.y+40;
        yellow4Circle.y=yellow4.y+40;

        yellow1BlackCircle.x=yellow1.x;
        yellow2BlackCircle.x=yellow2.x;
        yellow3BlackCircle.x=yellow3.x;
        yellow4BlackCircle.x=yellow4.x;

        yellow1BlackCircle.y=yellow1.y+40;
        yellow2BlackCircle.y=yellow2.y+40;
        yellow3BlackCircle.y=yellow3.y+40;
        yellow4BlackCircle.y=yellow4.y+40;

        green1Circle.x=green1.x;
        green2Circle.x=green2.x;
        green3Circle.x=green3.x;
        green4Circle.x=green4.x;

        green1Circle.y=green1.y+40;
        green2Circle.y=green2.y+40;
        green3Circle.y=green3.y+40;
        green4Circle.y=green4.y+40;

        green1BlackCircle.x=green1.x;
        green2BlackCircle.x=green2.x;
        green3BlackCircle.x=green3.x;
        green4BlackCircle.x=green4.x;

        green1BlackCircle.y=green1.y+40;
        green2BlackCircle.y=green2.y+40;
        green3BlackCircle.y=green3.y+40;
        green4BlackCircle.y=green4.y+40;

        blue1Circle.x=blue1.x;
        blue2Circle.x=blue2.x;
        blue3Circle.x=blue3.x;
        blue4Circle.x=blue4.x;

        blue1Circle.y=blue1.y+40;
        blue2Circle.y=blue2.y+40;
        blue3Circle.y=blue3.y+40;
        blue4Circle.y=blue4.y+40;

        blue1BlackCircle.x=blue1.x;
        blue2BlackCircle.x=blue2.x;
        blue3BlackCircle.x=blue3.x;
        blue4BlackCircle.x=blue4.x;

        blue1BlackCircle.y=blue1.y+40;
        blue2BlackCircle.y=blue2.y+40;
        blue3BlackCircle.y=blue3.y+40;
        blue4BlackCircle.y=blue4.y+40;

        circleArr=[red1Circle,red2Circle,red3Circle,red4Circle,yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle,green1Circle,green2Circle,green3Circle,green4Circle,blue1Circle,blue2Circle,blue3Circle,blue4Circle];

        for(var i=0;i<circleArr.length;i++)
        circleArr[i].visible=false;

        for(var i=1;i<=4;i++)
        getTokensOnTop(i);

 

    }

     


    function circleOffsets()
    {
        red1Circle.x=red1.x;
        red2Circle.x=red2.x;
        red3Circle.x=red3.x;
        red4Circle.x=red4.x;

        red1Circle.y=red1.y+40;
        red2Circle.y=red2.y+40;
        red3Circle.y=red3.y+40;
        red4Circle.y=red4.y+40;


        red1BlackCircle.x=red1.x;
        red2BlackCircle.x=red2.x;
        red3BlackCircle.x=red3.x;
        red4BlackCircle.x=red4.x;

        red1BlackCircle.y=red1.y+40;
        red2BlackCircle.y=red2.y+40;
        red3BlackCircle.y=red3.y+40;
        red4BlackCircle.y=red4.y+40;


        yellow1Circle.x=yellow1.x;
            yellow2Circle.x=yellow2.x;
            yellow3Circle.x=yellow3.x;
            yellow4Circle.x=yellow4.x;

            yellow1Circle.y=yellow1.y+40;
            yellow2Circle.y=yellow2.y+40;
            yellow3Circle.y=yellow3.y+40;
            yellow4Circle.y=yellow4.y+40;

            yellow1BlackCircle.x=yellow1.x;
            yellow2BlackCircle.x=yellow2.x;
            yellow3BlackCircle.x=yellow3.x;
            yellow4BlackCircle.x=yellow4.x;

            yellow1BlackCircle.y=yellow1.y+40;
            yellow2BlackCircle.y=yellow2.y+40;
            yellow3BlackCircle.y=yellow3.y+40;
            yellow4BlackCircle.y=yellow4.y+40;


            green1Circle.x=green1.x;
            green2Circle.x=green2.x;
            green3Circle.x=green3.x;
            green4Circle.x=green4.x;

            green1Circle.y=green1.y+40;
            green2Circle.y=green2.y+40;
            green3Circle.y=green3.y+40;
            green4Circle.y=green4.y+40;

            green1BlackCircle.x=green1.x;
            green2BlackCircle.x=green2.x;
            green3BlackCircle.x=green3.x;
            green4BlackCircle.x=green4.x;

            green1BlackCircle.y=green1.y+40;
            green2BlackCircle.y=green2.y+40;
            green3BlackCircle.y=green3.y+40;
            green4BlackCircle.y=green4.y+40;

            blue1Circle.x=blue1.x;
            blue2Circle.x=blue2.x;
            blue3Circle.x=blue3.x;
            blue4Circle.x=blue4.x;

            blue1Circle.y=blue1.y+40;
            blue2Circle.y=blue2.y+40;
            blue3Circle.y=blue3.y+40;
            blue4Circle.y=blue4.y+40;

            blue1BlackCircle.x=blue1.x;
            blue2BlackCircle.x=blue2.x;
            blue3BlackCircle.x=blue3.x;
            blue4BlackCircle.x=blue4.x;

            blue1BlackCircle.y=blue1.y+40;
            blue2BlackCircle.y=blue2.y+40;
            blue3BlackCircle.y=blue3.y+40;
            blue4BlackCircle.y=blue4.y+40;

    }

    function movePlayer(color,tokenNo,isAi)
    {
        changeAudioSrc(0);
        animateBGStatus=false;
        hideBG();
        hideBadges();
        //console.log("THIS");
         tempCurr=0;
         var tempNumX=2;
         var tempNumY=5;

        if(color==1) //Red
        {

            switch(tokenNo)
            {
                case 1:
                
                red1curr+=1;
                // red1.x=  (  redNodeX[red1curr]  );
                // red1.y=  (  redNodeY[red1curr] );


                 
                tempCurr=red1curr;
                
                break;
    
            case 2:
                 red2curr+=1;
                //  red2.x=( redNodeX[red2curr] );
                //  red2.y=( redNodeY[red2curr]);
                 tempCurr=red2curr;  
             break;

             case 3:
                red3curr+=1;
                //  red3.x=(redNodeX[red3curr]);
                //  red3.y=(redNodeY[red3curr]);
                 tempCurr=red3curr;
            break;

             case 4:
                  red4curr+=1;
                //   red4.x=(redNodeX[red4curr]);
                //   red4.y=(redNodeY[red4curr]);
                  tempCurr=red4curr;
             break;

             default:
             break;     
            }
           

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
                yellow1curr+=1;
                // yellow1.x=(yellowNodeX[yellow1curr]);
                // yellow1.y=(yellowNodeY[yellow1curr]);
                tempCurr=yellow1curr;
             
                break;
    
            case 2:
                 yellow2curr+=1;
                // yellow2.x= (yellowNodeX[yellow2curr]);
                // yellow2.y=(yellowNodeY[yellow2curr]);
                tempCurr=yellow2curr;
            
             break;
             case 3:
             yellow3curr+=1;
            // console.log("1");
            //  yellow3.x=(yellowNodeX[yellow3curr]);
            //  yellow3.y=(yellowNodeY[yellow3curr]);
             tempCurr=yellow3curr;
            


             break;
             case 4:
             yellow4curr+=1;
            //  yellow4.x=(yellowNodeX[yellow4curr]);
            //  yellow4.y=(yellowNodeY[yellow4curr]);
             tempCurr=yellow4curr;
             break;
             default:
             break;     
            }


            



        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                green1curr+=1;
                // green1.x=(greenNodeX[green1curr]);
                // green1.y=(greenNodeY[green1curr]);
                tempCurr=green1curr;
              
                break;
    
            case 2:
            green2curr+=1;
                // green2.x= (greenNodeX[green2curr]);
                // green2.y=(greenNodeY[green2curr]);
                tempCurr=green2curr;
              
             break;
             case 3:
             green3curr+=1;
            //  green3.x=(greenNodeX[green3curr]);
            //  green3.y=(greenNodeY[green3curr]);
             tempCurr=green3curr;
        
             break;
             case 4:
             green4curr+=1;
            //  green4.x=(greenNodeX[green4curr]);
            //  green4.y=(greenNodeY[green4curr]);
             tempCurr=green4curr;
             break;
             default:
             break;     
            }
           

        }
        if(color==4) //BLUE
        {
       //     console.log("ANIMATING BLUE : "+tokenNo);
            switch(tokenNo)
            {
                case 1:
                
                blue1curr+=1;
                // blue1.x=(blueNodeX[blue1curr]);
                // blue1.y=(blueNodeY[blue1curr]);
                tempCurr=blue1curr;
               
                break;
    
            case 2:
            blue2curr+=1;
                // blue2.x= (blueNodeX[blue2curr]);
                // blue2.y=(blueNodeY[blue2curr]);
                tempCurr=blue2curr;
                
             break;

             case 3:
             blue3curr+=1;
            //  blue3.x=(blueNodeX[blue3curr]);
            //  blue3.y=(blueNodeY[blue3curr]);
             tempCurr=blue3curr;
              


             break;

             case 4:
             blue4curr+=1;
            //  blue4.x=(blueNodeX[blue4curr]);
            //  blue4.y=(blueNodeY[blue4curr]);
             tempCurr=blue4curr;
             break;



             default:
             break;     
            }
            

        }

          calOffsets();

      //  console.log("TEMP CURR :"+tempCurr + "::"+"TARGET :"+targetPlayerEnd);

        if( tempCurr>=targetPlayerEnd)
        {

          moveEndedStatus=true;
          checkForKill(color,tokenNo);
          isKilledByAi=isAi;
        }
        if(tempCurr>=56)
        {
            changeAudioSrc(1);
            

            var tokens=[getCur1(),getCur2(),getCur3(),getCur4()];
            var ctr=0;
            for(var i=0;i<3;i++)
            {
                if(tokens[i]>=56)
                {
                    ctr++;
                }
            }
            if(ctr>=3)
            {
                if(tokenHomeInShowAds)
                {
                    showAds();
                    tokenHomeInShowAds=true;
                }
            }

            repeatMove=true;
        }
      
       

//        console.log("Kill Color :"+  killColor + "::"+"Kill token :"+ killTokenNo);
       // console.log("Move Ended Status :"+moveEndedStatus + "::"+"Animate kill status :"+animateKillStatus);

        if(moveEndedStatus==true  && animateKillStatus==false)
        {
            sixCounter=0;

            // if(repeatMove)
            // {
            //     if(gameModeType==0)
            //     {
            //         isAi=!isAi;//Doing so will get the sixer's chance back.
            //         repeatColor();

            //     }else if(gameModeType==1){
            //         repeatColor();
            //     }
            //     else if(gameModeType==2){
            //         repeatColor();
            //     }
            //     else if(gameModeType==3){
            //         repeatColor();
            //     }
            //     else if(gameModeType==4){
            //         repeatColor();
            //     }
            //     repeatMove=false;
            //    // console.log("GIVE ANOTHER CHANCE");
            // }
            // else{
            //   //  console.log("Not repeat move");
            //     sixCounter=0;
            // }
            //console.log("IS AI :"+isAi);
            //console.log("MOVE HAS ENDED");
           //  if(isAi)
           // console.log("STEP 5");
            
            endMove(isAi);
            
            moveEndedStatus=false;
            
        }

    }



    var animateKillStatus=false;
    
  //  var triggerKillStatus=false;
    

    var killColor=-1;
    var killTokenNo=-1;
    var isKilledByAi=false;

    var repeatMove=false;

    function animateKill()
    {

        //console.log("KILLCOLOR :"+killColor);
        var color=killColor;
        var tokenNo=killTokenNo;
         
        hideBG();
        tempCurr=0;
         //console.log("COLOR  : "+color+"::"+"Token no"+killTokenNo);
        if(color==1) //Red
        {
            switch(tokenNo)
            {
                case 1:
                
                red1curr-=1;
          
                tempCurr=red1curr;

                if(tempCurr>=0)
                {    
                    red1.x=  ( redNodeX[red1curr]);
                    red1.y=  (redNodeY[red1curr]);

                }
                else
                {

                        
                    red1.x= getXtoken(35);
                    red1.y= getYtoken(213-14);
            
                    red1curr=-1;
                    animateKillStatus=false;
                }
                break;
    
            case 2:
                 red2curr-=1;
         
                 tempCurr=red2curr;  

                 if(tempCurr>=0){

                    red2.x= (redNodeX[red2curr]);
                    red2.y= (redNodeY[red2curr]);

                 }else{

                   
                    red2.x=getXtoken(64);
                    red2.y=getYtoken(213-14);

                    red2curr=-1;
                    animateKillStatus=false;
                 }


             break;

             case 3:
                 red3curr-=1;
           
                 tempCurr=red3curr;

                 if(tempCurr>=0)
                 {
                    red3.x=getXtoken(35);
                    red3.y=getYtoken(240-18);
                  
                 }else{
                    red3.x=getXtoken(35-8);
                    red3.y=getYtoken(240-14);
                    red3curr=-1;
                    animateKillStatus=false;
                 }

            break;

             case 4:
                  red4curr-=1;
                
                  tempCurr=red4curr;

                  if(tempCurr>=0){

                    red4.x= (redNodeX[red4curr]);
                    red4.y= (redNodeY[red4curr]);


                 }else{

                    red4.x=getXtoken(64);
                    red4.y=getYtoken(240-18);
                    red4curr=-1;
                   animateKillStatus=false;
                 }

             break;

             default:
             break;     
            }

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
                yellow1curr-=1;
               
                tempCurr=yellow1curr;


                if(tempCurr>=0)
                {
                    yellow1.x= (yellowNodeX[yellow1curr]);
                    yellow1.y= (yellowNodeY[yellow1curr]);
                 
                }
                else
                {
                   
                        yellow1.x=getXtoken(170+5);
                        yellow1.y=getYtoken(80+14);
                     animateKillStatus=false;
                     yellow1curr=-1;
                }
             
                break;
    
            case 2:
                yellow2curr-=1;
                tempCurr=yellow2curr;
                if(tempCurr>=0)
                {
                    yellow2.x=  (yellowNodeX[yellow2curr]);
                    yellow2.y= (yellowNodeY[yellow2curr]);
                  
                }
                else
                {
                     yellow2.x=getXtoken(200+5);
                     yellow2.y=getYtoken(80+14);
                    yellow2curr=-1;
                    animateKillStatus=false;
                }
            
             break;
             case 3:
                  yellow3curr-=1;
     
                 tempCurr=yellow3curr;
                 if(tempCurr>=0){
                   //  console.log("2");
                    yellow3.x= (yellowNodeX[yellow3curr]);
                    yellow3.y= (yellowNodeY[yellow3curr]);
                 }else{
                  //  console.log("HERE??")
                  //console.log("3");

                 
                  yellow3.x=getXtoken(170+5);
                  yellow3.y=getYtoken(130-14);

                    yellow3curr=-1;
                    animateKillStatus=false;
                 }


             break;
             case 4:
                  yellow4curr-=1;

                 tempCurr=yellow4curr;
                 if(tempCurr>=0){

                    yellow4.x= (yellowNodeX[yellow4curr]);
                    yellow4.y= (yellowNodeY[yellow4curr]);

                 
                 }else{
                    yellow4.x=getXtoken(200+5);
                    yellow4.y=getYtoken(130-14);
                    yellow4curr=-1;
                    animateKillStatus=false;
                 }
             break;
             default:
             break;     
            }

        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                green1curr-=1;

                
                tempCurr=green1curr;

                if(tempCurr>=0)
                {
                    green1.x= ( greenNodeX[green1curr]);
                    green1.y= (greenNodeY[green1curr]);
                    
                }else{
                    green1.x=getXtoken(35);
                    green1.y=getYtoken(80+14);
                    green1curr=-1;
                    animateKillStatus=false;
                }

                break;
    
            case 2:
                 green2curr-=1;
               
                tempCurr=green2curr;
                if(tempCurr>=0){
                    green2.x=  (greenNodeX[green2curr]);
                green2.y= (greenNodeY[green2curr]);
                }else{
                    green2.x=getXtoken(64);
                    green2.y=getYtoken(80+14);
            
                    green2curr=-1;
                    animateKillStatus=false;
                }
              
             break;
             case 3:
                 green3curr-=1;
            
                 tempCurr=green3curr;
                 if(tempCurr>=0){
               
                    green3.x= (greenNodeX[green3curr]);
                    green3.y= (greenNodeY[green3curr]);
                 }else{
                    green3.x=getXtoken(35);
                    green3.y=getYtoken(130-14);
                    green3curr=-1;
                    animateKillStatus=false;
                 }
        
             break;
             case 4:
                   green4curr-=1;

                tempCurr=green4curr;
                if(tempCurr>=0)
                {
                    green4.x= (greenNodeX[green4curr]);
                    green4.y= (greenNodeY[green4curr]);
                   
                }else{
                    green4.x=getXtoken(64);
                    green4.y=getYtoken(130-14); 
            
                    green4curr=-1;
                    animateKillStatus=false;
                }
             break;
             default:
             break;     
            }

        }
        if(color==4) //BLUE
        {
            switch(tokenNo)
            {
                case 1:
                
                blue1curr-=1;
              
                tempCurr=blue1curr;
                if(tempCurr>=0){
                   
                    blue1.x= (blueNodeX[blue1curr]);
                    blue1.y= (blueNodeY[blue1curr]);
                }else{
                    

                    blue1.x=getXtoken(170+5);
                    blue1.y=getYtoken(213-14);

                    blue1curr=-1;
                    animateKillStatus=false;
                }
                break;
    
            case 2:
                blue2curr-=1;
                
                tempCurr=blue2curr;
                if(tempCurr>=0){
                    blue2.x=  (blueNodeX[blue2curr]);
                    blue2.y= (blueNodeY[blue2curr]);
                   
                }else{
                   

                    blue2.x=getXtoken(200+5);
                    blue2.y=getYtoken(213-14);
                    blue2curr=-1;
                    animateKillStatus=false;
                }
                
             break;

             case 3:
                 blue3curr-=1;
                
                 tempCurr=blue3curr;
                 if(tempCurr>=0){

                    blue3.x= (blueNodeX[blue3curr]);
                    blue3.y= (blueNodeY[blue3curr]);
                    
                 }else{
                  
                    blue3.x=getXtoken(170+5);
                    blue3.y=getYtoken(240-18);

                    blue3curr=-1;
                    animateKillStatus=false;
                 }


             break;

             case 4:
             blue4curr-=1;
             
             tempCurr=blue4curr;
             if(tempCurr==0){
                blue4.x= (blueNodeX[blue4curr]);
                blue4.y= (blueNodeY[blue4curr]);
                
             }else{
                blue4.x=getXtoken(200+5);
                blue4.y=getYtoken(240-18);
        
                blue4curr=-1;
                animateKillStatus=false;
             }
             break;



             default:
             break;     
            }

        }

        if(tempCurr<0)
        {       
           
            repeatMove=true;
            sixCounter=0;
 
            endMove(!isKilledByAi);//Doing so will get the killers's chance back.
        } 


        calOffsets();

    }

     
 


  


    function forKillParam(color,i,curr)
    {
        if(color==1)
        return ((redNodeX[curr]==yellowNodeX[i] && redNodeY[curr]==yellowNodeY[i]) || (redNodeX[curr]==greenNodeX[i] && redNodeY[curr]==greenNodeY[i]) || (redNodeX[curr]==blueNodeX[i] && redNodeY[curr]==blueNodeY[i])  );
        else if(color==2)
        return ((yellowNodeX[curr]==redNodeX[i] && yellowNodeY[curr]==redNodeY[i]) || (yellowNodeX[curr]==greenNodeX[i] && yellowNodeY[curr]==greenNodeY[i]) || (yellowNodeX[curr]==blueNodeX[i] && yellowNodeY[curr]==blueNodeY[i]) );
        else if(color==3)
        return ((greenNodeX[curr]==redNodeX[i] && greenNodeY[curr]==redNodeY[i]) || (greenNodeX[curr]==blueNodeX[i] && greenNodeY[curr]==blueNodeY[i]) || (greenNodeX[curr]==yellowNodeX[i] && greenNodeY[curr]==yellowNodeY[i])  );
        else if(color==4)
        return ((blueNodeX[curr]==redNodeX[i] && blueNodeY[curr]==redNodeY[i]) || (blueNodeX[curr]==greenNodeX[i] && blueNodeY[curr]==greenNodeY[i]) || (blueNodeX[curr]==yellowNodeX[i] && blueNodeY[curr]==yellowNodeY[i])  );

    }

    function checkForKillingOthers(color,curr,aiCal=false)
    {

        //if(aiCal)
        //console.log("IS AI CAL NEXT MOVE :"+aiCal);

       // var ogCurr=0;
        if(aiCal){
         //    console.log("CURR :"+curr);
         //   ogCurr=curr;
            curr=curr+diceNo;
        }

        var arrX=[];
        var arrY=[];
        var canKill=true; 
  

        if(color==1)
        {
             arrX=redNodeX;
             arrY=redNodeY;
        }
        else if(color==2)
        {
            arrX=yellowNodeX;
            arrY=yellowNodeY;
        }
        else if(color==3)
        {
            arrX=greenNodeX;
            arrY=greenNodeY;
        }
        else if(color==4)
        {
            arrX=blueNodeX;
            arrY=blueNodeY;
        }

      


        for(var j=0;j<safePosX.length;j++)
        {
            if(arrX[curr]==safePosX[j] && arrY[curr]==safePosY[j] )
            {
                canKill=false;
                break;
            }
        }

        if(canKill==true)
        {
           // return;
        


        for(var i=0;i<yellowNodeX.length;i++)
        {
            if(forKillParam(color,i,curr))
             {
              var anti=[];
              var antiNodeX=[];
              var antiNodeY=[];

              var allBlue=[blue1curr,blue2curr,blue3curr,blue4curr];
              var allGreen=[green1curr,green2curr,green3curr,green4curr];
              var allYellow=[yellow1curr,yellow2curr,yellow3curr,yellow4curr];
              var allRed=[red1curr,red2curr,red3curr,red4curr];
                        
            if((arrX[curr]==yellowNodeX[i] && arrY[curr]==yellowNodeY[i]) && (color!=2))
            {
             //   console.log("KILLING YELLOW");
                anti=allYellow;
                antiNodeX=yellowNodeX;
                antiNodeY=yellowNodeY;
            }
            else if((arrX[curr]==greenNodeX[i] && arrY[curr]==greenNodeY[i]) && (color!=3))
            {
               // console.log("KILLING GREEN");
                anti=allGreen;
                antiNodeX=greenNodeX;
                antiNodeY=greenNodeY;

            }
            else if((arrX[curr]==blueNodeX[i] && arrY[curr]==blueNodeY[i]) && (color!=4))
            {
                //console.log("KILLING BLUE");
                anti=allBlue;
                antiNodeX=blueNodeX;
                antiNodeY=blueNodeY;
            }
            else if((arrX[curr]==redNodeX[i] && arrY[curr]==redNodeY[i]) && (color!=1))
            {
               // console.log("KILLING RED");
                anti=allRed;
                antiNodeX=redNodeX;
                antiNodeY=redNodeY;
            }

            for(var k=0;k<anti.length;k++)
            {
                if(anti[k]<0)
                {
                    continue;
                }

               

                 
                if( antiNodeX[anti[k]] == arrX[curr] && antiNodeY[anti[k]]== arrY[curr] )
                {
                   /* if(aiCal)
                    {
                        aiThinkKillToken=k+1;
                        aiCanKill=true;
                        
                    //    console.log("AI CAN KILL :"+aiCanKill+"::"+"aiThinkKillToken :"+aiThinkKillToken );
                    }
                    else*/
                    {
                     //Kill 
                     if(antiNodeX==redNodeX)
                     killColor=1;
                     else if(antiNodeX==yellowNodeX)
                     killColor=2;
                     else if(antiNodeX==greenNodeX)
                     killColor=3;
                     else if(antiNodeX==blueNodeX)
                     killColor=4;

                    // console.log("killColor :"+killColor);
                     killTokenNo= k+1; 
                     animateKillStatus=true;
                     changeAudioSrc(2);
                     if(!tokenKillShowAds)
                     {
                        showAds();
                        tokenKillShowAds=true;
                     }
                     setChanceStatus(false);
                     setAIChanceStatus(false);
                    }       
                }
             }       
            }
         }
        }

 

    }



    function checkForEnemyThinkKill(color,curr)
    {
   
        var AIthinkCanKill=false;
        curr=curr+diceNo;
      

       var arrX=[];
       var arrY=[];
       var canKill=true; 
 

       if(color==1)
       {
            arrX=redNodeX;
            arrY=redNodeY;
         }else if(color==2){
           arrX=yellowNodeX;
           arrY=yellowNodeY;
        }else if(color==3){
           arrX=greenNodeX;
           arrY=greenNodeY;
        }else if(color==4){
           arrX=blueNodeX;
           arrY=blueNodeY;
        }

     


       for(var j=0;j<safePosX.length;j++)
       {
           if(arrX[curr]==safePosX[j] && arrY[curr]==safePosY[j] )
           {
               canKill=false;
               break;
           }
       }

       if(canKill==true)
       {
        megaloop:
       for(var i=0;i<yellowNodeX.length;i++)
       {
           
           if(forKillParam(color,i,curr))
            {
             var anti=[];
             var antiNodeX=[];
             var antiNodeY=[];

             var allBlue=[blue1curr,blue2curr,blue3curr,blue4curr];
             var allGreen=[green1curr,green2curr,green3curr,green4curr];
             var allYellow=[yellow1curr,yellow2curr,yellow3curr,yellow4curr];
             var allRed=[red1curr,red2curr,red3curr,red4curr];
                       
           if((arrX[curr]==yellowNodeX[i] && arrY[curr]==yellowNodeY[i]) && (color!=2))
           {
               anti=allYellow;
               antiNodeX=yellowNodeX;
               antiNodeY=yellowNodeY;
           }
           else if((arrX[curr]==greenNodeX[i] && arrY[curr]==greenNodeY[i]) && (color!=3))
           {

               anti=allGreen;
               antiNodeX=greenNodeX;
               antiNodeY=greenNodeY;

           }
           else if((arrX[curr]==blueNodeX[i] && arrY[curr]==blueNodeY[i]) && (color!=4))
           {

               anti=allBlue;
               antiNodeX=blueNodeX;
               antiNodeY=blueNodeY;
           }
           else if((arrX[curr]==redNodeX[i] && arrY[curr]==redNodeY[i]) && (color!=1))
           {
               anti=allRed;
               antiNodeX=redNodeX;
               antiNodeY=redNodeY;
           }

           for(var k=0;k<anti.length;k++)
           {
                
                if( antiNodeX[anti[k]] == arrX[curr] && antiNodeY[anti[k]]== arrY[curr] )
                {

                    if(anti[k]<0)
                    {
                        continue;
                    }
                    if(antiNodeX==redNodeX)
                    killColor=1;
                    else if(antiNodeX==yellowNodeX)
                    killColor=2;
                    else if(antiNodeX==greenNodeX)
                    killColor=3;
                    else if(antiNodeX==blueNodeX)
                    killColor=4;

                  AIthinkCanKill = true;  
                  break megaloop;   
                }
           }       
           }
        }
        }

         return AIthinkCanKill;

    }




   // var aiCanKill=false;
  //  var aiThinkKillToken=0;
     

    function checkForKill(color,tokenNo)
    {   
     //  console.log("COLOR :"+color);
        if(color==1) //Red
        {
            switch(tokenNo)
            {
                case 1:
                
           
                 checkForKillingOthers(1,red1curr);
                
                break;
    
            case 2:
           
                 checkForKillingOthers(1,red2curr);
             break;

             case 3:
            
              checkForKillingOthers(1,red3curr);



             break;

             case 4:
               
                   checkForKillingOthers(1,red4curr);

             break;

             default:
             break;     
            }

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
              
                 checkForKillingOthers(2,yellow1curr);
             
                break;
    
            case 2:
       
                 checkForKillingOthers(2,yellow2curr);
             break;
             case 3:
   
              checkForKillingOthers(2,yellow3curr);



             break;

             case 4:
             checkForKillingOthers(2,yellow4curr);
              break;
             default:
             break;     
            }

        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                checkForKillingOthers(3,green1curr);
               
                break;
    
            case 2:
                checkForKillingOthers(3,green2curr);

              break;
             case 3:
             checkForKillingOthers(3,green3curr);

              break;
             case 4:
             checkForKillingOthers(3,green4curr);

              break;
             default:
             break;     
            }

        }
        if(color==4) //BLUE
        {
            switch(tokenNo)
            {
                case 1:
                
                checkForKillingOthers(4,blue1curr);

                 break;
    
            case 2:

            checkForKillingOthers(4,blue2curr);

                 
             break;

             case 3:
      
             checkForKillingOthers(4,blue3curr);

 
             break;

             case 4:
             checkForKillingOthers(4,blue4curr);

              break;



             default:
             break;     
            }

        }

    }
    

    function randomiser(min,max){
       return Math.floor(Math.random() * (max - min + min)) + min;
    }

    var redGroup,yellowGroup,greenGroup,blueGroup;

    var red1Circle,red2Circle,red3Circle,red4Circle;
    var yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle;
    var green1Circle,green2Circle,green3Circle,green4Circle;
    var blue1Circle,blue2Circle,blue3Circle,blue4Circle;

    var red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle;
    var yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle;
    var green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle;
    var blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle;

    var redGroupCircle,yellowGroupCircle,greenGroupCircle,blueGroupCircle;
    var redGroupBlackCircle,yellowGroupBlackCircle,greenGroupBlackCircle,blueGroupBlackCircle;

    function createGroups()
    {
        redGroup = game.add.group();
        yellowGroup = game.add.group();
        greenGroup = game.add.group();
        blueGroup = game.add.group();

        redGroupCircle=game.add.group();
        yellowGroupCircle=game.add.group();
        greenGroupCircle=game.add.group();
        blueGroupCircle=game.add.group();

        redGroupBlackCircle = game.add.group();
        yellowGroupBlackCircle=game.add.group();
        greenGroupBlackCircle=game.add.group();
        blueGroupBlackCircle=game.add.group();


        redAll=[red1,red2,red3,red4];
        yellowAll=[yellow1,yellow2,yellow3,yellow4];
        greenAll=[green1,green2,green3,green4];
        blueAll=[blue1,blue2,blue3,blue4];

        redCircleAll=[red1Circle,red2Circle,red3Circle,red4Circle];
        yellowCircleAll=[yellow1Circle,yellow2Circle,yellow3Circle,yellow4Circle];
        greenCircleAll=[green1Circle,green2Circle,green3Circle,green4Circle];
        blueCircleAll=[blue1Circle,blue2Circle,blue3Circle,blue4Circle];

        redCircleBlackAll=[red1BlackCircle,red2BlackCircle,red3BlackCircle,red4BlackCircle];
        yellowCircleBlackAll=[yellow1BlackCircle,yellow2BlackCircle,yellow3BlackCircle,yellow4BlackCircle];
        greenCircleBlackAll=[green1BlackCircle,green2BlackCircle,green3BlackCircle,green4BlackCircle];
        blueCircleBlackAll=[blue1BlackCircle,blue2BlackCircle,blue3BlackCircle,blue4BlackCircle];

        for(var i=0;i<4;i++)
        {
            redGroup.add(redAll[i]);
            yellowGroup.add(yellowAll[i]);
            greenGroup.add(greenAll[i]);
            blueGroup.add(blueAll[i]);

            redGroupCircle.add(redCircleAll[i]);
            yellowGroupCircle.add(yellowCircleAll[i]);
            greenGroupCircle.add(greenCircleAll[i]);
            blueGroupCircle.add(blueCircleAll[i]);

            redGroupBlackCircle.add(redCircleBlackAll[i]);
            yellowGroupBlackCircle.add(yellowCircleBlackAll[i]);
            greenGroupBlackCircle.add(greenCircleBlackAll[i]);
            blueGroupBlackCircle.add(blueCircleBlackAll[i]);

        }
       


    }
 
 
    function getTokensOnTop(color=null)
    {
        if(color==null)
        color=getColor();

        var group,group2,group3;
        if(color===1)
        {
            game.world.bringToTop(redGroupBlackCircle);
            game.world.bringToTop(redGroupCircle);
            game.world.bringToTop(redGroup);

            group=redGroup;
            group2=redGroupCircle;
            group3=redGroupBlackCircle;

          
        }
        else if(color==2)
        {
            game.world.bringToTop(yellowGroupBlackCircle);
            game.world.bringToTop(yellowGroupCircle);
            game.world.bringToTop(yellowGroup);

            group=yellowGroup;
            group2=yellowGroupCircle;
            group3=yellowGroupBlackCircle;

        }
        else if(color==3)
        {
            game.world.bringToTop(greenGroupBlackCircle);
            game.world.bringToTop(greenGroupCircle);
            game.world.bringToTop(greenGroup);

            group=greenGroup;
            group2=greenGroupCircle;
            group3=greenGroupBlackCircle;

        }
        else if(color==4)
        {
            game.world.bringToTop(blueGroupBlackCircle);
            game.world.bringToTop(blueGroupCircle);
            game.world.bringToTop(blueGroup);

            group=blueGroup;
            group2=blueGroupCircle;
            group3=blueGroupBlackCircle;


        }

            group3.sort("y", Phaser.Group.SORT_ASCENDING);
            group2.sort("y", Phaser.Group.SORT_ASCENDING);
            group.sort("y", Phaser.Group.SORT_ASCENDING);

 
    }

    var sixInChances=4;
    
    var chanceCounter=0;
    var chanceCounter2=0;
    var chanceCounter3=0;
    var chanceCounter4=0;

    var aiChanceCounter=0;
    
    var idleMoveCounter=0;
    var idleMoveCounter2=0;
    var idleMoveCounter3=0;
    var idleMoveCounter4=0;

    var idleMoveCounterAI=0;

  

    function changeDiceColor(color)
    {
        redDice1.visible=false;
        redDice2.visible=false;
        redDice3.visible=false;
        redDiceBase.visible=false;

        yellowDice1.visible=false;
        yellowDice2.visible=false;
        yellowDice3.visible=false;
        yellowDiceBase.visible=false;

        greenDice1.visible=false;
        greenDice2.visible=false;
        greenDice3.visible=false;
        greenDiceBase.visible=false;

        blueDice1.visible=false;
        blueDice2.visible=false;
        blueDice3.visible=false;
        blueDiceBase.visible=false;



        if(color==1)
        {
           // console.log("CHANGE DICE COLOR TO RED");
            dice1=redDice1;
            dice2=redDice2;
            dice3=redDice3;
            diceBase=redDiceBase;
          
        }
        if(color==2)
        {
          //  console.log("CHANGE DICE COLOR TO YELLOW");
             dice1=yellowDice1;
            dice2=yellowDice2;
            dice3=yellowDice3;
            diceBase=yellowDiceBase;
        }
        if(color==3)
        {
            //console.log("CHANGE DICE COLOR TO GREEN");
            dice1=greenDice1;
            dice2=greenDice2;
            dice3=greenDice3;
            diceBase=greenDiceBase;
        }
        if(color==4)
        {
            //console.log("CHANGE DICE COLOR TO BLUE");
            dice1=blueDice1;
            dice2=blueDice2;
            dice3=blueDice3;
            diceBase=blueDiceBase;
        }
        diceBase.visible=true;
        placeDiceOnDock();
    }
    
    var debugcounter=0;
    function diceRoll(isAi)
    {

       
        var baseSixes=[1,2,3,4,5,6,6];
     


        var oneOut=[1,2,3,4,5,6];
        var twoOut=[1,2,3,4,5,6];
        var threeOut=[1,2,3,4,5,6];
        var fourOut=[1,2,3,4,5,6];
        
     //   isAi=chanceAIStatus;
     isAi=getAIChanceStatus();
      //  console.log("IS AI :"+chanceAIStatus+"::"+"IS PLAYER :"+getChanceStatus());
        hidePointers();
        
        //56 is home run.
    //    var arrDebug=[6,6,6,6,1,26,2,1,1,1,6,56,6,6,56,1,6,27,1,6,1,1,1,1,1];
    //     //var arrDebug=[6,5,6,6,25,6,1,1,1,6,6,1,6,56,1,6,27,1,6,1,1,1,1,1];

    //     diceNo= diceNo=arrDebug[debugcounter]; 
    //     debugcounter++;
    //     resetDiceSprites();
    //     if(diceNo==1)
    //     {
    //         diceDot1.visible=true;
    //     }
    //     else if(diceNo==2)
    //     {
    //         diceDot2.visible=true;
    //     }
    //     else if(diceNo==3)
    //     {
    //         diceDot3.visible=true;
    //     }
    //     else if(diceNo==4)
    //     {
    //         diceDot4.visible=true;
    //     }
    //     else if(diceNo==5)
    //     {
    //         diceDot5.visible=true;
    //     }
    //     else if(diceNo==6)
    //     {
    //         diceDot6.visible=true;
    //     }
    //     if(diceNo>=6)
    //     {
    //         changeAudioSrc(5);
    //         repeatMove=true;
    //     }
    //     return;         
  
       /* var aiDebug=[6,6,24,2,51,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

 
        var playerDebug=[6,6,1,6,6,6,56,56,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        var player2Debug=[6,1,53,6,5,2,2,2,1,2,3,2,3,2,3,2,3,2,1,4];
        

       if(isAi)
       {
            diceNo=aiDebug[aiChanceCounter];
            aiChanceCounter++;
            textDiceObj.text="AI :" +diceNo;
        }
        else
        { 
            if(colorCounter==0)
            { 
                diceNo=playerDebug[chanceCounter];
            }
            else if(colorCounter==1){
                diceNo=player2Debug[chanceCounter2];
            }
         

           
            if(colorCounter==0)
            { 
                chanceCounter++;
               textDiceObj.text="1P :" +diceNo;
             }
             else if(colorCounter==1)
            { 
                chanceCounter2++;
               textDiceObj.text="2P :" +diceNo;
            }  
        }


        if(diceNo>=6)
        {
            changeAudioSrc(5);
            repeatMove=true;
        }
        return;      */
 
      
 

        
 


        //Check for no of tokens which are out. 
        //depending on that hit a random on arrays.
        var tempChanceCounter=0;
        var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
        var enemyTokens=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];

        if(isAi)
        allTokens=enemyTokens;
                
      var outTokens=0;
        for(var i=0;i<allTokens.length;i++){
            if(allTokens[i]>-1)
            outTokens++;
        }
        var arr=[];
        if(outTokens<=0)
        {
            //console.log("SIXES 3");
            arr=baseSixes;
        }else if(outTokens==1)
        {
            //console.log("SIXES 2");

            arr=oneOut;
        }else if(outTokens==2){
            //console.log("SIXES 2");
            arr=twoOut;
        }else if(outTokens==3){
            //console.log("SIXES 2");
            arr=threeOut;
        }else if(outTokens==4){
           // console.log("SIXES 2");
            arr=fourOut;
        }

        if(isAi)
        {
            aiChanceCounter= tempChanceCounter;
             idleCounter=idleMoveCounterAI;
         }else{
            if(gameModeType==0){
                chanceCounter= tempChanceCounter;
 //               idleMoveCounter= idleCounter;
                idleCounter=idleMoveCounter;
            }
            else if(gameModeType==1)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }
            }
            else if(gameModeType==2)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            } else if(gameModeType==3)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            }
            else if(gameModeType==4)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            }
        }
        


        if(getMax()!=6)
        {
         //   console.log("CANNOT ROLL 6");
            arr=[1,2,3,4,5];
        }else{
           // console.log("CAN ROLL 6");
        }


        
      /*  var playerDebug=[6,6,6,6,6,6,56,56,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        console.log("MAX :"+getMax());*/
      /*  if(getMax()!=6)
        {
            console.log("CANNOT ROLL 6");
            arr=[1,2,3,4,5];
            diceNo=arr[randomiser(0,arr.length)];
        }else{
            console.log("CAN ROLL 6");
            diceNo=playerDebug[debugcounter]; 
            debugcounter++;
        }*/

     
        diceNo=arr[randomiser(0,arr.length)];
       // idleCounter=idleMoveCounter;
      //  if(isAi)
       // idleCounter=idleMoveCounterAI;

     
        if(idleCounter>firstSixFactor())
        {
            //console.log("FORCING SIX");
            diceNo=getReqdVal(isAi);
            idleCounter=0;
        }


      

        if(diceNo>=6)
        {
            repeatMove=true;
            sixCounter++;
        }else{
            sixCounter=0;
        }

        if(isAi)
        {
            aiChanceCounter= tempChanceCounter;
            idleMoveCounterAI= idleCounter;
         }else{
            if(gameModeType==0){
                chanceCounter= tempChanceCounter;
                idleMoveCounter= idleCounter;
            }else if(gameModeType==1)
            {
                if(colorCounter==0)
                {
                    idleMoveCounter= idleCounter;
                    chanceCounter= tempChanceCounter;
                }
                else if(colorCounter==1)
                {
                    idleMoveCounter2= idleCounter;

                    chanceCounter2= tempChanceCounter;
                }
            }
            else if(gameModeType==2 || gameModeType==3 || gameModeType==4)
            {
                if(colorCounter==0)
                {
                    idleMoveCounter= idleCounter;
                    chanceCounter= tempChanceCounter;
                }
                else if(colorCounter==1)
                {
                    idleMoveCounter2= idleCounter;

                    chanceCounter2= tempChanceCounter;
                }
                else if(colorCounter==2)
                {
                    idleMoveCounter3= idleCounter;

                    chanceCounter3= tempChanceCounter;
                }
                else if(colorCounter==3)
                {
                    idleMoveCounter4= idleCounter;

                    chanceCounter4= tempChanceCounter;
                }
            }
            //textDiceObj.text=diceNo;
        }
     //   textDiceObj.text=diceNo;
        


        resetDiceSprites();
        if(diceNo==1)
        {
            diceDot1.visible=true;
        }
        else if(diceNo==2)
        {
            diceDot2.visible=true;
        }
        else if(diceNo==3)
        {
            diceDot3.visible=true;
        }
        else if(diceNo==4)
        {
            diceDot4.visible=true;
        }
        else if(diceNo==5)
        {
            diceDot5.visible=true;
        }
        else if(diceNo==6)
        {
            diceDot6.visible=true;
        }
    }

    function resetDiceSprites()
    {
        diceDot1.visible=false;
        diceDot2.visible=false;
        diceDot3.visible=false;
        diceDot4.visible=false;
        diceDot5.visible=false;
        diceDot6.visible=false;
    }
     

   

   
    var gameModeType=0;//0 AI vs Player //1: 2P  //2 : 4P
 
    var timer=0;
    var counter=-1;
    var deltaTime=0;


    var rollDiceStatus=false;
    var chanceAIStatus=[false,false,false,false];
    var chancePlayerStatus=[false,false,false,false]; 
    var diceRolledStatus=[false,false,false,false];
    var shouldRollDiceStatus=[false,false,false,false];
    var selectTokenStatus=[false,false,false,false];
    var aiReady=[false,false,false,false];

    var moveEndedStatus=false;
    var targetPlayerEnd=0;

    /*var aiPrepared=false;*/

    var diceNo=0;


    var selectedTokenNo=0;
    var animTimer=0.25; //0.25 OG VALUE


    function getSelectTokenStatus(){

        return selectTokenStatus[colorCounter];
    }

    function setSelectionTokenStatus(setActive,resetAll)
    {
        selectTokenStatus[colorCounter]=setActive;
        if(resetAll)
        {
            for(var i=0;i<4;i++)
            {
                selectTokenStatus[i]=setActive;
            }
         
        }
    }

    function getShouldRollDiceStatus()
    {
        return shouldRollDiceStatus[colorCounter];
    }

    function setShouldRollDiceStatus(setActive,resetAll=false)
    {
        shouldRollDiceStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                shouldRollDiceStatus[i]=setActive;
            }
         
        }
        
        if(setActive)
        wantInputFromMP("1","DICE ROLL");
    }


    function getDiceRolledStatus()
    {
        return diceRolledStatus[colorCounter];
    }

    function setDiceRolledStatus(setActive,resetAll=false)
    {
        diceRolledStatus[colorCounter]=setActive;

        if(resetAll)
        {
            for(var i=0;i<4;i++){
                diceRolledStatus[i]=setActive;
            }
         
        }
    }


    function getChanceStatus()
    {

        if(gameModeType==0)
        {
            //Player Vs AI
        }
 
        return chancePlayerStatus[colorCounter];
       
    }

    function setChanceStatus(setActive,resetAll=false)
    {
        chancePlayerStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++)
            {
                if(i==0)
                {
                    chancePlayerStatus[i]=setActive;

                }else{
                    chancePlayerStatus[i]=setActive;

                }
            }
         
        }
    }

    function getAIReadyStatus()
    {
       return aiReady[colorCounter];
    }

    function setAIReadyStatus(setActive,resetAll=false)
    {
        aiReady[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiReady[i]=setActive;
            }
         
        }
    }


    function endMove(isAi)
    {  
       // console.trace("isAi :"+isAi);
       if(repeatMove)
       {
           if(gameModeType==0)
           {
               isAi=!isAi;//Doing so will get the sixer's chance back.
               repeatColor();

           }else if(gameModeType==1){
               repeatColor();
           }
           else if(gameModeType==2){
               repeatColor();
           }
           else if(gameModeType==3){
               repeatColor();
           }
           else if(gameModeType==4){
               repeatColor();
           }
           repeatMove=false;
          // console.log("GIVE ANOTHER CHANCE");
       }

        hideBG();
        if(gameModeType==0) //AI VS PLAYER 
        {

            if(colorCounter==0)
            {
                isAi=false;  
                setChanceStatus(false);
            }
            else
            {
               isAi=true;
               setAIChanceStatus(false);
            }

          incColor();
          if(!isAi)
          {    
           // console.log("PLAYER HAS ENDED MOVE");

          //  console.log("COLOR COUNTER SHOULD BE 1 BUT IT IS :"+colorCounter);
            setAIReadyStatus(false);
            setAIReactedStatus(false);
            setAICanMoveStatus(false);
            changeDiceColor(getColorEnemy());  
            setAIChanceStatus(true);
            // console.log("STEP 1");
             
          } 
          else 
          {
            //  console.log("AI HAS ENDED MOVE,COLOR COUNTER SHOULD BE 0 ,BUT IT IS :"+colorCounter);
           setDiceRolledStatus(false);
           setShouldRollDiceStatus(true);
           setPlayerReady(false);
           changeDiceColor(getColor());
            setChanceStatus(true);
          

       
          }

          hideBadges();
        }
        else if(gameModeType==1) //PLAYER VS PLAYER
        {
          //  console.log("HERE 2");
            setChanceStatus(false);
        
            incColor();
        
            setChanceStatus(true);
            setDiceRolledStatus(false);
            setShouldRollDiceStatus(true);
            setPlayerReady(false);
            changeDiceColor(getColor());
            hideBadges();
        }
        else if(gameModeType==2) //PLAYER VS PLAYER VS PLAYER VS PLAYER
        {
          //  console.log("HERE 2");
            setChanceStatus(false);
        
            incColor();
        
            setChanceStatus(true);
            setDiceRolledStatus(false);
            setShouldRollDiceStatus(true);
            setPlayerReady(false);
            changeDiceColor(getColor());
            hideBadges();
        }

        if(gameModeType==3)//PLAYER VS AI VS AI VS AI
        {
          //  console.log("MOVE ENDED");
            if(colorCounter==0 || colorCounter==1 || colorCounter==2)
            {
                isAi=false;
              // console.log("AI TURN NOW :"+(colorCounter+1));
            }else{
                isAi=true;
                //console.log("PLAYER TURN NOW :"+(colorCounter+1));
            }

            setChanceStatus(false);
            setAIChanceStatus(false);
           
            incColor();
           
            if(!isAi)
            {    


                setChanceStatus(false);
                setAIChanceStatus(true);
                setAIReadyStatus(false);
                setAIReactedStatus(false);
                setAICanMoveStatus(false);
                changeDiceColor(getColorEnemy());  
             } 
             else 
             {
                setChanceStatus(true);
                setAIChanceStatus(false);
                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setPlayerReady(false);
                changeDiceColor(getColor());
            }
            hideBadges();
        }
        if(gameModeType==4)//PLAYER VS AI VS PLAYER VS AI
        {
             // console.log("MOVE ENDED");
            if(colorCounter==0  || colorCounter==2)
            {
                isAi=false;
              // console.log("AI TURN NOW :"+(colorCounter+1));
            }else{
                isAi=true;
                //console.log("PLAYER TURN NOW :"+(colorCounter+1));
            }

            setChanceStatus(false);
            setAIChanceStatus(false);
           
            incColor();
           
            if(!isAi)
            {    
                setChanceStatus(false);
                setAIChanceStatus(true);
                setAIReadyStatus(false);
                setAIReactedStatus(false);
                setAICanMoveStatus(false);
                changeDiceColor(getColorEnemy());  
             } 
             else 
             {
                setChanceStatus(true);
                setAIChanceStatus(false);
                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setPlayerReady(false);
                changeDiceColor(getColor());
            }
            hideBadges();
        }
 
        if(checkForGameOver()){
      //      console.log("GAME HAS ENDED!");
            return;
        }
        animateBGStatus=true;
        moveEndedStatus=false;
        //placeDiceOnDock();
        getTokensOnTop();


      //  console.log("AI CHANCE :"+chanceAIStatus);
    }
    var aiPrepareTimer=0;
    var aiReactionTimer=0;
    var aiReactedStatus=[false,false,false,false];
    var aiCanMove=[false,false,false,false];
    var playerReady=[false,false,false,false];

    function setPlayerReady(setActive,resetAll=false)
    {
        playerReady[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                playerReady[i]=setActive;
            }
         
        }
    }
    function getPlayerReady()
    {
        return playerReady[colorCounter];
    }

    var isColorAI=[false,false,false,false];

  //  var enemyColor=[0,0,0,0];

    function setColorPlayer(color)
    {
        
        playerColor[0]=color;
        if(color==1)//RED
        {   
            playerColor[1]=2;
        }
        else if(color==2)//Yellow
        {
            playerColor[1]=1;
        }
        else if(color==3)//Green
        {
            playerColor[1]=4;
        }
        else if(color==4)//Blue
        {
            playerColor[1]=3;
        }

        if(gameModeType==0)
        {
            isColorAI[1]=true;
        }

        if(gameModeType==1)
        {
         //   console.log("Player2color :"+playerColor[1]);
           // playerColor[1]=enemyColor[0];
           // console.log("Player2color :"+playerColor[1]);
        }

        if(gameModeType==2)
        {
         //   console.log("Player2color :"+playerColor[1]);
            playerColor[0]=1;
            playerColor[1]=3;
            playerColor[2]=2;
            playerColor[3]=4;
           // console.log("Player2color :"+playerColor[1]);
        }

        if(gameModeType==3)
        {
            if(color==1)//RED
            {   
                playerColor[1]=3;
                playerColor[2]=2;
                playerColor[3]=4;
            }
            else if(color==2)//Yellow
            {
                playerColor[1]=4;
                playerColor[2]=1;
                playerColor[3]=3;
            }
            else if(color==3)//Green
            {
                playerColor[1]=2;
                playerColor[2]=4;
                playerColor[3]=1;
            }
            else if(color==4)//Blue
            {
                playerColor[1]=1;
                playerColor[2]=3;
                playerColor[3]=2;
            }
        }
        if(gameModeType==4)
        {
            if(color==1)//RED
            {   
                playerColor[1]=3;
                playerColor[2]=2;
                playerColor[3]=4;
            }
            else if(color==2)//Yellow
            {
                playerColor[1]=4;
                playerColor[2]=1;
                playerColor[3]=3;
            }
            else if(color==3)//Green
            {
                playerColor[1]=2;
                playerColor[2]=4;
                playerColor[3]=1;
            }
            else if(color==4)//Blue
            {
                playerColor[1]=1;
                playerColor[2]=3;
                playerColor[3]=2;
            }
        }
    }

    function getEnemyCur1()
    {
      //  color=enemyColor[0];
      color=getColorEnemy();
  
      if(color==1)//RED
        {    
            return red1curr;
        }
        else if(color==2)//Yellow
        {
            return yellow1curr;
        }
        else if(color==3)//Green
        {
            return green1curr;
        }
        else if(color==4)//Blue
        {
            return blue1curr;
        }
    }

    function getEnemyCur2()
    {

       // color=enemyColor[0];
       color=getColorEnemy(); 
       if(color==1)//RED
        {    
            return red2curr;
        }
        else if(color==2)//Yellow
        {
            return yellow2curr;
        }
        else if(color==3)//Green
        {
            return green2curr;
        }
        else if(color==4)//Blue
        {
            return blue2curr;
        }
    }

    function getEnemyCur3()
    {
    //    color=enemyColor[0];
    color=getColorEnemy();  
    if(color==1)//RED
        {    
            return red3curr;
        }
        else if(color==2)//Yellow
        {
            return yellow3curr;
        }
        else if(color==3)//Green
        {
            return green3curr;
        }
        else if(color==4)//Blue
        {
            return blue3curr;
        }
    }

    function getEnemyCur4()
    {
      //  color=enemyColor[0];
      color=getColorEnemy();  
      if(color==1)//RED
        {    
            return red4curr;
        }
        else if(color==2)//Yellow
        {
            return yellow4curr;
        }
        else if(color==3)//Green
        {
            return green4curr;
        }
        else if(color==4)//Blue
        {
            return blue4curr;
        }

    }



    function getCircle(no)
    {
        color=playerColor[colorCounter];
        if(no==1)
        {
            if(color==1)//RED
            {    
                return [red1Circle,red1BlackCircle];
            }
            else if(color==2)//Yellow
            {
                return [yellow1Circle,yellow1BlackCircle];
            }
            else if(color==3)//Green
            {
                return [green1Circle,green1BlackCircle];
            }
            else if(color==4)//Blue
            {
               // console.trace("THIS");
                return [blue1Circle,blue1BlackCircle];
            }
        }
        else if(no==2)
        {
            if(color==1)//RED
            {    
                return [red2Circle,red2BlackCircle];
            }
            else if(color==2)//Yellow
            {
                return [yellow2Circle,yellow2BlackCircle];
            }
            else if(color==3)//Green
            {
                return [green2Circle,green2BlackCircle];
            }
            else if(color==4)//Blue
            {
               // console.trace("THIS");
                return [blue2Circle,blue2BlackCircle];
            }
        }
        else if(no==3)
        {
            if(color==1)//RED
            {    
                return [red3Circle,red3BlackCircle];
            }
            else if(color==2)//Yellow
            {
                return [yellow3Circle,yellow3BlackCircle];
            }
            else if(color==3)//Green
            {
                return [green3Circle,green3BlackCircle];
            }
            else if(color==4)//Blue
            {
               // console.trace("THIS");
                return [blue3Circle,blue3BlackCircle];
            }
        }
        else if(no==4)
        {
            if(color==1)//RED
            {    
                return [red4Circle,red4BlackCircle];
            }
            else if(color==2)//Yellow
            {
                return [yellow4Circle,yellow4BlackCircle];
            }
            else if(color==3)//Green
            {
                return [green4Circle,green4BlackCircle];
            }
            else if(color==4)//Blue
            {
               // console.trace("THIS");
                return [blue4Circle,blue4BlackCircle];
            }
        }
       
    }

    function getNode1()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red1;
        }
        else if(color==2)//Yellow
        {
            return yellow1;
        }
        else if(color==3)//Green
        {
            return green1;
        }
        else if(color==4)//Blue
        {
           // console.trace("THIS");
            return blue1;
        }
    }

    function getNode2()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red2;
        }
        else if(color==2)//Yellow
        {
            return yellow2;
        }
        else if(color==3)//Green
        {
            return green2;
        }
        else if(color==4)//Blue
        {
            return blue2;
        }
    }


    function getNode3()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red3;
        }
        else if(color==2)//Yellow
        {
            return yellow3;
        }
        else if(color==3)//Green
        {
            return green3;
        }
        else if(color==4)//Blue
        {
            return blue3;
        }
    }

    function getNode4()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red4;
        }
        else if(color==2)//Yellow
        {
            return yellow4;
        }
        else if(color==3)//Green
        {
            return green4;
        }
        else if(color==4)//Blue
        {
            return blue4;
        }
    }

    

   // var player2color=0;
    
    function getCur1()
    {
       /* color=playerColor;

        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
         
        var color=getColor();
       /* console.log("COLOR :"+color);
        console.log("COLOR COUNTER :"+colorCounter);*/
        if(color==1)//RED
        {    
            return  red1curr;
        }
        else if(color==2)//Yellow
        {
            return yellow1curr;
        }
        else if(color==3)//Green
        {
            return green1curr;
        }
        else if(color==4)//Blue
        {
            return blue1curr;
        }
    }

    function getCur2()
    {
        /*color=playerColor;
     
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
        var color=getColor();

     
        if(color==1)//RED
        {    
            return red2curr;
        }
        else if(color==2)//Yellow
        {
            return yellow2curr;
        }
        else if(color==3)//Green
        {
            return green2curr;
        }
        else if(color==4)//Blue
        {
            return blue2curr;
        }
    }

    function getCur3()
    {
        /*color=playerColor;
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
      var  color=getColor();
      
      
        if(color==1)//RED
        {    
            return red3curr;
        }
        else if(color==2)//Yellow
        {
            return yellow3curr;
        }
        else if(color==3)//Green
        {
            return green3curr;
        }
        else if(color==4)//Blue
        {
            return blue3curr;
        }
    }

    function getCur4()
    {
       /* color=playerColor;
        
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
       var color=getColor();

        
        if(color==1)//RED
        {    
            return red4curr;
        }
        else if(color==2)//Yellow
        {
            return yellow4curr;
        }
        else if(color==3)//Green
        {
            return green4curr;
        }
        else if(color==4)//Blue
        {
            return blue4curr;
        }

    }

var testCtr=0;
    function onTap(pointer, doubleTap) 
    {

        // if (doubleTap)
        // {
        //     //  They double-tapped, so swap the image
        //     if (pic.key === 'TheEnd')
        //     {
        //         pic.loadTexture('BountyHunter');
        //     }
        //     else
        //     {
        //         pic.loadTexture('TheEnd');
        //     }
        // }
        // else
        // {
        //     //  A single tap (tap duration was < game.input.tapRate) so change alpha
        //     pic.alpha = (pic.alpha === 0.5) ? 1 : 0.5;
        // }

        // if(showingSetting)
        // switchSettingStatus(false);

        if(menuStatus==true)
        {          
            //Disable menu status
            menuStatus=false;
            // introBG.visible=false;
            introBGactive(false);
            //Prepare for modestatus
            modeStatus=true;
             //inModeBG.visible=true;
            modeBGactive(true);
          }
         else{
        //     console.log('X:' + this.input.x);

        //     console.log('Y:' + this.input.y);
        //     red1.anchor.setTo(0.5);

           // red1.
            // red1.x=this.input.x;
            // red1.y=this.input.y;



            // if(!gameStatus)
            //     return;

            //     var tpVar=((canvasHeight/0.81)- game.world.centerY );
            //    // var tpVar0=
                
            //    console.log("CENTER X :"+game.world.centerX );
            //    //red1.x=game.world.centerX;//-(canvasWidth/13.8); 
            //    //red1.y=game.world.centerY;//tpVar;

            //    red1.x=canvasWidth/2.5;
            //    red1.y=canvasHeight/2;
            //    console.log("CALCULATED :"+ tpVar);

          //  red1.x=tpVar;
           // red1.y=tpVar;

             // console.log("TEST CTR :"+ testCtr);
            // green1.x=greenNodeX[testCtr];
            // green1.y=greenNodeY[testCtr];
            // testCtr++;
         }
    
    }
 


    function triggerGameOver(color)
    {
        changeAudioSrc(3);
      //  console.trace("THIS ??");
        playerWonTextObj.text=" ";
        winningTokenBlueObj.visible=false;
        winningTokenRedObj.visible=false;
        winningTokenGreenObj.visible=false;
        winningTokenYellowObj.visible=false;

        winningTokenBlueObj.anchor.setTo(0.5);
        winningTokenRedObj.anchor.setTo(0.5);
        winningTokenGreenObj.anchor.setTo(0.5);
        winningTokenYellowObj.anchor.setTo(0.5);


        hideForPause();
        // gameOverBG.visible=true;
        gameOverBGactive(true); 
        hidePointers();
        groupPause.visible=false;
        //gameModeType
        //console.log("Color :"+color);
        if(color==1)
        {
            winningTokenRedObj.visible=true;
            console.log(" Red Won");
        }else if(color == 2 ){
            winningTokenYellowObj.visible=true;
            console.log(" Yellow Won");
        }else if(color == 3 ){
            winningTokenGreenObj.visible=true;
            console.log(" Green Won");
        }else if(color == 4 ){
            console.log(" Blue Won");
            winningTokenBlueObj.visible=true;
        }
        //colorCounter;
        playerWonTextObj.anchor.setTo(0.5);
        playerWonTextObj.scale.setTo(getScaleFactor(0.6),getScaleFactor(0.6));
        playerWonTextObj.x=canvasWidth/2;
        if(gameModeType==0)
        {
           // if(chanceAIStatus)
           if(color==getColorEnemy())
            {
                playerWonTextObj.scale.setTo(getScaleFactor(0.55),getScaleFactor(0.55));
                playerWonTextObj.text="COMPUTER";
                // playerWonTextObj.x=getXtoken(85);
            }
            //else
            else if(color==playerColor[0])
            {
                // playerWonTextObj.x=getXtoken(100);
                playerWonTextObj.text="Player 1";
            }

        }
        else if(gameModeType==1 || gameModeType==2)
        {
            // playerWonTextObj.x=getXtoken(100);
            playerWonTextObj.text="Player "+(colorCounter+1);
        
        //console.log("11"+"Player "+(colorCounter+1)+"?? :"+ playerWonTextObj.text);
        }
        else if(gameModeType==3)
        {
            if(color==playerColor[0])
            {
                // playerWonTextObj.x=getXtoken(100);
                playerWonTextObj.text="Player 1";
            }
            else if(color==playerColor[1])
            {
                playerWonTextObj.scale.setTo( getScaleFactor(0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken( 85);
                playerWonTextObj.text="Computer 1";
            }
            else if(color==playerColor[2])
            {
                playerWonTextObj.scale.setTo(getScaleFactor(0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken(85);
                playerWonTextObj.text="Computer 2";
            }
            else if(color==playerColor[3])
            {
                playerWonTextObj.scale.setTo(getScaleFactor( 0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken(85);
                playerWonTextObj.text="Computer 3";
            }
        }
        else if(gameModeType==4)
        {
            if(color==playerColor[0])
            {
                // playerWonTextObj.x=getXtoken(100);
                playerWonTextObj.text="Player 1";
            }
            else if(color==playerColor[1])
            {
                playerWonTextObj.scale.setTo(getScaleFactor(0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken(85);
                playerWonTextObj.text="Computer 1";
            }
            else if(color==playerColor[2])
            {
                playerWonTextObj.scale.setTo(getScaleFactor(0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken(85);
                playerWonTextObj.text="Player 2";
            }
            else if(color==playerColor[3])
            {
                playerWonTextObj.scale.setTo(getScaleFactor(0.55),getScaleFactor(0.55));
                // playerWonTextObj.x=getXtoken(85);
                playerWonTextObj.text="Computer 2";
            }
        }
        gameOverStatus=true;
        gameStatus=false;
        //showAds(0);
        showAds();
    }

    var tokenHomeInShowAds=false;
    var tokenKillShowAds=false;

    function checkForGameOver()
    {
        var isOver=false;
        var color=0;
        var mode=gameModeType;
      //  console.log("MODE :"+mode);
             if(mode==0)//Player vs AI
            {
                //console.log("CUR 1:"+getCur1()+"::"+"CUR 2 :"+getCur2()+"::"+"CUR 3:"+getCur3()+"::"+"GET CUR 4 :"+getCur4());

                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    color=playerColor[0];
                    console.log("Player Won");
                    isOver=true;
                    triggerGameOver(color);
                }
                else if(getEnemyCur1()>=56 && getEnemyCur2()>=56 && getEnemyCur3()>=56 && getEnemyCur4()>=56)
                {
    //                color=enemyColor[0];
                    color=playerColor[1];

                    console.log("AI Won");
                    isOver=true;
                    triggerGameOver(color);
                }

                    //DEBUG ONLY.
                    // color=enemyColor;
                    //triggerGameOver(color); 
             }
            else if(mode==1 || mode==2)//Player vs Player //4P All players.
             {
         
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Player 2 won");
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Player 3 won");
                        color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Player 4 won");
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                //   
                }
             }
            else if(mode==3)//Player vs AI vs AI vs AI
            {
               // console.log("HERE???!!!");
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Computer 1 won");
                        //color=enemyColor[0];
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Computer 2 won");
                    //  color=enemyColor[1];
                    color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Computer 3 won");
    //                   color=enemyColor[2];
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                }
           
            }
            else if(mode==4)//Player vs AI vs PLAYER vs AI
            {
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Computer 1 won");
                        //color=enemyColor[0];
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Player 2 won");
                    //  color=enemyColor[1];
                         color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Computer 2 won");
    //                   color=enemyColor[2];
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                }
           
            }
        //}
        

        // if(isOver)
        // triggerGameOver()

        // console.log("DEBUG HERE");
        // {
        //     color=playerColor[0];
        //     isOver=true;
        //     triggerGameOver(color);

        // }
       return isOver;
    }


    function generateAiToken()
    {
         

        
        var forceKill=false;
        var forceTokenOut=false;
        var forceSafeSpot=false;
        var aiCanReachEnd=false;
        var allToken=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        var baseVal=-1;
        var aiCanKill=false;
        var aiThinkKillToken=0;

       // console.log("AI CAN KILL 1:"+aiCanKill);
        for(var i=0;i<allToken.length;i++)
        {
      
            if(allToken[i]<0)
            continue;
            
            if(checkForEnemyThinkKill (getColorEnemy(),allToken[i]))
            {
                aiThinkKillToken=  i+1; //Is the token
                aiCanKill=true;
                break;
            }

       
       
        }

        if(aiCanKill==false)
        {
            for(var i=0;i<allToken.length;i++)
            {
                if(!aiCanReachEnd)
                {
                    if( (allToken[i]+diceNo) == 56 )
                    {
                        //Ai can reach home.
                        baseVal=i+1;
                        aiCanReachEnd=true;
                        break;
                    }
                }
                else
                {
                    break;
                }
            }
        }
       



        if(aiCanKill)
        {
            baseVal=aiThinkKillToken;
           //  console.log("KILL FOUND TOKEN :"+aiThinkKillToken);
          
            //Confirm kill here! Can use to reset.
        }
        else if(aiCanReachEnd) //Check for destination end.
        {
         //   console.log("CAN REACH DESTINATION");
            //Ai will reach it's destination position.
        }
        else
        {

        //Token logic based on difficulty level here.
       // console.log("AI ALGORITHM");
        var outTokens=0;
        for(var i=0;i<allToken.length;i++){
            if(allToken[i]>-1)
            outTokens++;
        }


        if(aiDifficultyMode==0)
        {
            if(outTokens<2 && diceNo>=6) //Making minimum two out of cage logic. 
            {
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0)
                    {
                        diceNo=1;
                        baseVal=i+1;
                        break;
                    }
                }
            }
            else
            {  //Sequential logic here as well as if existing tokens can't make it to home,new token logic here.
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }
            

        }
          else if(aiDifficultyMode==1)
        {
            var newTokenOut=false;
            var safeSpotFound=false;
            
            //In medium we get the tokens out first then check for safe spot. 
            if(diceNo>=6) 
            {
                if(outTokens<4) //Tokens are still in the cage.
                {
                    for(var i=0;i<allToken.length;i++)
                    {
                        if(allToken[i]<0 && diceNo>=6)
                        {
                           //New Token.
                           newTokenOut=true;
                           diceNo=1;
                           baseVal=i+1;
                           break;
                        }
                    }
                    
                }
            }

            if(newTokenOut==false)
            {

                    var color=getColorEnemy();
                    var arrX=[];
                    var arrY=[];
                    if(color==1)
                    {
                        //Red
                        arrX=redNodeX;
                        arrY=redNodeY;
                    }
                    else if(color==2)
                    {
                        //Yellow
                        arrX=yellowNodeX;
                        arrY=yellowNodeY;
                    }
                    else if(color==3)
                    {
                        //Green
                        arrX=greenNodeX;
                        arrY=greenNodeY;
                    }
                    else if(color==4)
                    {
                        //Blue
                        arrX=blueNodeX;
                        arrY=blueNodeY;
                    }


                megaloop:
                for(var i=0;i<allToken.length;i++)
                {
                    
                    var curr=allToken[i];

                    if(curr<0)
                    continue;

                    var toReach=(curr+diceNo);

                    


                    for(var j=0;j<redNodeX.length;j++) //We are using redNodeX just for the sake of length of the array.
                    {
                       

                        for(var k= 0;k<safePosX.length;k++)
                        {
                            if((arrX[toReach]==safePosX[k]) && (arrY[toReach]==safePosY[k]))
                            {
                                console.log("SAFE SPOT FOUND");
                                baseVal=i+1;
                                safeSpotFound=true;
                                break megaloop;
                            }
                        }
                       
                    }
                    


 

                }
            }


            if(newTokenOut==false && safeSpotFound==false)
            {
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }



        }
        else if(aiDifficultyMode==2)
        {
            //In hard we check for safe spot over token out.
            var newTokenOut=false;
            var safeSpotFound=false;

            var color=getColorEnemy();
          
            var arrX=[];
            var arrY=[];

            if(color==1)
            {
                //Red
                arrX=redNodeX;
                arrY=redNodeY;
            }
            else if(color==2)
            {
                //Yellow
                arrX=yellowNodeX;
                arrY=yellowNodeY;
            }
            else if(color==3)
            {
                //Green
                arrX=greenNodeX;
                arrY=greenNodeY;
            }
            else if(color==4)
            {
                //Blue
                arrX=blueNodeX;
                arrY=blueNodeY;
            }


            megaloop:
            for(var i=0;i<allToken.length;i++)
            {

                var curr=allToken[i];
                var toReach=(curr+diceNo);

               

                if(curr<0)
                continue;


                for(var j=0;j<redNodeX.length;j++) //We are using redNodeX just for the sake of length of the array.
                {
                    

                    for(var k= 0;k<safePosX.length;k++)
                    {
                        if((arrX[toReach]==safePosX[k]) && (arrY[toReach]==safePosY[k]))
                        {
                            baseVal=i+1;
                            safeSpotFound=true;
                            break megaloop;
                        }
                    }
               
                }
            }

            if(safeSpotFound==false)
            {
                if(diceNo>=6) 
                {
                    if(outTokens<4) //Tokens are still in the cage.
                    {
                        for(var i=0;i<allToken.length;i++)
                        {
                            if(allToken[i]<0 && diceNo>=6)
                            {
                               //New Token.
                               newTokenOut=true;
                               diceNo=1;
                               baseVal=i+1;
                               break;
                            }
                        }
                        
                    }
                }
            }


            if(newTokenOut==false && safeSpotFound==false){
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }

        }
    }

        return baseVal;




    

        
        

        
        
       
      /*  for(var i=0;i<allToken.length;i++)
        {
             if(allToken[i]<0 && diceNo>=6)
            {
                //New Token.
                diceNo=1;
                baseVal=i+1;
                break;
            }

            if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
            {
                //Existing Token.
                baseVal=i+1;
                break;
            }
        }*/

        //return baseVal;
    }

    function getFromColorCounter()
    {
        if(gameModeType==3)
        {
            if(colorCounter==1)
            {

            }
        }
    }

        /**
     * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     *
     * @param {Number} srcWidth width of source image
     * @param {Number} srcHeight height of source image
     * @param {Number} maxWidth maximum available width
     * @param {Number} maxHeight maximum available height
     * @return {Object} { width, height }
     */
    function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { width: srcWidth*ratio, height: srcHeight*ratio };
    }

    var playerColor=[0,0,0,0];

    function afterDiceRollLogic()
    {
       // textDiceObj.text=diceNo;
       // if(chanceAIStatus)
       //console.log("AFTER DICE ROLL IS AI :"+getAIChanceStatus());
      if( getAIChanceStatus()) 
       {
        // console.log(" AI CHANCE");
            if(!checkForLastTurns(true)){
                setAICanMoveStatus(false);
              //   console.log("STEP 3.1");

              return;
            }
           //  console.log("STEP 3.2");
         
            setAICanMoveStatus(true);

           selectedTokenNo=generateAiToken();
            //  console.log(" AI selectedTokenNo :"+selectedTokenNo+"BLUE 1 CURR :"+blue1curr);


           if(selectedTokenNo==1)
               {

               // console.log("TARGET PLAYER END 1 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur1()+diceNo; 
        
               }
             else if(selectedTokenNo==2)
              {
               // console.log("TARGET PLAYER END 2 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur2()+diceNo; 
                }
              else if(selectedTokenNo==3)
              {
              //  console.log("TARGET PLAYER END 3 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur3()+diceNo; 
                }
              else if(selectedTokenNo==4)
              {
               // console.log("TARGET PLAYER END 4 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur4()+diceNo; 
               }
          
           timer=0.0;//Making it look like ai is thinking his next move.
        }
        else if(getChanceStatus())
        {
            //console.log(" PLAYER CHANCE");
          setDiceRolledStatus(true);
  
 
           if(!checkForLastTurns(false))
            return;
           

           var canSelectToken=false;
   
          
            if( getCur1()<0  && getCur2()<0 && getCur3()<0 && getCur4()<0) //Cannot get out of the cage.
            {
                if(diceNo<6)
                {
                    idleMoveCounter++;
             
                    sixCounter=0;
                    endMove(false);
                    return;
                }
            }

             
               
            if((getCur1()<56 || getCur2()<56 || getCur3()<56 || getCur4()<56)) //Can still play.  
            {
                canSelectToken=true;
            
            }
             
                    


            
            var checkForAutomation=false;

         

           
            

            //if(diceNo<6)
            {
             
                var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
                
                var outTokens=0; 
                
                var baseVal=0;


                
                var sameTileStatus=false;

                //SAME TILE LOOP.
                for(var i=0;i<allTokens.length;i++)
                {

                    if(allTokens[i]<0 ||allTokens[i]>=56)
                     continue;
                     
                        for(var j=0;j<allTokens.length;j++)
                        {
                            if(allTokens[j]<0 ||allTokens[j]>=56)
                            continue;

                            if(allTokens[i]!=allTokens[j])  
                            {
                                // Tokens are not on same tile.
                                sameTileStatus=false;
                                break;
                            }else{
                                // Tokens are on same tile.
                                baseVal=i+1;
                                sameTileStatus=true;
                            }


                        }    
                    
                }

                if(sameTileStatus)
                {
                 
                    checkForAutomation=true;//For same tile automation.
                    
                } 

             

                var counterAuto=0;
                 for(var i=0;i<allTokens.length;i++)
                {
                     if(allTokens[i]>=0 && ((allTokens[i]+diceNo)<=56) )
                     {
                            counterAuto++;
                            
                     }
                }  

                if(counterAuto==1)
                {
                    checkForAutomation=true;//If tokens are on home run and the addition of the current token with the dice can't reach destination,then automate.
                }

                if(diceNo>= 6)
                {
                    if(getCur1()<0 || getCur2()<0 || getCur3()<0 || getCur4()<0 )
                    {    
                        checkForAutomation=false; //Automation cannot happen if it is a six and tokens are still caged.
                    }
                }
             }

            if(checkForAutomation)
            {
               
                var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
                var baseCounter=0;
                var baseToken=0;
             
                for(var i=0;i<allTokens.length;i++)
                {
                 
                    if(allTokens[i]>-1 && allTokens[i]<56 && ((allTokens[i]+diceNo)<=56))
                    {
                        baseCounter++;
                        baseToken=i+1;    
                    }

                }


            
                 if(baseCounter==1)//Automate token selection
                {
                
                   if(baseToken==1)
                     targetPlayerEnd=getCur1()+diceNo;
                  else if(baseToken==2)
                     targetPlayerEnd=getCur2()+diceNo;
                  else if(baseToken==3)
                     targetPlayerEnd=getCur3()+diceNo;
                  else if(baseToken==4)
                     targetPlayerEnd=getCur4()+diceNo;

                      
                    if(targetPlayerEnd>56) //The automated token can not reach it's target. //so end the move.
                    {
                        idleMoveCounter++;
                      //  console.log("Not repeat move");
                        sixCounter=0;
                        endMove(false);
                        return;
                    }   


                     canSelectToken=false;
                     timer=0.3;//So that first move is instant.
                     setSelectionTokenStatus(false);
                     selectedTokenNo=baseToken;
                     setPlayerReady(true);
                   }

                 else if(baseCounter>=1)//All the tokens are on the same tile
                 {

                     if(baseVal==1)
                          targetPlayerEnd=getCur1()+diceNo;
                     else if(baseVal==2)
                         targetPlayerEnd=getCur2()+diceNo;
                     else if(baseVal==3)
                         targetPlayerEnd=getCur3()+diceNo;
                    else if(baseVal==4)
                      targetPlayerEnd=getCur4()+diceNo;



                   

                      
                    if(targetPlayerEnd>56) //The automated token can not reach it's target. //so end the move.
                    {
                        //console.log("Automated token can not reach it's target");
                       
                        sixCounter=0;
                        idleMoveCounter++;
                        endMove(false);
                        return;
                    }    

                      canSelectToken=false;
                      timer=0.3;//So that first move is instant.
                      setSelectionTokenStatus(false);
                      selectedTokenNo=baseVal;
                      setPlayerReady(true);
                  }
              
            }
     


            if(canSelectToken)
            {
                setSelectionTokenStatus(true);
                showBadges();
             }  
            

        }
         
    }


   /* window.addEventListener("focus", handleBrowserStateFOCUS.bind(context, true));
    window.addEventListener("blur", handleBrowserStateBLUR.bind(context, false));

    function handleBrowserStateFOCUS(isActive){
    // do something
    console.log("FOCUSED")
    }
    function handleBrowserStateBLUR(isActive){
        // do something
        console.log("BLUR")
        }*/

    function startTween2()
    {
        game.add.tween(titleCupBG).to({angle:'-10'}, 850, Phaser.Easing.Linear.None, true, 100).onComplete.add(startTween1, this);
        

    }

    function startTween1()
    {
        game.add.tween(titleCupBG).to({angle:'+10'}, 850, Phaser.Easing.Linear.None, true, 100).onComplete.add(startTween2, this);

    }
 

    var gameModevsAI;



    var selectDifficultyStatus=false;
    var selectNoOfPlayerStatus=false;
    function update() 
    {
        // textObj.text = "PRESSED ";
       // var =this;

        deltaTime = game.time.elapsed/1000;
        
      //  console.log("FOCUSED :"+focused);

        //Example on how to use a timer //IMP:init variable with zero
        //{
        //  timer+=deltaTime;
        //}

        if(splashStatus)
        {
             if(splashTimer>=splashTimerEnd)
             {

                 
                // console.log("BOUNDS X:"+game.scale.bounds.x);
                // console.log("BOUNDS Y:"+game.scale.bounds.y);
 
                 
                document.body.style.backgroundColor = "#0000ff";
                document.body.style.backgroundImage = "url('img/Ludo_board_bg.png')";
                 document.body.style.backgroundRepeat = "no-repeat";
                document.body. style.backgroundSize ="cover"; //"100% 100%";
                document.body. style.backgroundPosition = "center center";

               
                splashBG.visible=false;
                splashStatus=false;
                menuStatus=true;
                splashTimer=0;

                game.add.tween(titleBG).from( { y: -1000 }, 800, Phaser.Easing.Bounce.Out, true);

                 game.add.tween(titleCupBG).to({angle:'+10'}, 850, Phaser.Easing.Linear.None, true, 100).onComplete.add(startTween2, this);
 
                showButtons();
                // var tween = game.add.tween(titleCupBG).from( { z: -1000 }, 800, Phaser.Easing.Bounce.Out, true);
 
                // tween.repeat(10, 1000);

            }
            else{
                splashTimer+=deltaTime;
            }
            
            return;
        }

        // titleCupBG.angle+=Math.sin(deltaTime*20)*20;
        // console.log(titleCupBG.angle);

      
        
         
        game.input.keyboard.onDownCallback = function() 
        { 
            
        
            var key=game.input.keyboard.event.keyCode;
         // console.log("KEY :"+key);
            if(menuStatus==true)
            {          

                if(key!=13)
                return;
                
             
                 //Disable menu status
                 menuStatus=false;
                 // introBG.visible=false;
                 introBGactive(false);
                 //Prepare for modestatus
                 modeStatus=true;
                 //inModeBG.visible=true;
                 modeBGactive(true);
                 return;
            }
            else if(modeStatus==true)
            {

                if(key==52)
                {
                 
                  selectNoOfPlayerStatus=true;
                  modeStatus=false;
                  modeBGactive(false);
                  gameModevsAI=false;
                  //console.log("SET GAME MODE VS AI FALSE");
                  
                }
                else if(key==53)
                {
                    modeStatus=false;
                   selectNoOfPlayerStatus=true;
                  // inModeBG.visible=false;
                  gameModevsAI=true;
                 // console.log("SET GAME MODE VS AI TRUE");

                  modeBGactive(false);
                  difficultyBGactive(false);
                  
                }
                /*else if(key==54)
                {
                    gameModeType=1; //DEBUG ONLY.
                }*/
                else
                {
                    return;
                }
                noOfPlayerBGActive(true);

               
               

               //  console.log("GAME MODE TYPE :"+gameModeType);
                return;
            }
            else if(selectNoOfPlayerStatus)
            { 
                 if(key==52) //4 //vs 2
                {
          
                   
                    if(gameModevsAI)
                    {
                        gameModeType=0;
                        noOfPlayerBGActive(false);
                        selectDifficultyStatus=true;
                        difficultyBGactive(true); 
                    }
                    else{
                        gameModeType=1;
                        selectColorStatus=true;
                        noOfPlayerBGActive(false);
                        markerSelectActive(true) 
                    }
                   
                }
                else if(key==53) //5 //vs 4
                {
                    if(gameModevsAI)
                    {
                        gameModeType=3;
                        selectDifficultyStatus=true;
                        noOfPlayerBGActive(false);
                        difficultyBGactive(true);
                    }
                    else{
                        gameModeType=2;
                 //      selectColorStatus=true;
                        noOfPlayerBGActive(false);
                     //   markerSelectActive(true)
                     setColorPlayer(playerColor[0]);


                     selectColorStatus=false;
                      markerSelectActive(false);
                    // inGameBG.visible=true;
                     boardBG.visible=true;
                     titleBG.visible=false;
                     titleCupBG.visible=false;
                     gameStatus=true;
     
                     setDiceRolledStatus(false);
                     setShouldRollDiceStatus(true);
                     setChanceStatus(true);
                     
                    // chanceAIStatus=false;
                    setAIChanceStatus(false); 
                    animateBGStatus=true;
                     console.log("Your turn ! press 5 to roll dice");
                    
     
                     resetDiceSprites();
                    //  showAds();
                     initPlaces();
                     hideBadges();
                    }
                }
                else if(key==54) //5 //vs 4
                {
                    if(gameModevsAI)
                    {
                     
                    }
                    else{
                        gameModeType=4;
                        selectColorStatus=true;
                        noOfPlayerBGActive(false);
                        markerSelectActive(true)
                    }
                }
                else{
                    return;
                }
                selectNoOfPlayerStatus=false;


                return;
            }
            else if(selectDifficultyStatus)
            {
               
                if(key==52)//4
                {
                    console.log("EASY");
                    aiDifficultyMode=0;
                }
                else if(key==53) //5
                {
                    console.log("MEDIUM");
                    aiDifficultyMode=1;
                }
                else if(key==54)//6
                {
                    console.log("HARD");
                    aiDifficultyMode=2;
                }else{
                    return;
                }
                //inDifficultyBG.visible=false;
                difficultyBGactive(false);
                selectDifficultyStatus=false;
                selectColorStatus=true;
             //   inPickBG.visible=true;
                markerSelectActive(true);  
                selectColorStatus=true;
                selectDifficultyStatus=false;

            }
            else if(selectColorStatus==true)
            {
                
               // console.log("KEY :"+key);
                if(key==56)//8
                {
                    playerColor[0]=4;//blue
                }
                else if(key==54)//6
                {
                    playerColor[0]=2;//yellow
                }
                else if(key==52)//4
                {
                    playerColor[0]=1;//red
                }
                else if(key==53) //5
                {
                    playerColor[0]=3;//green
                }
                else
                {
                    return;
                }
                setColorPlayer(playerColor[0]);


                selectColorStatus=false;
                 markerSelectActive(false);
               // inGameBG.visible=true;
               titleBG.visible=false;
               titleCupBG.visible=false;
                boardBG.visible=true;
                gameStatus=true;

                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setChanceStatus(true);
                
               // chanceAIStatus=false;
               setAIChanceStatus(false); 
               animateBGStatus=true;
                console.log("Your turn ! press 5 to roll dice");
                 //textEnterToRollObj.visible=true;
               // textEnterToRollObj.text="Press Enter to roll the dice";

               resetDiceSprites();
            //    showAds();
                initPlaces();
                hideBadges();
               // showBadges();
                return;
            }
            else if(gamePaused)
            {
                if(key==0 || key==27)
                {
                    //Resume.
                    handleResume();
                }
                else if(key==53)
                {
                    //Restart.
                    handleRestart();
                }
                else if(key==54)
                {
                    //Home.
                    handleHome();
                }
            } 
            else if(gameStatus==true && getChanceStatus())
            {
               // console.log("HERE??");

              if(key==0 || key==27)
              {
                    {
                        handlePause();
                        return;
                    }
          
              }

              else if(animateDiceStatus==true)
              return;

              else if(getShouldRollDiceStatus()   && !getDiceRolledStatus())
              {
                
                if(key==13 || key==53)
                {    
                    receivedInputFromMP("1","DICE ROLL");
                  //  console.log("CALLED THIS 1");
                    animateDiceStatus=true;
                    textEnterToRollObj.visible=false;
                    hidePointers();
                    setShouldRollDiceStatus(false);
                }
                else
                {
                    return;
                }
                  
                }
               else if(getSelectTokenStatus())  
                {

                    if(key==50)//2
                    {
                        if(getCur1()<0)
                        {
                            if(diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        }
                        else
                        {
                            if((getCur1()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=1;
                        targetPlayerEnd=getCur1()+diceNo;
                    //    console.log("Target player end :"+targetPlayerEnd +"1");
                    }
                    else if(key==52)//4
                    {
                        if(getCur2()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        } else
                        {
                            if((getCur2()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=2;
                        targetPlayerEnd=getCur2()+diceNo;
                      //  console.log("Target player end :"+targetPlayerEnd +"2");
                    }else if(key==54)//6
                    {
                        if(getCur3()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        }
                          else
                        {
                            if((getCur3()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=3;
                        targetPlayerEnd=getCur3()+diceNo;
                     //   console.log("Target player end :"+targetPlayerEnd +"3");
                    }else if(key==56)//8
                    {
                        if(getCur4()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        } 
                         else
                        {
                            if((getCur4()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=4;
                        targetPlayerEnd=getCur4()+diceNo;
                   //     console.log("Target player end :"+targetPlayerEnd +"4");
                    }else{

                        return;
                    }











                    setSelectionTokenStatus(false);
                    //selectTokenStatus=false;
                //    playerReady=true;
                    setPlayerReady(true);
                    timer=0.3;//So that first move is instant.
                }

               
 
            }
            else if(gameOverStatus)
            {
                console.log("Game Over!!");
                if(key==53){
                   
                    handleRestart();
                    //Restart.
                
                }else if(key==54){
                    //Home.
                    //Press any key status.
                    handleHome();

                }
            }

        }

      //  debugbadges();

        if(gameOverStatus)
        {
        //    console.log("Stop executing below code."); 
            return;
        }
        if(gamePaused)
        {
         //   console.log("Stop executing below code."); 
            return;
        }

        if(animateDiceStatus){
            animateDice(deltaTime);
          //  console.log("Animating dice");
        }

        if(shouldObserverDiceResult){
            diceResultObservance(deltaTime);
        }


        if(gameStatus)
        {
        if(getChanceStatus()==true)
        //if(chancePlayerStatus==true)
        {
           // animateBG=true;
          
           animateBG(getColor(),deltaTime);
             //if(diceRolledStatus)
             if(getDiceRolledStatus())
             {
                 
                //if(selectTokenStatus==false &&  getPlayerReady())//playerReady==true) 
                
                if(!getSelectTokenStatus() &&  getPlayerReady())
                {
                    
                     //Player has selected his token and dice no is ready ,update your movement.
                   if(timer>=animTimer)
                   {
                       
                    
                       movePlayer( getColor(),selectedTokenNo,false);
                       timer=0;
                   }
                   
                   animateMarker(getColor(),selectedTokenNo,deltaTime);
                   timer+=deltaTime;
                 } 
                
                
             }

        
             //if(selectTokenStatus)
             if(getSelectTokenStatus())
             {
                updateBadges(deltaTime,getColor());
             }

             if(getShouldRollDiceStatus() && !getDiceRolledStatus()){
                 updatePointers(deltaTime,false);
             }
              
            //  console.log("STILL HERE");
        }
       // else if(chanceAIStatus==true)
        else if(getAIChanceStatus()==true)
       {
     //   console.log("STEP 1.2 "); 
          // animateBG(enemyColor[0],deltaTime);
          animateBG( getColorEnemy(),deltaTime);
            /*if(!aiPrepared)
            {
             
                //Roll the dice.
 
 

                aiPrepared=true;
                
             
                
            }
            else*/
            {
                if(!getAIReactedStatus())
                {
                    //console.log("STEP 1.3 "); 

                    if(aiReactionTimer>1.0 ) 
                    {
                      //   console.log("STEP 2 :"+colorCounter);

                        setAIReactedStatus(true);
                        aiReactionTimer=0;
                        animateDiceStatus=true;
                        hidePointers();
                                   
                    }
                    else
                    {

                        aiReactionTimer+=deltaTime;
                        updatePointers(deltaTime,true);
                       //  console.log("STEP 1.5 :"+colorCounter);                      
                    }

                    return;

                }
                

                
               // if(aiReactedStatus && aiCanMove)
               if(getAIReactedStatus() && getAICanMoveStatus()) 
               {
               //  console.log("STEP 4");

                    if(timer>=animTimer)
                    {
                      //  aiReady=true;
                        setAIReadyStatus(true);
                       // movePlayer(enemyColor[0],selectedTokenNo,true);
                        movePlayer(getColorEnemy(),selectedTokenNo,true); 
                       timer=0;
                     }
                    timer+=deltaTime;
                }
                if(getAIReadyStatus())
                {
                     animateMarker(getColorEnemy(),selectedTokenNo,deltaTime);
                }
            }

            

            
        }
        else if(animateKillStatus==true)
        {
            if(timer>=0.05)
            {
                animateKill();
                timer=0;
            }
            timer+=deltaTime;

        }
    }
       
    }

 


    function handleRestart(){
      //  showAds(1);
      //showAds();
         showAds();
        initPlaces();
        resetVariables();
        gameOverStatus=false;
       gameStatus=true;
       gamePaused=false;
      // placeDiceOnDock();
       initRoll();

    }
    function handleHome(){
        resetVariables();
        gameOverStatus=false;
        menuStatus=true;
        modeStatus=false;
        selectColorStatus=false;
        gameStatus=false;
        resetGame();
        menuStatus=false;
        // introBG.visible=false;
        introBGactive(false);
        //Prepare for modestatus
        modeStatus=true;
         //inModeBG.visible=true;
        modeBGactive(true);
        showButtons();
    }



};