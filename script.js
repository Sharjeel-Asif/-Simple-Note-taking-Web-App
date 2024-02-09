let notification_container=document.querySelector("#notification")


let buttons=document.querySelectorAll("#button")

buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
 let notification=document.createElement("div")
    notification.classList.add("toast")

    notification_container.appendChild(notification)

    let icon=document.createElement("i")
    icon.classList.add("fa-solid","fa-circle-check")
    if(e.target.innerHTML==="Success"){
      notification.innerHTML="Suceessfully submitted"
      notification.prepend(icon)
      icon.classList.add("succes")
    }else if(e.target.innerHTML==="Error"){
      notification.innerHTML="Please fix the error"
      notification.prepend(icon)
      icon.classList.add("error","fa-solid","fa-circle-xmark")

    }else{
      notification.innerHTML="Invalid input, check again"
      notification.prepend(icon)
      icon.classList.add("invalid","fa-solid","fa-triangle-exclamation")}

      setTimeout(()=>{
        notification.remove()
      },6000)
    }
    )
  })



