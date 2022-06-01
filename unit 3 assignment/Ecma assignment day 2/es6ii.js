
class stack{

    constructor(){
        this.length=0
        this.stack=[]


    }

    push(el){
        this.stack[this.length]=el;
        this.length++
    }

    pop(){
     this.stack.pop();
     this.length--
    }

    top(){
       return this.stack[this.length-1]
       this.length--
    }
    
    reverse(){
        this.stack.reverse()
    }

     

    size(){
        return  this.length
    }

   print(){
       return this.stack
   }
     
}

let s1=new stack()

s1.push(1)
s1.push(2)
s1.push(10)
s1.push(40)
s1.print()
 
console.log(s1)

// 2nd Assignment


// class Nexon{
//     constructor(br,b,w,a){

//       this.brand=br
//       this.brake=b
//       this.wheel=w
//       this.airbags=a
//     }
// }

// class Harrier extends Nexon{

//     constructor(br,b,w,a,g){
//         super(br,b,w,a)
//         this.sunroof=true;
//         this.parkingsensor=true;
//          this.gear=g
//     }
// }

// let car=new Harrier("Tata","ABS","Alloy Wheels",6,"Automatic")

// console.log(car)