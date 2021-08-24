
var sounds={
    w:'crash',
    'a':'kick-bass',
    's':'snare',
    'd':'tom-1',
    'j':'tom-2',
    'k':'tom-3',
    'l':'tom-4'
}
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
}
function handleClick()
{
    console.log("hi");
    var l=this.innerHTML;
    if(l in sounds)
        makeSound(l);
    
}
document.addEventListener("keypress",handleKey);

function handleKey(event){
    if(event.key in sounds)
        makeSound(event.key);
}

async function makeSound(key)
{
    document.querySelector("."+key).classList.add('pressed');
    var audio=new Audio("sounds/"+sounds[key]+".mp3");
    
    await audio.play();
    document.querySelector("."+key).classList.remove('pressed');
}