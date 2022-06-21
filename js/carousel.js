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
    const slides = document.querySelectorAll(".slide");
    const active = document.querySelector(".active");

    const indexActive = [...slides].indexOf(active);

    let offset = indexActive + num;
    if(offset>=0 && offset < slides.length){
        const newSlide = slides[offset];

        active.classList.remove('active');
        newSlide.classList.add('active');
    }else if(offset < 0){
        const newSlide = slides[slides.length - 1];

        active.classList.remove('active');
        newSlide.classList.add('active')
    }else{
        const newSlide = slides[0];

        active.classList.remove('active');
        newSlide.classList.add('active')
    }

}




