function RollDice(){
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;

    let image1 = document.querySelector(".img1");
    let image2 = document.querySelector(".img2");

    let player1 = document.querySelector(".player1").innerHTML;
    let player2 = document.querySelector(".player2").innerHTML;
    if(dice1>dice2){
        document.querySelector("h2").innerHTML = player1+" Wins";
    }
    else if(dice1<dice2){
        document.querySelector("h2").innerHTML =  player2+" Wins";
    }
    else{
        document.querySelector("h2").innerHTML = "Draw";
    }

    switch(dice1){
        case 1:
            image1.setAttribute("src","./images/dice1.png");
            break;
        case 2:
            image1.setAttribute("src","./images/dice2.png");
            break;
        case 3:
            image1.setAttribute("src","./images/dice3.png");
            break;
        case 4:
            image1.setAttribute("src","./images/dice4.png");
            break;
        case 5:
            image1.setAttribute("src","./images/dice5.png");
            break;
        default:
            image1.setAttribute("src","./images/dice6.png");
            break;
    }
    switch(dice2){
        case 1:
            image2.setAttribute("src","./images/dice1.png");
            break;
        case 2:
            image2.setAttribute("src","./images/dice2.png");
            break;
        case 3:
            image2.setAttribute("src","./images/dice3.png");
            break;
        case 4:
            image2.setAttribute("src","./images/dice4.png");
            break;
        case 5:
            image2.setAttribute("src","./images/dice5.png");
            break;
        default:
            image2.setAttribute("src","./images/dice6.png");
            break;
    }

}

function changeName(){
    let p1 = prompt("Enter player 1 name");
    document.querySelector(".player1").innerHTML = p1;
    let p2 = prompt("Enter player 2 name");
    document.querySelector(".player2").innerHTML = p2;
}

