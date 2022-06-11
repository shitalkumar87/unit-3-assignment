//link=https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=4VIObcT6jSbEBrImcUVfmzZJ7BaIqCBuop1d0C2j73M


import navbar from "../components/navbar.js";
 const api="4VIObcT6jSbEBrImcUVfmzZJ7BaIqCBuop1d0C2j73M"
let navba=document.getElementById('navbar')
navba.innerHTML=navbar()

let search = (e) =>{
    if(e.key==="Enter"){

        let value =document.getElementById('query').value
         searchimage(value,api).then((data)=>{
            container.innerHTML=null
            append(data,container)
           
            console.log(data)
        });
         
    }
}
 
document.getElementById('query').addEventListener( "keydown",search)

import { searchimage,append } from "./fetch.js";

let container=document.getElementById("container")

let categor=document.getElementById("category").children

for(let el of categor){
    el.addEventListener("click",csearch)
}

function csearch(){
   

  searchimage(this.id,api).then((data)=>{
    container.innerHTML=null
    append(data,container)
     
    console.log(data)
});
}


 
// let searchimage=async()=>{

//     let value=document.getElementById('query').value

//     try{
//         let res=await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`
//         );

//         let data= await res.json();

//         console.log(data)
//     }

//     catch(err){
//         console.log('error',err)
//     }

// }