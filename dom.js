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

//GET ELEMENT BY ID//

var item=document.getElementsByTagName('li');
console.log(item[2]);
item[2].style.backgroundColor = 'green';

for(var i=0; i<item.length;i++){
    item[i].style.fontWeight = 'bold';
}
