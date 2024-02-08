function clickedYes(){
    var displayGIF = document.getElementById('display_gif');
    displayGIF.src = 'yes.gif';
    var introDiv = document.getElementById("intro");
    introDiv.innerHTML = "<p>Thank you for being my Valentine! &#10084;</p> <img id=\"additional_gif\" src=\"amazing.gif\" alt=\"testing\">";
}

var h = 30;
var w = 50;
var font = 10;
var gifs = ['cry1.gif','cry2.gif','cry3.gif','cry4.gif','cry5.gif'];
var i = -1;

function clickedNo() {
    var yesButton = document.getElementById('yes_btn');
    h *= 2;
    w *= 2;
    font += 10;
    yesButton.style.height = h + 'px';; // Adjust the size as needed
    yesButton.style.width = w + 'px';; // Adjust the size as needed
    yesButton.style.fontSize = font + 'px';; // Adjust the size as needed

    i = (i+1) % 5;
    var displayGIF = document.getElementById('display_gif');
    displayGIF.src = gifs[i];
}
