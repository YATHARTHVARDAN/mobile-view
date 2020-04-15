var front_cards = document.getElementsByClassName("front_card");
var back_cards = document.getElementsByClassName("back_card");
var g;
var max_height = 0;
for(g=0;g<front_cards.length;g++)
{
    var fc = document.getElementById(front_cards[g].id);
    if(fc.offsetHeight > max_height)
    {
        max_height = fc.offsetHeight;
    }
}

for(g=0;g<front_cards.length;g++)
{
    var fc = document.getElementById(front_cards[g].id);
    var bc = document.getElementById(back_cards[g].id);
    fc.style.height = max_height + "px";
    bc.style.height = max_height + "px";
}

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

