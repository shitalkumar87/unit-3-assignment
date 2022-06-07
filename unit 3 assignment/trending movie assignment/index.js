let id;
 
  async function searchmovie(query){

      
     

     let url= `  https://swapi.dev/api/people/?search=${query}`

 try{
         let res=await fetch(url);

          let data=await res.json();

           return(data.results);
   }

   catch(error){
     console.log("error",error)
   }
 }

  async function main(){
     let query=document.getElementById("query").value;
     console.log("query",query)

     let response=searchmovie(query)
 let data= await response;
   append(data);
   console.log(data)
  }

  function append(Starwar){
    let movie_div=document.getElementById("show")
     movie_div.innerHTML=null
      
     Starwar.forEach(function(el){
       let p=document.createElement("h2")
       p.innerText=el.name;

       movie_div.append(p)
     })
  }


function debounceFunction(func,delay){
if(id){
    clearTimeout(id)
 }
        id=setTimeout(function(){
            func();
        },delay)
     
}