var stap = ["ui-accordion-tabs-panel-0"];
        var counter = 0;

        function activated(evt, ui) {
            counter++;
            stap[counter] = ui.newPanel.attr("id");
             for (var i = stap.length - 1; i > counter; i--) {
                 stap.pop();
             }
             disableCheck();
        }
        function configure(select) {
            $(select).accordion({
                animate: 200,
                active: parseInt(stap[0].substr(stap[0].length -1, 1)),
                activate: activated
            });
        }
        function disableCheck() {
            console.log("disableCheck is aangeroepen");
            var button;
            button = $(".terug");
            console.log(counter == 0);
            if (counter == 0)
                button.attr("disabled", "disabled");
            else
                button.attr("disabled", false);
            button = $(".volgende");
            console.log(counter >= stap.length);
            if (counter >= stap.length-1)
                button.attr("disabled", "disabled");
            else
                button.attr("disabled", false);
        }
        function navTo(id) {
            $("#tabs").accordion("option", "active", id);
        }
        function nav(teken) {
            switch(teken) {
                case "-":
                    if (counter > 0) {
                        counter--;
                    }
                    disableCheck();
                    navTo(parseInt(stap[0].substr(stap[0].length -1, 1)));
                    break;
                case "+":
                    if (counter < stap.length -1) {
                        counter++;
                    }
                    disableCheck();
                    navTo(parseInt(stap[0].substr(stap[0].length -1, 1)));
                    break;
            }
        }
        $(window).on("load", function() {
            configure("#tabs");
            $(".terug").on("click", function() {
                nav("-");
            });
            $(".volgende").on("click", function() {
                nav("+");
            })
        });