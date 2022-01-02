document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarusel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarusel, {
        duration: 150,
        dist:85,
        shift:5,
        padding:14,
        numVisible:5

    });
});