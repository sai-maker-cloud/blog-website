fetch("/blogs")
.then(res=>res.json())
.then(data=>{
    const div=document.getElementById("blogs")
     div.innerHTML = "";
    data.forEach(blog => {
        div.innerHTML+=`<div  class="blog">

        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
        <h4>${blog.Author}</h4>
        </div>`
        
    });
})