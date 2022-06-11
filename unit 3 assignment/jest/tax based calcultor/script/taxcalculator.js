

function taxcalculator(amount,saving){

     
    
     
        if(amount<250000 &&saving<250000){
               return "You Are Out From Tax Slab"
        }

        else if(amount<500000 && saving<500000 && amount>250000 ){
            let save=amount-Math.floor(saving*1/2)
            return   save*1/10
                   
             
             
        }

        else if( amount>500000  &&  saving<5000 && amount<1000000){
            let save=amount-Math.floor(saving*3/10)
             return  save*1/5
             
             
        }

        else{
            let save= amount-Math.floor(saving*1/10)
             return save*3/10
            
             
        }
        


    
}

      export default taxcalculator  

