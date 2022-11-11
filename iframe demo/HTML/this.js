//window.onload


window.addEventListener('resize', function() {

    if ($(window).width() < 1400) {
        document.getElementById("logoiski").style.display = "none";
    } else {
        document.getElementById("logoiski").style.display = "initial";
    }

    if ($(window).width() < 1000) {

        window.location.reload();

    } else {

        if (document.getElementById("main_title").innerHTML.includes("<br/>")) {

            window.location.reload();
        }
    }


});

function hideLoadingLabel() {
    document.getElementById("pre-loadFrame1").style.display = "none";
}

function setMainTextResponsive() {

    if ($(window).width() < 1000) {
        document.getElementById("logoiski").style.display = "none";

        responsiveTitle("main_title", "<br/>");

        backgroundOfThisTitle = document.getElementById("main_title").style.paddingBottom = "45px";

    }
}

function responsiveTitle(theItem, newChar) {

    x = document.getElementById(theItem).innerText;

    x = charReplacer(x, x.indexOf("-") + 1, newChar);

    document.getElementById(theItem).innerHTML = x;

}

function charReplacer(text, index, newCharacter) {
    return text.substring(0, index) + newCharacter + text.substring(index + 1);
}