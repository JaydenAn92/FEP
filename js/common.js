window.addEventListener('DOMContentLoaded', () => {
    const gnbLists = document.querySelectorAll('.gnb nav li')
    const contents = document.querySelector('.contents')
    const closeBtn = document.querySelector('.closeBtn')
    const openBtn = document.querySelector('.openBtn')
    const header = document.querySelector('header')
    function closeGnb(el){
        let target = el.toElement;
        let Parent = target.closest('.active')
        Parent.classList.remove('active')
        gnbLists.forEach(element => {
            element.classList.remove('on')
        });
    }
    function openGnb(el){
        el.preventDefault();
        let data = el.toElement.getAttribute('data-target');
        let target = document.querySelector('.'+data)
        target.classList.add('active')
        setTimeout(()=>{loopAdd(gnbLists)},400)
        
    }
    function loopAdd(el){
        let elNum = el
        for(let i = 0; i < elNum.length; i++){
            setTimeout(function(){
                elNum[i].classList.add('on')
            }, i * 200)
        }
    }

    function headerHeight(){
        let headerH = header.offsetHeight;
        console.log(headerH)
        contents.style.paddingTop = headerH+'px'
    }
    headerHeight()
    closeBtn.addEventListener('click', closeGnb)
    openBtn.addEventListener('click', openGnb)
})