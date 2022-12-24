// We want to store the information of different vehicles. Create a class named Vehicle with two data member named mileage and price. Create its two subclasses 
// *Car with data members to store ownership cost, warranty (by years), seating capacity and fuel type (diesel or petrol). 
// *Bike with data members to store the number of cylinders, number of gears, cooling type(air, liquid or oil), 
// wheel type(alloys or spokes) and fuel tank size(in inches) 
// Make another two subclasses Audi and Ford of Car, each having a data member to store the model type.
//  Next, make two subclasses Bajaj and TVS, each having a data member to store the make-type. 
// Now, store and print the information of an Audi and a Ford car (i.e. model type, ownership cost, warranty, 
// seating capacity, fuel type, mileage and price.) Do the same for a Bajaj and a TVS bike. 



class Vehicles
{
    constructor(mileage,price)
    {
        this.mileage=mileage;
        this.price=price;
    }
    setMileage(m){
        this.mileage=m;
    }
    setPrice(p){
        this.price=p;
    }
   
}


class Car extends Vehicles 
{
    constructor(mileage,price, ownershipCost,warranty, seatingCapacity,fuelType){
        super(mileage,price);
        this.ownershipCost=ownershipCost;
        this.warranty=warranty;
        this.seatingCapacity=seatingCapacity;
        this.fuelType=fuelType;
    }
   
}
class Bike extends Vehicles 
{ 
    
  constructor(mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize){
    super(mileage,price);
      this.cylinders=cylinders;
      this.gears=gears;
      this.coolingType=coolingType;
      this.WheelType=WheelType;
      this.fuelTankSize=fuelTankSize;

  }
  setCylinders(cyl){
      this.cylinders=cyl;
  }
  setGears(ge){
      this.gears=ge;
  }
  setCoolingType(cool){
      this.coolingType=cool;
  }
  setWheelType(wheel){
      this.WheelType=wheel;
  }
  setFuelTankSize(tankSize){
      this.fuelTankSize=tankSize;
  }
}
class Audi extends Car{
    
    constructor(modelType,mileage,price, ownershipCost,warranty, seatingCapacity,fuelType){
        super(mileage,price,ownershipCost,warranty,seatingCapacity,fuelType);
        this.modelType=modelType;
    }
}
class Ford extends Car{
    constructor(modelType,mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize){
        super(mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize)
        this.modelType=modelType;
    }
}
class Bajaj extends Bike{
    constructor(modelType,mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize){
        super(mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize);
        this.modelType=modelType;
    }
}
class TVS extends Bike{
    constructor(modelType,mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize){
        super(mileage,price,cylinders,gears,coolingType,WheelType,fuelTankSize);
        this.modelType=modelType;
    }
}

let v1 = new Vehicles(30,50);
console.log(v1)
let car1=new Car(300,2005,5,"petrol")
console.log(car1)
let bike1= new Bike(4,12,5,8,"liquid","spokes","30inch")
console.log(bike1);
let auCar= new Audi("e-tron",2000,90800,40000,3,5,"petrol")
console.log(auCar);
let fordCar = new  Ford ("expedition",1000,55125,8000,2,4,"diesel")
console.log(fordCar)
let bjBike= new Bajaj("pulsan250",8000,140698,2,0,"oil","alloys","40inch");
console.log(bjBike);
let tvBike= new TVS("raider125",6600,90534,3,9,"air","spokes","80inch")
console.log(tvBike)

////////////////////////////////////////////////////
// Create a new class called Computer. Before you add any more code, 
// know that you will need to add two additional classes:Laptop and SmartPhone. 
// Before you start coding anything inside these classes, 
// diagram how the three classes are going to be related to each other.
//  Remember to add properties and methods to your diagram! 

// For a parent class add 3 properties, 2 methods, and a constructor. 

// For a child class add at least 1 additional property and 1 additional method
class Computer{
    constructor(ram,processor,storage){
        this.ram=ram;
        this.processor=processor;
        this.storage=storage;

}
    display(){
        console.log(`this device has ram with ${this.ram}gb ,processor version ${this.processor} and storage ${this.storage}`)
    }

    expandStorage(p){
        this.storage+=p;
    }


    
}
 
class Laptop extends Computer{
     constructor(model,ram,processor,storage){
         super(ram,processor,storage);
         this.model=model;
     }
     print(){
         console.log("model"+this.model)
     }

 }

class SmartPhone extends Computer  {
    constructor(batteryhealth,ram,processor,storage){
        super(ram,processor,storage);
        this.batteryhealth=batteryhealth;
    }
    notify(){
        if (this.batteryhealth<50) {
            console.log("your battery is dying")
        }
        else{

        }
        
    }
    
    
}

let c1 = new Computer(12, "i7", 512);
c1.expandStorage(50);
c1.display();

let c2 =new Laptop("dell","dinamic","singlecore","500gb");
c2.display();
c2.print();

let c3= new SmartPhone(25,"static","dualcore","128gb");
c3.display();
c3.notify();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Design a class hierarchy rooted in the class Employee that includes subclasses for HourlyEmployee and SalaryEmployee. 
// The attributes shared in common by these classes include the name, and job title of the employee, 
// plus the accessor and mutator methods needed by those attributes. The salaried employees need an attribute for weekly salary, 
// and the corresponding methods for accessing and changing this variable. The hourly employees should have a pay rate and an hours worked variable.
//  There should be an abstract method called calculateWeeklyPay(), defined abstractly in the superclass and implemented in the subclasses. 
//  The salaried worker's pay is just the weekly salary. Pay for an hourly employee is simply hours worked times pay rate. 
class Employee {
 constructor (name,jobTitle)
 {
     this.name=name;
     this.jobTitle=jobTitle;
 }
 calculateWeeklyPay() {
    throw new Error('You have to implement the method in the subclass!');

 };

}

class HourlyEmployee extends Employee
{
    constructor(name,jobTitle,payRate,hoursNum){
        super(name,jobTitle);
        this.payRate=payRate;
        this.hoursNum=hoursNum;


    }

    calculateWeeklyPay(){
        return this.payRate*this.hoursNum;
    }
}

class SalaryEmployee extends Employee
{
    constructor(name,jobTitle,weeklySalary){
        super(name,jobTitle);
        this.weeklySalary= weeklySalary;

    }
    //getter
    getWeeklysalary(){
        return this.weeklySalary;
    }
    //setter
    setWeeklysalary(newWeeklySalary){
        this.weeklySalary= newWeeklySalary ;

    }
    calculateWeeklyPay(){
        return this.weeklySalary;
    }

}

let e1= new HourlyEmployee("sarah","webDiv",1000,20);
console.log(e1)
let e2 = new SalaryEmployee("alyaa","translator",12000)
e1.calculateWeeklyPay()
console.log(e2);
e2.calculateWeeklyPay()
console.log(e1.calculateWeeklyPay())
console.log(e2.calculateWeeklyPay())
