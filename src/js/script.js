window.onscroll = function () {
    const header = document.querySelector('nav');
    // const miniMenu = document.querySelector('#mini-menu');
    // const tombolmini = document.querySelector('#tombol-mini');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        // miniMenu.classList.add('mini-menu');
        // tombolmini.classList.add('mini-tombol');
    } else {
        header.classList.remove('navbar-fixed');
        // miniMenu.classList.remove('mini-menu');
        // tombolmini.classList.remove('mini-tombol');
    }
};


// seacrh
var searchInput = document.getElementsByClassName('input-google')[0];
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function forceString(input) {
    return String(input);
}

function sanitizeInput(input) {
    var stringInput = forceString(input);
    var sanitizedInput = stringInput.replace(/[^a-zA-Z0-9 ]/g, '');
    return sanitizedInput;
}

function performSearch() {
    var searchTerms = document.getElementsByClassName('input-google')[0].value;
    var sanitizedSearchTerms = sanitizeInput(searchTerms);
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(sanitizedSearchTerms);
}