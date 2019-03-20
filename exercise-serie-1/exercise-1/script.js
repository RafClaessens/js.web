

document.getElementById('change-theme-lbl').addEventListener('click',  function () {
    let darkThemeEnabled = document.body.classList.toggle('light-theme1');
    localStorage.setItem('light-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('light-theme-enabled'))) {
    document.body.classList.add('light-theme1');
}


// --------------------


document.getElementById('change-theme2-lbl').addEventListener('click',  function () {
    let darkThemeEnabled = document.body.classList.toggle('light-theme2');
    localStorage.setItem('light-theme2-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('light-theme-enabled'))) {
    document.body.classList.add('light-theme2');
}


// ---------------------



document.getElementById('change-theme3-lbl').addEventListener('click',  function () {
    let darkThemeEnabled = document.body.classList.toggle('light-theme3');
    localStorage.setItem('light-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('light-theme-enabled'))) {
    document.body.classList.add('light-theme3');
}