let getdata= async (url) =>{
         
    // let url="https://www.themealdb.com/api/json/v1/1/random.php";
   let res=  await fetch(url);
   let data =  await res.json()
    //   append(data.meals)
//    console.log(data.meals)
   return(data.meals)
 }

    getdata()   
    
     let append=(data,container,box)=>{
    //    let container=document.getElementById("container")
    //    let box=document.getElementById("box")
      data.forEach((el)=>{
       let div1= document.createElement("div")
      let div= document.createElement("div")

       let img= document.createElement("img")
       img.src=el.strMealThumb
       let h2=document.createElement("h2")
       h2.innerText=`Area:${el.strArea}` 

       let h=document.createElement("h2")
       h.innerText=`category:${el.strCategory}` 
       
       let p1=document.createElement("p")
        p1.innerText=`Ingredient:${el.strIngredient1}` 
       let p2=document.createElement("p")
        p2.innerText=`Ingredient:${el.strIngredient2}`
       let p3=document.createElement("p")
       p3.innerText=`Ingredient:${el.strIngredient3}`


       let p4=document.createElement("p")
       p4.innerText=`Ingredient:${el.strIngredient4}`

       let p5=document.createElement("p")
       p5.innerText=`Ingredient:${el.strIngredient5}`


       let p6=document.createElement("p")
       p6.innerText=`Ingredient:${el.strIngredient6}`


       let p7=document.createElement("p")
       p7.innerText=`Ingredient:${el.strIngredient7}`


       let p8=document.createElement("p")
       p8.innerText=`Ingredient:${el.strIngredient8}`


       let p9=document.createElement("p")
       p9.innerText=`Ingredient:${el.strIngredient9}`

       let p10=document.createElement("p")
       p10.innerText=`Ingredient:${el.strIngredient10}`


       let p11=document.createElement("p")
       p11.innerText=`Ingredient:${el.strIngredient11}`


       let p12=document.createElement("p")
       p12.innerText=`Ingredient:${el.strIngredient12}`


       let p13=document.createElement("p")
       p13.innerText=`Ingredient:${el.strIngredient13}`


       let p14=document.createElement("p")
       p14.innerText=`Ingredient:${el.strIngredient14}`


       let p15=document.createElement("p")
       p15.innerText=`Ingredient:${el.strIngredient15}`


      div1.append(img)
      box.append(div1)
       div.append(h2,h,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15)

       container.append(div)

      });

     }
  export {getdata,append}