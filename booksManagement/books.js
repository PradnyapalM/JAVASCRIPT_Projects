var books=[]

var input = prompt('Which operation you want to perform [add |delete|list|exit]')
while(input!='exit')
{
    if (input == 'add') {
        addBook();
    }

    else  if (input=='delete') {
        deleteBook();
    }

   else if (input=='list') {
        listBook();
    }

    else{
        console.log("Choose valid option");

    }

    input = prompt('Which operation you want to perform [add |delete|list|exit]')



}

console.log("Thanks for using application");



function addBook()
{
    var add = prompt('Enter the book to add')
    books.push(add)
}


function listBook()
{
    console.log('Available books are:')
    for(book of books)
    {
        console.log(book)
    }
}

function deleteBook()
{
    var name=prompt('Enter name of boook that you want to delete')

    var index = books.indexOf(name)
    if (index==-1) 
    {
        console.log('Book is not avilable');    
    }
    else{
        // index.splice(index,1)
        books.splice(index,1)
        console.log('sepecified books is deleted');
    }
}
