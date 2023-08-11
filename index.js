const trailer=document.getElementById("trailer");

window.onmousemove = e =>{
  const x=e.clientX - trailer.offsetWidth/2,
        y=e.clientY- trailer.offsetHeight/2;




const keyframes ={
  transform: `translate(${x}px, ${y}px)`
}

trailer.animate(keyframes, {
  duration:100,
  fill: "forwards"
});
}
const playMusic = () => {
  const audio = document.createElement("audio");
  audio.src = "Trimmed.mp3";
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
};

window.addEventListener("load", playMusic);