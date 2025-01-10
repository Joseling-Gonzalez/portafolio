const experienceBtn = document.getElementById('experienceBtn');
const languageBtn = document.getElementById('languageBtn');
const containerExperience = document.getElementById("containerExperience");
const containerLanguages = document.getElementById("containerLanguages");
const fill = document.getElementById('filler');
const header = document.getElementById('header');
const menuIcon = document.getElementById('menuIcon'); 
const menuNav = document.getElementById('menu');
const yearActual = document.getElementById('year');

experienceBtn.classList.toggle('active');
containerLanguages.style.display = 'none';

let year = new Date().getFullYear();
yearActual.textContent = year;

window.addEventListener('scroll', () => {
    header.classList.toggle('activeScroll', window.scrollY > 0);
    if(header.classList.contains('activeScroll'))
    {
        menuIcon.style.backgroundColor = 'white';
    } else {
        menuIcon.style.backgroundColor = 'transparent';
    }
    
});

languageBtn.addEventListener('click', () => { 
    if (languageBtn.classList.contains('active')) {
         experienceBtn.classList.remove('active'); 
    }
    else {
        fill.classList.toggle('active');
        languageBtn.classList.toggle('active');
        experienceBtn.classList.remove('active'); 
        containerExperience.classList.remove('activeContainer');
        containerExperience.style.display = 'none';
        containerLanguages.style.display = 'flex';
        containerLanguages.classList.toggle('activeContainer');
    }
});

experienceBtn.addEventListener('click', () => {
    if(experienceBtn.classList.contains('active')) {
        languageBtn.classList.remove('active');    
    } else {
        fill.classList.remove('active');
        languageBtn.classList.remove('active');
        experienceBtn.classList.toggle('active');
        containerLanguages.classList.remove('activeContainer');
        containerLanguages.style.display = 'none';
        containerExperience.style.display = 'flex';
        containerExperience.classList.toggle('activeContainer');
    }
});
