document.getElementById('btn-ls-filed').addEventListener('click',function(){
    const name = document.getElementById('name');
    const anotherFiled = name.value;
   localStorage.setItem('name',anotherFiled )

})
document.getElementById('btn-remove-filed').addEventListener('click',function(){
localStorage.removeItem('name');

})