import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');
const config = require('../DATA.json');
var con = config['restaurants'];
var e = document.getElementsByClassName('canva')[0];
for (var i = 0; i < con.length; i++) {
	console.log(i);
	console.log(con[i]['name']);
	var elem = "<div class='cover-contain'> <div class='cover'> <div class='tumbail'> <img alt='gambar "+con[i]['name']+"' src='"+con[i]['pictureId']+"'> </div><p class='label' arial-label='Bertempat di kota "+con[i]['city']+"'>"+con[i]['city']+"</p> </div> <div class='deskripsi'> <div class='flex flex-row'> <a tab-index='1' aria-label='Cafe yang bernama "+con[i]['name']+" terletak di kota "+con[i]['city']+" dengan reputasi bintang "+con[i]['rating']+"' href='#'><h3>"+con[i]['name']+"</h3> </a><p class='score'><i class='fas fa-star'></i>"+con[i]['rating']+"</p> </div> <p class='dd'>"+con[i]['description']+"</p> </div> </div>";
	e.insertAdjacentHTML('beforeend',elem);
}
	

console.log(config);

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
 
hamburgerButtonElement.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});
 
 
mainElement.addEventListener("click", event => {
 drawerElement.classList.remove("open");
 event.stopPropagation();
})

var i;
var divs = document.getElementsByClassName('dd');
for (var i = 0; i < divs.length; i++) {
	console.log(i);
	console.log(divs[i]);
	divs[i].innerHTML = divs[i].innerHTML.substring(0,300);
}
