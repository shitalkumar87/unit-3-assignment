
         let data=JSON.parse(localStorage.getItem("students"))
         console.log(data.length)
    function login(e){
      
      e.preventDefault()
     let email=document.getElementById("email").value
     let pwd=document.getElementById("pwd").value
         console.log(pwd) 
     if (email===data[data.length-1].email && pwd===data[data.length-1].password) {
        
         window.location.href="index.html"
     }

     else{
         alert("invalid Credentials")
     }

    }