const button = document.querySelector('.event');
const blogs = document.querySelector('.blogs');
const wwd= document.querySelector('.wwd');
const sliderbewlo1 = document.querySelector('.down');
const sliderBelow = document.querySelector('.up');

{
    button.addEventListener('click',function(){
        wwd.classList.toggle('wwd-height-increase')
        blogs.classList.toggle('new-height-blog')
    })
}


const nav = document.querySelector('.navbar');
const burger = document.querySelector('.burger');


{
    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-translate')
    })
}
