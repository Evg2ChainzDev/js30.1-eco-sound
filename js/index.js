document.addEventListener('DOMContentLoaded', function() {
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        menu.classList.toggle('nav-opened');
    })
})

const closeMenu = function() {
    burger.classList.remove('open');
    menu.classList.remove('nav-opened');
}


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));


// ------- background image start ---------
const mainTag = document.querySelector('main')
const mainAudio = document.querySelector('audio')

const changeBackgroundAndAudio = function (element) {
    let birdName = element.dataset.item;
    mainTag.style.backgroundImage = `url('../assets/img/${birdName}.jpg')`;
    mainAudio.src=`./assets/audio/${birdName}.mp3`
    isPlay = false;
    playBtn.classList.remove('pause')
}

const birdsLinks = document.querySelectorAll('[data-item]');
// console.log(birdsLinks);
birdsLinks.forEach(el => el.addEventListener('click', () => {
    changeBackgroundAndAudio(el)
    makeActiveLink(el)
} ))

const makeActiveLink = function (element) {
    console.log('makeActiveLink works')
    birdsLinks.forEach(el=>el.classList.remove('nav-item_active'));
    element.classList.add('nav-item_active')
}
// ------- background image end ---------

// ------- audio ---------
let isPlay = false;

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
// const pauseBtn = document.querySelector('.pause-btn');

// function playAudio() {
//   audio.currentTime = 0;
//   audio.play();
//   isPlay = true;
// }

function pauseAudio() {
  audio.pause();
  isPlay = false;
  playBtn.classList.remove('pause')
}

function switchAudio() {
    playBtn.classList.toggle('pause');
    if(!isPlay) {
        audio.currentTime = 0;
        audio.play();
         isPlay = true;
    } else {   
        audio.pause();
        isPlay = false; }
    
}

playBtn.addEventListener('click', switchAudio);


// ------- audio ---------

// console.log('Самооценка по пунктам 1. +48, 2. +15, 3. +20. сумма 83 :) \nБуду рад знакомству и обмену опытом, мой диск Evg2ChainzDev#3244 ')


// Test.assertEquals(rgb(173,255,47), 'ADFF2F')
//---------------------
arr_1 = [7, 6, 15, 8]
arr_2 = [3, 8, 3, 6, 5, 7, 9, 1]

function sortByBit(arr) {
    let arr2 = []
    arr.forEach(el=>arr2.push([ (el.toString(2).match(/1/gm)).length ,el]))
    let arr3 = []
    arr2.forEach(el=>arr3.push(el[0]))
    console.log(arr2)
    console.log(arr3)
    let arr4= arr3.slice()
    arr4.sort((a,b)=>(a-b))
    console.log(arr4)
    let arr5=[];
    for (let i=0; i<arr4.length; i++) {
        let index = arr3.indexOf(arr4[i]);
        arr3[index]='deleted'
        console.log(index)
        arr5.push(arr2[index][1])
    }
    console.log(arr5)
    // your solution here
  }

  sortByBit(arr_2)