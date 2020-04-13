//Common js
var home_page= document.getElementById("Home_Page");
var team_page = document.getElementById("Team_Page");
var close_btn = document.getElementById("close_btn");
var menu_btn = document.getElementById("menu_btn");
var menu = document.getElementById("menu");


// End of common js


// Js for home page
var fr = document.getElementById("fr");
fr.style.height = screen.height + "px";
var after_fr = document.getElementById("after_fr");
var mock_up = document.getElementById("mock_up");
var height_of_mock_up = mock_up.offsetHeight;
height_of_mock_up = height_of_mock_up/2;
mock_up.style.top = screen.height - height_of_mock_up + "px";
var width_of_mock_up = mock_up.offsetWidth;
mock_up.style.left = (screen.width - width_of_mock_up)/2 + "px";
after_fr.style.marginTop  = height_of_mock_up + 20 + "px";
//End of js for home page





// js for team page



// end of Js for team page


// js for the menu btn



function open_menu()
{
    if(home_page.style.display!="none")
    {
        home_page.classList.add("is_blurred");
    }
    else
    {
        team_page.classList.add("is_blurred");    
    }
    menu.style.display = "block";
    menu_btn.style.display = "none";
}
function close_menu()
{
    home_page.classList.remove("is_blurred");
    team_page.classList.remove("is_blurred");
    menu.style.display = "none";
    menu_btn.style.display = "block";
}

function change_page_to_team()
{
    console.log("the first funtion");
        home_page.style.display = "none";
        team_page.style.display="block";
        close_menu();
}

function change_page_to_home()
{
    console.log("the second funtion");
    home_page.style.display="block";
    team_page.style.display="none";
    close_menu();
}


