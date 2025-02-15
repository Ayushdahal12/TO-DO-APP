const inputBox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')

function AddTask(){
   if(inputBox.value === ''){
    alert("you need to write something !")
   }
   else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listcontainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
   
   }
   inputBox.value = " ";
   savedata()
}

listcontainer.addEventListener("click", (e) =>{
         if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked")
         }
          if(e.target.tagName === "SPAN"){
            e.target.closest("li").remove()
         }
           
         })

         // local storage to store a data loccally 
function savedata(){          // saves the data
localStorage.setItem("data", listcontainer.innerHTML)
         }

function Savetask(){          // function to retrive a data
   listcontainer.innerHTML = localStorage.getItem("data")
}
Savetask()

