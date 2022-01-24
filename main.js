// js file for the main game

//set vars for hp and password tries
var hp = 1000;
var tries = 5;
var sec = 300;

// do function when password is correct
document.getElementById('inputs').onsubmit = function() {
    if (document.getElementById("password").value == "The5thDimension") {
        document.getElementById("fiveDimen").style.display = "inline";
        document.getElementById("password").value = "";
        document.getElementsByTagName("span")[0].innerHTML = "Welcome back, <b>The 5th Dimension</b> !";
        setTimeout(function(){
            document.getElementsByTagName("span")[0].innerHTML = "";
        }, 10000);
        return false;
    } else {
        tries--;
        document.getElementsByTagName("span")[0].innerHTML = "Wrong password. You have " + tries + " tries remaining.";
    }
    if (tries <= 0) {
        document.getElementsByTagName("span")[0].innerHTML = "You ran out of tries. You are locked out from entering the password.";
        document.getElementById("password").readOnly = true;
        document.getElementById("password").value = "";
        tries = 0;
    }
    return false;
};

function healBoss() {
    if (hp < 1000 && hp != 0) {
        hp++;
        document.getElementById("hp").innerHTML = hp + " HP";
    }
}

//use the 5th dimension
function wee() {
    var oldhp = hp
    hp = 5;
    document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "-" + (oldhp - 5) + "!!";
}
function goCredits() {
    document.getElementById("credits").style.display="block";
    document.getElementById("game").style.display = "none";
    document.getElementById("losepng").style.display = "none";
    document.getElementById("sec").style.display = "none";
}
function changeHP() {

    var hpDifference = Math.random();
    hpDifference = hpDifference * 5;
    hpDifference = Math.round(hpDifference);

    if (hpDifference == 0) {
        hpDifference = 5;
    } else if (hpDifference == 1) {
        hpDifference = 6;
    } else if (hpDifference == 2) {
        hpDifference = 7;
    } else if (hpDifference == 3) {
        hpDifference = 8;
    } else if (hpDifference == 4) {
        hpDifference = 9;
    } else if (hpDifference == 5) {
        hpDifference = 10;
    }

    if (document.getElementById("thebutton").innerHTML == "Attack The Boss" && hp >= hpDifference) {
        hp = hp - hpDifference;
        document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "-" + hpDifference + " HP!";
    } else if (document.getElementById("thebutton").innerHTML == "Attack The Boss" && hp < hpDifference) {
        hp = 0;
    } else {
        if (hp != 1000 && hp + hpDifference <= 1000) {
            hp = hp*1 + hpDifference*1
            document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "+" + hpDifference + " HP!";
        } else if (hp != 1000 && hp + hpDifference > 1000) {
            hp = 1000
            document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "+" + hpDifference + " HP!";
        } else {
            document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "Boss is fully healed!";
        }
    }

    if (hp <= 0) {
        document.getElementById("thebutton").style.display = "none";
        document.getElementById("hp").innerHTML = "The Boss has " + hp + " HP. You win!";
        document.getElementById("Player").style.display = "none";
        document.getElementById("boss").style.display = "none";
        document.getElementById("bossdead").style.display = "inline";
        document.getElementById("playerwins").style.display = "inline";
        document.getElementById("creditsButton").style.display = "block";
        document.getElementById("fiveDimen").style.display = "none";
        document.getElementById("sec").style.display = "none";
    }
}
function gameOver() {
    document.getElementById("thebutton").style.display = "none";
    document.getElementById("Player").style.display = "none";
    document.getElementById("boss").style.display = "none";
    document.getElementById("losepng").style.display = "inline";
    document.getElementById("creditsButton").style.display = "block";
    document.getElementById("fiveDimen").style.display = "none";
    document.getElementById("sec").style.display = "none";
    document.getElementById("hp").style.display = "none";
}
function timer() {
    sec--;
    document.getElementById("sec").innerHTML = sec;
    if (sec <= 0) {
        gameOver();
    }
}
function startGame() {
    document.getElementById("Welcomescreen").style.display = "none";
    document.getElementById("game").style.display = "block";

    setInterval( function() {
        var changeAttack = Math.random();
        changeAttack = Math.round(changeAttack);
        if (changeAttack == 0) {
            document.getElementById("thebutton").innerHTML = "Attack The Boss";
            document.getElementById("thebutton").style.backgroundColor = "rgba(238, 77, 77, 0.8)";

        } else {
            document.getElementById("thebutton").innerHTML = "Heal The Boss";
            document.getElementById("thebutton").style.backgroundColor = "cyan";
        }
    }, 400);
    
    setInterval(healBoss, 5000);
    const timerInt = setInterval(timer, 1000);
    setInterval(function() {
        if (sec <= 0) {
            clearInterval(timerInt);
        }
    }, 1000);
}
document.addEventListener("keydown", checkifspace);
function checkifspace(event) {
    var checkCode = event.keyCode;
    if (checkCode == 32) {
        changeHP();
        event.preventDefault();
    }
}