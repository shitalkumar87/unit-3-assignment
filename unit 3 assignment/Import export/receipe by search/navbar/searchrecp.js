 let id;
let main =async ()=>{

    let receipe=document.getElementById("receipe").value;
     let data= await getdata(receipe)
        console.log(data)
          append(data,container)
           
       }



let getdata= async (receipe) =>{
         
     let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${receipe}`;
   let res=  await fetch(url);
   let data =  await res.json()
    //   append(data.meals)
//    console.log(data.meals)
   return(data.meals)

    
 }


 let append=(data,container)=>{
    
           container.innerHTML=null
   
      data.forEach((el)=>{
        //  
      let div= document.createElement("div")

       let img= document.createElement("img")
       img.src=el.strMealThumb
       let h2=document.createElement("h2")
       h2.innerText=`Area:${el.strArea}` 

       let h=document.createElement("h2")
       h.innerText=`category:${el.strCategory}`

       div.append(img,h2,h)

       container.append(div)

        

      });

     }

     let debounceFunction=  (func,delay)=>{
      if(id){
          clearTimeout(id)
       }
              id=setTimeout(function(){
                  func();
              },delay)
           
      }
  export {debounceFunction,main,getdata,append}