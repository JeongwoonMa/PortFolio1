const contentsNavItem = document.querySelectorAll('.contents__nav__item');
const contentsItems = document.querySelectorAll('.contents__item');


contentsNavItem.forEach((nav) => {
    project(nav);
    buttonActive(nav);
    
})

function project(nav) {
    nav.addEventListener('click' , (event)=>{
        contentsItems.forEach((categories) => {
            if(event.target.dataset.type == 'all' || event.target.dataset.type == categories.dataset.name) {
                categories.style.display = 'block'
            } else {
                categories.style.display = 'none'
            }
        })
        const contents = document.querySelector('.contents__items');
        contents.classList.add('anim-out')
        contents.style.opacity = 0;
        setTimeout(() => {
            contents.style.opacity = 1;
            contents.classList.add('anim-out2');
            setTimeout(() => {
                contents.classList.remove('anim-out')
                contents.classList.remove('anim-out2');
            },500)
        },100)
    }) 
}

function buttonActive(nav) {
    nav.addEventListener('click' , (a) => {
        const active = document.querySelector('.active')
        active.classList.remove('active');
        a.target.classList.add('active')
    })
}

const skills = document.querySelector('#skills');



const skillsOptions = {
    rootMargin : '-80% 0px 0px 0px',
    treshold : [0,1]
};
const skillsObserver = new IntersectionObserver(skillsCallback,skillsOptions);
skillsObserver.observe(skills);

const skillsBar = document.querySelectorAll('.skills__bar')
const skillsContainer = document.querySelector('.skills__index__container')

function skillsCallback(skills) {
    skills.forEach((entries) => {
        if(entries.isIntersecting) {
            skillsContainer.classList.add('fade-in')
        } else {
            // skillsContainer.classList.remove('fade-in')
        }
        skillsBar.forEach((a) => {
            a.classList.add('gauge__delete')
            a.style.opacity = 0;
        })

        setTimeout(() => {
            skillsBar.forEach((a) => {
                a.classList.remove('gauge__delete')
                a.style.opacity = 1;
            })
        },1000)
    })    
}


const aboutContainer = document.querySelector('.about__index__container');

const aboutOptions = {
    rootMargin : '-30%',
    rootMarin : [0.5,1]
};

const aboutObserver = new IntersectionObserver(aboutCallback,aboutOptions);

aboutObserver.observe(aboutContainer);

function aboutCallback(entires) {
    entires.forEach((a) => {
        if(a.isIntersecting) {
            a.target.classList.add('fade-in')
        } else {
            // a.target.classList.remove('fade-in')
        }

        
        

        
    })
}


const contentContainer = document.querySelector('.contents__index__container');

const contentOptions = {
    rootMarin : '-80%',
    threshole : [0.5]
};

const contentsObserver = new IntersectionObserver(contentsCallback,contentOptions);
contentsObserver.observe(contentContainer);

function contentsCallback(aa) {
    aa.forEach((b) => {
        if(b.isIntersecting) {
            b.target.classList.add('fade-in')
        } else {
            // b.target.classList.remove('fade-in')
        }
        
    })
}

const menuBtn = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__nav__container');
const menuItem = document.querySelectorAll('.header__nav__item')


menuBtn.addEventListener('click' , (a) => {
    menuContainer.classList.toggle('appear');
    menuItem.forEach((a) => {
        a.addEventListener('click' , (b) => {
            menuContainer.classList.remove('appear');
        })
    })
})

const aside = document.querySelector('.aside')
const home = document.querySelector('#home')
const homeHeight = home.getBoundingClientRect().height;
const header = document.querySelector('.header')

document.addEventListener('scroll' ,() => {
    if(window.scrollY > homeHeight) {
        aside.classList.add('appear')
    } else {
        aside.classList.remove('appear')
    }

    if(window.scrollY > homeHeight/3) {
        header.classList.add('appear')
    } else {
        header.classList.remove('appear')
    }

    // home.style.opacity = 1 - window.scrollY / homeHeight;
})



const headerBtn = document.querySelectorAll('.header__btn')

const default22 = document.querySelector('.default')




headerBtn.forEach((a) => {
    a.addEventListener('click' , (b) => {
        headerUnderLine.style.width = b.target.offsetWidth + 'px';
        headerUnderLine.style.left = b.target.offsetLeft + 'px';
        headerUnderLine.style.top = b.target.offsetHeigth + b.target.offsetTop + 'px';
    })
    a.addEventListener('click' , (c) => {
        const activeBtn = document.querySelector('.activebtn')
        activeBtn.classList.remove('activebtn');
        c.target.classList.add('activebtn')
    })
})






