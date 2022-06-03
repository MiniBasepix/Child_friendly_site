$(function(){
    var key = "font";
    var data = localStorage.getItem(key);
    if(data == "large"){
        $("body").css("fontSize","1.4em");
    }else if(data == "middle"){
        $("body").css("fontSize","1.2em");
    }
    $('#fontSize ul li').on('click keypress', function(e) {
        $("#fontSize ul li").removeClass("current");
        var fontCss = $(this).attr("class");
        $(this).addClass("current");
        if(fontCss == "large"){
          $("body").css("fontSize","1.4em");
          data = "large";
          localStorage.setItem(key,data);
        }else if(fontCss == "middle"){
          $("body").css("fontSize","1.2em");
          data = "middle";
          localStorage.setItem(key,data);
        }else{
          $("body").css("fontSize","1em");
          data = "small";
          localStorage.setItem(key,data);
        }
     });
     $('#fontSize ul li.'+data).trigger('click');
});