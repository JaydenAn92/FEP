window.addEventListener('DOMContentLoaded', () => {    
    const OpenGnb = function(el){
        // console.log(el)
        let targetData = el[0].getAttribute('data-target');
        let targetEl = document.querySelector('.'+targetData);
        targetEl.style.display = 'flex';
        targetEl.style.top = window.scrollY+"px";
        [el[1], el[2]].forEach(element => {
            element.style.overflow = "hidden";
        });
        loopAddClassOn([el[3], 'on'])
        loopStyleTransition([el[3],100])
    } 
    const CloseGnb = function(el){
        let targetData = el[0].getAttribute('data-target');
        let targetEl = document.querySelector('.'+targetData);
        targetEl.style.display = 'none';
        [el[1], el[2]].forEach(element => {
            element.style.overflow = "";
        });
        loopRemoveClassOn([el[3], 'on'])
    } 
    const loopAddClassOn = function(el){
        // console.log(el[0])
        el[0].forEach(element => {
            element.classList.add(el[1])
        })
    }
    const fixHeader = function(el){
        if(window.scrollY > el[0].offsetHeight){
            el[1].style.top = window.scrollY+'px';
        }else if(window.scrollY <= el[0].offsetHeight){
            el[1].style.top = 0;
        }
    }
    const headerBar = function(el){
        el[0].style.width = Math.floor(window.scrollY / (el[1].offsetHeight - window.innerHeight) * 100)+'%'
    }
    const loopRemoveClassOn = function(el){
        el[0].forEach(element => {
            element.classList.remove(el[1])
        })
    }
    const loopStyleAnimate = function(el){
        for(let i = 0; i < el[0].length; i++){
            el[0][i].style.animationDelay = i*el[1]+'ms'
        }
    }
    const loopStyleTransition  = function(el){
        for(let i = 0; i < el[0].length; i++){
            el[0][i].style.transitionDelay = i*el[1]+'ms'
        }
    }
    const DarkMode = function(el){
        if(el.classList.value !== 'dark'){
            el.classList.add('dark')
        }else if(el.classList.value === 'dark'){
            el.classList.remove('dark')
        }
    } 
    const realToday = function(el){
        let yy = el[0].getFullYear();
        let mm = el[0].getMonth() + 1;
        let dd = el[0].getDate();
        let week = el[0].getDay();
        let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        el[1].innerHTML = `${mm} . ${dd} . ${yy}<p>${weeks[week]}</p>`;
    }
    const realTime = function(el){
        const date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm;
        if(hours >= 13){
            hours = hours-12;
            if(hours < 10){hours = '0'+hours}
            ampm = 'PM';
        }else{
            if(hours < 10){hours = '0'+hours}
            ampm = 'AM';
        }
        if(minutes < 10){minutes = '0'+minutes}
        if(seconds < 10){seconds = '0'+seconds}
        el[1].innerHTML = `${hours}:${minutes}<span>${seconds}${ampm}</span>`;
    }
    const settingContainal = function(el){
        el[0].style.paddingTop = el[1].offsetHeight+'px';
    }
    const moveScroll = function(el){
        el[3].style.display = 'none';
        [el[1], el[2]].forEach(element => {
            element.style.overflow = "";
        });
        loopRemoveClassOn([el[5], 'on'])
        
        el[0].forEach(element => {
            element.addEventListener('click', () => {
                console.log('a')
                let eventTarget = element.firstElementChild.getAttribute('href')
                let moveTarget = document.querySelector(eventTarget)
                window.scrollTo({top:moveTarget.offsetTop - el[4].offsetHeight, behavior:'smooth'})
            })
        })
    }
    // const addClassProjects = function(el){
    //     for(let i = 0; i < el.length; i++){
    //         setTimeout(() => {
    //             loopAddClassOn([[el[i]], 'active'])
    //         }, i*4000);
    //         // console.log(el[el.length-1])
    //         // if(el[el.length-1].incould){}
    //     }
    // }
    const scrollPartadd = function(el){
        let spots = [];
        // console.log(el[0].length)
        let viewHeight = window.innerHeight
        // console.log(el)
        for(let i = 0; i < el[0].length; i++){
            spots.push(el[0][i].offsetTop + el[0][i].offsetParent.offsetTop)
            console.log(el[0][i],el[0][i].offsetParent.offsetTop)
            if(window.scrollY  + viewHeight > spots[i]){
                el[0][i].classList.add(el[1])
            }
        }
        
    }
    const clickEvent = function(el, func, ...arr){
        if(typeof el.length === 'undefined'){
            el.addEventListener('click', (e) => {
                e.preventDefault();
                func(...arr)
            })
        }else if(typeof el.length === 'number'){
            el.forEach(element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    // console.log('1',el)    
                    func(...arr)
                })
            })
        }
    }
    const scrollEvent = function(el, func, ...arr){
        el.addEventListener('scroll', () => {
            // console.log(...arr)
            func(...arr)
        })
    }
    const openBtn = document.querySelector('.openBtn');
    const closeBtn = document.querySelector('.closeBtn');
    const Html = document.querySelector('html');
    const Body = document.querySelector('body');
    const header = document.querySelector('header');
    const headerB = document.querySelector('header span');
    const containal = document.querySelector('.containal');
    const menuArea = document.querySelector('.menuArea');
    const changeMode = document.querySelector('.changeMode');
    const dateElement = document.querySelector('.today');
    const clockElement = document.querySelector('.eventClock');
    const menuAreaEle = document.querySelectorAll('.menuArea li');
    const menuListsEle = document.querySelectorAll('.menuLists li');
    const projectLists = document.querySelectorAll('.projectLists li');
    const parts = document.querySelectorAll('.parts');
    const greeting = document.querySelectorAll('.greeting span');
    const moveBackground = document.querySelectorAll('.projectLists li a');

    const date = new Date;

    // Loding Event
    let todayRun = realToday;
    let timeRun = realTime;
    let headerRun = settingContainal;
    // let moveBackImg = addClassProjects;
    let moveScrollRunLoad = moveScroll
    // moveBackImg(moveBackground)
    todayRun([date, dateElement])
    timeRun([date, clockElement])
    headerRun([containal, header])
    moveScrollRunLoad([menuListsEle, Html, Body, menuArea, header, menuAreaEle])
    setInterval(() => {
        timeRun([date, clockElement])
    }, 1000);
    
    // Scroll Event
    let fixedHead = scrollEvent;
    let MoveHeaderBar = scrollEvent;
    let scrollPartClass = scrollEvent;
    let scrollPartClass02 = scrollEvent;
    fixedHead(window, fixHeader, [header, menuArea])
    MoveHeaderBar(window, headerBar, [headerB, Body])
    scrollPartClass(window, scrollPartadd, [parts, 'on'])
    scrollPartClass02(window, scrollPartadd, [projectLists, 'on'])
    

    // Clisk Event
    let GnbOpen = clickEvent;
    let GnbClose = clickEvent;
    let ChangeMode = clickEvent;
    let moveScrollRun = clickEvent;
    moveScrollRun(menuListsEle, moveScroll, [menuListsEle, Html, Body, menuArea, header, menuAreaEle])
    GnbOpen(openBtn, OpenGnb, [openBtn, Html, Body, menuAreaEle])
    GnbClose(closeBtn, CloseGnb, [closeBtn, Html, Body, menuAreaEle])
    ChangeMode(changeMode, DarkMode, Body)
    
    // setTimeout Event
    let greetingWords = loopAddClassOn;
    let greetingAnimate = loopStyleAnimate;
    let greetingTransition = loopStyleTransition;
    let test1 = loopStyleAnimate;
    
    setTimeout(() => {
        greetingWords([greeting, 'on'])
        greetingAnimate([greeting , 60])
        greetingTransition([greeting , 140])
        // test1([moveBackground , 5000])
    }, 1000);
})