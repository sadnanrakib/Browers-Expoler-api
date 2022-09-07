
const alertShow = ()=>{
    const num = Math.random()*10;
    console.log(num);
if (num<5){
alert('Dosto ko khobr')
}
};

const confromShow =()=>{
    const confr = confirm('are you sure')
    console.log(confr)
    if(confr === true){
        alert('500 tk bkash kor')
    }
    else{
        console.log("DMG!! dure giya mor")
    }
}

const propotem = ()=>{
    // console.log('show nao')

     const name =prompt('are you here')
    //  const value =200;
    //  const pars= parseInt(value)
    //  console.log(name);
     if(!!name){
        console.log('welcome here',parseFloat(name +100));
     }
        
    }