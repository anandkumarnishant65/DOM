var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event//
form.addEventListener('submit', addItem);

//delete event//
itemList.addEventListener('click', removeItem);

//filter event//
filter.addEventListener('keyup', filterItems);

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
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter Items//
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}