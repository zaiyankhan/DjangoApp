'use strict';


document.addEventListener('DOMContentLoaded', () => {
    let howItWorksSection = document.querySelector('.how-it-works');
    let howItWorksSectionSlider = howItWorksSection.querySelector('.videos-slider');
    let howItWorksSliderNext = howItWorksSection.querySelector('.how-it-works .next-btn');
    let howItWorksSliderPrev = howItWorksSection.querySelector('.how-it-works .prev-btn');

    howItWorksSliderNext.addEventListener('click', (e) =>{
        howItWorksSectionSlider.scrollBy(800,0)
    });


    howItWorksSliderPrev.addEventListener('click', (e) =>{
        howItWorksSectionSlider.scrollBy(-800,0)
    });

    let ourRecentProjectsSection = document.querySelector('.our-recent-projects-wrapper');
    let ourRecentProjectsSectionSlider = ourRecentProjectsSection.querySelector('.recent-projects-slider');
    let ourRecentProjectsSectionSliderNext = ourRecentProjectsSection.querySelector('.next-btn');
    let ourRecentProjectsSectionSliderPrev = ourRecentProjectsSection.querySelector('.prev-btn');

    ourRecentProjectsSectionSliderNext.addEventListener('click', (e) =>{
        ourRecentProjectsSectionSlider.scrollBy(800,0)
    });

    ourRecentProjectsSectionSliderPrev.addEventListener('click', (e) =>{
        ourRecentProjectsSectionSlider.scrollBy(-800,0)
    });

});

// .designs-body-text-wrapper .prev-btn,

let whatDoYouWantToDesignSectionSliderWrapper = document.querySelector('.designs-body-text-wrapper');
let textCarousel = whatDoYouWantToDesignSectionSliderWrapper.querySelector('.text-carousel');

let whatDoYouWantToDesignSectionCarouselNextBtn = whatDoYouWantToDesignSectionSliderWrapper.querySelector('.next-btn');
let whatDoYouWantToDesignSectionCarouselPrevBtn = whatDoYouWantToDesignSectionSliderWrapper.querySelector('.prev-btn');

whatDoYouWantToDesignSectionCarouselNextBtn.addEventListener('click', evt => {
    textCarousel.scrollBy(220,0)
});

whatDoYouWantToDesignSectionCarouselPrevBtn.addEventListener('click', evt => {
    textCarousel.scrollBy(-220,0)
});

