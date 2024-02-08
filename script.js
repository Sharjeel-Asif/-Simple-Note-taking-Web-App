let note_Container=document.querySelector(".note-container")
let addBtn=document.querySelector("#addBtn")


window.addEventListener("load",()=>{
  let savedNotes=localStorage.getItem("notes")
  if(saveNotes){
 note_Container.innerHTML=savedNotes
  }
})
addBtn.addEventListener("click",()=>{
  let p=document.createElement("p")
  p.setAttribute("contenteditable","true")
  note_Container.appendChild(p)
  p.classList.add("style")
  let img=document.createElement("img")
  img.src="./trash.png"
  p.appendChild(img)
  img.classList.add("move")
  img.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
    saveNotes()
  })
  
  saveNotes()
  })
function saveNotes(){
  localStorage.setItem("notes",note_Container.innerHTML)
}

