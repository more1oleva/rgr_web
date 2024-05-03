const buttonPrev = document.querySelector('.gallery__button--prev');
const buttonNext = document.querySelector('.gallery__button--next');

function clickNext() {
    const slide = document.querySelectorAll('.gallery__item');
    const activeIndex = Array.from(slide).findIndex(item => item.classList.contains('is-active'));
    // Удаляем класс is-active с активного элемента
    slide[activeIndex].classList.remove('is-active');
    // Находим индекс следующего элемента с учетом циклического перемещения
    const nextIndex = (activeIndex + 1) % slide.length;
    // Добавляем класс is-active к следующему элементу
    slide[nextIndex].classList.add('is-active');
}

function clickPrev() {
    const slide = document.querySelectorAll('.gallery__item');
    const activeIndex = Array.from(slide).findIndex(item => item.classList.contains('is-active'));
    slide[activeIndex].classList.remove('is-active');
    const prevIndex = (activeIndex - 1 + slide.length) % slide.length; // Обработка отрицательных индексов
    slide[prevIndex].classList.add('is-active');
}

buttonNext.addEventListener('click', clickNext);
buttonPrev.addEventListener('click', clickPrev);