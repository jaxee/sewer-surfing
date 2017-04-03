$( document ).ready(function() {
    var sections = ["michaelsStory", "subZero", "surfJam", "communityCuriosity"];
    $(".michaelsStory").addClass("selected");

    $(".arrow").click(function() {
        $.scrollify.move("#michael");
    });

    $("#splash").click(function() {
        $.scrollify.move("#home");
    });
    $(".michaelsStory").click(function() {
        $.scrollify.move("#michael");
    });
    $(".subZero").click(function() {
        $.scrollify.move("#sub");
    });
    $(".surfJam").click(function() {
        $.scrollify.move("#surf");
    });
    $(".communityCuriosity").click(function() {
        $.scrollify.move("#community");
    });

    $(function() {
        $.scrollify({
            section : ".scrollT",
            sectionName : "section-name",
            before:function() {
                var current = $.scrollify.current();

                if (current[0].id == "homePage") {
                        $('.navigation').fadeOut(300);
                        $('.navigation').css("display", "none");
                        $('.logo').fadeOut(300);
                        $('.logo').css("display", "none")
                } else {
                    $('.navigation').fadeIn(500);
                    $('.logo').fadeIn(500);
                }

                changeNav(current[0].id);
            }
        });

        function changeNav(scrolledID){
            for(var i in sections){
                var el = document.getElementsByClassName(sections[i]);
                if(sections[i] == scrolledID){
                    $(el).addClass("selected");
                    continue;
                }
                
                $(el).removeClass("selected");
            }
        }
        // $(function() {
        //     $(window).scroll(function() {
        //         var current = $.scrollify.current();
        //         if (current[0].id == "home") {
        //                 $('.navigation').fadeOut(300);
        //                 $('.navigation').css("display", "none");
        //                 $('.logo').fadeOut(300);
        //                 $('.logo').css("display", "none")
        //         } else {
        //             if($(this).scrollTop() >= 500) {
        //                 $('.navigation').fadeIn(500);
        //                 $('.logo').fadeIn(500);
        //             } else {
        //                 $('.navigation').fadeOut(300);
        //                 $('.navigation').css("display", "none");
        //                 $('.logo').fadeOut(300);
        //                 $('.logo').css("display", "none")
        //             }
        //         }
        //     });
        // });
    });
});