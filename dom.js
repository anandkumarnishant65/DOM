var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event//
form.addEventListener('submit', addItem);

//delete event//
itemList.addEventListener('click', removeItem);

//Add Item//
function addItem(e){
    e.preventDefault();
    //get input value//
    var newItem = document.getElementById('item').value;

    //creat new li element//
    var li = document.createElement('li');

    //Add Class//
    li.className = 'list-group-item';

    //Add text node with the input value//
    li.appendChild(document.createTextNode(newItem));

    //create del button//
    var deleteBtn = document.createElement('button');

    //Add classes to del button//
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node//
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li//
    li.appendChild(deleteBtn);

    //Append li to list//
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Pakka uda du???')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}