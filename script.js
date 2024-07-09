function redirectToPage(url) {
    const card = event.currentTarget;
    card.classList.add('flash');
    setTimeout(() => {
        window.location.href = url;
    }, 500); // duration of the flash animation
}
