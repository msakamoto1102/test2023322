function header(){
    $.ajax({
        url: "header.html",
        cache: false,
        async: true,
        success: function(html){
            document.write(html);
        }
    });
}
