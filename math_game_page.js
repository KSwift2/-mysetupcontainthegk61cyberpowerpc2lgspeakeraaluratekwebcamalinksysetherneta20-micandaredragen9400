player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name" , player1_name);
localStorage.setItem("player2_name" , player2_name);

window.location="game_page.html";


player1_name = localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
 player1_score = 0;
 player2_score = 0;
 document.getElementById("player1_name").innerHTML=player1_name + ":";
 document.getElementById("player2_name").innerHTML=player2_name + ":";
 document.getElementById("player1_score").innerHTML=player1_score ;
 document.getElementById("player2_score").innerHTML=player2_score
 document.getElementById("player_question").innerHTML=" Question Turn -"+ player1_name;
 document.getElementById("player_answer").innerHTML=" Answer Turn -"+ player2_name;

 function send(){
     get_number = document.getElementById("number").value;
     number=get_number.toLowerCase();
     console.log("number in lower case = " + number);

     number1 = number.number1(1);
     console.log(number1);
      length_divided_2=Math.flow(number.lenght/2);
      number2 = number.charAt(length_divide_2);
      console.log(number2);

      length_minus_1 = number.lenght - 1;
      number3 = wor.charAt(length_minus_1);
      console.log(number3);

      remove_number1 = number.replace(number1, "_");
      remove_number2 = remove_number1.replace(number2, "_");
      remove_number3 = remove_number2.replace(number3, "_");
      console.log(remove_number3);
    question_number = " <h4 id= 'number_display'> Q. "+remove_number3+"</h4>>";
    input_box = "<br>Answer : <input type= 'text' id='input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("number").value= "";  
 }
}