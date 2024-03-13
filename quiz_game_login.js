function addUser() {
    player1_name=document.getElementById("player_1_name").value;
    player2_name=document.getElementById("player_2_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location="quiz_game_page.html";
}


function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
}

function div(){
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
   
input_box = "<br>Answer : <input type='text' id='input_check_box'>";

check_button = "<br><br><button class='btn btn-info' onclick=()>Check</button>";

row = question_number + input_box + check_button ;

document.getElementByid("output").innerHTML = row;

document.getElementByid("number1").value = "";

document.getElementByid("number2").value = "";
}