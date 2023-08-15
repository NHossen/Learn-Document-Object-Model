let count=0;
    document.getElementById('plus-btn').addEventListener('click',function(){
       
        const defaultValue=document.getElementById('default-value');
        count++;
        defaultValue.innerText=count;
        //console.log(getValue);
    })

     //decrement value

     document.getElementById('minus-btn').addEventListener('click',function(){
        const defaultValue=document.getElementById('default-value');
        count--;
        defaultValue.innerText=count;

     })
