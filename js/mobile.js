$.mobile.defaultPageTransition = "slide";
var pointer = 0;

// nog in bèta fase
function navTo(id) {
    $(id).pagecontainer("change");
}

function onStart(){
    pointer = window.history.length;
}

function canGoBack() {
    if (history.length > 2 || document.referrer.length > 0) {
        return true;
    }else{
        return false;
    }
}

function canGoForward() {
    if (pointer >= 0) {
        return true;
    } else {
        return false;
    }
}

function disableCheck() {
    if (canGoBack())
        $(".terug").attr("disabled", false);
    else
        $(".terug").attr("disabled", "disabled");

    if (canGoForward())
        $(".volgende").attr("disabled", false);
    else
        $(".volgende").attr("disabled", "disabled");
}

$(window).on("load", function () {
    onStart();
    $(".terug").on("click", function () {
        window.history.back();
        pointer++;
    });
    $(".volgende").on("click", function () {
        window.history.forward();
        pointer--;
    });
    $("a").on("click", function() {
        disableCheck();
    });
});