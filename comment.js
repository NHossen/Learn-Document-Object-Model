document.getElementById('btn-post').addEventListener('click', function(){
    // console.log('post comment clicked') 
    //step 2 get the comment
    const commentBox=document.getElementById('new-comment')
    //console.log(commentBox);
    const newComment=commentBox.value;
    // console.log(newComment);
    //step 3 

    /*1 get the comment inside the comment container
    2 create a new element (p tag)
    3 set the text of the comment as innertext of the p tag
    4 add the p tag using appendchild
    
    */
   
    const commentContainer=document.getElementById('comment-container');

    const p=document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);

    //     const p = document.createElement('p');
    //     p.innnerText=newComment;
        // commentContainer.appendChild(p);

    
 });