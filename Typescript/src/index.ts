class rectangle {
     width : number;
     height : number;
   
    constructor()
    constructor(width:number,height:number);
    constructor(width?:number,height?:number){
        this.width = width??0;
        this.height=height??0; 

    }
    
    CalcCircumference():number {

        return  2*(this.width+this.height)
    } 
    static whoAmI(): string{
        return`I am rectangle`
    }

}
let rectang = new rectangle(8,6)

console.log(rectang.CalcCircumference())
console.log(rectangle.whoAmI())
////////////////////////////////////////////////////////////////////////////
class square extends rectangle {
    length:number;

   
    constructor (length:number){

        super(length,length);
        this.length=length;
        
    }    
    CalcCircumference():number{
        
        return 4*this.length; 
    }
    static whoAmI():string{
        return `I am square`;
    }
}

const squr = new square(5);
console.log(squr.CalcCircumference())
console.log(square.whoAmI())
////////////////////////////////////////////////////////////////////////////////////////
/*Implement Generics Queue or Stack using typescript and OOP.*/
interface Iqueue<T>{
    enqueue(item:T):void;
    dequeue():T | undefined;
    size(): number;
}
class Queue <T> implements Iqueue<T>{
    private storage : T [] =[];
    constructor(private capacity : number = Infinity){}
    
    enqueue(item: T ):void {
        if(this.size()==this.capacity){
            throw Error("this queue has reached its max capacity")
        }
        this.storage.push(item);
    }

    dequeue():T | undefined{
        return this.storage.shift();
    }

    size() : number{
        return this.storage.length;
    }
    
    print() {
        return this.storage
    }
    
}

const queue = new Queue<string>();

queue.enqueue("SA");
queue.enqueue("S");

console.log(queue.dequeue());

queue.size();

console.log(queue.print())
