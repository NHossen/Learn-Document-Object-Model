
document.querySelector('#add-btn').addEventListener("click",function(){
    //console.log('I got clicked');
    const textInput=document.getElementById('my-text');
    const showText=textInput.value;
    console.log(showText);

    const newList=document.getElementById('your-dilouge');
          const p=document.createElement('p');
            p.innerText=showText;
            newList.appendChild(p);
})


document.querySelector('#text-inside').addEventListener('click',function(){
    const headingText=document.getElementById('text');
    const mainText=headingText.innerText;
    console.log(mainText);
});