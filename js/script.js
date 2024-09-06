const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hourBox     = document.querySelector('.hours'),
        minuteBox   = document.querySelector('.minutes');
        
function times() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours();
        
       hourArrow.style = `transform: rotate(${hours * 30}deg)`
       minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
       secondArrow.style = `transform: rotate(${seconds * 6}deg)`
       
       hourBox.innerHTML = hours  < 10 ? '0' + hours : hours
       minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
       setTimeout(() => times(), 1000)
}
times()

// рекурсия это когда функция запускает саму себя 
// setTimeout() - встроенная функция которая позволяет добавлять задержку

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 100)
//     }
// }
// qwerty()


const links = document.querySelectorAll('.tabsItem')
const tabs  = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((item,i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

// Секундомер

const   hoursBlock   = document.querySelector('.stopwatch__hours'),
        minutesBlock = document.querySelector('.stopwatch__minutes'),
        secondsBlock = document.querySelector('.stopwatch__seconds'),
        btn          = document.querySelector('.stopwatch__btn'),
        span         = document.querySelector('.tabsLink__span');
        

btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0
        setTimeout(() => secundomer(btn, i), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        hoursBlock.innerHTML = minutesBlock.innerHTML = secondsBlock.innerHTML  = 0
    }
})      

function secundomer(btn, i) {
    if(btn.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondsBlock.innerHTML = i
            if(minutesBlock.innerHTML == 59) {
                minutesBlock.innerHTML = 0
                hoursBlock.innerHTML++   
            }else {
               minutesBlock.innerHTML++ 
            }
        }else {
            i++
            secondsBlock.innerHTML = i
        }
        
        setTimeout(() => secundomer(btn,i), 1000)
        
    }
}



function findSmallestInt(arr) {
    arr.sort((a,b) => a - b)
    return arr[0]
}

console.log(findSmallestInt([30,40,12,-2,0,21]));