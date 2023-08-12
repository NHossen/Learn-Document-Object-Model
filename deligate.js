const items=document.getElementsByClassName('item');
//console.log(items);

///item added by event  
// for (const item of items){
//      item.addEventListener('click', function(event){//spicipy event target
//        //console.log(event.target);
//         //console.log(event.target.parentNode);

//         event.target.parentNode.removeChild(event.target);
//      })
// }

document.getElementById('list-container').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
    
})


for (const item of items){
     item.addEventListener('click', function(event){//spicipy event target
       //console.log(event.target);
        //console.log(event.target.parentNode);

        event.target.parentNode.removeChild(event.target);
     })
}
//item removed by events
document.getElementById('btn-add').addEventListener('click',function(){
    const listContainer=document.getElementById('list-container');

    const li=document.createElement('li');
    li.innerText='brand New Items added';
    li.classList.add('item');
    listContainer.appendChild(li);
})