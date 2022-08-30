const button = document.querySelectorAll("[data-button]");

button.forEach(btn =>{
    btn.addEventListener('click', function(){
        if(btn.dataset.button === 'next'){
            MoverSlide(1);
        }else{
            MoverSlide(-1);
        }
    });
})


function MoverSlide(num){
    console.log('num: ' + num);
    //slides
    const slides = document.querySelectorAll(".slide");
    const active = document.querySelector(".active");
    //slides titles
    const slideTitles = document.querySelectorAll(".project__descripcion");
    const activeTitle = document.querySelector(".active-title");
    //The use of the spread operator is made because the constant slides is a nodelist, and nodelist doesn't have
    //the same methods of an array
    const indexActive = [...slides].indexOf(active);

    let offset = indexActive + num;
    if(offset>=0 && offset < slides.length){
        const newSlide = slides[offset];
        const newTitle = slideTitles[offset];


        active.classList.remove('active');
        newSlide.classList.add('active');

        activeTitle.classList.remove('active-title');
        newTitle.classList.add('active-title');
    }else if(offset < 0){
        const newSlide = slides[slides.length - 1];
        const newTitle = slideTitles[slideTitles.length-1];

        active.classList.remove('active');
        newSlide.classList.add('active')

        activeTitle.classList.remove('active-title');
        newTitle.classList.add('active-title');
    }else{
        const newSlide = slides[0];
        const newTitle = slideTitles[0];

        active.classList.remove('active');
        newSlide.classList.add('active')

        activeTitle.classList.remove('active-title');
        newTitle.classList.add('active-title');
    }

}




