// 'use strict'

// const sectionsId = ['#home','#about','#skills','#contents','#contact'];

// const headerBtn = document.querySelectorAll('.header__btn')

// let headerBtnActive = headerBtn[0];

// const sections = sectionsId.map((id) => {
//     return document.querySelector(id)
// })




// const sectionOptions = {
//     rootMargin : '-10% 0px 0px 0px',
//     threshold : [0,1]
// }
// const sectionObserver = new IntersectionObserver(sectionsCallback, sectionOptions)

// sections.forEach((sections) => {
//     sectionObserver.observe(sections);
// })

// const visibleSection = sectionsId.map(() => false)



// function sectionsCallback(entries) {
//     let lastSetion;

//     entries.forEach((entry) => {
//         const index = sectionsId.indexOf(`#${entry.target.id}`)
//         visibleSection[index] = entry.isIntersecting;

//         lastSetion = index === sectionsId.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99;

//         const currentSection = lastSetion ? sectionsId.length -1 : findRealSection(visibleSection);

//         function findRealSection(intersection) {
//             const index =  intersection.indexOf(true);
//             return index >= 0 ? index : 0;
//         };

        
//         const headerButton = headerBtn[currentSection];
//         headerBtnActive.classList.remove('activebtn');
//         headerBtnActive = headerButton;
//         headerBtnActive.classList.add('activebtn');
//     })

// }












































'use strict';


const sectionIds = ['#home','#about','#skills','#contents','#contact'];
const headerBtn = document.querySelectorAll('.header__btn')



let activeBtn = headerBtn[0];


const sections = sectionIds.map((id) => {
    return document.querySelector((id))
})


const sectionOptions = {
    rootMargin : '-10% 0px 0px 0px',
    threshold : [0,0.99],
};
const sectionsObserver = new IntersectionObserver(sectionsCallback, sectionOptions);
const visibleSection = sectionIds.map(() => false)

sections.forEach((id) => {
    sectionsObserver.observe(id)
})

function sectionsCallback(entries) {
    let lastSetion;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);    
        visibleSection[index] = entry.isIntersecting;
        lastSetion = 
            index === sectionIds.length -1 &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.99;

        const realSection = lastSetion ? sectionIds.length-1 : findRealSection(visibleSection);

        function findRealSection(visible) {
            const index = visible.indexOf(true)
            return index >= 0 ? index : 0;
        }

        const scrollBtn = headerBtn[realSection];
        activeBtn.classList.remove('activebtn');
        activeBtn = scrollBtn;
        activeBtn.classList.add('activebtn')

    })

    
    

}

