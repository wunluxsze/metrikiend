// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.add('www')
// }
// br()
// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.remove('www')
// }
// br()
// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.contains('www')
// }
// br()
// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.toggle('www')
// }
// br()
// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.length
// }
// br()
// function br() {
//     let elem = document.getElementById('elem');
//     elem.classList.length
//     for (let el of elem.classList) {
//         alert(el)
//     }
// }
// br()

// function br() {
//     let elem = document.getElementById('elem');
//     elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid red';
// }
// br()

// function br(){
//     let elem = document.getElementById('elem');
//     console.log(elem.tagName);
// }
// function br(){
//     let elem = document.getElementById('elem');
//     str = elem.tagName;
//     console.log(str.toLowerCase());
// }
// function br() {
//     let elem = document.querySelectorAll('.www');
//         for (el of elem){
//             el.innerHTML = el.innerHTML + el.tagName.toLowerCase()
//         }
//     }
// function br() {
//     let parent = document.querySelector('#parent');
//     let p = document.createElement('li');
//     p.innerHTML = 'пункт';
//     parent.appendChild(p);
// }
// br()

// let ul = document.querySelector('#ul');
// let names = ['dskjgfds', 'l.gfd', 'lb.gfd'];
// for (let name = 0; name < names.length; name +=1){
//     let p = document.createElement('li');
//     p.innerHTML = names[name];
//     ul.appendChild(p);
// }


// var d1 = document.getElementById('el');
// d1.insertAdjacentHTML('beforeend', '<span>!!!</span>');

// var d1 = document.getElementById('el');
// d1.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// var d1 = document.getElementById('el');
// d1.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// var d1 = document.getElementById('el');
// d1.insertAdjacentHTML('afterend', '<span>!!!</span>');

//  let remove = document.querySelector('#paret');
// remove.onclick = function br(){

//     let btn = document.querySelector('#child');
//     remove.removeChild(btn);
// }


// function br() {
//     let last = document.querySelector('#awuyd');
//     last.lastElementChild.remove()
// }

// function br() {
//     let last = document.querySelector('#task');
//     last.remove()
// }


//     let last = document.querySelector('#ol');
//     last.addEventListener('click', br)
// function br(event) {
//     let rem = event.target
//     rem.remove()
// }

// let parent = document.querySelector('#parent')
// let elem = document.querySelector('#input')
// function br(){
//     clone = elem.cloneNode(true)
//     parent.appendChild(clone)
// }

// let red = document.querySelector('#elem')
// red.firstElementChild.style = 'color: red'

// let red2 = document.querySelector('#elem2')
// red2.lastElementChild.style = 'color: red'

// let red3 = document.querySelector('#elem3')
// let elems = red3.children
// for (let elem of elems){
//     elem.innerHTML += '!'
// }

// let elem = document.querySelector('#elem2')
// el = elem.previousElementSibling
// el.innerHTML += '!'

// let elem = document.querySelector('#elem1');
// el = elem.nextElementSibling;
// el.innerHTML += '!'

// let elem = document.querySelector('#elem1');
// el = elem.nextElementSibling;
// el2 = el.nextElementSibling
// el2.innerHTML += '!'

// let el = document.querySelector('#elem1')
// el.style = 'color: black'
// el.parentElement.style = 'color: red'

// let el = document.querySelector('#elem1');
// el2 = el.parentElement
// el2.style = 'color: black'
// el2.parentElement.style = 'color: red';

// function br(){
//     let el = document.querySelector('#elem')
//     alert(el.clientTop)
// }

// function br(){
//     let el2 = document.querySelector('#elem2')
//     alert(el2.clientLeft)
// }

// function br(){
//     let el = document.querySelector('#elem')
//     alert(el.offsetWidth)
// }

// function br(){
//     let el = document.querySelector('#elem')
//     alert(el.offsetHeight)
// }


// function br(){
//     let el = document.querySelector('#elem')
//     alert(el.clientWidth)
// }

// function br(){
//     let el = document.querySelector('#elem')
//     alert(el.clientHeight)
// }

// function br(){
//     let el = document.querySelector('#elem')
//     alert(getComputedStyle(el).height + ' ' + getComputedStyle(el).width);
// }

// let elem = document.querySelector('#elem')
// function br(){
//     alert(elem.scrollTop)
// }

// let elem = document.querySelector('#elem')
// function br(){
//     alert(elem.scrollLeft)
// }

// let elem = document.querySelector('#elem')
// function br(){
//     elem.scrollTop = 100;
// }

// let elem = document.querySelector('#elem')
// function br(){
//     elem.scrollTop += 100;
// }

// let elem = document.querySelector('#elem')
// function br(){
//     alert(elem.scrollHeight);
// }


// let elem = document.querySelector('#elem')
// function br(){
//     alert(elem.scrollWidth);
// }

// let elem = document.querySelector('#elem')
// function br(){
//     let height = elem.scrollHeight;
// 	let needed_height = height - 100;
// 	elem.scrollTop = needed_height;
// }


// function br() {
// 	alert(pageYOffset);
// }
// function br() {
// 	alert(pageXOffset);
// }

// function br() {
//     window.scrollTo(300, 500);
// }

// function br() {
//     window.scrollTo(0, 300);
// }

// function br() {
//     window.scrollTo(0, document.body.clientHeight);
// }

// function br() {
//     window.scrollBy(0, 400);
// }

// function br() {
//         let body = document.documentElement;
//         if (body.scrollHeight - body.scrollTop == body.clientHeight) {
//             window.scrollTo(0, 100);
//     }
// }

var elem = document.getElementById('elem');
elem.addEventListener('click', func);

function func() {
    let width = this.offsetWidth;
	let height = this.offsetHeight;
	this.style.width = width * 2 + 'px';
	this.style.height = height * 2 + 'px';
}

