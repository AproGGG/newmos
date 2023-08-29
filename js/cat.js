let blogId = `Schrodinger's-cat-experiment-ankm`

let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
    if(doc.exists){
        setupBlog(doc.data());
    } else{
        location.replace("/");
    }
})

const setupBlog = (data) => {
    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');
    
    banner.style.backgroundImage = `url(${data.bannerImage})`;

    titleTag.innerHTML += blogTitle.innerHTML = data.title;
    publish.innerHTML += data.publishedAt;



    const article = document.querySelector('.article');

    if(data.subject == "Physics" || data.subject == "physics"){
        article.innerHTML += `<p style="color: red; text-align: center; height: 30px; width: 150px; outline: 2px solid red">${data.subject}</p>`
    } else if(data.subject == "Chemistry" || data.subject == "chemistry"){
        article.innerHTML += `<p style="color: blue; text-align: center; height: 30px; width: 150px; outline: 2px solid blue">${data.subject}</p>`
    } else if(data.subject == "Biology" || data.subject == "biology"){
        article.innerHTML += `<p style="color: green; text-align: center; height: 30px; width: 150px; outline: 2px solid green">${data.subject}</p>`
    } else {
        article.innerHTML += `<p style="color: gray; text-align: center; height: 30px; width: 150px; outline: 2px solid gray">${data.subject}</p>`
    }

    if(data.link == "None"){
        console.log("No YT video")
    } else {
        article.innerHTML += `<p><a href="${data.link}" target="_blank">Click to watch the summary of this article</a></p>`}
    
    addArticle(article, data.article);
}

const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);

    data.forEach(item => {
        if(item[0] == '#'){
            let hCount = 0;
            let i = 0;
            while(item[i] == '#'){
                hCount++;
                i++;
            }
            let tag = `h${hCount}`;
            ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`
        } 
        else if(item[0] == "!" && item[1] == "["){
            let seperator;

            for(let i = 0; i <= item.length; i++){
                if(item[i] == "]" && item[i + 1] == "(" && item[item.length - 1] == ")"){
                    seperator = i;
                }
            }

            let alt = item.slice(2, seperator);
            let src = item.slice(seperator + 2, item.length - 1);
            ele.innerHTML += `
            <img src="${src}" alt="${alt}" class="article-image">
            `;
        }

        else{
            ele.innerHTML += `<p>${item}</p>`;
        }
    })
}