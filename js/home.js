const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();

    console.log(data.subject);
    console.log(blog.id);
    
    if(blog.id=="Schrodinger's-cat-experiment-ankm"){
        name = "cat";
    } else if (blog.id=="Quorum-sensing-ggxh"){
        name = "quorum";
    } else if (blog.id=="Overview-on-the-usage-and-benefits-of-electric-cars-wnso"){
        name = "ev.html";
    } else if (blog.id=="Use-of-Chemistry-in-Food-Production--hzsp"){
        name = "chemm.html";
    } else if (blog.id=="The-truth-behind-LK-99-iggl"){
        name = "lk";
    } else if (blog.id=="Neurotransmitters-and-how-they-are-affected-by-drugs-and-technology-lmgc"){
        name = "neurotransmitters";
    } else if (blog.id=="More-about-the-Rubik's-cube-name-wqtg"){
        name="cube";
    } else if (blog.id=="Time-Dilation-and-Theory-of-Relativity-yciw"){
        name="time";
    } else if (blog.id=="The-history-of-Roman-Empire-gmcy"){
        name="roman";
    } else if (blog.id=="The-Internet-of-Things-(IoT)-nhbz"){
        name="iot";
    } else if (blog.id=="The-Large-Hadron-Collider-Explained-llyz"){
        name="hadron";
    } else if (blog.id=="10-scientific-paradoxes-and-their-solutions-mnvr"){
        name="paradox";
    } else if (blog.id=="All-the-perspectives-on-the-structure-and-future-of-graphene-wdwy"){
        name="graphene";
    } else if (blog.id=="Bias-in-Artificial-Intelligence-msoh"){
        name="ai.html";
    } else if (blog.id=="What-are-Quantum-Computers?-rtgd"){
        name="quantum";
    } else if (blog.id=="What-can-be-called-Evolution-gtzp"){
        name="evo.html";
    } else {
        name = blog.id;
    }

    blogSection.innerHTML += `
    <div class="blog-card" style="width: 100%;">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title" style="word-wrap: break-word">${data.title.substring(0, 60)}</h1>
        <p class="blog-overview" style="word-wrap: break-word">${data.article.substring(0, 100) + '...'}</p>
        <a href="/${name}" class="btn dark">read</a>
    </div>
    `;
}
