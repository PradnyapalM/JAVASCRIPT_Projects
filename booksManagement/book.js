var books=[]
var input = prompt('Which operation you want to perform add|list|exit')

while(input!='exit')
{

    if(input=='add')
    {
        var newBook=prompt('Enter name of the book add')
        books.push(newBook)
    }

    else if (input=='list')
     {
         console.log("Lista of books available:");
         console.log(books);

        
    }

    else{
        console.log("Choose valid option");

    }
    input = prompt('Which operation you want to perform add|list|exit')


}

console.log("Thanks for using application");