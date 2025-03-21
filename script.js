document.addEventListener("DOMContentLoaded", (event)=>{
    getNews();
})

async function getNews(){
    const url = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=7d740bebb98c45e6b7167ea7cb1f144b'
    await fetch(url).then(response=>response.json()).then(data=>{addNews(data.articles.slice(0,10))})
}

function addNews(news){
    const news_list = document.getElementsByClassName("news")[0];

    news.forEach(n=>{
        const noticia = document.querySelector("li");
        const news_title = document.createElement("h2");
        const source = document.createElement("p");
        const summary = document.createElement("p");
        const news_link = document.createElement("a");
        news_title.textContent = n.title;
        noticia.appendChild(news_title);
        source.textContent = n.source.name;
        noticia.appendChild(source);
        summary.textContent = n.description;
        noticia.appendChild(summary);
        news_link.textContent = "Read the full news";
        news_link.href = n.url;
        noticia.appendChild(news_link);
        news_list.appendChild(noticia);
        console.log("AAAAA: ", news_list);
    })
}


function showMuffin() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; 

    if (input === 'real') {
        const img = document.createElement('img');
        img.src = 'realmuffin.jpg';
        img.alt = 'edible muffin';
        img.className = 'muffin-image';
        imageContainer.appendChild(img);
    } else if (input === 'fake') {
        const fakeImages = ['fakemuffin1.jpg', 'fakemuffin2.jpg', 'fakemuffin4.jpg', 'fakemuffin5.jpg'];
        fakeImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'muffin-image';
            img.className = 'image';
            imageContainer.appendChild(img);
        });
    } else {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Please write "real" or "fake".';
        errorMsg.style.color = 'red';
        imageContainer.appendChild(errorMsg);
    }
}