function nextPage() {
    window.location.href = 'yes.html';
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    
    noButton.classList.add("wiggle");
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);
}