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