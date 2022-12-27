class openAccount{
    constructor(name,balance,cardNum){
        this.name=name;
        this.balance=balance;
        this.cardNum=cardNum;    
    }
    // balanceFactory(){
    //     return this.balance;
    // }
    
    DepositMoney(depBalance){
        // this.balance=plusBalance;
        this.depBalance=depBalance;
        this.balance+=depBalance;
        
        
        console.log(`successful operation = ${this.balance}`);
        
    }
    
    WithdrawMoney(wdBalance){
        // this.balance=oreginBalance;
        this.wdBalance=wdBalance;
        this.balance-=wdBalance;
        if(this.balance-wdBalance>0){
            console.log(`successful operation=  ${this.balance} $ `);
        }
        else{
            console.log("failed")
        }
        
    }
    DisplayAccount(){
        console.log(`your account details is ${openAccount()}`)
    }
    Transaction(withdraw,y){
        this.balance-=withdraw;
        y.balance+=withdraw;
        
        
    }
    
} 
class accountFactory{
    constructor(type,props){
        this.type=type;
        this.props=props;
        if(type==="saving"){
            return new SavingAccount(props.name,props)
        }
        if(type==="current"){
            return new currentAccount(props.name, props.balance, props.card)
        }
        
    }
    
    
}
class SavingAccount extends openAccount{
    constructor(name,balance,cardNum){
        super(name,balance,cardNum)
    }
}

class currentAccount extends openAccount {
    constructor(name,balance,cardNum){
        super(name,balance,cardNum)
    }
}
let properties={
    name: "Anas",
    balance:50000000,
    card: 572383
}
let  current = new accountFactory("current",properties)

let x = new openAccount("sarah",90,98573);
let y = new openAccount("anas",1060,87654);

x.DepositMoney(50);
x.WithdrawMoney(10);

console.log(x,y)

console.log(x.Transaction(30,y))
console.log(x,y)
///////////////////////////////////////////////////////////////////////////////
class Monster{
    constructor(name,hp){
        if (this.constructor == Monster){
            throw new Error("You cannot create an instance of  Abstract Class");
        }
        this.name=name;
        this.hp=hp;
    }
    getName(){
        return this.name;
    }
    getHp(){
        return this.hp;
    }
    attackDamage(){
        
        throw new Error("You cannot create an instance of  Abstract Class");
    }

}

class Alien extends Monster{
    constructor(name,hp){
        super(name,hp)
    }
    attackDamage(pery){
        pery.hp-=80;
    }
}
class Vampire extends Monster{
    constructor(name,hp){
        super(name,hp)
        
    }
    attackDamage(pery){
        pery.hp-=60;
    }

}
class Beast extends Monster{
    constructor(name,hp){
        super(name,hp)
    }
    attackDamage(pery){
        pery.hp-=90;

    
    }
}
class MonstorDecorator{
    constructor(monstor,name,hp){
        this.monstor=monstor;
        this.name=name;
        this.hp=hp;
    }
    getName(){
        return this.monstor.name + " " + this.name 
    }
    getHp(){
        return this.monstor.hp + this.hp
    }
    attackDamage(){
    }

}
class Fire extends MonstorDecorator {
    constructor(monstor,name,hp){
        super(monstor,name,hp)
    }
    attackDamage(pery){
        pery.hp-=110;

    
    }
}

class Flying extends MonstorDecorator {
    constructor(monstor,name,hp){
        super(monstor,name,hp)
    }
    attackDamage(pery){
        pery.hp-=190;

    
    }
}
class Lasers extends MonstorDecorator {
    constructor(monstor,name,hp){
        super(monstor,name,hp)
    }
    attackDamage(pery){
        pery.hp-=660;

    
    }
}

let dracula = new Vampire("Dracula", 1500);
let dean = new Beast("Dean", 900);
