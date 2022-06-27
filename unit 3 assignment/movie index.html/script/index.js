function Addmovie(e){
    e.preventDefault()
  let form=document.getElementById("moviedata")

  let name=form.name.value
  let Date=form.Date.value
  let url=form.url.value
  let rate=form.rate.value

  let s1= new moviedata(name,Date,url,rate)

  let data=JSON.parse(localStorage.getItem("movies"))||[]
      
  data.push(s1)
   console.log(data)
  localStorage.setItem("movies",JSON.stringify(data))

   window.location.reload()
}

function moviedata(n,d,u,r){
  this.name=n
  this.date=d
  this.url=u
  this.rate=r
}