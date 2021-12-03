var hp = 1000;
var tries = 5;
document.getElementById('inputs').onsubmit = function() {
    if (document.getElementById("password").value == "The 5th Dimension") {
        document.getElementById("fiveDimen").style.display = "inline";
        document.getElementById("password").value = "";
        return false;
    } else {
        tries--;
        document.getElementsByTagName("span")[0].innerHTML = "Wrong password. You have " + tries + " tries remaining.";
    }
    if (tries == 0) {
        document.getElementsByTagName("span")[0].innerHTML = "You ran out of tries. You are locked out from entering the password.";
        document.getElementById("password").readOnly = true;
        document.getElementById("password").value = "";
    }
    return false;
};

function wee() {
    hp = 5;
    document.getElementById("hp").innerHTML = hp + " HP";
}
function goCredits() {
    document.getElementById("credits").style.display="block";
    document.getElementById("game").style.display = "none";
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

    if (document.getElementById("thebutton").innerHTML == "Attack The Boss") {
        hp = hp - hpDifference;
        document.getElementById("hp").innerHTML = hp + " HP" + "<br>" + "-" + hpDifference + " HP!";
    } else {
        if (hp != 1000) {
            hp = hp*1 + hpDifference*1
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

        } else {
            document.getElementById("thebutton").innerHTML = "Heal The Boss";
        }
    }, 400);

}