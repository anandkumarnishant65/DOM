//console.dir(document);
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='Hello';

//var header=document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//console.log(document.getElementById('header-title'));

// Get element by class name//

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
var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'pink';
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'green';

// QUERY SELECTORALL //
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
    odd[1].style.color = 'green';
}
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<even.length;i++){
    even[0].style.color = 'green';
}
