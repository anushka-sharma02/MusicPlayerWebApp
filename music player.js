var songs=[
    {name:"Suniyan Suniyan",url:"Suniyan Suniyan.mp3", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYryLhExrmuyZ7A8go9CJXUWgk7RX0TLzoUA&s",duration:"3:31"},
    {name:"Qaafirana",url:"Qaafirana.mp3", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkSaM-U6b7vlm-9a0mmaspptuJKVfSBFaGQ&s",duration:"6:16"},
    {name:"Deva Deva",url:"Deva Deva.mp3", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKuzAcOPzwkNrqnri_GMwm_raJbnik2AVZpiKx0WxnMLVVFzXi4AJrUGMFX8dL22-v40&usqp=CAU",duration:"3:12"},
    {name:"Satyam Shivam Sundaram",url:"SSS.mp3", image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/book/j/z/4/satyam-shivam-sundaram-original-imagwub6mhhbg7gg.jpeg?q=20&crop=false",duration:"5:52"},
    {name:"Jo Tum Mere Ho",url:"Jo Tum Mere Ho.mp3", image:"https://c.saavncdn.com/401/Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",duration:"3:40"},
    {name:"Bulbul Sa",url:"Bulbul Sa.mp3", image:"https://c.saavncdn.com/962/Taaza-Khabar-Season-2-Hindi-2024-20240924022152-500x500.jpg",duration:"4:18"}
];
var container=document.querySelector(".right-container");
var songDisplay=document.querySelector(".songCard");
var play=document.querySelector("#play");
var pause=document.querySelector("#pause");
var next=document.querySelector("#next");
var previous=document.querySelector("#previous");
var selectedSong=0;
var flag=0;
var audio=new Audio();

function makeSongList(){
    var clutter="";
    songs.forEach(function(obj,idx){
          clutter+=`<div id="${idx}" class="cont card">
            <div id="${idx}"  class="cont title">
                <img src="${obj.image}" alt="">
                <h1>${obj.name}</h1>
            </div>
            <div id="${idx}"  class="cont duration">${obj.duration}</div>
        </div>`
    })
    container.innerHTML=clutter;
    container.addEventListener("click",function(dets){
            songDisplay.innerHTML=`<img src="${songs[dets.target.id].image}">`
            pause.style.display="block";
            play.style.display="none";
            selectedSong=dets.target.id;
            flag=1;
            audio.src=songs[selectedSong].url;
            audio.play();
    })
}
function playControl(){
    play.addEventListener("click",function(){
        play.style.display="none";
        pause.style.display="block";
        if(flag==0){
            flag=1;
            songDisplay.innerHTML=`<img src="${songs[0].image}">`;
            audio.src=songs[0].url;
            audio.play();
        }else{
            audio.play();
        }
    })
    pause.addEventListener("click",function(){
        pause.style.display="none";
        play.style.display="block";
        audio.pause();
    })
}
function nextTrack(){
    next.addEventListener("click",function(){
        play.style.display="none";
        pause.style.display="block";
        selectedSong++
        if(selectedSong>songs.length-1){
            selectedSong=0;
        }
        audio.src=songs[selectedSong].url;
        audio.play();
        songDisplay.innerHTML=`<img src="${songs[selectedSong].image}">`;
    })
}
function prevTrack(){
    previous.addEventListener("click",function(){
        play.style.display="none";
        pause.style.display="block";
        selectedSong--
        if(selectedSong<0){
            selectedSong=songs.length-1;
        }
        audio.src=songs[selectedSong].url;
        audio.play();
        songDisplay.innerHTML=`<img src="${songs[selectedSong].image}">`;
    })
}
function ifEnded(){
    audio.addEventListener("ended",function(){
        selectedSong++;
        if(selectedSong>songs.length-1){
            selectedSong=0;
        }
        audio.src=songs[selectedSong].url;
        audio.play();
        songDisplay.innerHTML=`<img src="${songs[selectedSong].image}">`;
    })
}
makeSongList();
playControl();
nextTrack();
prevTrack();
ifEnded();

