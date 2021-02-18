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

function playaudio(i){
  var x = document.getElementById("audio"); 
  var e = i.classList.contains('play');
  var j = document.getElementById("textaudio");
  console.log(i);
  console.log(e);
  if(e == true){
    j.textContent = "Mulai Audio";
    i.classList.remove("play");
    x.pause(); 
    console.log('menutup audio');
  }else{
    j.textContent = "Hentikan Audio";
    i.classList.add("play");
    x.play(); 
    console.log('memainkan audio');
  }
}

function menutab(){
  var i = document.getElementsByClassName('crap-scroll')[0];
  var k = document.getElementsByClassName('eye-soft')[0];
  var e = i.classList.contains('open');
  console.log(i);
  console.log(e);
  if(e == true){
    setTimeout(
    function togleclass(){
      i.classList.remove("open");
    },100);
    console.log('berhasil manambahkan class');
    setTimeout(
    function togleclass2(){
      k.style.height = 'auto';
    },401);
    console.log('berhasil memperbarui tinggi');
  }else{
    k.style.height = '100%';
    console.log('berhasil memperbarui tinggi');
    
    console.log('berhasil menghapus class');
    setTimeout(
    function togleclass(){
    i.classList.add("open");
  },100);
     
  }
}
// const menu = document.getElementsByClassName('eye-soft')[0];
// const hamburgerButtonElement = document.querySelector("#tap2menu");
// const drawerElement = document.querySelector("#item-menu");
 
// hamburgerButtonElement.addEventListener("click", event => {
//   menu.classList.toggle("full-h");
//   setTimeout(
//     function togleclass(){
//     drawerElement.classList.toggle("open");
//   },1000);
//  event.stopPropagation();
// });
 
var msg = document.getElementsByClassName('msg');
for (var i = 0; i < msg.length; i++) {
	console.log(i);
	var elem = "<i class='fas fa-info-circle'></i>";
	msg[i].insertAdjacentHTML('afterbegin',elem);
}
document.addEventListener('keydown', (i) => {
    if(i.key == "ArrowLeft"){
  var sb = document.getElementById('before').getAttribute('href');
      window.open(sb,"_self");
      
    }else if(i.key == 'ArrowRight'){
      var sb = document.getElementById('after').getAttribute('href');
      window.open(sb,"_self");
    }
});
// End
window.onload= function(e) {
  var a = document.querySelectorAll('.sweet-menu a');
  for(var i = 0; i < a.length; i++){
    if(a[i].getAttribute('href') == document.URL){
      console.log('sama');
      a[i].classList.toggle("active");
    }
  }

  var i = document.getElementsByClassName('sweet-portal');
  var p = document.getElementsByClassName('f-swet')[0];
  if(i.length == 1){
    p.appendChild(i[0]);
  }
    if(window.innerWidth <= 576){
  var h = document.getElementsByClassName('eye-soft')[0].offsetHeight + 20;
  document.getElementsByClassName('soft-wrapper')[0].style.marginTop = h+'px';
}else{
  document.getElementsByClassName('soft-wrapper')[0].style.marginTop = '0px';
}
};
window.onresize = function(e) {
    if(window.innerWidth <= 576){
  var h = document.getElementsByClassName('eye-soft')[0].offsetHeight + 20;
  document.getElementsByClassName('soft-wrapper')[0].style.marginTop = h+'px';
}else{
  document.getElementsByClassName('soft-wrapper')[0].style.marginTop = '0px';
}
};

window.onscroll = function(ev) {
  // console.log(window.innerHeight + window.scrollY);
  if((window.innerHeight + window.scrollY) >= document.getElementsByClassName('sweet-post')[0].getBoundingClientRect().height + document.getElementsByClassName('header-ads')[0].getBoundingClientRect().height + 200){
      // console.log('wow post berakhir');
       document.getElementsByClassName('navigator-sweet')[0].classList.remove("sweet-open");
              // console.log("nope");
      event.stopPropagation();
             
             }
    else if ((window.innerHeight + window.scrollY) >= document.getElementsByClassName('soft-category')[0].getBoundingClientRect().bottom + document.getElementsByClassName('soft-category')[0].getBoundingClientRect().height * 3) {
      // document.getElementsByClassName('soft-wrapper')[0].style.marginTop = '0px';
      var a = document.getElementsByClassName('navigator-sweet')[0].classList.contains('sweet-open');
      if( a == false){
        document.getElementsByClassName('navigator-sweet')[0].classList.toggle("sweet-open");
      }
        // console.log("you're at the bottom of the page");
      event.stopPropagation();

    } else{
      document.getElementsByClassName('navigator-sweet')[0].classList.remove("sweet-open");
              // console.log("nope");
      event.stopPropagation();

  //     var h = document.getElementsByClassName('eye-soft')[0].offsetHeight + 20;
  // document.getElementsByClassName('soft-wrapper')[0].style.marginTop = h+'px';
    }
    
};





