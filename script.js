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