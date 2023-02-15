// Make class box has width ,height, array contain books  
// and hava Book class has id,name, writer  name and num of pages  
// make overriding on function value of in object type take instance of box and return sum of all pages of books in this box  
// in this box  make  method to clac area of this box 

class box(){
    box.style.width = '100px';
    box.style.height='200px';
    }

function Book(id,Bookname,writername,pages){

    this.id=id;
    this.Bookname=Bookname;
    this.writername=writername;
    this.pages=pages;
    this.Book=function(){
        console.log(this);

    }
    
    
}


var s1=new Book ("234","atomc habits","james  clear",320);
var s2=new Book ("1234","the rich dad poor dad","robert T.kyosakie",336);
console.log(s1);
console.log(s2);