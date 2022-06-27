function signup(e){
    e.preventDefault()
  let form=document.getElementById("student")

  let name=form.name.value
  let num=form.num.value
  let email=form.email.value
  let pwd=form.pwd.value

  let s1= new studentdata(name,num,email,pwd)

  let data=JSON.parse(localStorage.getItem("students"))||[]
      
  data.push(s1)
   console.log(data)
  localStorage.setItem("students",JSON.stringify(data))

  window.location.href="login.html"
}

function studentdata(n,num,e,p){
  this.name=n
  this.num=num
  this.email=e
  this.password=p
}