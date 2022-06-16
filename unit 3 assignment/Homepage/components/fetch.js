let getdata=async(apikey)=>{

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`

    let res=await fetch(url)
       
    let data= await res.json()
     
     return data.articles
     
 }

  
 function append(data,container){
  
    data.forEach((el)=>{
      
      let div=document.createElement("div")
         div.setAttribute("id" ,"box")

         let div2=document.createElement("div")
            div2.id="div2"
         let A=  document.createElement("a")
            A.target='_blank'
            
           A.href=el.url
          let img=document.createElement("img")
          img.src=el.urlToImage
          A.append(img)

      let source=document.createElement("p")
        source.innerText=el.source.name



     let title=document.createElement("h3")
     title.innerText=el.title

     let dis=document.createElement("p")
     dis.innerText=el.description
          
        
           div.append(A)
          div2.append(source,title,dis)

            container.append(div,div2)

    })
  }
   
  

 
 
    export{getdata,append}

   
    