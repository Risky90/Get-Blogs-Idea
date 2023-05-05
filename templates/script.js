let header = document.querySelector('.header');
  

  window.onscroll =()=>{
    // menu.classList.remove('fa-times')
    // navbar.classList.remove('active')
    if(window.scrollY>0){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
   // console.log(header)
}

// search-2 configuration start
let list1 = document.querySelector('span.list1')
let form1btn = document.querySelector('.generate-btn1')
if(list1.innerText.length == 2){
    console.log("HI no text")
    list1.style.display = 'none'
}else{
    list1.style.display = 'flex'
    console.log("The text is present")
}
console.log('search-1 '+list1.innerText.length)
// search-2 configuration end



// search-2 configuration start
let list2 = document.querySelector('span.list2')
let form2btn = document.querySelector('.generate-btn2')
if(list2.innerText.length == 0){
    console.log("HI no text")
    list2.style.display = 'none'
}else{
    list2.style.display = 'flex'
    console.log("The text is present")
}
console.log('search-2 '+list2.innerText.length)
// search-2 configuration end



// search-3 configuration start
let list3 = document.querySelector('span.list3')
let form3btn = document.querySelector('.generate-btn3')
if(list3.innerText.length == 0){
    console.log("HI no text")
    list3.style.display = 'none'
}else{
    list3.style.display = 'flex'
    console.log("The text is present")
}
console.log('search-3 '+list3.innerText.length)
// search-3 configuration end


// list3 = `<span class="list3 list3D">
// {{blogExpanded|safe}}
// </span>`

// async function handleClick() {
//     lis();
// //   await new Promise(() =>{
// //     setTimeout(lis(),5000);
   
// //    }
// //    )
// }

form3btn.addEventListener('click', ()=>{
  
    
});
console.log("HI")
    //list1.style.display= flex;
   // list1.classList.add('list1Active')
   // list1.classList.remove('list1')
// })
// form3btn.setTimeout(() => {
//     list1.style.display ='flex'
// }, 1000);