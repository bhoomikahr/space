const logo = document.querySelectorAll('#logo path')
console.log(logo)

for (let i=0;i< logo.length;i++){
  console.log(`let ${i} length is ${logo[i].getTotalLength()}`)
}



$('#fill li').on("mouseenter",function(){
  $(this).slideUp();
})

$('.last img').on("click",function (){
  alert("byeeeee!");
})
