function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    ///slider 

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          indocators = document.createElement('ol'),
          dots = [];
    
    let   slideIndex = 1,
          offset = 0;

    if (slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide=>{
        slide.style.width = width;
    });
    slider.style.position = 'relative';
    
    function slideChanger() {
        if(slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    }
    function replacePx(str) {
        return +str.replace(/\D/g, '');
    }
          
    indocators.classList.add('carousel-indicators');
    slider.append(indocators);
    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = '1';
        }
        indocators.append(dot);
        dots.push(dot);
    }
    
    next.addEventListener('click', ()=>{
        if (offset == (replacePx(width) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += replacePx(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++; 
        } 
        slideChanger();

    });

    prev.addEventListener('click', ()=>{
        if (offset == 0) {
            offset = replacePx(width) * (slides.length - 1);
        } else {
            offset -= replacePx(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--; 
        } 

        slideChanger();

    });
    dots.forEach(dot=>{
        dot.addEventListener('click',(e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = replacePx(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            slideChanger();
        });
    });
        /* showSlides(slideIndex);
    if (slides.length < 10){
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(i => {
            i.style.display = 'none'
            i.classList.toggle('show');
        });
        slides[slideIndex - 1].style.display = 'block';
        if (slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;

        }
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', ()=>{
        plusSlides(-1);
    });
    next.addEventListener('click', ()=>{
        plusSlides(1);
    }); */
}
export default slider;