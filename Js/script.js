//Search box
function searchlist(){
  let input = document.getElementById("Search").value.toLowerCase();
  let li = document.querySelectorAll('#mylist li');

  li.forEach(item => {
   let a = item.querySelector("a");

   if(a){
    let text = a.innerText.toLowerCase();
    
    if(text.includes(input)){
        item.style.display = "";
    } else {
        item.style.display = "none"
    }
   }
  })
}

//Code Editor

let output = document.querySelector("#output");
let html = document.querySelector(".code-html-left textarea");
let css = document.querySelector(".code-css-left textarea");

function runcode(){
  let htmlcode = html.value;
  let csscode = "<style>" + css.value + "</style>"
  output.contentDocument.body.innerHTML = htmlcode + csscode;

}

html.addEventListener("keyup", runcode)
css.addEventListener("keyup", runcode)