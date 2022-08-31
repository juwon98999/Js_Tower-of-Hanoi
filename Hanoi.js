var div1 = document.getElementById("stage1");
var div2 = document.getElementById("stage2");
var div3 = document.getElementById("stage3");

var arrLeft = [];
var arrMiddle = [];
var arrRight = [];

var ChekingarrLeft = [6,5,4,3,2,1];
var ChekingarrMiddle = [];
var ChekingarrRight = [];

var firstCheck;
var secondCheck;
var thirdCheck;

var Resetcount = 0;

function ScoreCheck(){ //체크용도
  console.log(ChekingarrLeft);
  console.log(ChekingarrMiddle);
  console.log(ChekingarrRight);

  // for(var i =0; i<arrLeft.length; i++){
  //   console.log(arrLeft);
  // }

  // for(var i =0; i<arrLeft.length; i++){
  //   console.log(arrMiddle.length);
  // }

  // for(var i =0; i<arrLeft.length; i++){
  //   console.log(arrRight.length);
  // }
}

function Init(){
  if(Resetcount < 1){

      arrLeft.push("🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳" );
      arrLeft.push("🔲🔲🔲🔲🔲🔲🔲🔲" );
      arrLeft.push("🔳🔳🔳🔳🔳🔳" ); 
      arrLeft.push("🔲🔲🔲🔲🔲" );
      arrLeft.push("🔳🔳🔳" );
      arrLeft.push("🔲" );

      var ui_side_left = document.getElementsByClassName("first")
      while ( ui_side_left[0].hasChildNodes() ) 
      { ui_side_left[0].removeChild( ui_side_left[0].firstChild ); }

      for(var i=0;i<arrLeft.length;i++){
        let ptag = document.createElement('p');

      ptag.appendChild(document.createTextNode(arrLeft[i]));
      ui_side_left[0].appendChild(ptag);
      Resetcount += 1; //초기화시 1회만 클릭 가능
  }
}

}

function BlockMove() //이동경로 표기
{
 
  var ui_side_left = document.getElementsByClassName("first")
  while ( ui_side_left[0].hasChildNodes() ) 
  { ui_side_left[0].removeChild( ui_side_left[0].firstChild ); }

  var ui_side_middle = document.getElementsByClassName("second")
  while ( ui_side_middle[0].hasChildNodes() ) 
  { ui_side_middle[0].removeChild( ui_side_middle[0].firstChild ); }

  var ui_side_right = document.getElementsByClassName("third")
  while ( ui_side_right[0].hasChildNodes() ) 
  { ui_side_right[0].removeChild( ui_side_right[0].firstChild ); }


  for(var i=0;i<arrLeft.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrLeft[i]));
    ui_side_left[0].appendChild(ptag);
  }

  for(var i=0;i<arrMiddle.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrMiddle[i]));
    ui_side_middle[0].appendChild(ptag);
  }

  for(var i=0;i<arrRight.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrRight[i]));
    ui_side_right[0].appendChild(ptag);
  }

}

div1.addEventListener("click", firstFunction); 
function firstFunction(){ 
  
  if(arrLeft.length > 0){
    firstCheck = true;
    div1.style.border = "3px solid Skyblue";
  }

  if(secondCheck){
    arrLeft.push(arrMiddle.pop());
    BlockMove();

    ChekingarrLeft.push(ChekingarrMiddle.pop());
    LeftRule();
    
    allCheckReset(); 
  }

  if(thirdCheck){
    arrLeft.push(arrRight.pop());
    BlockMove();

    ChekingarrLeft.push(ChekingarrRight.pop());
    LeftRule();

    allCheckReset();
  }
}
div1.ondblclick = function(){allCheckReset()}; //더블클릭시 초기화

div2.addEventListener("click", secondFunction); 
function secondFunction(){ 
  if(arrMiddle.length > 0){
    secondCheck = true;
    div2.style.border = "3px solid Skyblue";
  }

  if(firstCheck){
    arrMiddle.push(arrLeft.pop());
    BlockMove();

    ChekingarrMiddle.push(ChekingarrLeft.pop());
    MiddleRule();

    allCheckReset();
  }


  if(thirdCheck){
    arrMiddle.push(arrRight.pop());
    BlockMove();

    ChekingarrMiddle.push(ChekingarrRight.pop());
    MiddleRule();

    allCheckReset();
  }
}
div2.ondblclick = function(){allCheckReset()}; //더블클릭시 초기화

div3.addEventListener("click", thirdFunction); 
function thirdFunction(){ 
  if(arrRight.length > 0){
    thirdCheck = true;
    div3.style.border = "3px solid Skyblue";
  }

  if(firstCheck){
    arrRight.push(arrLeft.pop());
    BlockMove();

    ChekingarrRight.push(ChekingarrLeft.pop());
    RightRule();

    allCheckReset();
  }

  if(secondCheck){
    arrRight.push(arrMiddle.pop());
    BlockMove();

    ChekingarrRight.push(ChekingarrMiddle.pop());
    RightRule();

    allCheckReset();
  }
}
div3.ondblclick = function(){allCheckReset()}; //더블클릭시 초기화

function LeftRule(){
  for(var i=0; i< ChekingarrLeft.length; i++){
    if(ChekingarrLeft[i] < ChekingarrLeft[i+1]){
      if(secondCheck){
        alertEvent();
        arrMiddle.push(arrLeft.pop());
        ChekingarrMiddle.push(ChekingarrLeft.pop());
        BlockMove();
      }else if(thirdCheck){
        alertEvent();
        arrRight.push(arrLeft.pop());
        ChekingarrRight.push(ChekingarrLeft.pop());
        BlockMove();
      }
    }
  }
}

function MiddleRule(){
   for(var i=0; i< ChekingarrMiddle.length; i++){
    if(ChekingarrMiddle[i] < ChekingarrMiddle[i+1]){
      if(firstCheck){
        alertEvent();
        arrLeft.push(arrMiddle.pop());
        ChekingarrLeft.push(ChekingarrMiddle.pop());
        BlockMove();
      }else if(thirdCheck){
        alertEvent();
        arrRight.push(arrMiddle.pop());
        ChekingarrRight.push(ChekingarrMiddle.pop());
        BlockMove();
      }
    }
  }
}

function RightRule(){
  for(var i=0; i< ChekingarrRight.length; i++){
    if(ChekingarrRight[i] < ChekingarrRight[i+1]){
      if(firstCheck){
        alertEvent();
        arrLeft.push(arrRight.pop());
        ChekingarrLeft.push(ChekingarrRight.pop());
        BlockMove();
      }else if(secondCheck){
        alertEvent();
        arrMiddle.push(arrRight.pop());
        ChekingarrMiddle.push(ChekingarrRight.pop());
        BlockMove();
      }
    }
  }
}

function allCheckReset(){
  firstCheck = false;
  secondCheck = false;
  thirdCheck = false;

  div1.style.border = "1px solid red";
  div2.style.border = "1px solid green";
  div3.style.border = "1px solid blue";
}

function alertEvent(){
  alert("오류");
  alert("큰 블록은 절대로 작은 블록 아래에 위치할 수 없습니다.");
}