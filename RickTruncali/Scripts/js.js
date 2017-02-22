// DOM Ready
$(function() {

    var $el, leftPos, newWidth;

        //var z;
    //document.getElementById('go').onclick = function () {
    //    if (!z) {
    //        z = new ZergRush(20);
    //    }
    //};
    //document.getElementById('reset').onclick = function () {
    //    z.destroy();
    //    z = null;
    //};
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#nav-desktop").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    document.fonts.ready.then(function () {
        $magicLine
            .width($(".current_page_item").width())
            .css("left", $(".current_page_item a").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
    });

    $("#nav-desktop li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    

});