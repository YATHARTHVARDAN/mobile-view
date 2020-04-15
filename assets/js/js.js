//Common js
var home_page= document.getElementById("Home_Page");
var home_page_fr = document.getElementById("home_page_fr");
var team_page = document.getElementById("Team_Page");
var close_btn = document.getElementById("close_btn");
var menu_btn = document.getElementById("menu_btn");
var menu = document.getElementById("menu");
var footer = document.getElementById("footer");
var footer_desk = document.getElementById("footer_desk");
var not_for_desk = document.getElementById("not_for_desk");
var why = document.getElementById("why");
var whatsapp = document.getElementById("whatsapp");
var mobile_contact =document.getElementById("mobile_contact");
var why_desk = document.getElementById("why_desk");
var whatsapp_desk = document.getElementById("whatsapp_desk");
var mobile_contact_desk =document.getElementById("mobile_contact_desk");
var bottom = document.getElementById("bottom_desk");
var pop_nav = document.getElementById("pop_nav");
var mod = document.getElementById("mod");
var nav = document.getElementById("nav");
nav.style.width = screen.width + "px";
function open_mod()
{
    mod.style.display = "block";
}
function close_mod()
{
    mod.style.display = "none";
}




// End of common js


// Js for home page
var fr = document.getElementById("fr");
fr.style.height = screen.height + "px";
var after_fr = document.getElementById("after_fr");
var mock_up = document.getElementById("mock_up");
var height_of_mock_up = mock_up.offsetHeight;
height_of_mock_up = height_of_mock_up/2;
var width_of_mock_up = mock_up.offsetWidth;
mock_up.style.left = (screen.width - width_of_mock_up)/2 + "px";
mock_up.style.top = screen.height - height_of_mock_up + 100 + "px";

//End of js for home page





// js for team page



// end of Js for team page


// js for the menu btn



function open_menu()
{
    if(home_page.style.display!="none")
    {
        home_page.classList.add("is_blurred");
        home_page_fr.classList.add("is_blurred");
    }
    else
    {
        team_page.classList.add("is_blurred");    
    }
    footer.classList.add("is_blurred");
    menu.style.display = "block";
    menu_btn.style.display = "none";
}
function close_menu()
{
    footer.classList.remove("is_blurred");
    home_page.classList.remove("is_blurred");
    home_page_fr.classList.remove("is_blurred");
    team_page.classList.remove("is_blurred");
    menu.style.display = "none";
    menu_btn.style.display = "block";
}

function change_page_to_team()
{
    console.log("the first funtion");
        home_page.style.display = "none";
        home_page_fr.style.display="none";
        team_page.style.display="block";
        close_menu();
}

function change_page_to_home()
{
    console.log("the second funtion");
    team_page.style.display="none";
    home_page.style.display="block";
    home_page_fr.style.display = "block";
    close_menu();
}


var email = document.getElementById("email");
var ename = document.getElementById("name");

var head_logo = document.getElementById("head_logo");
var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
var isIpad  =/iPad/i.test(navigator.userAgent);

var b11 = document.getElementById("block11");
var b12 = document.getElementById("block12");
var b21 = document.getElementById("block21");
var b22 = document.getElementById("block22");
var b31 = document.getElementById("b31");
var b32 = document.getElementById("b32");


if(isIpad)
{
    var animations = document.getElementsByClassName("animation");
    var texts = document.getElementsByClassName("anim_text");
    for(k=0;k<animations.length;k++)
    {
        var ele = document.getElementById(animations[k].id);
        ele.style.marginTop="50%";
        var elet = document.getElementById(texts[k].id);
        elet.style.marginTop = "50%";
    }
}

if(!isMobile)
{
    after_fr.style.marginTop  = height_of_mock_up + 300 + "px";
    nav.style.display = "block";
      team_page.style.display="block";
      home_page_fr.style.display = "block";
      home_page.style.display = "block";
      pop_nav.style.display = "none";
      email.style.marginBottom = "30px";
      ename.style.marginBottom = "30px";
     
      var anim_texts = document.getElementsByClassName("anim_text");
      var i;
      for(i=0;i<anim_texts.length;i++)
      {
          anim_texts[i].classList.add("add_padding");
      }
      b11.style.display = "none";
      b12.style.display = "block";
      b21.style.display = "none";
      b22.style.display = "block";
      b31.style.height = b32.style.height = b22.style.height = b21.style.height = b12.style.height = b11.style.height = screen.height + "px";
      var h4s = document.getElementsByTagName("h4");
      var i;
      for(i=0;i<h4s.length;i++)
      {
          if(!h4s[i].classList.contains("no_change"))
          {h4s[i].classList.add("increase_h4");}
      }
      var h3s = document.getElementsByTagName("h3");
      var j;
      for(j=0;j<h3s.length;j++)
      {
          if(!h3s[j].classList.contains("no_change"))
             {h3s[j].classList.add("increase_h3");}
      }
      var ps = document.getElementsByTagName("p");
      var k;
      for(k=0;k<ps.length-2;k++)
      {  if(!ps[k].classList.contains("no_change"))
          {ps[k].classList.add("increase_p");}
      }
      var height = document.getElementsByClassName("why_para");
      height[0].classList.add("mobile_line");
      footer.style.display="none";
      footer_desk.style.display = "block";
      team_page.style.display="block";
     
     not_for_desk.style.display = why.style.display = mobile_contact.style.display = whatsapp.style.display = "none";
     why_desk.style.display = whatsapp_desk.style.display = mobile_contact_desk.style.display = "block";
     var h2s = document.getElementsByTagName("h2");
     var n;
     for(n=0;n<h2s.length;n++)
     {
         h2s[n].classList.add("increase_h3");
     }
     var cancel = document.getElementById("mod_cancel");
      cancel.style.top = "20px";
}
else
{
    mock_up.style.top = screen.height - height_of_mock_up + 70 + "px";
    after_fr.style.marginTop  = height_of_mock_up + 200 + "px";
    fr.style.paddingTop = "10%";
    nav.style.display = "none";
    footer_desk.style.display = "none";
    footer.style.display ="block";
    why_desk.style.display = whatsapp_desk.style.display = mobile_contact_desk.style.display = bottom.style.display = "none";
    var height = document.getElementsByClassName("why_para");
      height[0].classList.add("mobile_line");
      team_page.style.display="none";
     not_for_desk.style.display = why.style.display = mobile_contact.style.display = whatsapp.style.display = "block";
     not_for_desk.style.display = "block";
     var h2s = document.getElementsByTagName("h2");
     var f;
     for(f=0;f<h2s.length;f++)
     {
         h2s[f].classList.remove("increase_h3");
     }     
    b11.style.display = "block";
    b12.style.display = "none";
    b21.style.display = "block";
    b22.style.display = "none";
    
    var h4s = document.getElementsByTagName("h4");
      var i;
      for(i=0;i<h4s.length;i++)
      {
          h4s[i].classList.add("decrease_h4");
      }
      var h3s = document.getElementsByTagName("h3");
      var j;
      for(j=0;j<h3s.length;j++)
      {
          h3s[j].classList.add("decrease_h3");
      }
      var ps = document.getElementsByTagName("p");
      var k;
      for(k=0;k<ps.length-2;k++)
      {
          ps[k].classList.add("decrease_p");
      }
      mod.style.left = "10%";
      var cancel = document.getElementById("mod_cancel");
      cancel.style.bottom = "20px";
      var removes = document.getElementsByClassName("remove_here");
      var h;
      for(h=0;h<removes.length;h++)
      {
          var element = document.getElementById(removes[h].id);
          element.style.marginTop = "0%";
      }
      var hers = document.getElementsByClassName("add_here");
      var d ;
      for(d=0;d<hers.length;d++)
      {
          hers[d].classList.add("add_padding_again");
      }
      var specefic = document.getElementById("specefic");
      specefic.style.paddingTop = "20%";
      var inc = document.getElementById("increase");
      inc.style.fontSize = "29px";


}
if(isIpad)
{
    fr.style.paddingTop = "20%";
}

