let button = document.getElementById("btn")
let userinput = document.getElementById("UserInput")
let container = document.getElementById("containier")
let error = document.getElementById("error")
let content="";

button.addEventListener("click",async ()=> {
    let userName = userinput.value
    // console.log(userName)
    try {

    let response = await fetch(`https://api.github.com/users/${userName}/repos`)
    let data = await response.json()
    if(data.length){
        display_card(data)
    }
    else{
        
        error.innerHTML="enter valid user name"
        throw new Error("invalid user name")
    }
    } catch (error) {
        console.log(error)
    }
    
  
    
})

let display_card = (data) =>{
    error.innerHTML=""
    container.innerHTML=""
    
    data.map((Element)=>{
        container.innerHTML+=`<div class="card m-3 bg-primary">
        <div class="card-header">
            <div class="card-title h2">${Element.name}</div>
        </div>
        <div class="card-body">
            <div class="card-text h6">${Element.language}</div>
            <div class="card-text h6">
                <button class="btn btn-primary">
                    <a href="${Element.html_url}" target="_blank" class="text-warning" >visit me</a>
                </button>
            </div>
        </div>
       </div>`
    })
}