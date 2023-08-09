
const box=document.getElementsByClassName("card");
for(let i=0; i<box.length;i++){
  box[i].addEventListener('click',()=>{
     if(box[i].classList.contains("clicked")){
        box[i].classList.remove("clicked");
     }
     else{
        box[i].classList.add("clicked");
        for(let j=0;j<box.length;j++){
           if(i!=j){
             box[j].classList.remove("clicked");
           }
        }
     }
  })
}


const activate = (selectedValue) => {
  const item = document.getElementsByName("item");
  const toggels = document.getElementsByClassName("toggle");
  for (let i = 0; i <= item.length - 1; i++) {
    if (item[i].checked) {
      console.log("show");
      toggels[i].removeAttribute("id");
      console.log(item[i].value);
    } else {
      toggels[i].id = "dynamic";
      console.log("hide");
    }
  }
  // console.log(item);
  // console.log(selectedValue);
};
