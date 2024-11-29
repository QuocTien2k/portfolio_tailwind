/***********DARK LIGHT THEME***************/
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('mode') === 'dark') {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', () => {
    if (localStorage.getItem('mode') === 'light') {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('mode', 'dark');
    console.log('Chế độ dark bật');
}

function lightMode() {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('mode', 'light');
    console.log('Chế độ light bật');
}


/*********** TOOGLE BUTTON ***************/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const closeIcon = document.getElementById('nav-close');

navLink.forEach((link) =>{
    link.addEventListener('click', () =>{
        navMenu.classList.add('hidden');
    })
})

closeIcon.addEventListener('click', () =>{
    navMenu.classList.add('hidden');
})

hamburger.addEventListener('click', () =>{
    navMenu.classList.remove('hidden');
})

/*********** TABS ***************/
let tabs = document.querySelectorAll('.tab');
let indicartor = document.querySelector('.indicator');
const allCards = document.querySelectorAll('.work_card');

// Setup initial indicator position
indicartor.style.width = tabs[0].getBoundingClientRect().width + 'px';
indicartor.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

// Add event listener to each tab
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Update indicator position and size
        indicartor.style.width = tab.getBoundingClientRect().width + 'px';
        indicartor.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

        // Update active tab class
        tabs.forEach(t => t.classList.remove('text-whiteColor'));
        tab.classList.add('text-whiteColor');

        // Get the current tab value
        const tabVal = tab.getAttribute('data-tabs');

        // Hide all cards initially
        allCards.forEach(item => item.style.display = 'none');

        // Show relevant cards based on tab value
        if (tabVal === 'all') {
            allCards.forEach(item => item.style.display = 'block');
        } else {
            const selectedCards = document.querySelectorAll(`.${tabVal}`);
            selectedCards.forEach(item => item.style.display = 'block');
        }
    });
});

