// It has old type calculator so it doesn't show operator  so if u press any numbers and press any operator and again anynumbers(it's look reset but it store oldvalue)
// and if u press = then it calculate. and c is clean b
let monitor = {
   x:30,y:150,
   w:340,h:200

}

// about mock 
let Prices = {
  'I0' :{p:[],name : 'PineApple'},
  'I1' :{p:[],name : 'Jungle'},
  'I2' :{p:[],name : 'Teasla'},
  'I3' :{p:[],name : 'Samsong'},
  'C0' :{p:[],name : 'BeatCoin'},
  'C1' :{p:[],name : 'RiteCoin'},
  'C2' :{p:[],name : 'Alphabet'},
  'C3' :{p:[],name : 'Vellas'},
}

let Rprices = [];
let NumPoints = 30;
let turnOn = [false,false,false];
let clicked =false;
let currentItem = Prices.I0;
let currentCoin = Prices.C0;
let currentTopic = Prices.I0;
let coinWeight ;
// about calculator 
  //   operatering ÷ × − +
let operators = {
    'plus' : function(a,b) {
      return a+b;
    },
    'minus' : function(a,b) {
      return a-b;
    },
    'multiple' : function(a,b) {
      return a *b;
    },
    'divide' : function(a,b) {
      return int(a/b);
    },
    'equal' : function(a,b) {
      return b;
    }
  
}
let currentV= nextV = 0
let displayL = 11;
let answer ;
let answerL =0;
var numbers = [];
let operated = false;
let Isoperated = { 'plus' : false,
                   'minus' : false,
                   'multiple' : false,
                   'divide' : false,
                   'equal' : false

}
//clock from p5.js

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let input;
var Mymotto ="Anything could be art!";
//
function setup() {
  // create the canvas (1200px wide, 800px high)
  createCanvas(1200, 800);
 
  strokeWeight(2); 
  rect(0, 0, width, height);
  MarketSetting();
  clockSetting(1100,70,100,100);
  input = createInput();
  input.position(500,600);
  input.size(200,50);
}
function draw() {
 background(245,225,197);
  // your cool workstation code goes in this draw function
  
  drawDesk();
  drawMonitor(monitor.x,monitor.y,monitor.w,monitor.h);
  drawClock();
  drawCalculator(50,580,140,180);
  //https://editor.p5js.org/tom.smith/sketches/fASj3inoc
  Motto();


  drawDrink(800,590,100,30,190);
  drawDrink(900,590,100,30,190);
  drawDrink(1000,590,100,30,190);
  drawDrink(1100,590,100,30,190);
  drawDrink(1100,400,100,30,190);

}
function Motto() {
 
  fill(255,255,255);
  strokeWeight(4);
  stroke(0)
  rect(330,30,530,90);
  strokeWeight(0);
  textSize(20);
  fill(0,0,0);
  text("Motto! (Write your motto:D)",332,50);
  textSize(40);
    text(Mymotto,340,90);
  
 

}

function clockSetting(x,y,w,h) {
  let radius = min(w, h) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  cx = x ;
  cy = y ;
}
//https://p5js.org/examples/input-clock.html 
function drawClock() {
 noStroke();
 fill(155, 200, 0,210);
 ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
 fill(255, 255, 255);
 ellipse(cx, cy, clockDiameter, clockDiameter);


 let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
 let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
 let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

 stroke(0);
 strokeWeight(1);
 line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
 strokeWeight(2);
 line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
 strokeWeight(4);
 line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

 // Draw the minute ticks
 strokeWeight(2);
 beginShape(POINTS);
 for (let a = 0; a < 360; a += 6) {
   let angle = radians(a);
   let x = cx + cos(angle) * secondsRadius;
   let y = cy + sin(angle) * secondsRadius;
   vertex(x, y);
 }
 endShape();

}

function keyPressed() {
  if( keyCode == ENTER) {
     Mymotto= input.value();
  }
}



function drawDesk() {
  strokeWeight(4);
  stroke(0,0,0);
  fill(198,133,101);
  rect(2,448,1194,350);
  strokeWeight(0);
}


function drawDrink(x,y,w,h,l) {


 
  //body
 //body edge
 strokeWeight(0);
 fill(192,211,103);
 rect(x-w/2,y,w,l);
 strokeWeight(5);
 
 line(x-w/2, y, x-w/2, y+l);
 line(x+w/2, y, x+w/2, y+l);

  //top
  
  fill(122,128,121);
  ellipse(x,y,w,h);

   
  strokeWeight(5);

 //bottom
 fill(192,211,103);
 //ellipse(x, y+l, w, h);
 arc(x, y+l, w, h,0,PI);
 
 fill(0,0,0);
 push();
 textSize(70);
 translate(x-0.13*w,y+0.6*l);
 rotate(6);
 
 strokeWeight(6);
 textStyle(BOLDITALIC);
 stroke(188,189,194);
 text("V",0,0);
 
 
 pop();

}
// it is old type calculator so it doesn't show operator  so if u press any numbers and press any operator and again anynumbers(it's look reset but it store oldvalue)
// and if u press = then it calculate.
function drawCalculator(x,y,w,h) {
   strokeWeight(1);
   stroke(0,0,0);
     //main
      fill(103,104,122);
      rect(x,y,w,h);
    //screen
     fill(202,225,213);
     rect(x+1,y+20,w-2,30);
     //show number
     fill(0,0,0);
     textSize(20);
     if(Isoperated.equal == false || answer ==0) {
      for(let i=0; i<numbers.length; i++) {
        text(numbers[i],x+125-10*i,y+45);
       }
     } else if(answer>=0) {
      text(answer,x+135-10*answerL,y+45);
    
     }
     else {
      text(answer,x+125-10*answerL,y+45);
     }
     



    //button
     //number pad 0-9 + . and e (4x3)
     for(let i =0; i<4; i++) {
      for(let j=0; j<3; j++) {
        fill(159,165,172);
        rect(x+30 +  j*30, y+80 +i*25,
            20,20);
          //  textSize(13);
          //   fill(255, 255, 255);
          //   text(j+ (9-i*3), x+36 +  j*30, y+95 +i*25);
          
       }
     }
       


      // button is clicked?
      if(mouseX>=x+30 && mouseX<=x+50 && mouseY>=y+130 && mouseY<=y+150 && clicked &&mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
        if(operated == true)
       {
        resets(); 
       }
       numbers.unshift(1);
     
    
        
      
      }
      else if(mouseX>=x+60 && mouseX<=x+80 && mouseY>=y+130 && mouseY<=y+150 && clicked && mouseIsPressed &&numbers.length<displayL){
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(2);
       
      }
      else if(mouseX>=x+90 && mouseX<=x+110 && mouseY>=y+130 && mouseY<=y+150 && clicked &&mouseIsPressed && numbers.length<displayL){
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(3);
      
      }


      else if(mouseX>=x+30 && mouseX<=x+50 && mouseY>=y+105 && mouseY<=y+125 && clicked &&mouseIsPressed && numbers.length<displayL) {
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(4);
       
     
      }
      else if(mouseX>=x+60 && mouseX<=x+80 && mouseY>=y+105 && mouseY<=y+125 && clicked && mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
    
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(5);
       
      }
      else if(mouseX>=x+90 && mouseX<=x+110 && mouseY>=y+105 && mouseY<=y+125 && clicked &&mouseIsPressed && numbers.length<displayL) {
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(6);
       
      }


      else if(mouseX>=x+30 && mouseX<=x+50 && mouseY>=y+80 && mouseY<=y+100 && clicked && mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(7);
        
        
      }
      else if(mouseX>=x+60 && mouseX<=x+80 && mouseY>=y+80 && mouseY<=y+100 && clicked && mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(8);
      
     
      }
      else if(mouseX>=x+90 && mouseX<=x+110 && mouseY>=y+80 && mouseY<=y+100 && clicked && mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
        if(operated == true)
        {
          resets(); 
        }
        numbers.unshift(9);
        

      }
      // 0 button
      else if(mouseX>=x+30 && mouseX<=x+50 && mouseY>=y+155 && mouseY<=y+175 && clicked &&mouseIsPressed &&numbers.length<displayL) {
        clicked=false;
        if(operated == true)
       {
        resets(); 
       }
       numbers.unshift(0);
      }



      // clear button 
      else if (mouseX>=x+5 && mouseX<=x+25 && mouseY>=y+155 && mouseY<=y+175 && mouseIsPressed &&clicked) {
     clean();
        
      }

      // equal button
      else if(mouseX>=x+90 && mouseX<=x+110 && mouseY>=y+155 && mouseY<=y+175 && clicked &&mouseIsPressed &&(operated==false)) {
        clicked = false;
     
        for(let i=0; i<numbers.length; i++) {
          nextV += numbers[i]*pow(10,i)
       }
      
        if(Isoperated.plus ==true || Isoperated.multiple ==true || Isoperated.divide ==true
          || Isoperated.minus == true) {
         
            resets();
          if(Isoperated.plus == true) {
            answer= operators.plus(currentV,nextV);
          }
         
          else if (Isoperated.divide == true) {
            answer= operators.divide(currentV,nextV);
          }
          else if (Isoperated.multiple == true) {
            answer= operators.multiple(currentV,nextV);
          }
          else if (Isoperated.minus == true) {
            answer= operators.minus(currentV,nextV);
          }
         
          //measure digit number
          if(answer>=0) {
            for(let i=0; i<displayL; i++) {
              if(answer>=pow(10,i)) {
                answerL +=1;
              }
       }
          } // if answer is minus
          else {
             let manswer =-1*answer;
             for(let i=0; i<displayL; i++) {
              if(manswer>=pow(10,i)) {
                answerL +=1;
              }
       }

          }
          
          nextV=0;
          currentV=0;
          Isoperated.plus =false;
          Isoperated.minus =false;
          Isoperated.multiple =false;
          Isoperated.divide =false;
          operated =false;
          numbers.unshift(answer);
          Isoperated.equal = true;
        }
    

       
      }
      
      // else if(!(mouseX>=x+120 && mouseX<=x+150 && mouseY>=y+55 && mouseY<=y+175 && mouseIsPressed &&clicked)) {
      //    clikced =false;
      // }
        

        //button numbering
       for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
          textSize(13);
            fill(255, 255, 255);
            text(j+ (7-i*3), x+36 +  j*30, y+95 +i*25);
        }
       }
        //other 3 buttons 0 . =
       text('0', x+36, y+170);
       textSize(30);
       text('.', x+67, y+167);
        //broken . button
        line(x+60, y+155+5,x+67,y+155+5);
        line(x+67, y+155+5,x+67,y+155+10);
        line(x+67, y+155+10,x+73,y+155+10);
        line(x+73, y+155+10,x+73,y+155+14);
        line(x+73, y+155+14,x+78,y+155+14);
        line(x+78, y+155+14,x+78,y+155+19);



       fill(46,51,49);
       strokeWeight(0);
       rect(x+90, y+155, 20, 20);
        textSize(13);
       fill(255,255,255);
       text('=', x+96, y+170);

          






       // operator ÷ × − + // operator ÷ × − +
       fill(46,51,49);
       for(let j =0; j<3; j++) {
        
        rect(x+118, y+55 +j*25,
          20,20);
       }
       rect(x+118, y+130,
        20,45);
       textSize(20);
       fill(255,255,255);
       text('÷', x+121.5,y+71);
       text('×', x+121.5,y+96);
       textSize(18);
       text('−', x+121,y+122);
       textSize(24);
       text('+', x+120,y+160);
        
    

       //CE and C button
       
       textSize(13);
       fill(176,65,104);
       rect(x+5, y+155, 20, 20);
       fill(255,255,255);
       text('C', x+10,y+170);

       runningOperator(x,y);
       

         
     
      

}
//clean all data (calcualtor)
function clean()  {
  while(numbers.length>0) {
    numbers.pop();
}
  operated= false;
  Isoperated.divide = false;
  Isoperated.multiple = false;
  Isoperated.plus = false;
  Isoperated.minus = false;
  currentV=nextV =0;
  clicked=false;
  answer = 0;
  answerL = 0;
}
 // remove before data(calc)
function resets() {
  answerL = 0;
  Isoperated.equal = false;
  while(numbers.length>0) {
    numbers.pop();
}
operated =false;
 
}
function runningOperator(x,y) {
  if(clicked && mouseIsPressed) {
// + operator
  if(mouseX>=x+120 && mouseX<=x+150 && mouseY>=y+135 && mouseY<=y+175  ) {
        
    //store value 
    if(operated == false) {
      for(let i=0; i<numbers.length; i++) {
       currentV += numbers[i]*pow(10,i)
     }
     operated =true;
     Isoperated.plus = true;
    }
     clicked=false;
  }
  // - operator 
  else if (mouseX>=x+120 && mouseX<=x+150 && mouseY>=y+105 && mouseY<=y+125  ) {
    if(operated == false) {
      for(let i=0; i<numbers.length; i++) {
       currentV += numbers[i]*pow(10,i)
     }
     operated =true;
     Isoperated.minus = true;
    }
     clicked=false;
  }
  // × oeprator
  else if(mouseX>=x+120 && mouseX<=x+150 && mouseY>=y+80 && mouseY<=y+100  ){
     
      //store value 
      if(operated == false) {
        for(let i=0; i<numbers.length; i++) {
         currentV += numbers[i]*pow(10,i)
       }
       operated =true;
       Isoperated.multiple = true;
      }
       clicked=false;

  }
   // divide oeprator
   else if(mouseX>=x+120 && mouseX<=x+150 && mouseY>=y+55 && mouseY<=y+75   ){
     
    //store value 
    if(operated == false) {
      for(let i=0; i<numbers.length; i++) {
       currentV += numbers[i]*pow(10,i)
     }
     operated =true;
     Isoperated.divide = true;
    }
     clicked=false;

}
  }
  

}

function drawMonitor(x,y,w,h) {

    LeftMonitor(x,y,w,h);  
    MiddleMonitor(x,y,w,h);
   RightMonitor(x,y,w,h);
   
}

function LeftMonitor(x,y,w,h) {
 
       //monitor stand
       fill(0,0,0,240);
       strokeWeight(1);
       rect((x+w)/2, y+h, 25, 170);
       fill(10,10,10,240);
       ellipse((x+w)/2+12, y+h+170,190,100 );
       
     //screen
     fill(0,0,0);
     rect(x, y, w, h);
     fill(192,192,192);
     rect(x, y+h-20, w, 20);
     Lscreen(x,y,w,h);
  


     //button
     TurnMonitor(x,y,w,h,0);
}
function Lscreen(x,y,w,h) {
  if(turnOn[0] ==true) {
    fill(255,255,255);
    rect(x, y, w, h-20);

   
     //BreakingNews  
    drawAtricle(x,y,w,h);
  }
}
function drawAtricle(x,y,w,h) {
  stroke(0,0,0);
  strokeWeight(3);
  
 
  line(x+1,y+60,x+w-1,y+60);
  line(x+0.74*w,y+60,x+0.74*w,y+h-21);
  HeadLine(x,y);
  ArticleSidebar(x+0.74*w+3,y+42);
  ArticleContent(x,y);

  strokeWeight(0);

}

function HeadLine(x,y) {
  textSize(16);
  //Stock Marktet
  if(currentTopic.name =="PineApple") {
    if(currentTopic.p[28] > currentTopic.p[29]) {
      text("PineApple's PineX13 user evaluation",x+15,y+30);
      text("and Bench score is good !",x+40,y+50);
    }
    else {
      text("PineApple's PineX13 Bench score is bad",x+15,y+30);
    }
  }
  else if(currentTopic.name =="Jungle") {
    if(currentTopic.p[28] > currentTopic.p[29]) {
      text("Jungle net-profit over the Maasta",x+15,y+30);
    }
    else {
      text("Jungle total sales revenue is fallling down!",x+15,y+30);
    }
  }

  else if(currentTopic.name =="Teasla") {
    if(currentTopic.p[28] > currentTopic.p[29]) {
      text("Many koreans have become fans of ",x+15,y+30);
      text("Teasla tea!",x+40,y+50);
    }
    else {
      text("Some of Teasla plant factories were burned " ,x+15,y+30);
      text("Yesterday",x+40,y+50);
    }
  }

  else if(currentTopic.name =="Samsong") {
    if(currentTopic.p[28] > currentTopic.p[29]) {
      text("Samsung annouced their new 4 nano",x+15,y+30);
      text("chip technology",x+40,y+50);
    }
    else {
      text("Samsong IC Yield is lesser than 40 percent" ,x+15,y+30);
    }
}
  // Coin
  
  else if(currentTopic.name =="BeatCoin") {
    if(currentTopic.p[28] > currentTopic.p[29]) {
      text("Beatcoin hashrate increases ",x+15,y+30);
    }
    else {
      text("Surprisingly increasment of the" ,x+15,y+30);
      text("mining rate BeatCoin",x+40,y+50);
    }
}
  
else if(currentTopic.name =="RiteCoin") {
  if(currentTopic.p[28] > currentTopic.p[29]) {
    text("Ritecoin hashrate increases ",x+15,y+30);
  }
  else {
    text("The delisting of RiteCoin is being discussed" ,x+15,y+30);
  }

}

else if(currentTopic.name =="Alphabet") {
  if(currentTopic.p[28] > currentTopic.p[29]) {
    text("Alphabet hashrate increases ",x+15,y+30);
  }
  else {
    text("The development of alphabet has stopped" ,x+15,y+30);
  }

}

else if(currentTopic.name =="Vellas") {
  if(currentTopic.p[28] > currentTopic.p[29]) {
    text("Unpredicable price fluctuations:Vellas ",x+15,y+30);
  }
  else {
    text("Vellas hashrate has declined" ,x+15,y+30);
  }

}





















}

function Manual() {

}

function ArticleSidebar(x,y) {
  textSize(12);
  strokeWeight(1);
  text("Stock Market",x,y+30);
  text("Cryptocurrency",x-1,y+90);
  textSize(11);
  fill(30,30,255);
  
  text(Prices.I0.name,x+2,y+43);
  text(Prices.I1.name,x+2,y+54);
  text(Prices.I2.name,x+2,y+65);
  text(Prices.I3.name,x+2,y+76);
  //Market stock
  if( mouseX>= x+2 && mouseX<=x+53&& mouseY>= y+33 && mouseY<=y+42 && mouseIsPressed && clicked) {
    currentTopic = Prices.I0;
  }
  else if( mouseX>= x+2 && mouseX<=x+35&& mouseY>= y+44 && mouseY<=y+53 && mouseIsPressed&& clicked) {
    currentTopic = Prices.I1;
  }
  else if( mouseX>= x+2 && mouseX<=x+32&& mouseY>= y+55 && mouseY<=y+64 && mouseIsPressed&& clicked) {
    currentTopic = Prices.I2;
  }
  else if( mouseX>= x+2 && mouseX<=x+45&& mouseY>= y+66 && mouseY<=y+75 && mouseIsPressed&& clicked) {
    currentTopic = Prices.I3;
  }



  text(Prices.C0.name,x+2,y+103);
  text(Prices.C1.name,x+2,y+114);
  text(Prices.C2.name,x+2,y+125);
  text(Prices.C3.name,x+2,y+136);

  if( mouseX>= x+2 && mouseX<=x+46&& mouseY>= y+93 && mouseY<=y+102 && mouseIsPressed && clicked) {
    currentTopic = Prices.C0;
  }
  else if( mouseX>= x+2 && mouseX<=x+45&& mouseY>= y+104 && mouseY<=y+113 && mouseIsPressed && clicked) {
    currentTopic = Prices.C1;
  }
  else if( mouseX>= x+2 && mouseX<=x+48&& mouseY>= y+115 && mouseY<=y+124 && mouseIsPressed && clicked) {
    currentTopic = Prices.C2;
  }
  else if( mouseX>= x+2 && mouseX<=x+30&& mouseY>= y+126 && mouseY<=y+135 && mouseIsPressed && clicked) {
    currentTopic = Prices.C3;
  }
}
function ArticleContent(x,y) {
  textFont('Courier New');
   textSize(10);
   fill(0,0,0);

     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+80);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+90);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+100);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+110);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+120);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+130);
     text(currentTopic.name+" is aaaaaaaaaaaa",x+70,y+140);
     if(currentTopic.name =="BeatCoin") {
     BeatIcon(x+30,y+100,50);
 
     }
     else if(currentTopic.name == "RiteCoin") {
     RiteIcon(x+30,y+100,50);
     }
     else if(currentTopic.name == "Alphabet") {
      AlphabetIcon(x+30,y+100,50);
      }
      else if(currentTopic.name == "Vellas") {
        VellasIcon(x+30,y+100,50);
        }
      else {
       MockBuilding(x+13,y+70,40,90);
      }
  textFont('Malgun Gothic');




}

  //Mock building
function MockBuilding(x,y,w,h) {
  fill(192,192,192);
   rect(x,y,w,h);
   fill(30,30,255);
   for (let i=1; i<6; i++) {
    rect(1.12*x,y+0.18*i*h-10, 0.7*x,0.13*h);
   }
   

}

  //coins' shape
function BeatIcon(x,y,scale) {
  fill(241,196,15);
  circle(x,y,scale);
 
  fill(243,156,18);
  circle(x,y,0.75*scale);
  stroke(241,196,15);
  fill(241,196,15);
  line(x-0.04*scale,y-0.3*scale,x-0.04*scale,y-0.3*scale+0.53*scale);
  line(x+0.03*scale,y-0.3*scale,x+0.03*scale,y-0.3*scale+0.53*scale);
  let tsize =0.65*scale;
  textSize(tsize);
 
  text("B",x-0.30*tsize,y+0.25*tsize);
  //  text("B",0.91*x,1.02*y);
  stroke(0);
}
function RiteIcon(x,y,scale) {

  fill(52,93,157);
  circle(x,y,scale);
  stroke(255,255,255);
  fill(255,255,255);
  let tsize =0.8*scale;
  textSize(tsize);
  textStyle(BOLDITALIC);
  text("R",x-0.35*tsize,y+0.25*tsize);
  textStyle(NORMAL);
}

function AlphabetIcon(x,y,scale) {
  fill(0,0,0);
  circle(x,y,scale);
  fill(255,255,255);
  circle(x,y,0.9*scale);
  stroke(0,0,0);
  fill(0,0,0);
  let tsize =0.6*scale;
  textSize(tsize);
  textStyle(ITALIC);
  text("a",x-0.32*tsize,y+0.2*tsize);
  textStyle(NORMAL);
}
function VellasIcon(x,y,scale) {
  fill(30,35,255);
  let tsize =0.7*scale;
  rect(x-0.5*tsize,y-0.7*tsize,scale*0.9,scale*0.1);
  textSize(tsize);
  textStyle(BOLD);
  text("▽",x-0.32*tsize,y+0.2*tsize);
  textStyle(NORMAL);
}



function MiddleMonitor(x,y,w,h) {
  //Mock
       //monitor stand
      
       fill(0,0,0,240);
       stroke(0,0,0);
       strokeWeight(1);
       rect(x+40+w*1.5, y+h, 25, 170);
    
       fill(10,10,10,240);
     
       ellipse(x+50+w*1.5+2, y+h+170,190,100 );
   
     //screen
     fill(0,0,0);
     let screenX =x+w+50;
     rect(screenX, y, w, h);
     fill(192,192,192);
     rect(screenX, y+h-20, w, 20);
     Mscreen(screenX,y,w,h,currentItem);
     //button
    TurnMonitor(screenX,y,w,h,1);
   
}

function RightMonitor(x,y,w,h) {
    //BitCoin
          //monitor stand
          fill(0,0,0,240);
          stroke(0,0,0);
       strokeWeight(1);
          rect(x+w*2.5+90, y+h, 25, 170);
          fill(10,10,10,240);
          ellipse(x+w*2.5+102, y+h+170,190,100 );
        //screen
        fill(0,0,0);
        let screenX =x+2*w+100;
        rect(screenX, y, w, h);
        fill(192,192,192);
        rect(screenX, y+h-20,w, 20);
        Rscreen(screenX,y,w,h,currentCoin);
         //button
        TurnMonitor(screenX,y,w,h,2);

     

}

function TurnMonitor(x,y,w,h,n) {
  if(turnOn[n] ==false) {
    fill(255,20,20);
   }
  else {
    fill(20,20,255);
   }
   circle(x+w-20,y+h-10,10);
  if( (dist(mouseX,mouseY,x+w-20,y+h-10)<5) &&  clicked&&mouseIsPressed && !turnOn[n]) {
  clicked =false;
   turnOn[n] = true;
   }
  else if ((dist(mouseX,mouseY,x+w-20,y+h-10,)<5) &&   clicked&&mouseIsPressed && turnOn[n]){
    clicked =false;
    turnOn[n] = false;
     }
}





function Mscreen(screenX,y,w,h,arr) {
  if(turnOn[1] ==true) {
    fill(255,255,255);
    rect(screenX, y, w, h-20);
    LineflowGraph(screenX,w,arr);
    StockUI(screenX,y,w,h,arr);
  }
  
}

function Rscreen(screenX,y,w,h,arr) {
  if(turnOn[2] ==true) {
    fill(255,255,255);
    rect(screenX, y, w, h-20);
    LineflowGraph(screenX,w,arr);
    CoinUI(screenX,y,w,h,arr);
    //MockUI(screenX,y,w,h,arr);
  }
  
}
 
  //Interface
function StockUI(x,y,w,h,arr) {
  stroke(0,0,0);
  strokeWeight(3);
  textStyle(NORMAL);
  line(x+2,y+50,x+0.7*w,y+50);
  line(x+0.7*w,y+2,x+0.7*w,y+h-21);
  //head line
  StockHead(x,y,arr);
  //side tab
  SsideTab(x,w,h);
  
  strokeWeight(0);
}
function CoinUI(x,y,w,h,arr) {
  stroke(0,0,0);
  strokeWeight(3);
  textStyle(NORMAL);
  line(x+2,y+50,x+0.7*w,y+50);
  line(x+0.7*w,y+2,x+0.7*w,y+h-21);
  //head line
  CoinHead(x,y,arr);
  //side tab
  BsideTab(x,w,h);
  
  strokeWeight(0);
  stroke(0,0,0);
}
function StockHead(x,y,arr) {

  textSize(20);
  strokeWeight(2);
  text(arr.name,x+5,y+35);
  textSize(10);
 
  if(arr.p[28]>arr.p[29]) {
    fill(255,0,0);
    text('▲',x+185,y+15);
  }
  else {
    fill(0,0,255);
    text('▼',x+185,y+15);
  }
  textSize(18);
  text(round((arr.p[29]),2)+'$',x+115,y+35);
  strokeWeight(1);
   
  textSize(10);
  text(round((arr.p[28]-arr.p[29]),3),x+195,y+15);
  text(round(((arr.p[28]-arr.p[29])/arr.p[29])*100,3) +'%',x+195,y+25);
  strokeWeight(0);
  
}
function CoinHead(x,y,arr) {
  textSize(20);
  strokeWeight(2);
  text(arr.name,x+5,y+35);
  textSize(10);
 
  if(arr.p[28]>arr.p[29]) {
    fill(255,0,0);
    text('▲',x+185,y+15);
  }
  else {
    fill(0,0,255);
    text('▼',x+185,y+15);
  }
  textSize(18);
  text(round((arr.p[29])*coinWeight,2)+'$',x+110,y+35);
  strokeWeight(1);
   
  textSize(10);
  text(round((arr.p[28]-arr.p[29])*coinWeight,3),x+195,y+15);
  text(round(((arr.p[28]-arr.p[29])/arr.p[29])*100,3) +'%',x+195,y+25);
  


  //draw coin icons
  if(arr.name == "BeatCoin") {
    BeatIcon(x+25,y+10,20);
  }
  else if(arr.name == "RiteCoin") {
    RiteIcon(x+25,y+9 ,18);
  }
  else if(arr.name == "Alphabet") {
    AlphabetIcon(x+25,y+10,20);
  }
  else if(arr.name == "Vellas") {
    VellasIcon(x+22,y+12,20);
  }
  strokeWeight(0);
}
function SsideTab(x,w,h) {
  //mock tab 
  fill(242,243,245);
  strokeWeight(2);
  stroke(229,230,232);
  rect(x+0.71*w,h-40,0.28*w,30);
  rect(x+0.71*w,h-00,0.28*w,30);
  rect(x+0.71*w,h+40,0.28*w,30);
  rect(x+0.71*w,h+80,0.28*w,30);
 

  //items
  Items(x,w,h,Prices.I0);
  Items(x,w,h+40,Prices.I1);
  Items(x,w,h+80,Prices.I2);
  Items(x,w,h+120,Prices.I3);
 

  if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h-40 && mouseY<=h-10 &&clicked&&mouseIsPressed) {
   currentItem = Prices.I0;

  }
  else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h && mouseY<=h+30 &&clicked&&mouseIsPressed) {
    currentItem = Prices.I1;
 
   }
   else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h+40 && mouseY<=h+70 &&clicked&&mouseIsPressed) {
    currentItem = Prices.I2;
 
   }
   else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h+80 && mouseY<=h+110 &&clicked&&mouseIsPressed) {
    currentItem = Prices.I3;
 
   }



}

function BsideTab(x,w,h) {
  
    //mock tab 
    fill(242,243,245);
    strokeWeight(2);
    stroke(229,230,232);
    rect(x+0.71*w,h-40,0.28*w,30);
    rect(x+0.71*w,h-00,0.28*w,30);
    rect(x+0.71*w,h+40,0.28*w,30);
    rect(x+0.71*w,h+80,0.28*w,30);
   
  
    //items
    Items(x,w,h,Prices.C0);
    Items(x,w,h+40,Prices.C1);
    Items(x,w,h+80,Prices.C2);
    Items(x,w,h+120,Prices.C3);
  
    if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h-40 && mouseY<=h-10 &&clicked&&mouseIsPressed) {
     currentCoin = Prices.C0;
  
    }
    else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h && mouseY<=h+30 &&clicked&&mouseIsPressed) {
      currentCoin = Prices.C1;
   
     }
     else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h+40 && mouseY<=h+70 &&clicked&&mouseIsPressed) {
      currentCoin = Prices.C2;
   
     }
     else if(mouseX>=(x+0.71*w)&& mouseX<= (x+0.99*w) && mouseY>=h+80 && mouseY<=h+110 &&clicked&&mouseIsPressed) {
      currentCoin = Prices.C3;
   
  
  



}
}

function Items(x,w,h,arr) {
  fill(0,0,0);
  textSize(11);
  text(arr.name,x+0.71*w,h-22);
  textSize(7);
  if(arr.p[28]>arr.p[29]) {
    fill(255,0,0);
    text('▲',x+0.83*w,h-15);
  }
  else {
    fill(0,0,255);
    text('▼',x+0.83*w,h-15);
  }
  textSize(9);
  text(round(arr.p[29],3),x+0.89*w,h-27);
  textSize(6);
  text(round((arr.p[28]-arr.p[29]),3),x+0.85*w,h-15);
  text(round(((arr.p[28]-arr.p[29])/arr.p[29])*100,3) +'%',x+0.913*w,h-15);
}





//chart database

function LineflowGraph(screenX,w,arr) {
  fill(0,0,0);
  drawPoints(screenX,w,arr.p);
  drawLines(screenX,w,arr.p);
}
function drawPoints(screenX,w,arr) {

   
for(let i =0; i < arr.length; i++){
  let x = i * (0.64*w / (NumPoints-1)) +screenX+10;
  let y = arr[i];
  circle(x, y, 7);
}
}
function drawLines(screenX,w,arr) {
  stroke(20,20,255);
  strokeWeight(3);
  let px = screenX+10;
  let py = arr[0];
  for(let i =0; i < arr.length; i++){
    let x = i * (0.64*w / (NumPoints-1)) +screenX+10;
    let y = arr[i];
   
    line(px, py, x, y);
    

    px = x;
    py = y;
  } 
  strokeWeight(0);
}

function MarketSetting() {
    //coins
    for(let i=0; i< NumPoints; i++) {
      Prices.C0.p.push(random(210,310));
   }
   for(let i=0; i< NumPoints; i++) {
    Prices.C1.p.push(random(210,310));
 }
 for(let i=0; i< NumPoints; i++) {
  Prices.C2.p.push(random(210,310));
}
for(let i=0; i< NumPoints; i++) {
  Prices.C3.p.push(random(210,310));
}
 coinWeight =random(15,38);
 //Stock item
   for(let i=0; i< NumPoints; i++) {
     Prices.I0.p.push(random(210,310));
  }
  for(let i=0; i< NumPoints; i++) {
   Prices.I1.p.push(random(210,310));
 
 }
 for(let i=0; i< NumPoints; i++) {
   Prices.I2.p.push(random(210,310));
 }
 for(let i=0; i< NumPoints; i++) {
  Prices.I3.p.push(random(210,310));
}

  
}













//Mouse
function mouseClicked() {
  if(clicked == false) {
    clicked = true;
  } 
}
function mouseReleased() {
  clicked = false;
}
// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
