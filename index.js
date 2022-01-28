function genNums(){
  var counter=0;
  do{
    var ran1= randomNum();
    var resultnum1= document.lottery.Rball1.value= ran1;

    var ran2= randomNum();
    var resultnum2= document.lottery.Rball2.value= ran2;

    var ran3= randomNum();
    var resultnum3= document.lottery.Rball3.value= ran3;

    var ran4= randomNum();
    var resultnum4= document.lottery.Rball4.value= ran4;

    var ran5= randomNum();
    var resultnum5= document.lottery.Rball5.value= ran5;

    var ran6= randomNum();
    var resultnum6= document.lottery.Rball6.value= ran6;

    var ran7= randomNum();
    var resultnum7= document.lottery.Rball7.value= ran7;

    var ran8= randomNum();
    var resultnum8= document.lottery.Rball8.value= ran8;

    var ran9= randomNum();
    var resultnum9= document.lottery.Rball9.value= ran9;

    var ran10= document.getElementById(ball).value;
    var resultnum10= document.lottery.Rball10.value= ran10;

    var enterednum= document.lottery.ball.value;

    counter+=1;
  }while( !(resultnum1 == enterednum && resultnum2 == enterednum && resultnum3 == enterednum &&
      resultnum4 == enterednum && resultnum5 == enterednum && resultnum6 == enterednum && resultnum7 == enterednum 
      && resultnum8 == enterednum && resultnum9 == enterednum && resultnum10 == enterednum)  || counter<=10)

}
if( resultnum1 == enterednum && resultnum2 == enterednum && resultnum3 == enterednum
   && resultnum4 == enterednum && resultnum5 == enterednum && resultnum6 == enterednum
   && resultnum47 == enterednum && resultnum8 == enterednum && resultnum9 == enterednum
   && resultnum10 == enterednum) {

  alert(" You Won The Lottery");
  alert("It took " + counter + " number of loops to get winning numbers")
  

}
// else{
//   alert("sorry you did not win after " + counter + " tries");
// }


function randomNum(){
  return Math.floor(Math.random() *100) +1;
}



