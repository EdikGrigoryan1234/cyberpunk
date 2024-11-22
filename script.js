const root = document.querySelector('.section1')
function slide1(){
    setTimeout(()=>{
        root.classList.toggle('section1')
    },1000)
}
function slide2 (){
    setTimeout(() => {
       root.classList.toggle('section1__one') 
    }, 1000);
}
function slide3(){
    setTimeout(()=>{
        root.classList.toggle('section1__two')
    },1000)
}
function slide() {
    setInterval(() => {
        slide1()
        slide2()
        slide3()
    }, 1000);
}