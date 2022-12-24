class Book{
    constructor(bookId,author,name,price,rackNo,status,edition,dateOfPurchase)
    {
        this.bookId=bookId;
        this.author=name;
        this.edition=price;
        this.rackNo=rackNo;
        this.status=status;
        this.dateOfPurchase=dateOfPurchase;
        this.author=author;
        this.edition=edition;

    }
    displayBookDetails(){
        console.log(`${this.bookId}, ${this.name},${this.price},${this.rackNo},${this.status},${this.dateOfPurchase},${this.author},${this.edition}`)
    }

    updateStatus(){
        if(this.status===true) this.status=false;
        else this.status=true;

        console.log(this.status)
        
    }
}


class studybooks extends Book
{
    
}
class Magazines extends Book
{

}
class journals extends Book
{

}


class Librarian
{
    constructor(_userName, _password){
        this.userName=_userName;
        this.passwoed=_password;
    }
    
    searchBook(book,bookDB)
    {

       console.log(bookDB.includes(book))
    }


    verifyMember()
    {


    } 


   issueBook(book, bookDB){
    bookDB.push(book)
        
    }


    calculateFine()
    {

    }


    createBill()
    {

    }


    returnBook()
    {


    }
    

    }

    let db = [];
    let date= new Date()
    let b1 = new Book("22","sjames","sarah","12$","4",false,1,date);
    let b2 = new Book("22","sjames","sarah","12$","4",false,1,date);
    let b3 = new Book("54","fgh","boray","12$","4",false,1,date);
    let lib1= new Librarian("sarah",12343454);
    lib1.issueBook(b1, db)
    lib1.issueBook(b3, db)
    // lib1.searchBook(b1,db)
   
    b1.displayBookDetails();
    b1.updateStatus();
