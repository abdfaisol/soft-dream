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
var msg = document.getElementsByClassName('msg');
for (var i = 0; i < msg.length; i++) {
	console.log(i);
	var elem = "<i class='fas fa-info-circle'></i>";
	msg[i].insertAdjacentHTML('afterbegin',elem);
}
var el = document.getElementsByClassName('post')[0].getElementsByTagName('p');
for (var i = 0; i < el.length; i++) {
  var word0 = el[i].textContent.split(" ")[0];
  var word = el[i].textContent.split('')[0];
// 	console.log("index ke "+i+" mengadung dengan kata depan \""+word0+"\" dengan huruf didepannya =>"+word);
  if(word == '\"' || word == '“'){
// 	  console.log('yes ini dialog');
    el[i].classList.add("dialog");
  }else{
// 	  console.log('ini bukan dialog');
  }
}
