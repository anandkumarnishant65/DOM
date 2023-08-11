//console.dir(document);
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='Hello';

//var header=document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//console.log(document.getElementById('header-title'));

// Get element by class name //

// var item=document.getElementsByClassName('list-group-item');
// console.log(item[2]);
// item[2].style.backgroundColor = 'green';

// for(var i=0; i<item.length;i++){
//     item[i].style.fontWeight = 'bold';
// }


// //GET ELEMENT BY ID//

// var item=document.getElementsByTagName('li');
// console.log(item[2]);
// item[2].style.backgroundColor = 'green';

// for(var i=0; i<item.length;i++){
//     item[i].style.fontWeight = 'bold';
// }

// QUERY SELECTOR //
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'pink';
// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color = 'green';

// // QUERY SELECTORALL //
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     odd[1].style.color = 'green';
// }
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++){
//     even[0].style.color = 'green';

// }

// TRAVERSING DOM //

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// //itemList.parentNode.style.backgroundColor = '#e1e1e1';

// //PARENTELEMENT//
// //itemList.parentNode.style.backgroundColor = 'red';

// //CHILDNODE//
// itemList.children[1].style.backgroundColor = 'pink';

// //FIRSTELEMENTCHILD//
// itemList.firstElementChild.style.backgroundColor = 'yellow';

// //LASTCHILD
// itemList.lastElementChild.style.backgroundColor = 'blue';

// //nextSibling
// //console.log(itemList.nextSibling);
// //console.log(itemList.nextElementSibling);

// //previousSibling//
// itemList.previousElementSibling.style.color = 'red';

//CreateElement//
//creat a Div//
var newDiv = document.createElement('div','/div');
//Add class//
newDiv.className = 'hello';
//Add Id//
newDiv.id='hello1';
//add attribute//
newDiv.setAttribute('title' , 'hello div');
//create textNode//
var newDivText = document.createTextNode('HEllo');
//Add text to Div//
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

console.log(newDiv);