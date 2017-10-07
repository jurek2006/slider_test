// funkcja zwracająca ilość elementów w sliderze
countElementsInSlider = function(){
    const sliderContent = document.querySelector('.slider__content');
    const sliderContentElements = sliderContent.children;
    return sliderContentElements.length;
}

// funkcja wyświetlająca dane testowe
renderTestData = function(){
    // selekcja elementów (placeholderw do wyświetlenia)
    const sliderCountElem = document.querySelector('.sliderCountElem');

    // ustawienie wartości
    sliderCountElem.innerText = countElementsInSlider();
}

// funkcja dodająca eventhandlery do slidera
sliderEventHandlers = function () {
    // selekcja elementów
    const btnNext = document.querySelector('.slider__btn--next');
    const sliderContent = document.querySelector('.slider__content');

    // dodanie handlerów
    btnNext.addEventListener('click', function(){
        sliderContent.style.transform = 'translateX(-200px)';
    })
}

// --------------- RUN WHEN DOCUMENT READY -------------------

runWhenDocumentReady = function(){
    renderTestData();
    sliderEventHandlers();
}

// jeśli dokument jest już wyrenderowany
if(document.readyState !== 'loading'){
    runWhenDocumentReady();
} 
// nowoczesne przeglądarki
else if(document.addEventListener){
    document.addEventListener('DOMContentLoaded', runWhenDocumentReady);
}
// IE <= 8
else{
    document.attachEvent('onreadystatechange', function () {
       if (document.readyState === 'complete') runWhenDocumentReady(); 
    });
}
