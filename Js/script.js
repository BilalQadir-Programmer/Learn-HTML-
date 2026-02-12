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