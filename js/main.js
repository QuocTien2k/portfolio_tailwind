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
// Lấy tất cả các tab và indicator
const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');
const workCards = document.querySelectorAll('.work_card');

// Hàm cập nhật vị trí của indicator
const updateIndicator = (tab) => {
    const tabWidth = tab.offsetWidth; // Chiều rộng của tab
    const tabOffsetLeft = tab.offsetLeft; // Vị trí của tab trong container

    indicator.style.width = `${tabWidth}px`; // Đặt chiều rộng cho indicator
    indicator.style.transform = `translateX(${tabOffsetLeft}px)`; // Di chuyển indicator
};

// Khởi tạo vị trí ban đầu cho indicator
updateIndicator(tabs[0]); // Đặt tại nút đầu tiên

// Hàm hiển thị các mục tương ứng
const filterCards = (tabValue) => {
    workCards.forEach((card) => {
        // Kiểm tra nếu mục chứa lớp phù hợp với data-tab
        if (tabValue === 'all' || card.classList.contains(tabValue)) {
            card.classList.remove('hidden'); // Hiển thị mục
        } else {
            card.classList.add('hidden'); // Ẩn mục
        }
    });
};

// Thêm sự kiện click cho từng tab
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Cập nhật vị trí indicator
        updateIndicator(tab);

        const tabValue = tab.getAttribute('data-tab'); // Lấy giá trị data-tab
        // Hiển thị các mục tương ứng
        filterCards(tabValue);

        // Cập nhật trạng thái active cho nút
        tabs.forEach((t) => t.classList.remove('text-gray-500'));
        tab.classList.add('text-primaryColor');
    });
});

/*********** Scroll Up ***************/
const scrollUpBtn = document.getElementById('scroll-up');

// Hàm cuộn lên
const scrollUp = () => {
    if (window.scrollY >= 250) {
        // Hiển thị nút khi cuộn qua 250px
        scrollUpBtn.classList.remove('translate-y-full');
        scrollUpBtn.classList.add('translate-y-0');
    } else {
        // Ẩn nút khi cuộn lên trên
        scrollUpBtn.classList.add('translate-y-full');
        scrollUpBtn.classList.remove('translate-y-0');
    }
};

// Lắng nghe sự kiện cuộn
window.addEventListener('scroll', scrollUp);


/*********** Chang background header ***************/
const scrollHeader = () =>{
    const navbar =  document.getElementById('navbar');
    const aTag = document.querySelectorAll('nav ul li');
    const themeToggle = document.getElementById('theme-toggle');
    const hamburger = document.getElementById('hamburger');
    const logo = document.getElementById('logo');
    const whiteLogo = document.getElementById('white-logo');

    if(window.scrollY >200){
        navbar.classList.add('bg-primaryColor');
        aTag.forEach((item) =>{
            item.classList.add('text-whiteColor');
        })
        themeToggle.classList.add('text-whiteColor');
        hamburger.classList.add('text-whiteColor');
    }else{
        navbar.classList.remove('bg-primaryColor');
        aTag.forEach((item) =>{
            item.classList.remove('text-whiteColor');
        })
        themeToggle.classList.remove('text-whiteColor');
        hamburger.classList.remove('text-whiteColor');
    }
}
window.addEventListener('scroll', scrollHeader);

/*********** Active menu header ***************/
const activeLink = () =>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = 'hero';
    sections.forEach((section) =>{
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(item =>{
        item.classList.remove('active');

        if(item.href.includes(current)){
            item.classList.add('active');
        }
    })

}
window.addEventListener('scroll', activeLink);

/*********** Scroll reveal ***************/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 450
});
sr.reveal('.hero__image');
sr.reveal('.hero__content', { origin: 'bottom' });
sr.reveal('.hero__footer', { delay: 1200 });

sr.reveal('.service__top', { origin: 'bottom' });
sr.reveal('.service_item', { origin: 'bottom', interval: 300 });

sr.reveal('.recent_works_top', { origin: 'bottom' });
sr.reveal('.recent_works_tabs', { origin: 'bottom', delay: 800 });
sr.reveal('.work_card', { origin: 'bottom', delay: 1200 });

sr.reveal('.exp_top', { origin: 'top' });
sr.reveal('.exp_card', { origin: 'left', interval: 300 });
sr.reveal('.edu_top', { origin: 'top' });
sr.reveal('.edu_card', { origin: 'right', interval: 300 });

sr.reveal('.skills_top', { origin: 'bottom' });
sr.reveal('.skills_card', { origin: 'bottom', interval: 300 });

sr.reveal('.blog_top', { origin: 'top' });
sr.reveal('.blog_card', { origin: 'top', interval: 300 });

sr.reveal('.contact_form', { origin: 'left' });
sr.reveal('.contact_item', { origin: 'right', interval: 300 });

