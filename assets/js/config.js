$("#tap2menu").click(function(){
  var target = $(".menu-soft");
  var status = target.hasClass("soft-r-ani");
    console.log(status)
  if(status == false){
    target.removeClass("soft-l-ani");
    target.css("transform","translateX(-100%)")
    target.removeClass("nonaktif");
    target.addClass("soft-r-ani");
  }else{ target.css("transform","translateX(0%)")
    target.removeClass("soft-r-ani");
    target.addClass("soft-l-ani");
  }
  
})