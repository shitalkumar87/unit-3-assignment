const Api_key="6a2d644f3e87a166a3e853f79b757b48";

 async function getdata(){

    let city=document.getElementById("city").value;
   //   let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
         let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_key}`;

   var res=await fetch(url);

   var  data=await res.json();
   for(var i=0;i<7;i++){
      // append(data.list[i]);
      console.log(data.list[i])    
   }
      
          
    }
  
  
        getdata();

    
 
 function append(data){
       data.forEach(function(el){
         let container=document.getElementById("container")
         container.innerHTML=null;
         let sun=document.getElementById("sun")
         sun.innerHTML=null;
         let suns=document.getElementById("suns")
         suns.innerHTML=null;
            
         //  let city=document.createElement("h2")  
         //     city.innerText=el.nam;
     
         let p1=document.createElement("h4") 
         p1.innerText= `Current temp: ${el.main.temp}`
     
         let p2=document.createElement("h4") 
         p2.innerText= `max temp: ${el.main.temp_max}`
     
         let p3=document.createElement("h4") 
         p3.innerText= `min temp: ${el.main.temp_min}`
     
         let wind=document.createElement("h4") 
         wind.innerText= `wind speed:: ${el.wind.speed}`
     
         let clouds=document.createElement("h4") 
         clouds.innerText= `clouds all: ${el.clouds.all}`
     
         let sunrise=document.createElement("h4") 
         sunrise.innerText= `sunrise: ${el.sys.sunrise}`
     
         let sunset=document.createElement("h4") 
         sunset.innerText= `sunset: ${el.sys.sunset}`
          
         let img= document.createElement("img")
          img.src="data:image/jpeg;base64,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"
           
          let img1= document.createElement("img")
          img1.src="data:image/jpeg;base64,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"
        sun.append(img)
        suns.append(img1)
         // let img1=document.createElement("img")
      
      container.append( p1,p2,p3,wind,clouds,sunrise,sunset);
        
      let iframe=document.getElementById("gmap_canvas")
      iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
       })
     

 }
 
//  data.forEach(function(el){
//             let cont=document.getElementById("cont")

//          let img=document.createElement("img")  
//          img.src=el.Poster

//          let h2=document.createElement("h2") 
//             h2.innertext=el.Title;

//          let p=document.createElement("p") 
//          p.innerText=Type;


//          let div=document.createElement("div")

//          div.append(img,h2,p)
//          cont.append(div);

//         })