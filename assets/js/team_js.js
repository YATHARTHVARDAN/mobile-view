var front_cards = document.getElementsByClassName("front_card");
var back_cards = document.getElementsByClassName("back_card");
var i;
function flip(i)
{
    var front_cardi = document.getElementById(front_cards[i].id);
    var back_cardi = document.getElementById(back_cards[i].id);
    front_cardi.style.display = "none";
    back_cardi.style.display = "block";
}

function flip_back(i)
{
    var front_cardi = document.getElementById(front_cards[i].id);
    var back_cardi = document.getElementById(back_cards[i].id);
    front_cardi.style.display = "block";
    back_cardi.style.display = "none";
}