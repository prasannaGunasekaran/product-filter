//getting element
const btnEl=document.querySelectorAll('.btn')
const boxEl=document.querySelectorAll('.box')
const searchEl=document.getElementById('search')
//search step-1
searchEl.addEventListener('keyup',(e)=>{
    const searchText=  (e.target.value.toLowerCase().trim());

    boxEl.forEach((box)=>{
      const data=box.dataset.item;

      if(data.includes(searchText)){
          box.style.display='block';
      }else{
          box.style.display = "none";
      }
  });
  btnEl[0].classList.add("btn-clicked");
});

//select btn step-2 hover
function setActiveBtn(e){
  btnEl.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked')
}
//select btn step 3
btnEl.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    setActiveBtn(e);

    const btnFilter=e.target.dataset.filter;

    boxEl.forEach((box)=>{
      if(btnFilter=="all"){
        box.style.display='block';
      }
      else{
        const boxFilter=box.dataset.item;
        if(btnFilter==boxFilter){
            box.style.display='block';
        }
        else{
          box.style.display='none';
        }
      }
    })
  })
})



