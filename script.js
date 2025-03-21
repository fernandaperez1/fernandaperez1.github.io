document.addEventListener("DOMContentLoaded", () => {
    getNews();
});

async function getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=7d740bebb98c45e6b7167ea7cb1f144b';
    const response = await fetch(url);
    const data = await response.json();
    addNews(data.articles.slice(0, 10));
}

function addNews(news) {
    const newsContainer = document.getElementById("news-container");

    news.forEach(n => {
        const row = document.createElement("div");
        row.classList.add("row", "p-3", "border", "align-items-center");

        const titleCol = document.createElement("div");
        titleCol.classList.add("col-md-3", "fw-bold");
        titleCol.textContent = n.title;

        const summaryCol = document.createElement("div");
        summaryCol.classList.add("col-md-6");
        summaryCol.textContent = n.description || "No available description.";

        const linkCol = document.createElement("div");
        linkCol.classList.add("col-md-3", "text-center");
        const news_link = document.createElement("a");
        news_link.textContent = "Read more";
        news_link.href = n.url;
        news_link.target = "_blank";
        news_link.classList.add("btn", "btn-primary", "btn-sm");
        linkCol.appendChild(news_link);

        row.appendChild(titleCol);
        row.appendChild(summaryCol);
        row.appendChild(linkCol);
        newsContainer.appendChild(row);
    });
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