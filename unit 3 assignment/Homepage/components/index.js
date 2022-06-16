const apikey="b2d7c8b853fa47a5a733a8baa6de2eca"
 
 //
 import * as shital from "../components/fetch.js"
 import{navbar,advertisment} from "../components/navbar.js"
 
 let container=document.getElementById("container")
  
 let data= await shital.getdata(apikey)
 console.log(data)
 shital.append(data,container)

 document.getElementById("likes").innerHTML=advertisment()

 document.getElementById("media").innerHTML=navbar()
   let heds=    document.getElementById("head")
 let slides=document.getElementById("slide")
     let i=0;
     

     setInterval(function(){
      if(i===data.length){
         i=0
      }
       slides.innerHTML=null
        heds.innerHTML=null
      let A=document.createElement("a")
      A.target="-blank"
      A.href=data[i].url
   
      let pic=document.createElement("img")
       A.append(pic)
      pic.src=data[i].urlToImage
     
      let h2=document.createElement("h3")
      h2.innerText=data[i].title
   
      let p=document.createElement("p")
        p.innerText=data[i].description
      heds.append(h2,p)
       
      slides.append(A)
      i++
      
   
    
    
   
   },3000) 
          
    
   
 
 



