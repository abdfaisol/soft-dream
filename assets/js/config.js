var ek = document.getElementsByClassName('post');
var nek = ek.length;
if(nek > 0){
	var el = ek[0].getElementsByTagName('p');
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
	var idk = document.getElementsByClassName('detail-cov')[0];
var j = document.getElementsByClassName('portal-awal');
	var k = document.getElementsByClassName('soft-category')[0];
	if(j.length == 1){
		document.getElementsByClassName('home-heading')[0].style.diplay='none';
    idk.appendChild(k);
  }
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
	if(!document.getElementsByClassName('navigator-sweet').length == true){
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
    }
};
function sortListDir(e) {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("id01");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      var bi = b[i].getElementsByTagName("a")[0];
      var bii = b[i + 1].getElementsByTagName("a")[0];
      var numb = bi.innerHTML.match(/\d/g);
      // console.log(numb);
      numb = numb.join("");
      // console.log(numb);
      var numb2 = bii.innerHTML.match(/\d/g);
      // console.log(numb2);
      numb2 = numb2.join("");
      // console.log(numb2);
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      var icon = e.getElementsByTagName("i")[0].classList;
      // console.log(icon);
      if (dir == "asc") {
        if (Number(numb) > Number(numb2)) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          console.log("asc");
          icon.remove("fa-sort-numeric-desc");
          icon.add("fa-sort-numeric-asc");
          break;
        }
      } else if (dir == "desc") {
        if (Number(numb) < Number(numb2)) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          // console.log("desc");
          icon.remove("fa-sort-numeric-asc");
          icon.add("fa-sort-numeric-desc");
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function caridata() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("isidata");
    filter = input.value.toUpperCase();
    ul = document.getElementById("id01");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




