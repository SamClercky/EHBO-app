$.mobile.defaultPageTransition = "slide";
var pointer = 0;

// nog in bèta fase
function navTo(id) {
    $(id).pagecontainer("change");
}

function onStart(){
    console.log("onStart()");
    var hypo = Math.sqrt(
        Math.pow(window.innerWidth, 2) + 
        Math.pow(window.innerHeight, 2)
    );
    hypo = Math.floor(hypo);
    $(".page").css({
        "background-image":
        "radial-gradient(" + hypo + "px at 100% 0px, #fff 90%, #f93 93%, #c00 96%, #f93 95%, #fff 96% )"
    });
}

function canGoBack() {
    if (history.length > 0 || document.referrer.length > 0) {
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

    var textField = $(".ui-page-active .ui-content").text();
    console.log(textField);

});

function speak(txt) {
    TTS.speak(txt, function() {
        console.log("success");
    }, function(error) {
        console.log(error);
    });
}

function startSpeak() {
    var textField = $(".ui-page-active .ui-content").text();
    console.log(textField);

    speak(textField);
}

document.addEventListener("deviceraedy", function() {
    startSpeak();
    $(document).on("pagecontainerchange", function() {
        startSpeak();
    });
})