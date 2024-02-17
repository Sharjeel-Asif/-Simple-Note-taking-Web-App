  let quoteApi="https://api.quotable.io/random"
  let quoteDisplay=document.querySelector("#quote-Display")
  let quoteInput=document.querySelector("#quoteInput")
  const timer=document.querySelector("#timer")

let correct=true
quoteInput.addEventListener("input",()=>{
  const characterSpan=document.querySelectorAll("span")
  const quoteInputnValue=quoteInput.value.split("");
  characterSpan.forEach((character,index)=>{
    console.log(character)
const  newCharacter = quoteInputnValue[index];
console.log(newCharacter)
if(newCharacter==null){
  character.classList.remove("correct")
  character.classList.remove("incorrect")
  correct=false
}
else if(newCharacter===character.innerHTML){
  character.classList.add("correct")
  character.classList.remove("incorrect")

  
}else{
  character.classList.remove("correct")
  character.classList.add("incorrect")
  correct=false
} 
})
if(correct) renderNewQuote()
    // console.log("d")
  console.log(quoteInputnValue)

})
function getRandomQuote(){
  return fetch(quoteApi)
  .then((res)=> res.json())
  .then(data => data.content)
}

async function renderNewQuote(){
  const quote=await getRandomQuote()
  quoteDisplay.innerHTML=""
  quote.split("").forEach(currElem => {
    const span=document.createElement("span")
    span.innerText=currElem
    // span.classList.add("correct")
    quoteDisplay.appendChild(span)
    // console.log(span)  
  });
  console.log(quote)
  quoteInput.value=null
  runTimer()
}

renderNewQuote()


let startTime;

function runTimer(){

  timer.innerHTML=0
  startTime=new Date()
  setInterval(()=>{
    timer.innerHTML= getTime()

  },1000)
}


function getTime(){
 return Math.floor(( new Date() - startTime) / 1000)
}


console.log(getTime)






  // console.log(quoteApi)
//   function renderQuote(){
//     return fetch(quoteApi)
//     .then(response =>response.json())
//     .then(data=>data.content)

//   }

//   async function getQuote(){
//       const quote=await renderQuote()
//       console.log(quote)
//     quoteDisplay.innerHTML=""
//       quote.split("").forEach((curr)=>{
//       const span=document.createElement("span")
//       span.innerHTML=curr + ""
//       quoteDisplay.appendChild(span)
//       console.log(span)
//       })
// quoteInput.innerHTML=""
    
//   }
//   getQuote()