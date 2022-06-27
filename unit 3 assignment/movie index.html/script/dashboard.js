function append(){
    let data=JSON.parse(localStorage.getItem("movies"))
       let cont=document.getElementById("container")
    data.forEach(function(el){
     
        let div=document.createElement("div")
          div.id="div1"
        let img=document.createElement("img")
        img.src=el.url
        img.id="pic"
        let name=document.createElement("h3")
        name.innerText=el.name
        
        let date=document.createElement("h5")
        date.innerText=`Rel Date:${el.date}`

        let rate=document.createElement("h5")
        rate.innerText=`Imdb:${el.rate}`

        div.append(img,name,rate,date)

        cont.append(div)
    })
 }

 append()