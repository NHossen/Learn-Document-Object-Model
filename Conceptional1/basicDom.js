                                      //element ways selection


// document.getElementsByTagName('h1')[0].style.color="green";


// const h1 =document.getElementsByTagName("h1")[0];

// h1.style.color="red";
// h1.style.fontSize="80px"
// h1.innerText="Fixed my text please"
// h1.style.marginTop="-10px"
// h1.style.hover



// const alltags=document.getElementsByClassName('item')

// for(item of alltags){
//     item.style.color="orange";
// }

// console.log(alltags);

// const myTags =document.getElementsByTagName('li');

// for(let i=0;i<myTags.length;i++){
//     let element=myTags[i];
//     element.style.color='blue'
// }

                          // Best is the query selector

// 


// const listItem=document.querySelector("h3");

// listItem.style.color='green'

// console.log(listItem);


                                          // Node ways document select
//parent to childern 

//const parent=document.querySelector('.item-conatiner');
// const children=parent.children;//step by step childeren
//console.log(parent.children[1].children[3].children[1].children[0].children[0].children);


                              //grand-parent to childern

// const grandParent=document.querySelector('.grand-parent');
//const children=grandParent.querySelectorAll('.item');

                                       // Direct child option

// console.log(grandParent.querySelectorAll('.item'));
                                       // Step by step option

//console.log(grandParent.children[1].children[1].children)

                                     //children to grandParent
//  const children=document.querySelector('.item');
//  const parent=children.parentElement.parentElement.parentElement;
//  console.log(parent)
 
                                 // Create New element by jabascript

//  const h3 =document.createElement('h3');  
//  h3.innerText="this is Naeem"

//  const conatiner=document.querySelector('.grand-parent')

//  conatiner.appendChild(h3)
//  console.log(h3) 


//create div with others html tag

 const conatiner=document.querySelector('.grand-parent');
const div =document.createElement('div');

div.innerHTML=`
<h1>Hello</h1>
<h3>world</h3>

`;
 conatiner.appendChild(div)
                         
