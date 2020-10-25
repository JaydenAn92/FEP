window.addEventListener('DOMContentLoaded', () => {    
    const OpenGnb = function(el){
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
        el[0].forEach(element => {
            element.classList.add(el[1])
        })
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
    const clickEvent = function(el, func, ...arr){
        el.addEventListener('click', () => {
            console.log(...arr)
            func(...arr)
        })
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
    const projectLists = document.querySelectorAll('.projectLists li');
    const parts = document.querySelectorAll('.parts');
    const greeting = document.querySelectorAll('.greeting span');

    const date = new Date;

    // Loding Event
    let todayRun = realToday;
    let timeRun = realTime;
    todayRun([date, dateElement])
    timeRun([date, clockElement])
    setInterval(() => {
        timeRun([date, clockElement])
    }, 1000);
    // Clisk Event
    let GnbOpen = clickEvent;
    let GnbClose = clickEvent;
    let ChangeMode = clickEvent;
    GnbOpen(openBtn, OpenGnb, [openBtn, Html, Body, menuAreaEle])
    GnbClose(closeBtn, CloseGnb, [closeBtn, Html, Body, menuAreaEle])
    ChangeMode(changeMode, DarkMode, Body)
    
    
    // setTimeout Event
    let greetingWords = loopAddClassOn;
    let greetingAnimate = loopStyleAnimate;
    let greetingTransition = loopStyleTransition;
    
    setTimeout(() => {
        greetingWords([greeting, 'on'])
        greetingAnimate([greeting , 140])
        greetingTransition([greeting , 140])
    }, 1000);
})